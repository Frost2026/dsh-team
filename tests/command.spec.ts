/**
 * The `/agent-teams` slash command: what it registers, and the steering
 * contract its handler keeps — brief plus goal into the leader's inbox,
 * refusals before any submission.
 *
 * @module dsh-team/tests/command
 */

import { Context } from '@deepseek-ai/cordis'
import type { CommandInvocation, CommandResult } from '@deepseek-ai/dsh-commands'
import { describe, expect, it } from 'vitest'
import { installCommand, teamCommand } from '../src/command.ts'
import { FakeCommands, fakeAgent, type FakeAgent } from './harness.ts'

const signal = new AbortController().signal

/** One command invocation against an agent double; the handler under test is synchronous. */
function invoke(agent: FakeAgent, rawInput: string, attachments: readonly unknown[] = []): CommandResult {
  const handled = teamCommand().handler({
    commandId: 'cmd-1',
    agent: agent.agent,
    rawInput,
    attachments,
    signal,
  } as CommandInvocation)
  expect(handled).not.toBeInstanceOf(Promise)
  return handled as CommandResult
}

describe('registration', () => {
  it('installs exactly one command under `agent-teams`', () => {
    const ctx = new Context()
    const commands = new FakeCommands()
    ctx.provide('commands', commands)
    const dispose = installCommand(ctx)
    expect(commands.registered).toHaveLength(1)
    expect(commands.registered[0]?.name).toBe('agent-teams')
    dispose()
    expect(commands.registered).toHaveLength(0)
  })
})

describe('handler', () => {
  it('steers the brief plus the goal to the leader as one ordinary user message', () => {
    const leader = fakeAgent('leader-1')
    const result = invoke(leader, '  migrate auth to the new SDK  ')
    expect(result).toEqual({ kind: 'success', text: expect.stringContaining('leader') })
    expect(leader.steered).toHaveLength(1)
    const message = leader.steered[0]!
    expect(message.source).toEqual({ kind: 'user' })
    const text = message.content.find(block => block.type === 'text')
    expect(text).toMatchObject({
      text: expect.stringContaining('agent team'),
    })
    expect((text as { text: string }).text).toContain('migrate auth to the new SDK')
  })

  it('refuses a bare invocation without steering anything', () => {
    const leader = fakeAgent('leader-1')
    const result = invoke(leader, '   ')
    expect(result.kind).toBe('error')
    expect(leader.steered).toHaveLength(0)
  })

  it('refuses on a teammate transcript, where no team may be led', () => {
    const member = fakeAgent('child-1', { parent: 'leader-1' })
    const result = invoke(member, 'do something')
    expect(result.kind).toBe('error')
    expect(member.steered).toHaveLength(0)
  })

  it('lets a whitespace-only goal ride on accompanying images alone', () => {
    const leader = fakeAgent('leader-1')
    const image = { type: 'image' }
    const result = invoke(leader, '  ', [image])
    expect(result.kind).toBe('success')
    expect(leader.steered).toHaveLength(1)
    const message = leader.steered[0]!
    expect(message.content[0]).toEqual(image)
    const text = message.content.find(block => block.type === 'text')
    expect(text).toBeDefined()
  })
})
