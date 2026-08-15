/**
 * Test doubles for the harness seams dsh-team consumes. Every double is the
 * narrowest thing that satisfies one seam's contract — a fake that grew a
 * behaviour of its own would test itself instead of the plugin.
 *
 * @module dsh-team/tests/harness
 */

import { Context } from '@deepseek-ai/cordis'
import type { Agent } from '@deepseek-ai/dsh-agent'
import type { ContentBlock, MessageSource, UserMessage } from '@deepseek-ai/dsh-llm'
import { createUserMessage } from '@deepseek-ai/dsh-llm'
import { SessionId } from '@deepseek-ai/dsh-session'
import type { SessionEvent, SessionId as SessionIdType } from '@deepseek-ai/dsh-session'

/** One delivery an agent double accepted through its inbox. */
export interface AcceptedMessage {
  readonly message: UserMessage
  readonly target: string
  readonly wakeup: boolean
}

/** A live-agent double: identity, header lineage, log, and an inbox recorder. */
export interface FakeAgent {
  readonly id: SessionIdType
  status: 'idle' | 'running'
  readonly session: { header: Record<string, unknown>; events: SessionEvent[] }
  readonly options: { provider?: string; model?: string }
  readonly ctx: Context
  readonly received: AcceptedMessage[]
  send(message: UserMessage, target: string, wakeup: boolean): void
  /** The same double under the seam's own type, for service and tool calls. */
  readonly agent: Agent
}

/**
 * Build one agent double.
 * @param id - the session id this agent is published under.
 * @param options - lineage (`parent` makes it a teammate) and route overrides.
 * @returns the double, already usable as an `Agent`.
 */
export function fakeAgent(id: string, options: {
  readonly parent?: string
  readonly status?: 'idle' | 'running'
  readonly provider?: string
  readonly model?: string
  readonly events?: SessionEvent[]
} = {}): FakeAgent {
  const self: FakeAgent = {
    id: SessionId(id),
    status: options.status ?? 'idle',
    session: {
      header: options.parent === undefined
        ? { origin: 'user' }
        : { origin: 'subagent', parentSession: SessionId(options.parent) },
      events: options.events ?? [],
    },
    options: {
      ...options.provider !== undefined ? { provider: options.provider } : {},
      ...options.model !== undefined ? { model: options.model } : {},
    },
    ctx: new Context(),
    received: [],
    send(message, target, wakeup) {
      this.received.push({ message, target, wakeup })
    },
    get agent(): Agent {
      return self as unknown as Agent
    },
  }
  return self
}

/** One `startContinuable` call the subagent double accepted. */
export interface StartedChild {
  readonly provider: string
  readonly label: string
  readonly parent: Agent
  readonly prompt: readonly ContentBlock[]
  readonly persona?: string
  readonly agentOptions?: Record<string, unknown>
}

/** One `followup` delivery the subagent double accepted. */
export interface FollowupDelivery {
  readonly parentId: string
  readonly childId: string
  readonly content: readonly ContentBlock[]
  readonly source: MessageSource
}

/** The `ctx.subagents` double: records every continuable operation. */
export class FakeSubagents {
  readonly started: StartedChild[] = []
  readonly followups: FollowupDelivery[] = []
  readonly interrupted: string[] = []
  /** Contributions registered through {@link registerContinuableSetup}. */
  readonly setups: Array<(childCtx: Context) => () => void> = []
  /** Next child id handed out; the team never chooses one itself. */
  nextChildId = 'child-1'
  /** When set, `startContinuable` rejects with it. */
  failStart: Error | undefined
  /** Runs while a start is in flight, so a test can observe the composition window. */
  onStart: ((childId: SessionIdType) => void) | undefined

  async startContinuable(spec: {
    provider: string
    label: string
    request: { parent: Agent; prompt: ContentBlock[]; persona?: string; agentOptions?: Record<string, unknown> }
    signal: AbortSignal
  }): Promise<{ childId: SessionIdType; messageId: string }> {
    if (this.failStart !== undefined) throw this.failStart
    const childId = SessionId(this.nextChildId)
    this.started.push({
      provider: spec.provider,
      label: spec.label,
      parent: spec.request.parent,
      prompt: spec.request.prompt,
      ...spec.request.persona !== undefined ? { persona: spec.request.persona } : {},
      ...spec.request.agentOptions !== undefined ? { agentOptions: spec.request.agentOptions } : {},
    })
    this.onStart?.(childId)
    return await Promise.resolve({ childId, messageId: `m-${childId}` })
  }

