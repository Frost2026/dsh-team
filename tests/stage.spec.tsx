/**
 * The agent-team stage: the room it seats, the courier it sends, the drawer
 * its ledgers wait behind, and what it asks the plugin body to open.
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

interface MountOptions {
  readonly running?: readonly string[]
  readonly openMember?: (leaderId: string, memberId: string) => void
  readonly openLeader?: (leaderId: string) => void
}

/** Build the stage element over one panel state; kept apart so a test can rerender. */
function element(state: Partial<TeamPanelState>, options: MountOptions = {}) {
  const panel: TeamPanelState = { members: [], tasks: [], messages: [], board: [], ...state } as TeamPanelState
  const props = {
    useTeam: (select: (snapshot: TeamPanelState) => unknown) => select(panel),
    useSessions: (select: (snapshot: SessionListState) => unknown) => select(sessions(options.running)),
    openMember: options.openMember ?? (() => {}),
    openLeader: options.openLeader ?? (() => {}),
    t: translate,
  } as unknown as TeamStageProps
  return <TeamStage {...props} />
}

/** Mount the stage over one panel state. */
function mount(state: Partial<TeamPanelState>, options: MountOptions = {}) {
  return render(element(state, options))
}

/** Mount a full two-teammate team. */
function stage(state: Partial<TeamPanelState> = {}, options: MountOptions = {}) {
  return mount({ leaderId: 'leader-1', currentId: 'leader-1', members: [alice, bob], ...state }, options)
}

