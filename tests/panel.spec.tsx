/**
 * The floating team surface: what the panel shows, what it hides, and what it
 * asks the plugin body to do.
 *
 * @vitest-environment jsdom
 * @module dsh-team/tests/panel
 */

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import type { SessionListState } from '@deepseek-ai/dsh-client-runtime/client'
import type { TeamMemberView, TeamMessageView, TeamTaskView } from '../src/contract.ts'
import { TeamFloating, type TeamFloatingProps, type TeamPanelState } from '../src/client/TeamFloating.tsx'
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

/** Mount the surface over one panel state. */
function mount(state: Partial<TeamPanelState>, options: {
  readonly running?: readonly string[]
  readonly openMember?: (leaderId: string, memberId: string) => void
  readonly openLeader?: (leaderId: string) => void
} = {}) {
  const panel: TeamPanelState = { members: [], tasks: [], messages: [], ...state }
  const props = {
    useTeam: (select: (snapshot: TeamPanelState) => unknown) => select(panel),
    useSessions: (select: (snapshot: SessionListState) => unknown) => select(sessions(options.running)),
    openMember: options.openMember ?? (() => {}),
    openLeader: options.openLeader ?? (() => {}),
    t: translate,
  } as unknown as TeamFloatingProps
  return render(<TeamFloating {...props} />)
}

/** The disclosure control: the floating button itself. */
function fab(): HTMLElement {
  return screen.getByRole('button', { name: en['button.title'] })
}

/** The disclosed panel, or null while it is folded. */
function panel(): HTMLElement | null {
  return screen.queryByRole('region', { name: en['panel.title'] })
}

/** Mount a full team and open its panel. */
function openPanel(state: Partial<TeamPanelState> = {}, options: Parameters<typeof mount>[1] = {}) {
  const view = mount({ leaderId: 'leader-1', currentId: 'leader-1', members: [alice, bob], ...state }, options)
  fireEvent.click(fab())
  return view
}

describe('presence', () => {
  it('renders nothing at all for a session with no team', () => {
    const { container } = mount({})
    expect(container.firstChild).toBeNull()
  })

  it('renders nothing while a leader is known but its roster is empty', () => {
    const { container } = mount({ leaderId: 'leader-1', members: [] })
    expect(container.firstChild).toBeNull()
  })

  it('shows the button with the roster size once a team exists', () => {
    mount({ leaderId: 'leader-1', members: [alice, bob] })
    expect(fab().textContent).toContain('2')
    expect(fab().getAttribute('aria-expanded')).toBe('false')
    expect(panel()).toBeNull()
  })

  it('counts the working teammates on the badge and says so in the header', () => {
    openPanel({}, { running: ['child-1'] })
    expect(fab().textContent).toContain('1')
    expect(fab().getAttribute('aria-expanded')).toBe('true')
    expect(fab().getAttribute('aria-controls')).toBe(panel()?.id)
    expect(screen.getByText('1 working')).toBeTruthy()
  })

  it('reports an all-idle team plainly', () => {
    openPanel()
    expect(screen.getByText(en['panel.idle'])).toBeTruthy()
  })
})

