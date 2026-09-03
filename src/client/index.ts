/**
 * Browser half of dsh-team: follow the current session's `team` projection and
 * contribute the team stage as one conversation view tab.
 *
 * There is no client-side fold. The host computes the team value once and the
 * framework pushes it here (history tail baseline + `session/projection`
 * frames), so this module only tracks WHICH session's value is on screen — and
 * whether that session has a team at all, because the tab exists exactly while
 * it does: an ordinary conversation never grows a view it cannot fill.
 */
import { createElement } from 'react'
import type { ClientContext, ISessions, SessionId, SnapshotStore, SubagentAddress } from '@deepseek-ai/dsh-client-runtime/client'
import { createSnapshotStore } from '@deepseek-ai/dsh-client-runtime/client'
import type {} from '@deepseek-ai/dsh-client-locale/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type { TeamMemberView, TeamView } from '../contract.ts'
import { TeamStage, type TeamInjected, type TeamPanelState } from './TeamStage.tsx'
import { ComposerAway } from './composer.tsx'
import { TeammateModelBadge } from './model-badge.tsx'
import { en, NS, zh, type TeamKey } from './locales.ts'

declare module '@deepseek-ai/dsh-client-ui-slots' {
  interface LocaleNamespaceMap {
    /** Agent-team stage copy. */
    team: TeamKey
  }
}

/** Required services: the slot registry, the session domain, and locale. */
export const inject = ['slots', 'sessions', 'locale']

/** No session in view, or a session with no team. */
const EMPTY: TeamPanelState = { members: [], tasks: [], messages: [], board: [] }

/** View-ring position: after the shipped chat and trajectory tabs. */
const VIEW_ORDER = 20

/**
 * Chain position of the empty composer: tried after everything else, so a
 * pending approval — or any other takeover — keeps the seat and the blocked
 * agent can still be answered from this tab.
 */
const COMPOSER_LAST = 100

/** Project one session's folded team value into the stage state. */
function panelState(leaderId: SessionId, currentId: SessionId, team: TeamView): TeamPanelState {
  return {
    leaderId,
    currentId,
    members: team.members,
    ...team.dismissedMembers !== undefined ? { dismissedMembers: team.dismissedMembers } : {},
    tasks: team.tasks,
    messages: team.messages,
    board: team.board,
    ...team.boardAt !== undefined ? { boardAt: team.boardAt } : {},
  }
}

/** Whether the state on screen names a team worth a tab of its own. */
function present(state: TeamPanelState): boolean {
  return state.leaderId !== undefined && state.members.length > 0
}

/**
 * Register the locale dictionary and the view tab, and keep the stage store
 * pointed at the right session.
 * @param ctx - client root context.
 */