/** Open one ledger from the dock on the right edge of the room. */
function openPanel(name: string): void {
  fireEvent.click(screen.getByRole('button', { name }))
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

describe('the room', () => {
  /** One member's place on the floor. */
  function desk(container: HTMLElement, memberId: string): HTMLElement | null {
    return container.querySelector(`[data-desk="${memberId}"]`)
  }

  it('seats the leader and every teammate on the floor', () => {
    stage()
    expect(screen.getByLabelText(en['member.openLeader'])).toBeTruthy()
    expect(screen.getByLabelText('Open the session of Alice')).toBeTruthy()
    expect(screen.getByLabelText('Open the session of Bob')).toBeTruthy()
  })

  it('keeps the leader at a workstation and carries each relation on its own tile', () => {
    const { container } = stage()
    expect(desk(container, 'leader-1')?.getAttribute('data-zone')).toBe('work')
    expect(desk(container, 'leader-1')?.getAttribute('data-relation')).toBe('lead')
    expect(desk(container, 'child-1')?.getAttribute('data-relation')).toBe('peer')
    expect(desk(container, 'child-2')?.getAttribute('data-relation')).toBe('managed')
  })

  it('sends a member mid-turn to a workstation', () => {
    const { container } = stage({}, { running: ['child-2'] })
    expect(desk(container, 'child-2')?.getAttribute('data-zone')).toBe('work')
    expect(desk(container, 'child-1')?.getAttribute('data-zone')).not.toBe('work')
  })

  it('sits a member that was just messaged at a workstation, with the ask on its screen', () => {
    const { container } = stage({
      messages: [{ messageId: 'm1', to: 'child-1', kind: 'message', text: 'review the diff', time: 1 }],
    })
    const alice = desk(container, 'child-1')
    expect(alice?.getAttribute('data-zone')).toBe('work')
    expect(alice?.querySelector('[data-screen]')?.textContent).toContain('review the diff')
  })

  it('sends a whale to the snack bar once its own report is the latest thing it did', () => {
    const { container } = stage({
      messages: [{ messageId: 'm1', from: 'child-1', kind: 'report', text: 'done', time: 1 }],
    })
    expect(desk(container, 'child-1')?.getAttribute('data-zone')).toBe('snack')
  })

  it('parks an idle member with open work in the lounge, and one with none in the pool', () => {
    const { container } = stage({
      tasks: [{ taskId: 't1', title: 'review', assigneeId: 'child-1', status: 'active' }],
    })
    expect(desk(container, 'child-1')?.getAttribute('data-zone')).toBe('lounge')
    expect(desk(container, 'child-2')?.getAttribute('data-zone')).toBe('pool')
  })

  it('gives every seat its own kind of whale', () => {
    const { container } = stage({ members: [alice, bob, carol] })
    const kinds = ['leader-1', 'child-1', 'child-2', 'child-3']
      .map(id => desk(container, id)?.getAttribute('data-species'))
    expect(kinds.every(kind => kind !== null && kind !== undefined)).toBe(true)
    expect(new Set(kinds).size).toBe(4)
  })

  it('furnishes each area with its own props, and the wall with its fittings', () => {
    const { container } = stage()
    for (const prop of ['sofa', 'plant', 'vending', 'buoy', 'ladder', 'whiteboard', 'clock']) {
      expect(container.querySelector(`[data-prop="${prop}"]`), prop).toBeTruthy()
    }
  })

  it('sets a desk with a keyboard, and puts a preset picture on a busy screen', () => {
    const { container } = stage({}, { running: ['child-1'] })
    const busy = desk(container, 'child-1')
    expect(busy?.querySelector('[data-prop="keyboard"]')).toBeTruthy()
    expect(busy?.querySelector('[data-app]')).toBeTruthy()
  })

  it('names the peer channel only once two members can use it', () => {
    stage()
    expect(screen.getByText(en['stage.roomHint'])).toBeTruthy()
    expect(screen.queryByText(en['stage.peerRing'])).toBeNull()

    cleanup()
    stage({ members: [alice, bob, carol] })
    expect(screen.getByText(en['stage.peerRing'])).toBeTruthy()
  })

  it('shows the route a teammate was spawned with, and its role beside it', () => {
    stage()
    expect(screen.getByText('reviewer · Peer')).toBeTruthy()
    expect(screen.getByLabelText('Open the session of Alice').getAttribute('title'))
      .toBe('Alice · reviewer · reasoner · high · Peer')
  })

  it('carries the open work of one member on its own tile', () => {
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

describe('the courier', () => {
  it('carries the newest delivery across the room, in a bubble short enough to read', () => {
    const { container } = stage({
      messages: [
        { messageId: 'm1', to: 'child-1', kind: 'message', text: 'first', time: 1 },
        { messageId: 'm2', from: 'child-1', to: 'child-2', kind: 'message', text: 'take the second half', time: 2 },
      ],
    })
    const courier = container.querySelector('[data-courier]')
    expect(courier?.getAttribute('data-courier')).toBe('m2')
    expect(courier?.getAttribute('data-from')).toBe('child-1')
    expect(courier?.getAttribute('data-to')).toBe('child-2')
    expect(courier?.textContent).toContain('take the second half')
  })

  it('leans both ends of the delivery toward each other', () => {
    const { container } = stage({
      messages: [{ messageId: 'm1', to: 'child-1', kind: 'message', text: 'go', time: 1 }],
    })
    expect(container.querySelector('[data-desk="leader-1"]')?.getAttribute('data-talking')).toBe('from')
    expect(container.querySelector('[data-desk="child-1"]')?.getAttribute('data-talking')).toBe('to')
  })

  it('stays out of the room when the sender is no longer on the roster', () => {
    const { container } = stage({
      messages: [{ messageId: 'm9', from: 'child-9', kind: 'message', text: 'stale', time: 1 }],
    })
    expect(container.querySelector('[data-courier]')).toBeNull()
  })
})

describe('theater mode', () => {
  it('stretches the stage over the whole window on demand, and Esc hands it back', () => {
    const { container } = stage()
    const root = container.querySelector('[data-agent-team-stage]')
    expect(root?.getAttribute('data-wide')).toBeNull()

    fireEvent.click(screen.getByLabelText(en['stage.theater']))
    expect(root?.getAttribute('data-wide')).toBe('true')

    fireEvent.keyDown(window, { key: 'Escape' })
    expect(root?.getAttribute('data-wide')).toBeNull()
  })
})

describe('the drawer', () => {
  const messages: readonly TeamMessageView[] = [
    { messageId: 'm1', to: 'child-1', kind: 'message', text: 'please review', time: 1 },
    { messageId: 'm2', from: 'child-1', kind: 'report', text: 'the review is done', time: 2 },
  ]
  const tasks: readonly TeamTaskView[] = [
    { taskId: 't1', title: 'review the diff', assigneeId: 'child-1', status: 'active' },
    { taskId: 't2', title: 'write the note', status: 'done' },
  ]
  const board: readonly TeamBoardEntryView[] = [
    { key: 'api decision', authorId: 'child-1', authorName: 'Alice', updatedAt: 3, preview: 'keep v1' },
  ]

  it('keeps every ledger tucked behind the dock until asked', () => {
    const { container } = stage({ messages, tasks, board })
    expect(container.querySelector('[data-message-kind]')).toBeNull()
    expect(container.querySelector('[data-column]')).toBeNull()
    expect(container.querySelector('[data-note-key]')).toBeNull()
  })

  it('opens a ledger from its door and closes it from the same door', () => {
    const { container } = stage({ messages })
    openPanel(en['stage.feed'])
    expect(container.querySelector('[data-message-kind]')).toBeTruthy()
    openPanel(en['stage.feed'])
    expect(container.querySelector('[data-message-kind]')).toBeNull()
  })

  it('switches ledgers instead of stacking them', () => {
    const { container } = stage({ messages, tasks })
    openPanel(en['stage.feed'])
    openPanel(en['stage.board'])
    expect(container.querySelector('[data-message-kind]')).toBeNull()
    expect(container.querySelector('[data-column="active"]')?.textContent).toContain('review the diff')
  })

  it('closes from the drawer\'s own close affordance', () => {
    const { container } = stage({ tasks })
    openPanel(en['stage.board'])
    fireEvent.click(screen.getByLabelText(en['drawer.close']))
    expect(container.querySelector('[data-column]')).toBeNull()
  })

  it('counts what waits behind each door', () => {
    stage({ messages, tasks, board })
    expect(screen.getByRole('button', { name: en['stage.feed'] }).textContent).toContain('2')
    expect(screen.getByRole('button', { name: en['stage.workspace'] }).textContent).toContain('1')
    // One of the two tasks is still open; the door counts work, not history.
    expect(screen.getByRole('button', { name: en['stage.board'] }).textContent).toContain('1')
  })

  it('flags the mailbox door while a delivery waits behind it, until it is opened', () => {
    const view = mount({ leaderId: 'leader-1', currentId: 'leader-1', members: [alice, bob], messages })
    const door = () => screen.getByRole('button', { name: en['stage.feed'] })
    expect(door().getAttribute('data-fresh')).toBeNull()

    view.rerender(element({
      leaderId: 'leader-1',
      currentId: 'leader-1',
      members: [alice, bob],
      messages: [...messages, { messageId: 'm3', to: 'child-2', kind: 'message', text: 'next', time: 3 }],
    }))
    expect(door().getAttribute('data-fresh')).toBe('true')

    fireEvent.click(door())
    expect(door().getAttribute('data-fresh')).toBeNull()
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
    openPanel(en['stage.feed'])
    const outbound = screen.getByText('please review').closest('[data-message-kind]')
    expect(outbound?.getAttribute('data-outbound')).toBe('true')
    expect(outbound?.textContent).toContain(en['member.leader'])
    expect(outbound?.textContent).toContain('Alice')
  })

  it('keeps an inbound bubble on the other side', () => {
    stage({ messages })
    openPanel(en['stage.feed'])
    expect(screen.getByText('the review is done').closest('[data-message-kind]')?.getAttribute('data-outbound'))
      .toBeNull()
  })

  it('labels a report and a settlement, but not an ordinary message', () => {
    stage({ messages })
    openPanel(en['stage.feed'])
    expect(screen.getByText(en['message.report'])).toBeTruthy()
    expect(screen.getByText(en['message.settled'])).toBeTruthy()
    expect(screen.getByText('please review').closest('[data-message-kind]')?.getAttribute('data-message-kind'))
      .toBe('message')
  })

  it('links a bubble to its member: hovering one focuses the other', () => {
    const { container } = stage({ messages })
    openPanel(en['stage.feed'])
    const bubble = screen.getByText('please review').closest('[data-message-kind]')
    expect(bubble).toBeTruthy()
    fireEvent.mouseEnter(bubble as HTMLElement)
    expect(container.querySelector('[data-desk="child-1"]')?.getAttribute('data-focus')).toBe('true')

    fireEvent.mouseLeave(bubble as HTMLElement)
    expect(container.querySelector('[data-desk="child-1"]')?.getAttribute('data-focus')).toBeNull()
  })

  it('gives every bubble the author own whale as its portrait', () => {
    stage({ messages })
    openPanel(en['stage.feed'])
    expect(screen.getByText('please review').closest('[data-message-kind]')
      ?.querySelector('[data-cameo-species="blue"]')).toBeTruthy()
    expect(screen.getByText('the review is done').closest('[data-message-kind]')
      ?.querySelector('[data-cameo-species="orca"]')).toBeTruthy()
  })

  it('falls back to a short id for a sender the roster no longer knows', () => {
    stage({ messages: [{ messageId: 'm9', from: 'child-9-long-id', kind: 'message', text: 'stale', time: 1 }] })
    openPanel(en['stage.feed'])
    expect(screen.getByText('stale').closest('[data-message-kind]')?.textContent).toContain('child-')
  })

  it('says so when there is no traffic yet', () => {
    stage()
    openPanel(en['stage.feed'])
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
    openPanel(en['stage.board'])
    const column = (status: string): HTMLElement | null => container.querySelector(`[data-column="${status}"]`)
    expect(column('pending')?.textContent).toContain('ship it')
    expect(column('active')?.textContent).toContain('review the diff')
    expect(column('done')?.textContent).toContain('write the note')
  })

  it('names the assignee from the roster and marks an unassigned row', () => {
    stage({ tasks })
    openPanel(en['stage.board'])
    expect(screen.getByText('review the diff').closest('[data-task-status]')?.textContent).toContain('Alice')
    expect(screen.getByText('ship it').closest('[data-task-status]')?.textContent).toContain(en['task.unassigned'])
  })

  it('carries the status on the card itself, so a done task reads as done', () => {
    stage({ tasks })
    openPanel(en['stage.board'])
    expect(screen.getByText('write the note').closest('[data-task-status]')?.getAttribute('data-task-status'))
      .toBe('done')
  })

  it('keeps the closing note beside the card', () => {
    stage({ tasks })
    openPanel(en['stage.board'])
    expect(screen.getByText('shipped')).toBeTruthy()
  })

  it('says so when there is no task yet', () => {
    stage()
    openPanel(en['stage.board'])
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
    openPanel(en['stage.workspace'])
    const note = container.querySelector('[data-note-key="api decision"]')
    expect(note?.textContent).toContain('we keep v1 of the route')
    expect(note?.textContent).toContain('Alice')
    expect(container.querySelector('[data-note-key="migration list"]')?.textContent).toContain('Bob')
  })

  it('says when the snapshot was taken, because a teammate write does not reach it', () => {
    const { container } = stage({ board, boardAt: 1_700_000_120_000 })
    openPanel(en['stage.workspace'])
    const note = container.querySelector('[data-note-key]')
    expect(note).toBeTruthy()
    expect(screen.getByTitle(en['stage.boardStale'])).toBeTruthy()
  })

  it('links a note to its author: hovering one focuses the member', () => {
    const { container } = stage({ board })
    openPanel(en['stage.workspace'])
    const note = container.querySelector('[data-note-key="api decision"]')
    fireEvent.mouseEnter(note as HTMLElement)
    expect(container.querySelector('[data-desk="child-1"]')?.getAttribute('data-focus')).toBe('true')
  })

  it('says so, and why it matters, when nothing is written yet', () => {
    stage()
    openPanel(en['stage.workspace'])
    expect(screen.getByText(en['stage.noNotes'])).toBeTruthy()
    expect(screen.getByText(en['stage.noNotesHint'])).toBeTruthy()
  })
})
