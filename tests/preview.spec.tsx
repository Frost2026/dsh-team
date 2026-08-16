/**
 * Scratch: render the room into a standalone HTML file, over the REAL theme
 * sheet the web shell links (`ui-theme/styles/design-platform.css`), so what
 * the screenshot shows is what the harness shows. Not a test — deleted once
 * the visual pass is done.
 *
 * @vitest-environment jsdom
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { act, render } from '@testing-library/react'
import { describe, it, vi } from 'vitest'
import type { SessionListState } from '@deepseek-ai/dsh-client-runtime/client'
import type { TeamMemberView, TeamMessageView, TeamTaskView } from '../src/contract.ts'
import { TeamStage, type TeamStageProps, type TeamPanelState } from '../src/client/TeamStage.tsx'
import { Crew, MASKS, accentOf } from '../src/client/crew.tsx'
import { zh, type TeamKey } from '../src/client/locales.ts'

const TOKENS = '/home/huxint/projects/deepseek-harness/packages/client/ui-theme/src/styles/design-platform.css'

function t(key: TeamKey, params?: Record<string, string | number>): string {
  const text = zh[key]
  return params === undefined
    ? text
    : Object.entries(params).reduce((line, [name, value]) => line.replaceAll(`{${name}}`, String(value)), text)
}

const members: readonly TeamMemberView[] = [
  { memberId: 'child-1', name: '研究员', role: '调研与汇报', relation: 'peer', joinedAt: 1 },
  { memberId: 'child-2', name: '程序员', role: '编码与产出', relation: 'peer', joinedAt: 2 },
  { memberId: 'child-3', name: '测试员', role: '验证与审查', relation: 'peer', joinedAt: 3 },
  { memberId: 'child-4', name: '文档员', role: '文档与总结', relation: 'peer', joinedAt: 4 },
]

const tasks: readonly TeamTaskView[] = [
  { taskId: 't1', title: '把折叠的边界情况补全', assigneeId: 'child-2', status: 'active' },
  { taskId: 't2', title: '走查房间几何', assigneeId: 'child-1', status: 'active' },
  { taskId: 't3', title: '写完 README', status: 'done' },
]

const messages: readonly TeamMessageView[] = [
  { messageId: 'm1', to: 'child-1', kind: 'message', text: '去查一下这个 token 是怎么定义的', time: 1_700_000_000_000 },
  { messageId: 'm2', from: 'child-3', kind: 'report', text: '验证完了，两个用例挂了', time: 1_700_000_060_000 },
  { messageId: 'm3', from: 'child-4', kind: 'report', text: '文档已经更新', time: 1_700_000_090_000 },
  { messageId: 'm4', from: 'child-1', to: 'child-2', kind: 'message', text: '这个别名在主题表里根本没有定义', time: 1_700_000_120_000 },
]

function sessions(running: readonly string[]): SessionListState {
  const byId = Object.fromEntries(running.map(id => [id, { id, running: true }]))
  return { ids: [], byId, current: undefined, phase: 'ready', subagentsByParent: {}, jobsBySession: {} } as unknown as SessionListState
}

const panel: TeamPanelState = {
  leaderId: 'leader-1',
  currentId: 'leader-1',
  members,
  tasks,
  messages,
  board: [],
}

/** Vitest's unprocessed CSS-module proxy hands back `_name_hash`; undo it. */
function unhash(html: string): string {
  return html.replace(/_([A-Za-z0-9]+)_[a-z0-9]{5,8}/gu, '$1')
}

function page(html: string, dark: boolean): string {
  const tokens = readFileSync(TOKENS, 'utf8')
  const stage = readFileSync('/home/huxint/projects/dsh-team/src/client/TeamStage.module.css', 'utf8')
  return `<!doctype html><html><head><meta charset="utf-8"><style>
${tokens}
html, body { height: 100%; margin: 0; }
body {
  font-family: system-ui, sans-serif;
  color: var(--dsw-alias-label-primary);
  background: var(--dsw-alias-bg-base);
}
#root { height: 100vh; }
* { animation: none !important; transition: none !important; }
${stage}
</style></head><body${dark ? ' data-ds-dark-theme' : ''}><div id="root">${html}</div></body></html>`
}

describe('preview', () => {
  it('writes the room', () => {
    vi.useFakeTimers()
    try {
      const props = {
        useTeam: (select: (snapshot: TeamPanelState) => unknown) => select(panel),
        useSessions: (select: (snapshot: SessionListState) => unknown) =>
          select(sessions(['child-1', 'child-2'])),
        openMember: () => {},
        openLeader: () => {},
        t,
      } as unknown as TeamStageProps
      const { container } = render(<TeamStage {...props} />)
      act(() => { vi.advanceTimersByTime(4_000) })
      const html = unhash(container.innerHTML)
      writeFileSync('/tmp/room-light.html', page(html, false))
      writeFileSync('/tmp/room-dark.html', page(html, true))
    } finally {
      vi.useRealTimers()
    }
  })

  it('writes the character sheet', () => {
    const cells = MASKS.flatMap((kind, seat) => [false, true].map(back => {
      const { container } = render(
        <div style={accentOf(seat - 1)}>
          <Crew kind={kind} back={back} />
        </div>,
      )
      const html = unhash(container.innerHTML)
      return `<figure><div class="cell"><div class="stage">${html}</div></div><figcaption>${kind}${back ? ' · back' : ''}</figcaption></figure>`
    }))
    writeFileSync('/tmp/crew.html', page(
      `<div class="sheet">${cells.join('')}</div>`,
      false,
    ).replace('#root { height: 100vh; }', `
      #root { height: auto; }
      /* The palette lives on .stage, so the sheet borrows the class and undoes
         only its layout. */
      .stage { display: block !important; height: auto !important; overflow: visible !important; }
      .sheet { display: grid; grid-template-columns: repeat(6, 1fr); gap: 6px; padding: 12px; }
      .cell { height: 250px; display: grid; place-items: center; }
      .cell > div { width: 140px; height: 240px; }
      figure { margin: 0; }
      figcaption { text-align: center; font-size: 11px; color: var(--dsw-alias-label-tertiary); }
    `))
  })
})