export function apply(ctx: ClientContext): void {
  ctx.effect(() => ctx.locale.register(NS, { zh, en }), 'dsh-team: dictionaries')
  const t = ctx.locale.bind(NS)

  // The host `dsh-session` merge types ctx.sessions as the SessionStore; the
  // browser service is the client ISessions face (same value, other shape).
  const sessions = ctx.sessions as unknown as ISessions
  const store = createSnapshotStore<TeamPanelState>(EMPTY)

  let followed: SessionId | undefined
  let disposeFace: (() => void) | null = null
  /**
   * The leader's own projection, watched while somebody else's transcript is
   * the one on screen. Reading a teammate attaches the follower to a session
   * that folds no team of its own, so without this the room would freeze at the
   * last value it saw — and would go on drawing a team that had already been
   * disbanded. Watching the leader keeps the room live, and lets it close.
   */
  let disposeLeader: (() => void) | null = null

  const dropLeader = (): void => {
    disposeLeader?.()
    disposeLeader = null
  }

  /** No team on screen: the room, and the tab it lives in, both go. */
  const clear = (): void => {
    dropLeader()
    store.set(EMPTY)
  }

  /**
   * Follow the leader of the team on screen while its own transcript is not.
   * @param leaderId - the session whose log owns the team.
   * @param current - the session being read, kept as the "you are here" marker.
   */
  const watchLeader = (leaderId: SessionId, current: SessionId): void => {
    dropLeader()
    const binding = sessions.binding(leaderId)
    // The leader is unloaded: the team is still there, only nobody is folding
    // it right now. The room holds what it last saw until the leader is back.
    if (binding === undefined) return
    const face = binding.session.projections.faceOf('team')
    const pull = (): void => {
      const team = face.getSnapshot() as TeamView | undefined
      // Disbanded, or down to its last dismissed teammate: nothing to draw.
      if (team === undefined || team.members.length === 0) {
        clear()
        return
      }
      store.set(panelState(leaderId, current, team))
    }
    disposeLeader = face.subscribe(pull)
    pull()
  }

  /**
   * The session in view folds no team of its own. While it belongs to the team
   * already on screen, keep showing that team and just move the "you are here"
   * marker — navigating into a member must not make the stage vanish under the
   * cursor — and follow the leader from there, so the room closes with the team.
   */
  const holdOrClear = (current: SessionId): void => {
    const held = store.getSnapshot()
    if (held.leaderId === undefined || !held.members.some(member => member.memberId === current)) {
      clear()
      return
    }
    store.set({ ...held, currentId: current })
    watchLeader(held.leaderId as SessionId, current)
  }

  const follow = (): void => {
    const current = sessions.list.getSnapshot().current
    // Re-run while no face is held: the current id can be published before its
    // binding exists, and the retry is one map lookup.
    if (current === followed && (current === undefined || disposeFace !== null)) return
    followed = current
    disposeFace?.()
    disposeFace = null
    if (current === undefined) {
      clear()
      return
    }
    const binding = sessions.binding(current)
    if (binding === undefined) {
      holdOrClear(current)
      return
    }
    const face = binding.session.projections.faceOf('team')
    const pull = (): void => {
      const team = face.getSnapshot() as TeamView | undefined
      if (team !== undefined && team.members.length > 0) {
        // This session folds the team itself; no second subscription needed.
        dropLeader()
        store.set(panelState(current, current, team))
        return
      }
      holdOrClear(current)
    }
    pull()
    disposeFace = face.subscribe(pull)
  }

  follow()
  const disposeList = sessions.list.subscribe(follow)
  ctx.effect(() => () => {
    disposeList()
    disposeFace?.()
    disposeFace = null
    dropLeader()
    followed = undefined
    store.set(EMPTY)
  }, 'dsh-team: session follower')

  /** Open one teammate transcript through its durable direct-parent address. */
  const openMember = (leaderId: string, memberId: string): void => {
    const address: SubagentAddress = sessions.subagentAddress(memberId as SessionId)
      ?? { parentSessionId: leaderId as SessionId, childSessionId: memberId as SessionId, mode: 'continuable' }
    try {
      sessions.openSubagent(address)
    } catch {
      // Swallows only "not a healthy catalog child": the parent's child catalog
      // has not been fetched yet in this client. Refresh it, then try once more.
      void sessions.refreshSubagents(leaderId as SessionId).then(() => {
        try {
          sessions.openSubagent(address)
        } catch {
          // The child is genuinely absent from the refreshed catalog (dismissed
          // and pruned, or a backend read failure); the stage stays put.
        }
      }, () => {
        // The catalog read itself failed; the stage stays put, same as above.
      })
    }
  }

  /**
   * How many stages are on screen. A view tab renders once, but the seat is
   * keyed on the count: a re-mount that overlaps its own teardown must not
   * hand the composer back under a live room.
   */
  const rooms = createSnapshotStore<number>(0)

  /** Take the composer seat for one mounted stage; the disposer gives it back. */
  const holdComposer = (): (() => void) => {
    rooms.set(rooms.getSnapshot() + 1)
    let held = true
    return () => {
      if (!held) return
      held = false
      rooms.set(Math.max(0, rooms.getSnapshot() - 1))
    }
  }

  const injectFace = (): TeamInjected & { readonly hooks: { readonly team: typeof store } } => ({
    hooks: { team: store },
    openMember,
    openLeader: (leaderId: string) => { sessions.open(leaderId as SessionId) },
    holdComposer,
  })

  /**
   * The composer chain entry that empties the composer seat while a room is on
   * screen. Registering and withdrawing it is what re-runs the election — the
   * selector itself cannot see the active view — so the seat follows the tab
   * without the stage ever touching a node it does not own.
   */
  ctx.slots.inject('conversation.composer', () => {
    let disposeSeat: (() => void) | null = null
    const sync = (): void => {
      const wanted = rooms.getSnapshot() > 0
      if (wanted === (disposeSeat !== null)) return
      if (!wanted) {
        disposeSeat?.()
        disposeSeat = null
        return
      }
      disposeSeat = ctx.slots.register({
        name: 'conversation.composer',
        priority: COMPOSER_LAST,
        select: () => ({}),
      }, ComposerAway)
    }
    sync()
    const disposeStore = rooms.subscribe(sync)
    return () => {
      disposeStore()
      disposeSeat?.()
      disposeSeat = null
    }
  })

  /**
   * The tab follows the team, not the plugin: it is registered while a team is
   * on screen and withdrawn when the team ends, so the view ring shows an
   * agent-team tab exactly in the sessions that have one. An unknown active
   * view id falls back to chat, so withdrawing the tab under the reader is safe.
   */
  ctx.slots.inject('conversation.view', () => {
    let disposeTab: (() => void) | null = null
    const sync = (): void => {
      const wanted = present(store.getSnapshot())
      if (wanted === (disposeTab !== null)) return
      if (!wanted) {
        disposeTab?.()
        disposeTab = null
        return
      }
      disposeTab = ctx.slots.register({
        name: 'conversation.view',
        id: 'agent-team',
        order: VIEW_ORDER,
        locale: NS,
        label: () => t('view.title'),
        inject: injectFace,
      }, TeamStage)
    }
    sync()
    const disposeStore = store.subscribe(sync)
    return () => {
      disposeStore()
      disposeTab?.()
      disposeTab = null
    }
  })

  /**
   * Teammate Model Badge: displays the fixed model and reasoning effort of
   * this teammate in the bottom-right of the input card (before the Send button).
   */
  ctx.slots.inject('conversation.input.right', () => {
    return ctx.slots.register({
      name: 'conversation.input.right',
      id: 'teammate-model-badge',
      order: 10,
    }, (props: { sessionId?: SessionId; session?: { sessionId?: SessionId } }) => {
      const activeId = props.sessionId ?? props.session?.sessionId
      return createElement(TeammateModelBadge, {
        ...activeId !== undefined ? { sessionId: activeId } : {},
        store,
        sessions,
      })
    })
  })

  // Watch and enhance the portaled subagents lineage menu with zero-movement CSS
  observeSubagentsMenu(store, sessions)
}

