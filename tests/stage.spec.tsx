/**
 * The agent-team stage: the constellation it draws, the bubbles it orients,
 * the board it fills, and what it asks the plugin body to open.
 *
 * @vitest-environment jsdom
 * @module dsh-team/tests/stage
 */

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import type { SessionListState } from '@deepseek-ai/dsh-client-runtime/client'
import type { TeamBoardEntryView, TeamMemberView, TeamMessageView, TeamTaskView } from '../src/contract.ts'
import { TeamStage, type TeamStageProps, type TeamPanelState } from '../src/client/TeamStage.tsx'
import { en, type TeamKey } from '../src/client/locales.ts'

afterEach(cleanup)

/** The dictionary lookup the slot framework injects, over the real copy. */
function translate(key: TeamKey, params?: Record<string, string | number>): string {
  const text = en[key]
  return params === undefined
    ? text
    : Object.entries(params).reduce((line, [name, value]) => line.replaceAll(`{${name}}`, String(value)), text)
}

/** A session-list snapshot with the named sessions marked running. */
function sessions(running: readonly string[] = []): SessionListState {
  const byId = Object.fromEntries(running.map(id => [id, { id, running: true }]))
  return { ids: [], byId, current: undefined, phase: 'ready', subagentsByParent: {}, jobsBySession: {} } as unknown as SessionListState
}

const alice: TeamMemberView = {
  memberId: 'child-1', name: 'Alice', role: 'reviewer', relation: 'peer',
  model: 'reasoner', effort: 'high', joinedAt: 1,
}
const bob: TeamMemberView = { memberId: 'child-2', name: 'Bob', relation: 'managed', joinedAt: 2 }
const carol: TeamMemberView = { memberId: 'child-3', name: 'Carol', relation: 'peer', joinedAt: 3 }

/** Mount the stage over one panel state. */
function mount(state: Partial<TeamPanelState>, options: {
  readonly running?: readonly string[]
  readonly openMember?: (leaderId: string, memberId: string) => void
  readonly openLeader?: (leaderId: string) => void
} = {}) {
  const panel: TeamPanelState = { members: [], tasks: [], messages: [], board: [], ...state } as TeamPanelState
  const props = {
    useTeam: (select: (snapshot: TeamPanelState) => unknown) => select(panel),
    useSessions: (select: (snapshot: SessionListState) => unknown) => select(sessions(options.running)),
    openMember: options.openMember ?? (() => {}),
    openLeader: options.openLeader ?? (() => {}),
    t: translate,
  } as unknown as TeamStageProps
  return render(<TeamStage {...props} />)
}

/** Mount a full two-teammate team. */
function stage(state: Partial<TeamPanelState> = {}, options: Parameters<typeof mount>[1] = {}) {
  return mount({ leaderId: 'leader-1', currentId: 'leader-1', members: [alice, bob], ...state }, options)
}

describe('presence', () => {
  it('says the session has no team rather than drawing an empty one', () => {
    mount({})
    expect(screen.getByText(en['stage.noTeam'])).toBeTruthy()
    expect(screen.queryByLabelText(en['member.openLeader'])).toBeNull()
  })

  it('treats a leader with an empty roster as no team', () => {
    mount({ leaderId: 'leader-1', members: [] })
    expect(screen.getByText(en['stage.noTeam'])).toBeTruthy()
  })

  it('counts the leader into the roster and reports an all-idle team', () => {
    stage()
    expect(screen.getByText('3 members')).toBeTruthy()
    expect(screen.getByText(en['stage.idle'])).toBeTruthy()
  })

  it('reports the members that are mid-turn', () => {
    stage({}, { running: ['child-1'] })
    expect(screen.getByText('1 working')).toBeTruthy()
  })

  it('counts the open tasks against the whole list', () => {
    stage({ tasks: [{ taskId: 't1', title: 'a', status: 'done' }, { taskId: 't2', title: 'b', status: 'active' }] })
    expect(screen.getByText('1/2 tasks')).toBeTruthy()
  })
})

