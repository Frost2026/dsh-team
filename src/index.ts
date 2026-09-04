/**
 * dsh-team: agent teams for DeepSeek Harness.
 *
 * One plugin row, four registrations: the `ctx.team` service, the leader tool
 * set on every ordinary session, the teammate world on every continuable child
 * that belongs to a team, and the human `/agent-teams` slash command.
 * Teammates themselves are `ctx.subagents` continuable children — the harness
 * owns their sessions, residency, cold resume, and the `origin: 'subagent'`
 * classification that keeps them out of the session tree.
 *
 * @module dsh-team
 */

import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'
import type { Context } from '@deepseek-ai/cordis'
import type { Agent } from '@deepseek-ai/dsh-agent'
import type { SessionId } from '@deepseek-ai/dsh-session'
import type {} from '@deepseek-ai/dsh-tools'
import type {} from '@deepseek-ai/dsh-system-prompt'
import type {} from './types.ts'
import { Config, type TeamConfig } from './config.ts'
import { installCommand } from './command.ts'
import { teamProjection } from './projection.ts'
import { TeamService } from './service.ts'
import { installTeammateWorkspace, installTeammateWorld } from './teammate.ts'
import { boardTool, dismissTool, inspectTool, listTool, noteTool, relationTool, sendTool, spawnTool, taskTool } from './tools.ts'
import { TeamWorkspace } from './workspace.ts'

export const DEFAULT_LEADER_GUIDE = `
# Agent Team Collaboration & Model Routing Guidelines

## 0. Natural Language Intent Mapping (Zero-Search Principle)
- You ALREADY have full agent team collaboration capabilities natively mounted into your session.
- When the user asks you to "开团队", "组建团队", "协同作战", "多Agent", "调用团队插件", "team plugin", or "collaborate with a team":
  YOU DO NOT NEED TO SEARCH FOR PLUGINS OR SCRIPTS.
  You already have the full team toolset: \`team_spawn\`, \`team_task\`, \`team_message\`, \`team_inspect\`, \`team_dismiss\`, and \`team_list\`.
  Directly call \`team_spawn\` to create teammates and \`team_task\` to assign work! Never reply that you "do not have this plugin" or search the workspace for it.

## 1. Heterogeneous Model Selection
When forming a team with specific models, use \`team_spawn\` with matching \`provider\` and \`model\`:
- Gemini / 反重力: provider: "antigravity", model: "gemini-3.8-flash" (reasoning_effort: "high"|"medium"|"low").
- Grok: provider: "grok", model: "grok-4.6" (reasoning_effort: "xhigh"|"high"|"medium"|"low", default "high").
- Codex / ChatGPT: provider: "codex", model: "gpt-5.6-luna" or "gpt-5.6-sol" (reasoning_effort: "max"|"xhigh"|"high"|"medium"|"low").
- OpenCode Go (GLM): provider: "opencode-go", model: "glm-5.3-flash" (reasoning_effort: "max"|"high"|"low", default "max").
- OpenCode Go (DeepSeek): provider: "opencode-go", model: "deepseek-v4-pro" (reasoning_effort: "high"|"off").
CRITICAL: When spawning teammates with a different model family, you MUST explicitly provide both \`provider\` and \`model\`.

## 2. Autonomous Background Execution & No-Polling Principle
- Teammates run autonomously in background sessions; deep thinking models naturally take several minutes.
- When waiting for teammates to work, you DO NOT need to poll them. When they finish, they will report automatically, and the system will wake you up.
- Do not call tools in a loop to wait. Unless the user explicitly asks you to inspect or you suspect an issue, only then call \`team_inspect\`.
- If \`team_inspect\` shows a teammate is RUNNING or thinking, it is actively working: stop calling tools, give the user a brief note, and wait quietly for their report. Never dismiss a member that is actively thinking.
`.trim()

function getPromptFilePath(): string {
  const dshHome = process.env.DSH_HOME || join(homedir(), '.dsh')
  return join(dshHome, 'team-leader-prompt.md')
}