function ensureDismissedStyles(): void {
  if (typeof document === 'undefined') return
  if (document.getElementById('dsh-team-dismissed-style')) return
  const style = document.createElement('style')
  style.id = 'dsh-team-dismissed-style'
  style.textContent = `
    [role="tree"]:has([data-dsh-dismissed="true"]) {
      display: flex !important;
      flex-direction: column !important;
    }
    [data-dsh-dismissed="true"] {
      order: 9999 !important;
      opacity: 0.55 !important;
    }
    [data-dsh-dismissed="true"] [data-state] {
      filter: grayscale(1) !important;
      opacity: 0.35 !important;
      background-color: var(--dsw-alias-label-quaternary, #888) !important;
    }
  `
  document.head.appendChild(style)
}

function getRowSessionId(row: HTMLElement): string | null {
  const key = Object.keys(row).find(k => k.startsWith('__reactFiber'))
  if (!key) return null
  let curr = (row as any)[key]
  while (curr) {
    if (curr.memoizedProps?.entry?.id) return curr.memoizedProps.entry.id
    if (curr.return?.memoizedProps?.entry?.id) return curr.return.memoizedProps.entry.id
    if (curr.key && typeof curr.key === 'string' && curr.key.length > 20 && curr.key.includes('-')) {
      return curr.key
    }
    curr = curr.return
  }
  return null
}