describe('constellation', () => {
  it('seats the leader at the hub and every teammate on the orbit', () => {
    stage()
    expect(screen.getByLabelText(en['member.openLeader'])).toBeTruthy()
    expect(screen.getByLabelText('Open the session of Alice')).toBeTruthy()
    expect(screen.getByLabelText('Open the session of Bob')).toBeTruthy()
  })

  it('draws one spoke per teammate, carrying the relation', () => {
    const { container } = stage()
    const spokes = [...container.querySelectorAll('line')]
    expect(spokes).toHaveLength(2)
    expect(spokes.map(spoke => spoke.getAttribute('data-relation'))).toEqual(['peer', 'managed'])
  })

  it('lights the spoke of a member that is working', () => {
    const { container } = stage({}, { running: ['child-2'] })
    const managed = container.querySelector('line[data-relation="managed"]')
    expect(managed?.getAttribute('data-live')).toBe('true')
    expect(container.querySelector('line[data-relation="peer"]')?.getAttribute('data-live')).toBeNull()
  })

  it('lights the spoke of a member that just carried mail', () => {
    const { container } = stage({
      messages: [{ messageId: 'm1', to: 'child-1', kind: 'message', text: 'go', time: 1 }],
    })
    expect(container.querySelector('line[data-relation="peer"]')?.getAttribute('data-live')).toBe('true')
  })

  it('draws the peer channel only once two members can use it', () => {
    const { container } = stage()
    expect(container.querySelector('circle')).toBeNull()
    expect(screen.queryByText(en['stage.peerRing'])).toBeNull()

    cleanup()
    const withPeers = stage({ members: [alice, bob, carol] })
    expect(withPeers.container.querySelector('circle')).toBeTruthy()
    expect(screen.getByText(en['stage.peerRing'])).toBeTruthy()
  })

  it('shows the route a teammate was spawned with, and its role beside it', () => {
    stage()
    expect(screen.getByText('reviewer · Peer')).toBeTruthy()
    expect(screen.getByLabelText('Open the session of Alice').getAttribute('title'))
      .toBe('Alice · reviewer · reasoner · high · Peer')
  })

  it('carries the open work of one member on its own node', () => {
    stage({
      tasks: [
        { taskId: 't1', title: 'review', assigneeId: 'child-1', status: 'active' },
        { taskId: 't2', title: 'ship', assigneeId: 'child-1', status: 'done' },
      ],
    })
    expect(screen.getByLabelText('Open the session of Alice').textContent).toContain('1')
  })

  it('marks the transcript you are reading', () => {
    stage({ currentId: 'child-1' })
    expect(screen.getByLabelText('Open the session of Alice').getAttribute('aria-current')).toBe('true')
    expect(screen.getByLabelText(en['member.openLeader']).getAttribute('aria-current')).toBe('false')
  })

  it('opens a teammate transcript and returns to the leader', () => {
    const openMember = vi.fn()
    const openLeader = vi.fn()
    stage({}, { openMember, openLeader })
    fireEvent.click(screen.getByLabelText('Open the session of Alice'))
    expect(openMember).toHaveBeenCalledWith('leader-1', 'child-1')
    fireEvent.click(screen.getByLabelText(en['member.openLeader']))
    expect(openLeader).toHaveBeenCalledWith('leader-1')
  })
})

describe('mailbox', () => {
  const messages: readonly TeamMessageView[] = [
    { messageId: 'm1', to: 'child-1', kind: 'message', text: 'please review', time: 1_700_000_000_000 },
    { messageId: 'm2', from: 'child-1', kind: 'report', text: 'the review is done', time: 1_700_000_060_000 },
    { messageId: 'm3', from: 'child-2', kind: 'settled', text: 'Bob finished', time: 1_700_000_120_000 },
  ]

  it('puts the leader own sends on the outbound side, naming both ends', () => {
    stage({ messages })
    const outbound = screen.getByText('please review').closest('[data-message-kind]')
    expect(outbound?.getAttribute('data-outbound')).toBe('true')
    expect(outbound?.textContent).toContain(en['member.leader'])
    expect(outbound?.textContent).toContain('Alice')
  })

  it('keeps an inbound bubble on the other side', () => {
    stage({ messages })
    expect(screen.getByText('the review is done').closest('[data-message-kind]')?.getAttribute('data-outbound'))
      .toBeNull()
  })

  it('labels a report and a settlement, but not an ordinary message', () => {
    stage({ messages })
    expect(screen.getByText(en['message.report'])).toBeTruthy()
    expect(screen.getByText(en['message.settled'])).toBeTruthy()
    expect(screen.getByText('please review').closest('[data-message-kind]')?.getAttribute('data-message-kind'))
      .toBe('message')
  })

  it('links a bubble to its member: hovering one focuses the other', () => {
    const { container } = stage({ messages })
    const bubble = screen.getByText('please review').closest('[data-message-kind]')
    expect(bubble).toBeTruthy()
    fireEvent.mouseEnter(bubble as HTMLElement)
    expect(container.querySelector('line[data-relation="peer"]')?.getAttribute('data-focus')).toBe('true')

    fireEvent.mouseLeave(bubble as HTMLElement)
    expect(container.querySelector('line[data-relation="peer"]')?.getAttribute('data-focus')).toBeNull()
  })

  it('falls back to a short id for a sender the roster no longer knows', () => {
    stage({ messages: [{ messageId: 'm9', from: 'child-9-long-id', kind: 'message', text: 'stale', time: 1 }] })
    expect(screen.getByText('stale').closest('[data-message-kind]')?.textContent).toContain('child-')
  })

  it('says so when there is no traffic yet', () => {
    stage()
    expect(screen.getByText(en['stage.noMessages'])).toBeTruthy()
  })
})

