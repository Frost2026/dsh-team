/**
 * The durable fold: what a leader's own log says about its team.
 *
 * These tests are the contract the browser panel and the service both read
 * through, so they assert on the folded VALUE — never on how it was produced.
 *
 * @module dsh-team/tests/fold
 */

import { describe, expect, it } from 'vitest'
import { EMPTY_TEAM_VIEW } from '../src/contract.ts'
import { applyTeamEvent, foldTeam, readFact } from '../src/fold.ts'
import { toolResultEvent, userMessageEvent } from './harness.ts'

const BOUND = 50

const alice = { memberId: 'child-1', name: 'Alice', role: 'reviewer', relation: 'peer', model: 'x', effort: 'high' }
const bob = { memberId: 'child-2', name: 'Bob', relation: 'managed' }

describe('readFact', () => {
  it('narrows every fact arm this plugin writes', () => {
    expect(readFact({ team: 'member-added', member: alice })).toEqual({ team: 'member-added', member: alice })
    expect(readFact({ team: 'member-removed', memberId: 'child-1' })).toEqual({ team: 'member-removed', memberId: 'child-1' })
    expect(readFact({ team: 'ended' })).toEqual({ team: 'ended' })
    expect(readFact({ team: 'task', task: { taskId: 't1', title: 'ship', status: 'pending' } }))
      .toEqual({ team: 'task', task: { taskId: 't1', title: 'ship', status: 'pending' } })
  })

  it('rejects a fact whose required members are missing or ill-typed', () => {
    expect(readFact({ team: 'member-added', member: { memberId: 'child-1' } })).toBeUndefined()
    expect(readFact({ team: 'member-added', member: { ...alice, relation: 'boss' } })).toBeUndefined()
    expect(readFact({ team: 'task', task: { taskId: 't1', title: 'ship', status: 'archived' } })).toBeUndefined()
    expect(readFact({ team: 'message', messageId: 'm1' })).toBeUndefined()
  })

  it('folds an unknown fact kind to nothing instead of corrupting the view', () => {
    expect(readFact({ team: 'member-promoted-to-leader', member: alice })).toBeUndefined()
    expect(readFact('member-added')).toBeUndefined()
    expect(readFact(undefined)).toBeUndefined()
  })
})

