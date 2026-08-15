/**
 * The browser half's plugin body: which session's team is on screen, and what
 * the panel asks the session domain to open.
 *
 * The fold itself is the host's (tests/fold.spec.ts) — this file only covers
 * following, holding, and navigating.
 *
 * @module dsh-team/tests/client
 */

import { beforeEach, describe, expect, it, vi } from 'vitest'
import type { ClientContext } from '@deepseek-ai/dsh-client-runtime/client'
import type { TeamMemberView, TeamView } from '../src/contract.ts'
import { apply, type TeamPanelState } from '../src/client/index.ts'

/** A minimal observable value with the store contract the plugin reads. */
class Observable<T> {
  private readonly listeners = new Set<() => void>()

  constructor(private value: T) {}

  getSnapshot(): T {
    return this.value
  }

  subscribe(fn: () => void): () => void {
    this.listeners.add(fn)
    return () => { this.listeners.delete(fn) }
  }

  set(next: T): void {
    this.value = next
    for (const fn of [...this.listeners]) fn()
  }

  /** Live subscriber count, so teardown can be observed. */
  get watchers(): number {
    return this.listeners.size
  }
}

const alice: TeamMemberView = { memberId: 'child-1', name: 'Alice', relation: 'peer', joinedAt: 1 }

/** One team value as a leader session folds it. */
function teamOf(members: readonly TeamMemberView[]): TeamView {
  return { active: members.length > 0, members, tasks: [], messages: [] }
}

/** The session domain double: bindings, navigation, and the subagent catalog. */
class FakeSessions {
  readonly list = new Observable<{ current: string | undefined }>({ current: undefined })
  readonly faces = new Map<string, Observable<TeamView | undefined>>()
  readonly opened: string[] = []
  readonly openedSubagents: Array<{ parentSessionId: string; childSessionId: string; mode: string }> = []
  readonly refreshed: string[] = []
  /** Addresses the catalog already retains. */
  readonly addresses = new Map<string, { parentSessionId: string; childSessionId: string; mode: string }>()
  /** Sessions with a live binding; a published id may arrive before one. */
  readonly bound = new Set<string>()
  /** Child ids `openSubagent` refuses until the parent catalog is refreshed. */
  readonly unknownChildren = new Set<string>()

  /** Publish one session with a team value and a live binding. */
  seed(id: string, team?: TeamView): void {
    this.faces.set(id, new Observable<TeamView | undefined>(team))
    this.bound.add(id)
  }

  binding(id: string): { session: { projections: { faceOf: (key: string) => Observable<TeamView | undefined> } } } | undefined {
    if (!this.bound.has(id)) return undefined
    const face = this.faces.get(id) ?? new Observable<TeamView | undefined>(undefined)
    this.faces.set(id, face)
    return { session: { projections: { faceOf: () => face } } }
  }

  open(id: string): void {
    this.opened.push(id)
  }

  subagentAddress(id: string): { parentSessionId: string; childSessionId: string; mode: string } | undefined {
    return this.addresses.get(id)
  }

  openSubagent(address: { parentSessionId: string; childSessionId: string; mode: string }): void {
    if (this.unknownChildren.has(address.childSessionId)) throw new Error('not a healthy catalog child')
    this.openedSubagents.push(address)
  }

  async refreshSubagents(parentId: string): Promise<void> {
    this.refreshed.push(parentId)
    for (const id of [...this.unknownChildren]) this.unknownChildren.delete(id)
    await Promise.resolve()
  }
}

/** What the slot registration handed to the entry component. */
interface Injected {
  readonly hooks: { readonly team: { getSnapshot(): TeamPanelState } }
  readonly openMember: (leaderId: string, memberId: string) => void
  readonly openLeader: (leaderId: string) => void
}

let sessions: FakeSessions
let injected: Injected
let teardown: () => void

/** Mount the plugin body over the doubles and capture its inject face. */
function mount(): void {
  sessions = new FakeSessions()
  const disposers: Array<() => void> = []
  let face: Injected | undefined
  const ctx = {
    effect: (run: () => unknown, _label: string) => {
      const disposer = run()
      if (typeof disposer === 'function') disposers.push(disposer as () => void)
    },
    locale: { register: () => () => {} },
    sessions,
    slots: {
      inject: (_name: string, register: () => unknown) => { register() },
      register: (spec: { inject: () => Injected }) => {
        face = spec.inject()
        return () => {}
      },
    },
  } as unknown as ClientContext

  apply(ctx)
  if (face === undefined) throw new Error('the overlay entry registered no inject face')
  injected = face
  teardown = () => { for (const dispose of disposers.reverse()) dispose() }
}