  async followup(
    parent: Agent,
    childId: SessionIdType,
    content: ContentBlock[],
    options: { source: MessageSource; signal: AbortSignal },
  ): Promise<string> {
    this.followups.push({ parentId: parent.id, childId, content, source: options.source })
    return await Promise.resolve(`m-${this.followups.length}`)
  }

  interrupt(targetSessionId: SessionIdType): void {
    this.interrupted.push(targetSessionId)
  }

  registerContinuableSetup(contribution: (childCtx: Context) => () => void): () => void {
    this.setups.push(contribution)
    return () => {
      const index = this.setups.indexOf(contribution)
      if (index >= 0) this.setups.splice(index, 1)
    }
  }
}

/** The `ctx.agents` double: a live registry backed by a map. */
export class FakeAgents {
  private readonly byId = new Map<string, FakeAgent>()

  add(agent: FakeAgent): FakeAgent {
    this.byId.set(agent.id, agent)
    return agent
  }

  remove(id: string): void {
    this.byId.delete(id)
  }

  get(id: string): Agent | undefined {
    return this.byId.get(id)?.agent
  }

  list(): Agent[] {
    return [...this.byId.values()].map(agent => agent.agent)
  }
}

/** The `ctx.llm` double: only the model-info read the team validates against. */
export class FakeLlm {
  constructor(private readonly efforts: readonly string[]) {}

  async resolveModelInfo(_provider: string, _model: string): Promise<{ reasoning?: { efforts: { id: string }[] } }> {
    return await Promise.resolve(
      this.efforts.length === 0 ? {} : { reasoning: { efforts: this.efforts.map(id => ({ id })) } },
    )
  }
}

/** One tool registration a scoped registry double accepted. */
export interface RegisteredTool {
  readonly name: string
  readonly definition: { readonly name: string }
}

/** The `ctx.tools` double: registration plus exact-disposer semantics. */
export class FakeTools {
  readonly registered: RegisteredTool[] = []

  register(definition: { name: string }): () => void {
    const entry: RegisteredTool = { name: definition.name, definition }
    this.registered.push(entry)
    return () => {
      const index = this.registered.indexOf(entry)
      if (index >= 0) this.registered.splice(index, 1)
    }
  }
}

/** The `ctx.systemPrompt` double: keeps the section's live text callback. */
export class FakeSystemPrompt {
  readonly sections: Array<{ name: string; order: number; text: () => string }> = []

  section(spec: { name: string; order: number; text: () => string }): () => void {
    this.sections.push(spec)
    return () => {
      const index = this.sections.indexOf(spec)
      if (index >= 0) this.sections.splice(index, 1)
    }
  }
}

/** Sequence numbers are per-log, so one counter per builder call site is enough. */
let seq = 0

/**
 * Build one `tool/result` event carrying a team fact through `meta`.
 * @param meta - the presentation meta the team tool projected.
 * @param options - `error` marks the call as failed, `time` stamps the row.
 * @returns the committed event.
 */
export function toolResultEvent(meta: unknown, options: {
  readonly error?: { name: string; code: string }
  readonly time?: number
} = {}): SessionEvent {
  seq += 1
  return {
    type: 'tool/result',
    seq,
    time: options.time ?? 1_700_000_000_000 + seq,
    data: {
      turn: 1,
      step: 1,
      message: { id: `r${seq}`, role: 'user', content: [{ type: 'tool_result', callId: `c${seq}`, content: [] }] },
      ...options.error !== undefined ? { error: options.error } : {},
      meta,
    },
  } as unknown as SessionEvent
}

/**
 * Build one `user/message` event as a delivery with the given source.
 * @param source - the durable attribution the delivery carried.
 * @param text - the message text.
 * @param time - epoch ms stamped on the row.
 * @returns the committed event.
 */
export function userMessageEvent(source: MessageSource, text: string, time?: number): SessionEvent {
  seq += 1
  const message = createUserMessage({ content: [{ type: 'text', text }], source })
  return {
    type: 'user/message',
    seq,
    time: time ?? 1_700_000_000_000 + seq,
    data: message,
  } as unknown as SessionEvent
}

/** A tool execution context double: the acting agent plus a live signal. */
export function fakeExec(agent: FakeAgent): { agent: Agent; signal: AbortSignal } {
  return { agent: agent.agent, signal: new AbortController().signal }
}