describe('foldTeam', () => {
  it('is empty for a log with no team facts', () => {
    expect(foldTeam([], BOUND)).toEqual(EMPTY_TEAM_VIEW)
  })

  it('records the whole member on a settled spawn, stamped with the log time', () => {
    const view = foldTeam([toolResultEvent({ team: 'member-added', member: alice }, { time: 4242 })], BOUND)
    expect(view.active).toBe(true)
    expect(view.members).toEqual([{ ...alice, joinedAt: 4242 }])
  })

  it('ignores a failed call: an errored spawn never joins the roster', () => {
    const view = foldTeam([
      toolResultEvent({ team: 'member-added', member: alice }, { error: { name: 'TeamError', code: 'MAX_TEAMMATES' } }),
    ], BOUND)
    expect(view).toEqual(EMPTY_TEAM_VIEW)
  })

  it('replaces a member in place on update and keeps its join time', () => {
    const view = foldTeam([
      toolResultEvent({ team: 'member-added', member: alice }, { time: 100 }),
      toolResultEvent({ team: 'member-updated', member: { ...alice, relation: 'managed' } }, { time: 900 }),
    ], BOUND)
    expect(view.members).toEqual([{ ...alice, relation: 'managed', joinedAt: 100 }])
  })

  it('drops an update for a member the roster never had', () => {
    const view = foldTeam([toolResultEvent({ team: 'member-updated', member: alice })], BOUND)
    expect(view.members).toEqual([])
  })

  it('removes one member and ends the whole team', () => {
    const events = [
      toolResultEvent({ team: 'member-added', member: alice }),
      toolResultEvent({ team: 'member-added', member: bob }),
    ]
    expect(foldTeam([...events, toolResultEvent({ team: 'member-removed', memberId: 'child-1' })], BOUND).members)
      .toEqual([{ ...bob, joinedAt: expect.any(Number) }])
    const ended = foldTeam([...events, toolResultEvent({ team: 'ended' })], BOUND)
    expect(ended.active).toBe(false)
    expect(ended.members).toEqual([])
  })

  it('lets a spawn after an end restart the team', () => {
    const view = foldTeam([
      toolResultEvent({ team: 'member-added', member: alice }),
      toolResultEvent({ team: 'ended' }),
      toolResultEvent({ team: 'member-added', member: bob }),
    ], BOUND)
    expect(view.active).toBe(true)
    expect(view.members.map(member => member.memberId)).toEqual(['child-2'])
  })

  it('upserts tasks by id', () => {
    const view = foldTeam([
      toolResultEvent({ team: 'task', task: { taskId: 't1', title: 'ship', status: 'pending' } }),
      toolResultEvent({ team: 'task', task: { taskId: 't1', title: 'ship', status: 'done', note: 'merged' } }),
      toolResultEvent({ team: 'task', task: { taskId: 't2', title: 'review', status: 'active', assigneeId: 'child-1' } }),
    ], BOUND)
    expect(view.tasks).toEqual([
      { taskId: 't1', title: 'ship', status: 'done', note: 'merged' },
      { taskId: 't2', title: 'review', status: 'active', assigneeId: 'child-1' },
    ])
  })

  it('records an outbound message with no sender: the leader owns the log', () => {
    const view = foldTeam([
      toolResultEvent({ team: 'message', messageId: 'm1', to: 'child-1', text: 'please review' }, { time: 77 }),
    ], BOUND)
    expect(view.messages).toEqual([
      { messageId: 'm1', to: 'child-1', kind: 'message', text: 'please review', time: 77 },
    ])
  })

  it('records an inbound delivery only when its sender is on the roster', () => {
    const fromAlice = userMessageEvent(
      { kind: 'team-message', form: 'relay', senderSessionId: 'child-1', senderName: 'Alice' },
      'reviewed',
    )
    const fromStranger = userMessageEvent(
      { kind: 'subagent-report', senderSessionId: 'other-session' } as never,
      'unrelated subagent output',
    )
    const view = foldTeam([
      toolResultEvent({ team: 'member-added', member: alice }),
      fromAlice,
      fromStranger,
    ], BOUND)
    expect(view.messages).toEqual([
      { messageId: expect.any(String), from: 'child-1', kind: 'message', text: 'reviewed', time: expect.any(Number) },
    ])
  })

  it('records a teammate report and its settlement notice as distinct kinds', () => {
    const view = foldTeam([
      toolResultEvent({ team: 'member-added', member: alice }),
      userMessageEvent({ kind: 'subagent-report', senderSessionId: 'child-1' } as never, 'the review is done'),
      userMessageEvent(
        { kind: 'subagent-settled', senderSessionId: 'child-1', summary: 'Alice finished' } as never,
        '',
      ),
    ], BOUND)
    expect(view.messages.map(message => [message.kind, message.text])).toEqual([
      ['report', 'the review is done'],
      ['settled', 'Alice finished'],
    ])
  })

  it('keeps the newest rows once the mailbox bound is reached', () => {
    const events = Array.from({ length: 5 }, (_unused, index) =>
      toolResultEvent({ team: 'message', messageId: `m${index}`, to: 'child-1', text: `t${index}` }))
    const view = foldTeam(events, 3)
    expect(view.messages.map(message => message.messageId)).toEqual(['m2', 'm3', 'm4'])
  })
})

describe('applyTeamEvent', () => {
  it('returns the same reference for an event this unit does not own', () => {
    const view = foldTeam([toolResultEvent({ team: 'member-added', member: alice })], BOUND)
    const unrelated = toolResultEvent({ tool: 'bash', exit: 0 })
    expect(applyTeamEvent(view, unrelated, BOUND)).toBe(view)
    expect(applyTeamEvent(view, userMessageEvent({ kind: 'user' } as never, 'hello'), BOUND)).toBe(view)
  })

  it('returns the same reference for a delivery from outside the roster', () => {
    const view = foldTeam([toolResultEvent({ team: 'member-added', member: alice })], BOUND)
    const stray = userMessageEvent(
      { kind: 'team-message', form: 'relay', senderSessionId: 'nobody', senderName: 'Nobody' },
      'hi',
    )
    expect(applyTeamEvent(view, stray, BOUND)).toBe(view)
  })
})