export function getEffectiveLeaderPrompt(config?: TeamConfig): string {
  try {
    const promptPath = getPromptFilePath()
    if (existsSync(promptPath)) {
      const content = readFileSync(promptPath, 'utf8').trim()
      if (content) return content
    }
  } catch {}
  if (config?.leaderPrompt?.trim()) {
    return config.leaderPrompt.trim()
  }
  return DEFAULT_LEADER_GUIDE
}

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
export { TeamWorkspace, WORKSPACE_DOMAIN, SHARED_AREA } from './workspace.ts'
export type { WorkspaceEntry } from './workspace.ts'
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
 * @param config - optional validated team config.
 * @returns the disposer for every registration made here.
 */
function installLeaderTools(ctx: Context, agent: Agent, config?: TeamConfig): () => void {
  const disposers: (() => void)[] = [
    agent.ctx.tools.register(spawnTool(ctx)),
    agent.ctx.tools.register(sendTool(ctx, 'leader')),
    agent.ctx.tools.register(taskTool(ctx)),
    agent.ctx.tools.register(relationTool(ctx)),
    agent.ctx.tools.register(dismissTool(ctx)),
    agent.ctx.tools.register(listTool(ctx)),
    agent.ctx.tools.register(inspectTool(ctx)),
  ]
  if (agent.ctx.systemPrompt?.section) {
    disposers.push(
      agent.ctx.systemPrompt.section({
        name: 'team-leader-guide',
        order: 100,
        text: getEffectiveLeaderPrompt(config),
      }),
    )
  }
  return () => {
    for (const dispose of disposers.reverse()) dispose()
  }
}

/**
 * Equip every leader session, now and as sessions arrive, with one tool set.
 * @param ctx - the context owning the registrations.
 * @param install - what to register into one leader's own agent scope.
 * @returns the disposer taking the tools off every session that outlives it.
 */
function equipLeaders(ctx: Context, install: (agent: Agent) => () => void): () => void {
  const equipped = new Map<SessionId, () => void>()
  const equip = (agent: Agent): void => {
    if (!leads(agent) || equipped.has(agent.id)) return
    equipped.set(agent.id, install(agent))
  }
  // Subscribe before seeding, so a session published during this pass is
  // equipped exactly once (the id set makes the overlap harmless).
  ctx.on('agent/created', (payload: { agent: Agent }) => { equip(payload.agent) })
  ctx.on('agent/disposed', (payload: { agent: Agent }) => { equipped.delete(payload.agent.id) })
  for (const agent of ctx.agents.list()) equip(agent)
  return () => {
    // The registrations are agent-owned; unloading this row must still take
    // the tools off sessions that outlive it.
    for (const dispose of equipped.values()) dispose()
    equipped.clear()
  }
}

/**
 * The virtual workspaces, when the deployment composed a storage domain form.
 * Without one the team keeps everything else and the workspace tools are never
 * registered — no member sees a tool that has nowhere to write.
 * @param ctx - a context whose `team` service is resolved.
 * @param config - the validated row configuration.
 */
function installWorkspaces(ctx: Context, config: TeamConfig): void {
  ctx.inject(['storageDomain'], (workspaceCtx: Context) => {
    const workspace = new TeamWorkspace(workspaceCtx, config)
    workspaceCtx.effect(() => () => { workspace.dispose() }, 'team: workspace domain')

    // Notes outlive turns, not teams: a disbanded team's board and a dismissed
    // member's private pad have no owner left to read them.
    workspaceCtx.on('team/changed', (payload: {
      leaderId: SessionId
      ended?: boolean
      removedMember?: string
    }) => {
      if (payload.ended === true) void workspace.clear(payload.leaderId)
      else if (payload.removedMember !== undefined) void workspace.clear(payload.leaderId, payload.removedMember)
    })

    workspaceCtx.effect(() => equipLeaders(workspaceCtx, agent => {
      const disposers = [
        agent.ctx.tools.register(noteTool(workspace, 'leader', actor => workspaceCtx.team.seatOf(actor))),
        agent.ctx.tools.register(boardTool(workspace, 'leader', actor => workspaceCtx.team.seatOf(actor))),
      ]
      return () => {
        for (const dispose of disposers.reverse()) dispose()
      }
    }), 'team: leader workspace tools')

    workspaceCtx.effect(
      () => installTeammateWorkspace(workspaceCtx, workspace),
      'team: teammate workspace tools',
    )
  })
}

