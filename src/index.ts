/**
 * dsh-team: agent teams for DeepSeek Harness.
 *
 * One plugin row, three registrations: the `ctx.team` service, the leader tool
 * set on every ordinary session, and the teammate world on every continuable
 * child that belongs to a team. Teammates themselves are `ctx.subagents`
 * continuable children — the harness owns their sessions, residency, cold
 * resume, and the `origin: 'subagent'` classification that keeps them out of
 * the session tree.
 *
 * @module dsh-team
 */

import type { Context } from '@deepseek-ai/cordis'
import type { Agent } from '@deepseek-ai/dsh-agent'
import type { SessionId } from '@deepseek-ai/dsh-session'
import type {} from '@deepseek-ai/dsh-tools'
import type {} from '@deepseek-ai/dsh-system-prompt'
import type {} from './types.ts'
import { Config, type TeamConfig } from './config.ts'
import { teamProjection } from './projection.ts'
import { TeamService } from './service.ts'
import { installTeammateWorld } from './teammate.ts'
import { dismissTool, listTool, relationTool, sendTool, spawnTool, taskTool } from './tools.ts'

export const name = 'team'
/**
 * `tools` and `systemPrompt` are declared although this row registers into
 * agent scopes rather than the root registry: a Loader ordering mistake then
 * fails at load instead of at the next session or teammate.
 */
export const inject = ['agents', 'subagents', 'sessionProjections', 'tools', 'systemPrompt']

export { Config }
export type { TeamConfig }
export { TeamService } from './service.ts'
export { TeamError } from './errors.ts'
export type { TeamErrorCode } from './errors.ts'
export { foldTeam } from './fold.ts'
export type { TeamFact, TeamMemberFact } from './fold.ts'
export { teamProjection } from './projection.ts'
export * from './contract.ts'

/** A team leader is any ordinary session; a teammate never leads its own team. */
function leads(agent: Agent): boolean {
  return agent.session.header.origin !== 'subagent'
}

/**
 * Install the leader tool set into one session's own agent scope, so an
 * ordinary subagent — which inherits the global registry but not this scope —
 * never sees tools that would fail for it.
 * @param ctx - context carrying the team service.
 * @param agent - the session agent to equip.
 * @returns the disposer for every registration made here.
 */
function installLeaderTools(ctx: Context, agent: Agent): () => void {
  const disposers = [
    agent.ctx.tools.register(spawnTool(ctx)),
    agent.ctx.tools.register(sendTool(ctx, 'leader')),
    agent.ctx.tools.register(taskTool(ctx)),
    agent.ctx.tools.register(relationTool(ctx)),
    agent.ctx.tools.register(dismissTool(ctx)),
    agent.ctx.tools.register(listTool(ctx)),
  ]
  return () => {
    for (const dispose of disposers.reverse()) dispose()
  }
}

/**
 * Compose the team capability: the service, the durable projection unit, the
 * teammate world, and the per-session leader tools.
 * @param ctx - the row's context.
 * @param config - the validated row configuration.
 */
export function apply(ctx: Context, config: TeamConfig): void {
  ctx.plugin(TeamService, config)
  ctx.inject(['team'], (teamCtx: Context) => {
    teamCtx.effect(
      () => teamCtx.sessionProjections.register(teamProjection(config.maxRecentMessages)),
      'team: durable projection unit',
    )
    teamCtx.effect(() => installTeammateWorld(teamCtx), 'team: teammate world')

    const equipped = new Map<SessionId, () => void>()
    const equip = (agent: Agent): void => {
      if (!leads(agent) || equipped.has(agent.id)) return
      equipped.set(agent.id, installLeaderTools(teamCtx, agent))
    }
    // Subscribe before seeding, so a session published during this pass is
    // equipped exactly once (the id set makes the overlap harmless).
    teamCtx.on('agent/created', (payload: { agent: Agent }) => { equip(payload.agent) })
    teamCtx.on('agent/disposed', (payload: { agent: Agent }) => { equipped.delete(payload.agent.id) })
    for (const agent of teamCtx.agents.list()) equip(agent)
    teamCtx.effect(() => () => {
      // The registrations are agent-owned; unloading this row must still take
      // the tools off sessions that outlive it.
      for (const dispose of equipped.values()) dispose()
      equipped.clear()
    }, 'team: leader tools')
  })
}