/** The panel state currently published to the entry. */
function panel(): TeamPanelState {
  return injected.hooks.team.getSnapshot()
}

beforeEach(() => { mount() })

describe('following the current session', () => {
  it('publishes nothing while no session is current', () => {
    expect(panel()).toEqual({ members: [], tasks: [], messages: [] })
  })

  it('publishes the team of the session that comes into view', () => {
    sessions.seed('leader-1', teamOf([alice]))
    sessions.list.set({ current: 'leader-1' })
    expect(panel()).toEqual({ leaderId: 'leader-1', currentId: 'leader-1', members: [alice], tasks: [], messages: [] })
  })

  it('follows later pushes for the session on screen', () => {
    sessions.seed('leader-1', teamOf([]))
    sessions.list.set({ current: 'leader-1' })
    expect(panel().leaderId).toBeUndefined()

    sessions.faces.get('leader-1')!.set(teamOf([alice]))
    expect(panel().members).toEqual([alice])
  })

  it('holds the team while you read one of its teammates, moving the marker', () => {
    sessions.seed('leader-1', teamOf([alice]))
    sessions.seed('child-1', teamOf([]))
    sessions.list.set({ current: 'leader-1' })
    sessions.list.set({ current: 'child-1' })

    expect(panel()).toMatchObject({ leaderId: 'leader-1', currentId: 'child-1', members: [alice] })
  })

  it('clears when an unrelated session comes into view', () => {
    sessions.seed('leader-1', teamOf([alice]))
    sessions.seed('other', teamOf([]))
    sessions.list.set({ current: 'leader-1' })
    sessions.list.set({ current: 'other' })

    expect(panel()).toEqual({ members: [], tasks: [], messages: [] })
  })

  it('attaches later when the current id arrives before its binding', () => {
    sessions.faces.set('leader-1', new Observable<TeamView | undefined>(teamOf([alice])))
    sessions.list.set({ current: 'leader-1' })
    expect(panel().members).toEqual([])

    sessions.bound.add('leader-1')
    sessions.list.set({ current: 'leader-1' })
    expect(panel().members).toEqual([alice])
  })

  it('drops every subscription when the row unloads', () => {
    sessions.seed('leader-1', teamOf([alice]))
    sessions.list.set({ current: 'leader-1' })
    expect(sessions.faces.get('leader-1')!.watchers).toBe(1)

    teardown()
    expect(sessions.list.watchers).toBe(0)
    expect(sessions.faces.get('leader-1')!.watchers).toBe(0)
    expect(panel()).toEqual({ members: [], tasks: [], messages: [] })
  })
})

describe('navigation', () => {
  it('returns to the leader conversation', () => {
    injected.openLeader('leader-1')
    expect(sessions.opened).toEqual(['leader-1'])
  })

  it('opens a teammate through the durable address the catalog retains', () => {
    sessions.addresses.set('child-1', { parentSessionId: 'leader-1', childSessionId: 'child-1', mode: 'continuable' })
    injected.openMember('leader-1', 'child-1')
    expect(sessions.openedSubagents).toEqual([
      { parentSessionId: 'leader-1', childSessionId: 'child-1', mode: 'continuable' },
    ])
  })

  it('falls back to the direct-parent address when the catalog knows none', () => {
    injected.openMember('leader-1', 'child-2')
    expect(sessions.openedSubagents).toEqual([
      { parentSessionId: 'leader-1', childSessionId: 'child-2', mode: 'continuable' },
    ])
  })

  it('refreshes the catalog once and retries when the child is not retained yet', async () => {
    sessions.unknownChildren.add('child-3')
    injected.openMember('leader-1', 'child-3')
    expect(sessions.openedSubagents).toEqual([])

    await vi.waitFor(() => { expect(sessions.openedSubagents).toHaveLength(1) })
    expect(sessions.refreshed).toEqual(['leader-1'])
  })

  it('stays put when the child is absent even after the refresh', async () => {
    sessions.unknownChildren.add('child-4')
    sessions.refreshSubagents = async (parentId: string) => {
      sessions.refreshed.push(parentId)
      await Promise.resolve()
    }
    injected.openMember('leader-1', 'child-4')

    await vi.waitFor(() => { expect(sessions.refreshed).toEqual(['leader-1']) })
    expect(sessions.openedSubagents).toEqual([])
  })
})