/**
 * Compose the team capability: the service, the durable projection unit, the
 * teammate world, the per-session leader tools, the virtual workspaces, and
 * the human `/agent-teams` command.
 *
 * `commands` is injected softly rather than declared on the row, like
 * `storageDomain`: UI-less compositions ship no command adapter, and the row
 * must load there with every other capability intact.
 *
 * @param ctx - the row's context.
 * @param config - the validated row configuration.
 */
export function apply(ctx: Context, config: TeamConfig): void {
  ctx.plugin(TeamService, config)
  ctx.inject(['commands'], (commandCtx: Context) => {
    commandCtx.effect(() => installCommand(commandCtx), 'team: /agent-teams command')
  })
  ctx.inject(['webServer'], (webCtx: Context) => {
    webCtx.effect(() => (webCtx as any).webServer.register({
      kind: 'exact',
      path: '/api/team/leader-prompt',
      handler: async (req: any, res: any) => {
        const respond = (code: number, data: unknown) => {
          res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' })
          res.end(JSON.stringify(data))
        }
        const promptPath = getPromptFilePath()
        if (req.method === 'GET') {
          let customPrompt: string | null = null
          try {
            if (existsSync(promptPath)) {
              customPrompt = readFileSync(promptPath, 'utf8')
            }
          } catch {}
          return respond(200, {
            ok: true,
            prompt: customPrompt || (config?.leaderPrompt?.trim() || DEFAULT_LEADER_GUIDE),
            defaultPrompt: DEFAULT_LEADER_GUIDE,
            isCustom: Boolean(customPrompt || config?.leaderPrompt),
          })
        }
        if (req.method === 'POST') {
          try {
            const chunks: Buffer[] = []
            for await (const chunk of req) chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
            const body = JSON.parse(Buffer.concat(chunks).toString('utf8'))
            if (body.reset === true || !body.prompt || body.prompt.trim() === DEFAULT_LEADER_GUIDE.trim()) {
              if (existsSync(promptPath)) rmSync(promptPath, { force: true })
              return respond(200, {
                ok: true,
                prompt: DEFAULT_LEADER_GUIDE,
                defaultPrompt: DEFAULT_LEADER_GUIDE,
                isCustom: false,
              })
            }
            mkdirSync(dirname(promptPath), { recursive: true })
            writeFileSync(promptPath, body.prompt.trim(), 'utf8')
            return respond(200, {
              ok: true,
              prompt: body.prompt.trim(),
              defaultPrompt: DEFAULT_LEADER_GUIDE,
              isCustom: true,
            })
          } catch (err) {
            return respond(500, { ok: false, error: String((err as Error)?.message || err) })
          }
        }
        return respond(405, { ok: false, error: 'Method not allowed' })
      },
    }), 'team: /api/team/leader-prompt route')
  })
  ctx.inject(['team'], (teamCtx: Context) => {
    teamCtx.effect(
      () => teamCtx.sessionProjections.register(teamProjection(config.maxRecentMessages)),
      'team: durable projection unit',
    )
    teamCtx.effect(() => installTeammateWorld(teamCtx), 'team: teammate world')
    teamCtx.effect(
      () => equipLeaders(teamCtx, agent => installLeaderTools(teamCtx, agent, config)),
      'team: leader tools',
    )
    installWorkspaces(teamCtx, config)
  })
}
