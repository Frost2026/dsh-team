/**
 * The teammate world: what one continuable child gains when — and only when —
 * it belongs to a team.
 *
 * @module dsh-team/tests/teammate
 */

import { Context } from '@deepseek-ai/cordis'
import { beforeEach, describe, expect, it } from 'vitest'
import { TeamService } from '../src/service.ts'
import { installTeammateWorld } from '../src/teammate.ts'
import type { TeamConfig } from '../src/config.ts'
import { FakeAgents, FakeSubagents, FakeSystemPrompt, FakeTools, fakeAgent, type FakeAgent } from './harness.ts'

const CONFIG: TeamConfig = {
  provider: 'spawn', maxTeammates: 8, maxRecentMessages: 20, maxChainHops: 4, maxChainRoundTrips: 2,
}
const signal = new AbortController().signal

/** The world one continuable child is composed in. */
interface Child {
  readonly ctx: Context
  readonly tools: FakeTools
  readonly prompt: FakeSystemPrompt
  readonly agent: FakeAgent
  readonly release: () => void
}

let ctx: Context
let agents: FakeAgents
let subagents: FakeSubagents
let service: TeamService
let leader: FakeAgent
let removeWorld: () => void

beforeEach(() => {
  ctx = new Context()
  agents = new FakeAgents()
  subagents = new FakeSubagents()
  ctx.provide('agents', agents)
  ctx.provide('subagents', subagents)
  service = new TeamService(ctx, CONFIG)
  leader = agents.add(fakeAgent('leader-1'))
  removeWorld = installTeammateWorld(ctx)
})

/** Compose one child through the registered contribution, as the seam does. */
function compose(agent: FakeAgent): Child {
  const childCtx = new Context()
  const tools = new FakeTools()
  const prompt = new FakeSystemPrompt()
  childCtx.provide('agent', agent.agent)
  childCtx.provide('tools', tools)
  childCtx.provide('systemPrompt', prompt)
  const contribution = subagents.setups[0]
  if (contribution === undefined) throw new Error('no continuable setup was registered')
  return { ctx: childCtx, tools, prompt, agent, release: contribution(childCtx) }
}

/** Spawn one teammate and publish its live agent double. */
async function spawn(name: string, options: {
  readonly relation?: 'managed' | 'peer'
  readonly effort?: string
} = {}): Promise<FakeAgent> {
  subagents.nextChildId = `child-${subagents.started.length + 1}`
  const member = await service.spawn(leader.agent, {
    name,
    task: `do ${name}'s work`,
    relation: options.relation ?? 'managed',
    ...options.effort !== undefined ? { reasoningEffort: options.effort } : {},
  }, signal)
  return agents.add(fakeAgent(member.memberId, { parent: leader.id }))
}

describe('composition', () => {
  it('registers one contribution for every continuable child, and takes it back', () => {
    expect(subagents.setups).toHaveLength(1)
    removeWorld()
    expect(subagents.setups).toHaveLength(0)
  })

  it('gives an ordinary subagent nothing at all', () => {
    const stranger = compose(fakeAgent('other-child', { parent: 'unrelated-leader' }))
    expect(stranger.tools.registered).toEqual([])
    expect(stranger.prompt.sections).toEqual([])
    expect(() => { stranger.release() }).not.toThrow()
  })

  it('equips a teammate with the mailbox, the team read, and its briefing', async () => {
    const child = compose(await spawn('Alice', { relation: 'peer' }))
    expect(child.tools.registered.map(tool => tool.name)).toEqual(['team_send', 'team_list'])
    expect(child.prompt.sections).toHaveLength(1)
    expect(child.prompt.sections[0]).toMatchObject({ name: 'team-membership', order: 118 })
  })

  it('unwinds every registration with the child', async () => {
    const child = compose(await spawn('Alice'))
    child.release()
    expect(child.tools.registered).toEqual([])
    expect(child.prompt.sections).toEqual([])
  })
})

describe('briefing', () => {
  it('states the identity, the reach a relation grants, and the rest of the team', async () => {
    const alice = await spawn('Alice', { relation: 'peer' })
    await spawn('Bob')
    const child = compose(alice)
    const text = child.prompt.sections[0]!.text()

    expect(text).toContain('You are Alice')
    expect(text).toContain('peer member')
    expect(text).toContain('Bob (managed)')
    expect(text).not.toContain('Alice (')
  })

  it('tells a managed teammate that its only correspondent is the leader', async () => {
    const child = compose(await spawn('Bob'))
    expect(child.prompt.sections[0]!.text()).toContain('managed member')
  })

  it('re-renders live, so a later teammate and a new task are visible next step', async () => {
    const alice = await spawn('Alice', { relation: 'peer' })
    const child = compose(alice)
    expect(child.prompt.sections[0]!.text()).toContain('only teammate')

    await spawn('Bob')
    service.upsertTask(leader.agent, { title: 'review the diff', assigneeId: 'Alice' })
    const text = child.prompt.sections[0]!.text()
    expect(text).toContain('Bob (managed)')
    expect(text).toContain('t1 "review the diff"')
  })

  it('tells a dismissed teammate its team is gone instead of failing to render', async () => {
    const alice = await spawn('Alice')
    const child = compose(alice)
    service.dismiss(leader.agent, 'Alice')
    expect(child.prompt.sections[0]!.text()).toContain('no longer active')
  })
})

describe('reasoning effort', () => {
  /** Dispatch the child's own request waterfall, as the agent loop does. */
  async function requestConfig(child: Child): Promise<Record<string, unknown>> {
    const payload = { agent: child.agent.agent, turn: 1, step: 1, signal }
    return await child.ctx.waterfall(
      'agent/request',
      payload as never,
      (() => Promise.resolve({ provider: 'deepseek', model: 'chat' })) as never,
    ) as unknown as Record<string, unknown>
  }

  it('pins the effort recorded at spawn onto the teammate own requests', async () => {
    const child = compose(await spawn('Alice', { effort: 'high' }))
    expect(await requestConfig(child)).toEqual({ provider: 'deepseek', model: 'chat', reasoningEffort: 'high' })
  })

  it('leaves the request untouched for a teammate that asked for no effort', async () => {
    const child = compose(await spawn('Alice'))
    expect(await requestConfig(child)).toEqual({ provider: 'deepseek', model: 'chat' })
  })

  it('stops pinning once the child unwinds', async () => {
    const child = compose(await spawn('Alice', { effort: 'high' }))
    child.release()
    expect(await requestConfig(child)).toEqual({ provider: 'deepseek', model: 'chat' })
  })
})