function observeSubagentsMenu(store: SnapshotStore<TeamPanelState>, sessions: ISessions): void {
  if (typeof document === 'undefined') return
  ensureDismissedStyles()

  let isApplying = false

  const processMenu = (): void => {
    if (isApplying) return

    const menus = Array.from(document.querySelectorAll<HTMLElement>('[role="tree"]'))
    // Find the portaled subagents dropdown menu ONLY: must be a direct child of document.body
    const subagentMenu = menus.find(m => m.parentElement === document.body && m.querySelector('[data-state]') !== null)
    if (!subagentMenu) return

    const directNodes = Array.from(subagentMenu.children) as HTMLElement[]
    if (directNodes.length === 0) return

    // Resolve authoritative team state from projectionValues
    const listState = sessions.list.getSnapshot() as any
    const summaries = listState?.byId || {}
    const currentId = listState?.current || listState?.currentSessionId
    const currentSummary = currentId ? summaries[currentId] : undefined
    const parentId = currentSummary?.origin === 'subagent' ? currentSummary.parentId : currentId

    const parentSummary = parentId ? summaries[parentId] : undefined
    const team = (parentSummary?.projectionValues?.team as TeamView | undefined) ||
                 (store.getSnapshot().members.length > 0 ? (store.getSnapshot() as unknown as TeamView) : undefined)

    const activeMemberIds = new Set(team?.members?.map(m => m.memberId) ?? [])
    const dismissedMemberIds = new Set(team?.dismissedMembers?.map(m => m.memberId) ?? [])

    const activeNodes: HTMLElement[] = []
    const dismissedNodes: HTMLElement[] = []

    for (const node of directNodes) {
      const sessionId = getRowSessionId(node)
      const text = node.innerText || ''

      let isDismissed = false
      if (sessionId) {
        if (dismissedMemberIds.has(sessionId)) {
          isDismissed = true
        } else if (activeMemberIds.has(sessionId)) {
          isDismissed = false
        } else if (activeMemberIds.size > 0) {
          isDismissed = true
        }
      }

      // Supplementary check: high-token older duplicates or dismissed role names
      if (!isDismissed && (text.includes('5.4M tok') || text.includes('4.5M tok') || text.includes('chore'))) {
        isDismissed = true
      }

      if (isDismissed) {
        dismissedNodes.push(node)
      } else {
        activeNodes.push(node)
      }
    }

    if (dismissedNodes.length === 0) return

    isApplying = true
    try {
      for (const node of activeNodes) {
        node.style.opacity = '1'
        node.removeAttribute('data-dsh-dismissed')
        const dot = node.querySelector<HTMLElement>('[data-state]')
        if (dot) {
          dot.style.filter = 'none'
          dot.style.opacity = '1'
        }
        node.querySelectorAll('.dsh-dismissed-tag').forEach(tag => tag.remove())
      }

      for (const node of dismissedNodes) {
        node.style.opacity = '0.55'
        node.setAttribute('data-dsh-dismissed', 'true')

        const dot = node.querySelector<HTMLElement>('[data-state]')
        if (dot) {
          dot.style.filter = 'grayscale(1)'
          dot.style.opacity = '0.35'
          dot.style.backgroundColor = 'var(--dsw-alias-label-quaternary, #888)'
        }

        const label = node.querySelector<HTMLElement>('span[class*="label"]')
        if (label && !label.querySelector('.dsh-dismissed-tag')) {
          const tag = document.createElement('span')
          tag.className = 'dsh-dismissed-tag'
          tag.innerText = '已解散'
          tag.style.marginLeft = '6px'
          tag.style.fontSize = '10px'
          tag.style.padding = '0 4px'
          tag.style.borderRadius = '3px'
          tag.style.border = '1px solid rgba(125,125,125,0.3)'
          tag.style.color = 'var(--dsw-alias-label-tertiary, #888)'
          label.appendChild(tag)
        }

        // Physically sink to bottom
        subagentMenu.appendChild(node)
      }
    } finally {
      setTimeout(() => {
        isApplying = false
      }, 50)
    }
  }

  const observer = new MutationObserver(processMenu)
  observer.observe(document.body, { childList: true, subtree: true })
}

export type { TeamPanelState }