describe('task board', () => {
  const tasks: readonly TeamTaskView[] = [
    { taskId: 't1', title: 'review the diff', assigneeId: 'child-1', status: 'active' },
    { taskId: 't2', title: 'write the note', status: 'done', note: 'shipped' },
    { taskId: 't3', title: 'ship it', status: 'pending' },
  ]

  it('sorts every task into its own column', () => {
    const { container } = stage({ tasks })
    const column = (status: string): HTMLElement | null => container.querySelector(`[data-column="${status}"]`)
    expect(column('pending')?.textContent).toContain('ship it')
    expect(column('active')?.textContent).toContain('review the diff')
    expect(column('done')?.textContent).toContain('write the note')
  })

  it('names the assignee from the roster and marks an unassigned row', () => {
    stage({ tasks })
    expect(screen.getByText('review the diff').closest('[data-task-status]')?.textContent).toContain('Alice')
    expect(screen.getByText('ship it').closest('[data-task-status]')?.textContent).toContain(en['task.unassigned'])
  })

  it('carries the status on the card itself, so a done task reads as done', () => {
    stage({ tasks })
    expect(screen.getByText('write the note').closest('[data-task-status]')?.getAttribute('data-task-status'))
      .toBe('done')
  })

  it('keeps the closing note beside the card', () => {
    stage({ tasks })
    expect(screen.getByText('shipped')).toBeTruthy()
  })

  it('says so when there is no task yet', () => {
    stage()
    expect(screen.getByText(en['stage.noTasks'])).toBeTruthy()
  })
})

describe('shared workspace', () => {
  const board: readonly TeamBoardEntryView[] = [
    {
      key: 'api decision', authorId: 'child-1', authorName: 'Alice',
      updatedAt: 1_700_000_000_000, preview: 'we keep v1 of the route',
    },
    {
      key: 'migration list', authorId: 'child-2', authorName: 'Bob',
      updatedAt: 1_700_000_060_000, preview: 'four call sites left',
    },
  ]

  it('shows every note with its author', () => {
    const { container } = stage({ board })
    const note = container.querySelector('[data-note-key="api decision"]')
    expect(note?.textContent).toContain('we keep v1 of the route')
    expect(note?.textContent).toContain('Alice')
    expect(container.querySelector('[data-note-key="migration list"]')?.textContent).toContain('Bob')
  })

  it('says when the snapshot was taken, because a teammate write does not reach it', () => {
    const { container } = stage({ board, boardAt: 1_700_000_120_000 })
    const note = container.querySelector('[data-note-key]')
    expect(note).toBeTruthy()
    expect(screen.getByTitle(en['stage.boardStale'])).toBeTruthy()
  })

  it('links a note to its author: hovering one focuses the member', () => {
    const { container } = stage({ board })
    const note = container.querySelector('[data-note-key="api decision"]')
    fireEvent.mouseEnter(note as HTMLElement)
    expect(container.querySelector('line[data-relation="peer"]')?.getAttribute('data-focus')).toBe('true')
  })

  it('says so, and why it matters, when nothing is written yet', () => {
    stage()
    expect(screen.getByText(en['stage.noNotes'])).toBeTruthy()
    expect(screen.getByText(en['stage.noNotesHint'])).toBeTruthy()
  })
})