describe('panel', () => {
  it('opens on the button, closes on Escape', () => {
    openPanel()
    expect(panel()).toBeTruthy()
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(panel()).toBeNull()
  })

  it('closes on its own close button too', () => {
    openPanel()
    fireEvent.click(screen.getByLabelText(en['button.close']))
    expect(panel()).toBeNull()
  })

  it('lists the leader and every teammate, counting the leader in', () => {
    openPanel()
    const roster = screen.getByRole('region', { name: en['panel.members'] })
    expect(roster.textContent).toContain('3')
    expect(screen.getByText(en['member.leader'])).toBeTruthy()
    expect(screen.getByText('Alice')).toBeTruthy()
    expect(screen.getByText('Bob')).toBeTruthy()
  })

  it('shows the route a teammate was spawned with', () => {
    openPanel()
    expect(screen.getByText('reviewer · reasoner · high')).toBeTruthy()
  })

  it('marks the transcript you are reading', () => {
    openPanel({ currentId: 'child-1' })
    expect(screen.getByLabelText('Open the session of Alice').getAttribute('aria-current')).toBe('true')
    expect(screen.getByLabelText(en['member.openLeader']).getAttribute('aria-current')).toBe('false')
  })

  it('opens a teammate transcript and returns to the leader', () => {
    const openMember = vi.fn()
    const openLeader = vi.fn()
    openPanel({}, { openMember, openLeader })
    fireEvent.click(screen.getByLabelText('Open the session of Alice'))
    expect(openMember).toHaveBeenCalledWith('leader-1', 'child-1')
    fireEvent.click(screen.getByLabelText(en['member.openLeader']))
    expect(openLeader).toHaveBeenCalledWith('leader-1')
  })

  it('folds itself when the team it was showing ends', () => {
    const { rerender } = mount({ leaderId: 'leader-1', members: [alice] })
    fireEvent.click(fab())
    expect(panel()).toBeTruthy()

    const gone = {
      useTeam: (select: (snapshot: TeamPanelState) => unknown) => select({ members: [], tasks: [], messages: [] }),
      useSessions: (select: (snapshot: SessionListState) => unknown) => select(sessions()),
      openMember: () => {},
      openLeader: () => {},
      t: translate,
    } as unknown as TeamFloatingProps
    rerender(<TeamFloating {...gone} />)
    expect(panel()).toBeNull()
  })
})

describe('tasks', () => {
  const tasks: readonly TeamTaskView[] = [
    { taskId: 't1', title: 'review the diff', assigneeId: 'child-1', status: 'active' },
    { taskId: 't2', title: 'write the note', status: 'done' },
    { taskId: 't3', title: 'ship it', status: 'pending' },
  ]

  it('counts what is still open against the whole list', () => {
    openPanel({ tasks })
    expect(screen.getByRole('region', { name: en['panel.tasks'] }).textContent).toContain('2/3')
  })

  it('names the assignee from the roster and marks an unassigned row', () => {
    openPanel({ tasks })
    expect(screen.getByText('review the diff').closest('[data-task-status]')?.textContent).toContain('Alice')
    expect(screen.getByText('ship it').closest('[data-task-status]')?.textContent).toContain(en['task.unassigned'])
  })

  it('carries the status on the row itself, so a done task reads as done', () => {
    openPanel({ tasks })
    expect(screen.getByText('write the note').closest('[data-task-status]')?.getAttribute('data-task-status'))
      .toBe('done')
  })

  it('says so when there is no task yet', () => {
    openPanel()
    expect(screen.getByText(en['panel.noTasks'])).toBeTruthy()
  })
})

describe('mailbox', () => {
  const messages: readonly TeamMessageView[] = [
    { messageId: 'm1', to: 'child-1', kind: 'message', text: 'please review', time: 1_700_000_000_000 },
    { messageId: 'm2', from: 'child-1', kind: 'report', text: 'the review is done', time: 1_700_000_060_000 },
    { messageId: 'm3', from: 'child-2', kind: 'settled', text: 'Bob finished', time: 1_700_000_120_000 },
  ]

  it('orients every row from the leader point of view', () => {
    openPanel({ messages })
    const outbound = screen.getByText('please review').closest('[data-message-kind]')
    expect(outbound?.textContent).toContain(en['member.leader'])
    expect(outbound?.textContent).toContain('Alice')
  })

  it('labels a report and a settlement, but not an ordinary message', () => {
    openPanel({ messages })
    expect(screen.getByText(en['message.report'])).toBeTruthy()
    expect(screen.getByText(en['message.settled'])).toBeTruthy()
    expect(screen.getByText('please review').closest('[data-message-kind]')?.getAttribute('data-message-kind'))
      .toBe('message')
  })

  it('falls back to a short id for a sender the roster no longer knows', () => {
    openPanel({ messages: [{ messageId: 'm9', from: 'child-9-long-id', kind: 'message', text: 'stale', time: 1 }] })
    expect(screen.getByText('stale').closest('[data-message-kind]')?.textContent).toContain('child-')
  })

  it('says so when there is no traffic yet', () => {
    openPanel()
    expect(screen.getByText(en['panel.noMessages'])).toBeTruthy()
  })
})
