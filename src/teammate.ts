/**
 * The teammate world: what one continuable child gains when it is a member of
 * a team. Installed through `ctx.subagents.registerContinuableSetup`, so it
 * runs inside the child's unpublished creation window on both fresh spawn and
 * cold resume, and unwinds with that child.
 *
 * A child that belongs to no team receives nothing: an ordinary subagent must
 * not see team tools it cannot use.
 *
 * @module dsh-team/teammate
 */

import type { Context } from '@deepseek-ai/cordis'
import type { Agent } from '@deepseek-ai/dsh-agent'
import { ReasoningEffortId } from '@deepseek-ai/dsh-llm'
import type {} from '@deepseek-ai/dsh-subagent'
import type { TeamService } from './service.ts'
import { boardTool, listTool, noteTool, sendTool } from './tools.ts'
import type { TeamWorkspace } from './workspace.ts'

/** Guidance order: after the harness tool sections, before the persona. */
const TEAM_SECTION_ORDER = 118

/** The workspace paragraph sits right after the membership briefing. */
const WORKSPACE_SECTION_ORDER = 119

/** What a teammate needs to know about the two workspaces it can reach. */
const WORKSPACE_BRIEFING = [
  'Your team has two virtual workspaces, which are not files and are not in the user\'s working tree.',
  'The shared board (team_board / team_note) is what every member reads and writes: put a conclusion, a '
  + 'decision or hand-off material there instead of messaging it around — a note costs nobody a turn and '
  + 'survives after you go idle, while a message costs the recipient a turn and spends conversation budget. '
  + 'Read the board before you ask anyone anything; the answer may already be on it.',
  'Your private pad (the same tools with private=true) is yours alone: keep your own working state there so '
  + 'a later turn of yours can pick it up.',
].join('\n')

/** Dispose a batch completely, then report the first failure. */
function release(disposers: readonly (() => void)[]): void {
  const failures: unknown[] = []
  for (const dispose of [...disposers].reverse()) {
    try {
      dispose()
    } catch (error: unknown) {
      failures.push(error)
    }
  }
  if (failures.length === 1) throw failures[0]
  if (failures.length > 1) throw new AggregateError(failures, 'dsh-team: teammate teardown failed')
}

/** One roster line as a teammate reads it. */
function memberLine(member: { name: string; role?: string; relation: string }): string {
  const parts = [member.role, member.relation === 'peer' ? 'peer' : 'managed'].filter(part => part !== undefined)
  return `${member.name} (${parts.join(', ')})`
}

/**
 * The teammate's standing briefing, re-rendered at every assembly so a member
 * that joins later, a promotion, or a new task is visible on the next step
 * without touching the child's own log.
 */
function briefing(team: TeamService, child: Agent): string {
  const roster = team.rosterFor(child)
  if (roster === undefined) return 'You were part of an agent team that is no longer active.'
  const { self, others } = roster
  const identity = self.role === undefined
    ? `You are ${self.name}, a teammate on an agent team.`
    : `You are ${self.name}, the ${self.role} on an agent team.`
  const reach = self.relation === 'peer'
    ? 'You are a peer member: team_send reaches the leader ("leader") and any teammate by name.'
    : 'You are a managed member: team_send reaches the leader ("leader") only.'
  const list = others.length === 0
    ? 'You are currently the only teammate.'
    : `The rest of the team: ${others.map(memberLine).join('; ')}.`
  const mine = team.list(child).tasks.filter(task => task.assigneeId === self.memberId && task.status !== 'done')
  const tasks = mine.length === 0
    ? 'No task on the shared list is assigned to you right now.'
    : `Assigned to you on the shared task list: ${mine.map(task => `${task.taskId} "${task.title}"`).join('; ')}.`
  return [
    identity,
    reach,
    list,
    tasks,
    'Nobody sees your session but you, so deliver results with the report tool — a self-contained answer, not '
    + '"done". Use team_send when you need something FROM a member mid-task; the reply arrives later as its '
    + 'own turn, so do not wait for it in place. team_list shows the roster, the shared task list, and recent '
    + 'traffic. When you have reported, stop and wait for the next message instead of starting work nobody '
    + 'asked for. A conversation between teammates is budgeted: it may only relay so far and one pair may not '
    + 'keep trading messages inside it, so put everything you need into one message rather than negotiating. '
    + 'Reaching the leader is never refused — when an exchange with a peer stops converging, say so to the '
    + 'leader and move on.',
  ].join('\n')
}

/**
 * Pin one teammate's reasoning effort onto its own requests. `AgentOptions`
 * carries no effort — it is request-header state — so the child's scoped
 * request waterfall is where a per-teammate effort belongs.
 * @param childCtx - the teammate's scoped context.
 * @param effort - the provider-owned effort id recorded at spawn.
 * @returns the disposer for the scoped listener.
 */
function installEffort(childCtx: Context, effort: string): () => void {
  return childCtx.on('agent/request', async (_payload, next) => ({
    ...await next(),
    reasoningEffort: ReasoningEffortId(effort),
  }))
}

/**
 * Register the teammate composition for every continuable child of a team.
 * @param ctx - context carrying the team and subagent services.
 * @returns the exact effect disposer removing the contribution.
 */
export function installTeammateWorld(ctx: Context): () => void {
  return ctx.subagents.registerContinuableSetup((childCtx) => {
    const child = childCtx.agent
    if (child === undefined) return () => {}
    const member = ctx.team.adopt(child)
    if (member === undefined) return () => {}
    const disposers: Array<() => void> = []
    try {
      disposers.push(childCtx.systemPrompt.section({
        name: 'team-membership',
        order: TEAM_SECTION_ORDER,
        text: () => briefing(ctx.team, child),
      }))
      disposers.push(childCtx.tools.register(sendTool(ctx, 'member')))
      disposers.push(childCtx.tools.register(listTool(ctx)))
      if (member.effort !== undefined) disposers.push(installEffort(childCtx, member.effort))
    } catch (error: unknown) {
      release(disposers)
      throw error
    }
    return () => { release(disposers) }
  })
}

/**
 * Give every teammate its half of the virtual workspaces: the shared board it
 * writes conclusions to, and its own private pad. Registered separately from
 * {@link installTeammateWorld} because the workspaces are optional — a
 * deployment without a storage domain form composes this contribution out and
 * the rest of the teammate world is untouched.
 * @param ctx - context carrying the team service and the open workspace.
 * @param workspace - the open workspace domain.
 * @returns the exact effect disposer removing the contribution.
 */
export function installTeammateWorkspace(ctx: Context, workspace: TeamWorkspace): () => void {
  return ctx.subagents.registerContinuableSetup((childCtx) => {
    const child = childCtx.agent
    if (child === undefined || ctx.team.rosterFor(child) === undefined) return () => {}
    const disposers: Array<() => void> = []
    try {
      disposers.push(childCtx.systemPrompt.section({
        name: 'team-workspace',
        order: WORKSPACE_SECTION_ORDER,
        text: WORKSPACE_BRIEFING,
      }))
      disposers.push(childCtx.tools.register(noteTool(ctx, workspace, 'member')))
      disposers.push(childCtx.tools.register(boardTool(ctx, workspace, 'member')))
    } catch (error: unknown) {
      release(disposers)
      throw error
    }
    return () => { release(disposers) }
  })
}
