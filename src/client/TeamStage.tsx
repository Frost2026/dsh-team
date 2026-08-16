/**
 * The agent-team stage: a conversation view tab that draws the team as a room
 * you can look into — every member has a desk of its own with its own computer
 * on it, stands where its live state puts it, and walks the floor to say
 * something to somebody else. The room is the whole tab: while the stage is on
 * screen it holds the composer seat, so nothing is left over the floor; the
 * mailbox, the shared workspace and the task board wait behind a dock of doors
 * on the right edge and open as a glass drawer over the room.
 *
 * Every value it renders is the host's own `team` projection, delivered
 * through the injected store: the browser folds nothing. Geometry comes from
 * the roster alone (no DOM measurement), so the picture is a function of the
 * durable state and nothing else.
 */
import { useEffect, useMemo, useRef, useState, useId } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { StateDot } from '@deepseek-ai/dsh-client-ui-primitives'
import type { PropsLocale, PropsRuntime, SnapshotSelectorHook } from '@deepseek-ai/dsh-client-ui-slots'
import type { SessionId, SessionListState } from '@deepseek-ai/dsh-client-runtime/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {
  TeamBoardEntryView, TeamMemberView, TeamMessageView, TeamTaskStatus, TeamTaskView,
} from '../contract.ts'
import {
  IconTeam16, IconTeamLeader16, IconTeamMailbox16, IconTeamMessage16,
  IconTeamPeer16, IconTeamSend16, IconTeamTask16, IconTeamWorkspace16,
} from './icons.tsx'
import {
  LOUNGE, breakAt, deskOf, poseFor, stationFor, visitAt,
  type Desk, type Point, type Pose, type Post, type Touch,
} from './room.ts'
import { useWalk, type Facing } from './walk.ts'
import { Crew, accentOf, maskOf, outfitOf, shoeOf } from './crew.tsx'
import css from './TeamStage.module.css'

/** What the plugin's session follower publishes to this entry. */
export interface TeamPanelState {
  /** The session whose log owns the team; absent while no team is in view. */
  readonly leaderId?: string
  /** The session currently open, so the stage can mark the one you are reading. */
  readonly currentId?: string
  readonly members: readonly TeamMemberView[]
  readonly tasks: readonly TeamTaskView[]
  readonly messages: readonly TeamMessageView[]
  /** The shared workspace as the leader's log last recorded it. */
  readonly board: readonly TeamBoardEntryView[]
  /** When that snapshot was taken; absent while the leader has never looked. */
  readonly boardAt?: number
}

/** Navigation and chrome the plugin body owns (it holds the client services). */
export interface TeamInjected {
  /** Open one teammate's transcript through its durable parent address. */
  readonly openMember: (leaderId: string, memberId: string) => void
  /** Return to the leader's own conversation. */
  readonly openLeader: (leaderId: string) => void
  /**
   * Take the composer seat for as long as the room is on screen; the returned
   * disposer hands it back. The room is a picture, not a place you type into,
   * and the tab is worth more than the strip of window the input card takes.
   */
  readonly holdComposer?: () => () => void
}

/** Complete view-tab props: the root kit, the locale, and the inject face. */
export type TeamStageProps =
  PropsRuntime<'conversation.view'>
  & PropsLocale<'team'>
  & TeamInjected
  & { readonly useTeam: SnapshotSelectorHook<TeamPanelState> }

type Translate = PropsLocale<'team'>['t']

/** How far back the mailbox counts as "this is what the member is doing now". */
const LIVE_MESSAGES = 4

/** How much of a message one member says out loud while it delivers it. */
const SPEECH_CHARS = 44

/** How much of a message one log row carries. */
const LOG_CHARS = 110

/** How long one delivery keeps its carrier away from its own desk. */
const ERRAND_MS = 9_000

/** The board's columns, left to right. */
const COLUMNS: readonly TeamTaskStatus[] = ['pending', 'active', 'done']

/** Join the non-empty parts of a meta line. */
function meta(...parts: (string | undefined)[]): string {
  return parts.filter(part => part !== undefined && part !== '').join(' · ')
}

/** Wall-clock hh:mm for one mailbox row. */
function clock(time: number): string {
  try {
    return new Date(time).toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit' })
  } catch {
    // Swallows only a RangeError from an out-of-range logged timestamp: a
    // mailbox row must render even when its clock cannot.
    return ''
  }
}

/** The glyph one small avatar carries: the member's first character. */
function initial(name: string): string {
  return [...name][0]?.toUpperCase() ?? '?'
}

/** One line of a message, short enough to read where it is shown. */
function short(text: string, limit: number): string {
  const line = text.replace(/\s+/gu, ' ').trim()
  return [...line].length <= limit ? line : `${[...line].slice(0, limit).join('')}…`
}

/** Stagger the entry animation of a list without hard-coding per-row CSS. */
function stagger(index: number): CSSProperties {
  return { animationDelay: `${Math.min(index, 10) * 30}ms` }
}

/** The three ledgers waiting behind the dock on the right edge of the room. */
type PanelId = 'feed' | 'workspace' | 'tasks'

/** The preset pictures a workstation monitor can show. */
const APPS = ['code', 'chart', 'doc', 'mail', 'grid', 'term'] as const
type AppKind = typeof APPS[number]

/** How many bars each preset picture is drawn from. */
const APP_BARS: Record<AppKind, number> = { code: 5, chart: 5, doc: 4, mail: 3, grid: 4, term: 4 }

/** Which picture one seat's monitor shows; the leader watches the dashboard. */
function appOf(seat: number): AppKind {
  if (seat < 0) return 'chart'
  return APPS[seat % APPS.length] ?? 'code'
}

/** One preset screen picture, drawn from bars alone so the theme owns it. */
function ScreenApp(props: { readonly app: AppKind }) {
  const { app } = props
  return (
    <span className={css.screenApp} data-app={app} aria-hidden>
      {Array.from({ length: APP_BARS[app] }, (_, index) => <i key={index} />)}
    </span>
  )
}

/** A member as a tiny portrait: its own mask in its own accent. */
function Cameo(props: { readonly seat: number | undefined, readonly name: string }) {
  const { seat, name } = props
  if (seat === undefined) return <span className={css.discGlyph}>{initial(name)}</span>
  return (
    <span className={css.cameo} data-cameo-species={maskOf(seat)} style={accentOf(seat)}>
      <Crew kind={maskOf(seat)} className={css.cameoCrew} portrait />
    </span>
  )
}

/** Where one thing stands on the floor, and how big it draws there. */
function at(post: Post | Point, scale: number): CSSProperties {
  return {
    left: `${post.x}%`,
    top: `${post.y}%`,
    // Depth rides a variable rather than an inline z-index: an inline z-index
    // would outrank the stylesheet and pin a hovered member under its desk.
    '--team-depth': Math.round(post.y),
    '--team-scale': scale,
  } as CSSProperties
}

/** Stagger each chair's occasional settle, so the office does not bounce in unison. */
function chairDelay(seat: number): CSSProperties {
  return { '--team-chair-delay': `${-((seat + 1) % 5) * 1.35}s` } as CSSProperties
}

/**
 * The delivery currently being carried across the room. One message keeps its
 * carrier away from its own desk for a while and then lets it walk back: the
 * room shows what just happened, not the whole history at once.
 * @param latest - the newest mailbox row.
 * @returns the row while its errand is running.
 */
function useVisit(latest: TeamMessageView | undefined): TeamMessageView | undefined {
  const [live, setLive] = useState<string | undefined>(undefined)
  // A settlement is the runtime's own account of an activation ending; nobody
  // walks across the room to deliver it.
  const id = latest !== undefined && latest.kind !== 'settled' ? latest.messageId : undefined
  useEffect(() => {
    if (id === undefined) return undefined
    setLive(id)
    const timer = setTimeout(() => { setLive(undefined) }, ERRAND_MS)
    return () => { clearTimeout(timer) }
  }, [id])
  return live !== undefined && live === id ? latest : undefined
}

/**
 * The team stage. Rendered as one conversation view tab, so it exists only
 * while the surrounding session has a team — an ordinary conversation never
 * grows a tab it cannot fill.
 */
export function TeamStage(props: TeamStageProps) {
  const { useTeam, useSessions, openMember, openLeader, holdComposer, t } = props
  const state = useTeam(snapshot => snapshot)
  const sessions: SessionListState = useSessions(snapshot => snapshot)
  /** The member the pointer is over, anywhere on the stage. */
  const [focus, setFocus] = useState<string | undefined>(undefined)
  /** Which ledger the drawer is showing; the room stands alone by default. */
  const [panel, setPanel] = useState<PanelId | undefined>(undefined)

  const { leaderId, currentId, members, tasks, messages, board, boardAt } = state
  const visit = useVisit(messages[messages.length - 1])

  // The room is the whole tab: the composer seat stays ours until the reader
  // leaves this view, and the plugin body gives it straight back.
  useEffect(() => holdComposer?.(), [holdComposer])

  const running = useMemo(
    () => new Set(members
      .filter(member => sessions.byId[member.memberId as SessionId]?.running === true)
      .map(member => member.memberId)),
    [members, sessions.byId],
  )

  /** The last thing the visible mailbox tail says about each member. */
  const touched = useMemo(() => {
    const out = new Map<string, Touch>()
    for (const message of messages.slice(-LIVE_MESSAGES)) {
      if (message.from !== undefined) out.set(message.from, message.kind === 'message' ? 'sent' : 'reported')
      if (message.to !== undefined) out.set(message.to, 'got')
    }
    return out
  }, [messages])

  /** Mail counted as read: everything that had arrived when the feed was last open. */
  const seenMessages = useRef(messages.length)
  useEffect(() => {
    if (panel === 'feed') seenMessages.current = messages.length
  }, [panel, messages.length])
  const freshMail = panel !== 'feed' && messages.length > seenMessages.current

  if (leaderId === undefined || members.length === 0) {
    return (
      <div className={css.stage} data-agent-team-stage>
        <p className={css.blankTitle}>{t('stage.noTeam')}</p>
        <p className={css.blankHint}>{t('stage.noTeamHint')}</p>
      </div>
    )
  }

  const names = new Map<string, string>([[leaderId, t('member.leader')]])
  for (const member of members) names.set(member.memberId, member.name)
  /** Roster seat per member id, so the ledgers can draw the same cast. */
  const seats = new Map<string, number>([[leaderId, -1]])
  members.forEach((member, index) => seats.set(member.memberId, index))
  const openOf = (memberId: string): number =>
    tasks.filter(task => task.assigneeId === memberId && task.status !== 'done').length

  // The leader takes the first desk and every teammate the next, in roster
  // order — a member keeps the same desk for as long as it is on the team.
  const roster = [leaderId, ...members.map(member => member.memberId)]
  const desks = new Map<string, Desk>(roster.map((id, index) => [id, deskOf(index, roster.length)]))

  /** Where each member is standing right now: its own desk, or the break corner. */
  const homes = new Map<string, Post>()
  /** Who is away from its own desk, so the desk can be drawn empty. */
  const away = new Set<string>()
  let breaks = 0
  for (const id of roster) {
    const desk = desks.get(id) ?? deskOf(0, roster.length)
    const station = id === leaderId
      ? 'desk'
      : stationFor(running.has(id), touched.get(id), openOf(id))
    if (station === 'break') away.add(id)
    homes.set(id, station === 'break' ? breakAt(breaks++) : desk)
  }

  const peers = members.filter(member => member.relation === 'peer')
  const openTasks = tasks.filter(task => task.status !== 'done').length
  const leaderRunning = sessions.byId[leaderId as SessionId]?.running === true

  /** The delivery on its feet: who carries it, to whom, and where they meet. */
  const errand = errandOf(visit, leaderId, homes)
  const spotOf = (id: string): Point => {
    if (errand !== undefined && errand.fromId === id) return errand.meet
    return homes.get(id) ?? { x: 50, y: 50 }
  }
  /** Which way the two ends of a delivery turn while they talk. */
  const turnOf = (id: string): Facing | undefined => {
    if (errand === undefined) return undefined
    if (errand.fromId === id) return errand.meet.x < errand.host.x ? 'right' : 'left'
    if (errand.toId === id) return errand.meet.x < errand.host.x ? 'left' : 'right'
    return undefined
  }

  const toggle = (id: PanelId): void => { setPanel(current => current === id ? undefined : id) }
  const titleOf = (id: PanelId): string =>
    id === 'feed' ? t('stage.feed') : id === 'workspace' ? t('stage.workspace') : t('stage.board')

  const tileOf = (id: string, seat: number, member?: TeamMemberView) => {
    const desk = desks.get(id) ?? deskOf(0, roster.length)
    const home = homes.get(id) ?? desk
    const live = seat < 0 ? leaderRunning : running.has(id)
    const name = member?.name ?? t('member.leader')
    return (
      <MemberTile
        key={id}
        id={id}
        name={name}
        seat={seat}
        home={home}
        spot={spotOf(id)}
        scale={home.scale}
        relation={member?.relation ?? 'lead'}
        role={member?.role}
        current={currentId === id}
        running={live}
        pose={poseFor(live, touched.get(id), openOf(id))}
        away={away.has(id)}
        focused={focus === id}
        talking={errand === undefined ? undefined : errand.fromId === id ? 'from' : errand.toId === id ? 'to' : undefined}
        turn={turnOf(id)}
        speech={errand !== undefined && errand.fromId === id ? short(errand.message.text, SPEECH_CHARS) : undefined}
        tasks={openOf(id)}
        label={member === undefined ? t('member.openLeader') : t('member.open', { name })}
        title={member === undefined
          ? t('member.leader')
          : meta(
            member.name,
            member.role,
            member.model,
            member.effort,
            member.relation === 'peer' ? t('relation.peer') : t('relation.managed'),
          )}
        onOpen={() => {
          if (member === undefined) openLeader(leaderId)
          else openMember(leaderId, id)
        }}
        onFocus={setFocus}
        t={t}
      />
    )
  }

  return (
    <div className={css.stage} data-agent-team-stage>
      <header className={css.bar}>
        <span className={css.barTitle}>
          <IconTeam16 size={15} className={css.barIcon} />
          {t('stage.title')}
        </span>
        <span className={css.barHint}>
          <IconTeamPeer16 size={13} />
          {peers.length > 1 ? t('stage.peerRing') : t('stage.roomHint')}
        </span>
        <span className={css.barStats}>
          <span className={css.stat}>{t('stage.members', { count: members.length + 1 })}</span>
          <span className={`${css.stat} ${running.size > 0 ? css.statLive : ''}`}>
            {running.size > 0 ? t('stage.running', { count: running.size }) : t('stage.idle')}
          </span>
          {tasks.length > 0 && (
            <span className={css.stat}>{t('stage.tasks', { open: openTasks, total: tasks.length })}</span>
          )}
        </span>
      </header>

      <div className={css.scene}>
        <section className={css.roomPane} aria-label={t('stage.room')}>
          <div className={css.floor}>
            <span className={css.wall} aria-hidden>
              <span className={css.window} data-prop="window" />
              <span className={css.window} data-prop="window" />
              <span className={css.whiteboard} data-prop="whiteboard" />
              <span className={css.clockProp} data-prop="clock" />
              <span className={css.shelf} data-prop="shelf" />
            </span>

            <div
              className={css.lounge}
              aria-hidden
              style={{ left: `${LOUNGE.x}%`, top: `${LOUNGE.y}%`, width: `${LOUNGE.w}%`, height: `${LOUNGE.h}%` }}
            >
              <span className={css.rug} data-prop="rug" />
              <span className={css.sofa} data-prop="sofa" />
              <span className={css.table} data-prop="table" />
              <span className={css.lamp} data-prop="lamp" />
              <span className={css.plant} data-prop="plant" />
              <span className={css.cooler} data-prop="cooler" aria-hidden>
                <CoolerFigure />
              </span>
            </div>

            {roster.map((id, index) => {
              const seat = index - 1
              const desk = desks.get(id) ?? deskOf(index, roster.length)
              const live = seat < 0 ? leaderRunning : running.has(id)
              return (
                <Workstation
                  key={`desk-${id}`}
                  id={id}
                  desk={desk}
                  seat={seat}
                  pose={poseFor(live, touched.get(id), openOf(id))}
                  line={screenLineOf(id, tasks, messages)}
                  empty={away.has(id) || (errand !== undefined && errand.fromId === id)}
                  t={t}
                />
              )
            })}

            {roster.map((id, index) => tileOf(id, index - 1, members[index - 1]))}
          </div>
        </section>

        <nav className={css.dock} aria-label={t('stage.dock')}>
          <DockButton
            id="feed"
            label={t('stage.feed')}
            count={messages.length}
            active={panel === 'feed'}
            fresh={freshMail}
            onToggle={toggle}
          >
            <IconTeamMailbox16 size={15} />
          </DockButton>
          <DockButton
            id="workspace"
            label={t('stage.workspace')}
            count={board.length}
            active={panel === 'workspace'}
            fresh={false}
            onToggle={toggle}
          >
            <IconTeamWorkspace16 size={15} />
          </DockButton>
          <DockButton
            id="tasks"
            label={t('stage.board')}
            count={openTasks}
            active={panel === 'tasks'}
            fresh={false}
            onToggle={toggle}
          >
            <IconTeamTask16 size={15} />
          </DockButton>
        </nav>

        {panel !== undefined && (
          <aside className={css.drawer} data-panel={panel} aria-label={titleOf(panel)}>
            <header className={css.drawerHead}>
              <h3 className={css.paneTitle}>
                {panel === 'feed' && <IconTeamMailbox16 size={13} />}
                {panel === 'workspace' && <IconTeamWorkspace16 size={13} />}
                {panel === 'tasks' && <IconTeamTask16 size={13} />}
                {titleOf(panel)}
                {panel === 'workspace' && boardAt !== undefined && (
                  <span className={css.paneNote} title={t('stage.boardStale')}>
                    {t('stage.boardAt', { time: clock(boardAt) })}
                  </span>
                )}
              </h3>
              <button
                type="button"
                className={css.drawerClose}
                onClick={() => { setPanel(undefined) }}
                aria-label={t('drawer.close')}
              >
                ×
              </button>
            </header>
            <div className={css.drawerBody}>
              {panel === 'feed' && (
                <MessageFeed
                  roster={roster.map((id, index) => ({
                    id,
                    name: names.get(id) ?? id,
                    seat: index - 1,
                    running: index === 0 ? leaderRunning : running.has(id),
                    open: openOf(id),
                  }))}
                  messages={messages}
                  names={names}
                  seats={seats}
                  leaderLabel={t('member.leader')}
                  focus={focus}
                  onFocus={setFocus}
                  t={t}
                />
              )}
              {panel === 'workspace' && (
                board.length === 0
                  ? (
                    <>
                      <p className={css.empty}>{t('stage.noNotes')}</p>
                      <p className={css.emptyHint}>{t('stage.noNotesHint')}</p>
                    </>
                  )
                  : (
                    <div className={css.notes}>
                      {board.map((entry, index) => (
                        <NoteCard
                          key={entry.key}
                          entry={entry}
                          index={index}
                          seats={seats}
                          focus={focus}
                          onFocus={onFocus => { setFocus(onFocus) }}
                        />
                      ))}
                    </div>
                  )
              )}
              {panel === 'tasks' && (
                tasks.length === 0
                  ? <p className={css.empty}>{t('stage.noTasks')}</p>
                  : (
                    <div className={css.columns}>
                      {COLUMNS.map(status => (
                        <TaskColumn
                          key={status}
                          status={status}
                          tasks={tasks.filter(task => task.status === status)}
                          names={names}
                          seats={seats}
                          focus={focus}
                          onFocus={setFocus}
                          t={t}
                        />
                      ))}
                    </div>
                  )
              )}
            </div>
          </aside>
        )}
      </div>
    </div>
  )
}

/** One door on the dock: an icon, a count of what waits behind it, a pulse for news. */
function DockButton(props: {
  readonly id: PanelId
  readonly label: string
  readonly count: number
  readonly active: boolean
  readonly fresh: boolean
  readonly onToggle: (id: PanelId) => void
  readonly children: ReactNode
}) {
  const { id, label, count, active, fresh, onToggle, children } = props
  return (
    <button
      type="button"
      className={css.dockButton}
      aria-label={label}
      title={label}
      aria-pressed={active}
      data-panel-id={id}
      data-fresh={fresh ? 'true' : undefined}
      onClick={() => { onToggle(id) }}
    >
      {children}
      {count > 0 && <span className={css.dockCount}>{count > 99 ? '99+' : count}</span>}
    </button>
  )
}

/** One delivery being carried across the room. */
interface Errand {
  readonly message: TeamMessageView
  readonly fromId: string
  readonly toId: string
  /** Where the recipient is standing. */
  readonly host: Post
  /** Where the carrier stops to talk. */
  readonly meet: Point
}

/**
 * The delivery in flight as an errand between two members. Absent when either
 * end is off the roster (a dismissed sender) or when nobody had to move.
 */
function errandOf(
  message: TeamMessageView | undefined,
  leaderId: string,
  homes: ReadonlyMap<string, Post>,
): Errand | undefined {
  if (message === undefined) return undefined
  const fromId = message.from ?? leaderId
  const toId = message.to ?? leaderId
  const from = homes.get(fromId)
  const host = homes.get(toId)
  if (from === undefined || host === undefined || fromId === toId) return undefined
  return { message, fromId, toId, host, meet: visitAt(host, from.x) }
}

/**
 * What one member's monitor is showing: the task it is on, or the last thing
 * that was said to it. A screen with nothing on it is a screen switched off.
 */
function screenLineOf(
  memberId: string,
  tasks: readonly TeamTaskView[],
  messages: readonly TeamMessageView[],
): string | undefined {
  const active = tasks.find(task => task.assigneeId === memberId && task.status === 'active')
    ?? tasks.find(task => task.assigneeId === memberId && task.status !== 'done')
  if (active !== undefined) return short(active.title, 34)
  const inbound = [...messages].reverse().find(message => message.to === memberId)
  return inbound === undefined ? undefined : short(inbound.text, 34)
}

/** A water cooler drawn as one SVG: the bottle and the cabinet share real
 *  edges and their own gradients, so the corner prop stays crisp at any size. */
function CoolerFigure() {
  const uid = useId().replaceAll(':', '')
  return (
    <svg className={css.coolerSvg} viewBox="0 0 64 96" aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${uid}-cabinet`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--team-cooler-lit)' }} />
          <stop offset="0.2" style={{ stopColor: 'var(--team-cooler)' }} />
          <stop offset="0.82" style={{ stopColor: 'var(--team-cooler)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-cooler-dark)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-bottle`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--team-cooler-bottle-dark)' }} />
          <stop offset="0.35" style={{ stopColor: 'var(--team-cooler-bottle)' }} />
          <stop offset="0.7" style={{ stopColor: 'var(--team-cooler-bottle-lit)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-cooler-bottle-dark)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-water`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--team-cooler-water-lit)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-cooler-water)' }} />
        </linearGradient>
      </defs>
      <path className={css.coolerShadow} d="M12 88 C20 95 44 95 52 88 L52 91 C44 97 20 97 12 91 Z" />
      <path
        className={css.coolerCabinet}
        d="M10 46 H54 V85 Q54 90 49.5 90 H14.5 Q10 90 10 85 Z"
        fill={`url(#${uid}-cabinet)`}
      />
      <path className={css.coolerCabinetTop} d="M10 46 H54 V52 Q54 54 52 54 H12 Q10 54 10 52 Z" />
      <path className={css.coolerCabinetEdge} d="M10 46 H54 V85 Q54 90 49.5 90 H14.5 Q10 90 10 85 Z" />
      <path className={css.coolerPanel} d="M15 58 H49 V82 H15 Z" />
      <path className={css.coolerDoorSeam} d="M32 58 V82" />
      <path className={css.coolerTap} d="M21 61 H31 M33 61 H43" />
      <circle className={css.coolerHandleWarm} cx="26" cy="58" r="2" />
      <circle className={css.coolerHandleCool} cx="38" cy="58" r="2" />
      <path className={css.coolerDrip} d="M15 84 H49 V87.5 H15 Z" />
      <path
        className={css.coolerBottle}
        d="M18 46 C18 31 21.5 19 27 12 L37 12 C42.5 19 46 31 46 46 Z"
        fill={`url(#${uid}-bottle)`}
      />
      <path
        className={css.coolerWater}
        d="M20 46 C20 33.5 22.8 22 27.3 16.5 L36.7 16.5 C41.2 22 44 33.5 44 46 Z"
        fill={`url(#${uid}-water)`}
      />
      <path
        className={css.coolerNeck}
        d="M27 12 L27 4.5 C27 3 28 2 29.5 2 L34.5 2 C36 2 37 3 37 4.5 L37 12 Z"
        fill={`url(#${uid}-bottle)`}
      />
      <rect className={css.coolerCap} x="24" y="0" width="16" height="5" rx="1.8" />
      <path className={css.coolerShine} d="M21.5 44 C21.5 32.5 24.3 21.5 29 15 C26.2 21 23.5 30.5 23.5 44 Z" />
      <circle className={css.coolerBubble} cx="27" cy="32" r="0.9" />
      <circle className={css.coolerBubble} cx="36" cy="37" r="1.1" />
      <circle className={css.coolerBubble} cx="31" cy="27" r="0.7" />
    </svg>
  )
}

/** A chair seen from behind: one SVG, because a chair this small needs real
 *  edges — a curved backrest shell, a mesh panel, a lumbar pad, a spine
 *  bracket, a gas lift, and a five-star base with casters. */
function ChairFigure() {
  const uid = useId().replaceAll(':', '')
  return (
    <svg className={css.chairSvg} viewBox="0 0 64 95" aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${uid}-shell`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--team-chair-lit)' }} />
          <stop offset="0.55" style={{ stopColor: 'var(--team-chair)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-chair-dark)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-mesh`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'color-mix(in srgb, var(--team-chair-lit) 58%, transparent)' }} />
          <stop offset="1" style={{ stopColor: 'color-mix(in srgb, var(--team-chair) 42%, transparent)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-lift`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--team-chair-dark)' }} />
          <stop offset="0.35" style={{ stopColor: 'var(--team-chair-lit)' }} />
          <stop offset="0.65" style={{ stopColor: 'var(--team-chair)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-chair-dark)' }} />
        </linearGradient>
      </defs>
      <g className={css.chairRide}>
        {/* The chrome piston rides with the upper chair, so the chair
            telescopes out of the fixed gas lift instead of bouncing whole. */}
        <rect className={css.chairPiston} x="30.5" y="65" width="3" height="23" rx="1.5" />
        <path
          className={css.chairShell}
          d="M12 12 C12 4 20 1.5 32 1.5 C44 1.5 52 4 52 12 L52 44 C52 51 45 53.5 32 53.5 C19 53.5 12 51 12 44 Z"
          fill={`url(#${uid}-shell)`}
        />
        <path
          className={css.chairShellEdge}
          d="M12 12 C12 4 20 1.5 32 1.5 C44 1.5 52 4 52 12 L52 44 C52 51 45 53.5 32 53.5 C19 53.5 12 51 12 44 Z"
        />
        <path
          className={css.chairMesh}
          d="M18 14 C18 10.5 23 8 32 8 C41 8 46 10.5 46 14 L46 40 C46 45.5 40 47.5 32 47.5 C24 47.5 18 45.5 18 40 Z"
          fill={`url(#${uid}-mesh)`}
        />
        <path className={css.chairMeshLine} d="M19 17 L45 17 M19 22 L45 22 M19 27 L45 27 M19 32 L45 32 M19 37 L45 37 M19 42 L45 42" />
        <path className={css.chairLumbar} d="M20 30 C24 27.5 40 27.5 44 30 L44 37 C40 40 24 40 20 37 Z" fill={`url(#${uid}-shell)`} />
        <path className={css.chairSpine} d="M27 52 L37 52 L34.5 63 L29.5 63 Z" />
        <rect className={css.chairMechanism} x="24" y="62" width="16" height="6" rx="2.5" />
      </g>
      <rect className={css.chairLift} x="30" y="68" width="4" height="15" rx="2" fill={`url(#${uid}-lift)`} />
      <ellipse className={css.chairHub} cx="32" cy="86" rx="6.5" ry="3" />
      <g className={css.chairSpokes}>
        <path d="M32 85 L7 92" />
        <path d="M32 85 L18 94.5" />
        <path d="M32 85 L46 94.5" />
        <path d="M32 85 L57 92" />
        <path d="M32 85 L32 95" />
      </g>
      <g className={css.chairCasters}>
        <circle cx="7" cy="92" r="2.4" />
        <circle cx="18" cy="94.5" r="2.4" />
        <circle cx="46" cy="94.5" r="2.4" />
        <circle cx="57" cy="92" r="2.4" />
        <circle cx="32" cy="95" r="2.4" />
      </g>
    </svg>
  )
}

/**
 * One workstation: the desk, the computer on it, the keyboard and the mug. It
 * belongs to the member whose desk it is and stays furnished while its owner
 * is away — a member walks off, its screen keeps working.
 */
function Workstation(props: {
  readonly id: string
  readonly desk: Desk
  readonly seat: number
  readonly pose: Pose
  readonly line: string | undefined
  /** Whether the owner is somewhere else right now. */
  readonly empty: boolean
  readonly t: Translate
}) {
  const { id, desk, seat, pose, line, empty, t } = props
  const screen = pose === 'working' ? 'working' : line !== undefined ? 'reading' : 'off'
  return (
    <>
      <div
        className={css.desk}
        style={{ ...at(desk, desk.scale), ...accentOf(seat) }}
        data-desk={id}
        data-screen={screen}
        data-empty={empty ? 'true' : undefined}
        aria-hidden
      >
        <span className={css.deskTop} data-prop="desk" />
        <span className={css.monitor} data-prop="monitor" title={line}>
          {/* The machine is never blank: an idle seat still shows its own
              preset picture, only dimmer. A dark rectangle would read as a
              broken screen rather than as a member with nothing to do. */}
          <span className={css.screen}>
            <ScreenApp app={appOf(seat)} />
            <span className={css.screenText}>{line ?? t('screen.working')}</span>
            <span className={css.glare} />
          </span>
          <span className={css.neck} />
          <span className={css.base} />
        </span>
        {/* Drawn after the computer, because they sit on the near edge of the
            desk while it stands at the back of it. */}
        <span className={css.keyboard} data-prop="keyboard" />
        <span className={css.mug} data-prop="mug" />
        <span className={css.papers} data-prop="papers" />
      </div>
      {/* The chair is the nearest layer at the seat: the backrest reads in
          front of the member, and the SVG keeps its edges crisp at any size. */}
      <span
        className={css.chair}
        style={{ ...at(desk, desk.scale), ...chairDelay(seat) }}
        data-chair={id}
        data-prop="chair"
        aria-hidden
      >
        <ChairFigure />
      </span>
    </>
  )
}

/** One member of the team, standing — or walking — where its own state puts it. */
function MemberTile(props: {
  readonly id: string
  readonly name: string
  readonly seat: number
  readonly home: Post
  readonly spot: Point
  readonly scale: number
  readonly relation: 'peer' | 'managed' | 'lead'
  readonly role: string | undefined
  readonly current: boolean
  readonly running: boolean
  readonly pose: Pose
  /** Whether the member is away from its own desk. */
  readonly away: boolean
  readonly focused: boolean
  readonly talking: 'from' | 'to' | undefined
  readonly turn: Facing | undefined
  readonly speech: string | undefined
  readonly tasks: number
  readonly label: string
  readonly title: string
  readonly onOpen: () => void
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const {
    id, name, seat, home, spot, scale, relation, role, current, running, pose, away,
    focused, talking, turn, speech, tasks, label, title, onOpen, onFocus, t,
  } = props
  const walk = useWalk(home, spot)
  const mask = maskOf(seat)
  const outfit = outfitOf(seat)
  const shoes = shoeOf(seat)
  // At its own desk a member faces its own computer, so you see it from
  // behind; on its feet or away from its desk it turns back around.
  const back = !walk.walking && !away && talking === undefined
  const relationLabel = relation === 'lead'
    ? undefined
    : relation === 'peer' ? t('relation.peer') : t('relation.managed')
  return (
    <button
      type="button"
      className={css.person}
      style={{
        ...at(walk, scale),
        ...accentOf(seat),
        ...stagger(seat + 1),
        transitionDuration: `${walk.ms}ms`,
      }}
      onClick={onOpen}
      onMouseEnter={() => { onFocus(id) }}
      onMouseLeave={() => { onFocus(undefined) }}
      aria-label={label}
      aria-current={current}
      title={title}
      data-member={id}
      data-relation={relation}
      data-species={mask}
      data-pose={pose}
      data-away={away ? 'true' : undefined}
      data-walk={walk.walking ? 'true' : undefined}
      data-facing={walk.walking ? walk.facing : turn ?? (back ? 'back' : 'front')}
      data-running={running ? 'true' : undefined}
      data-focus={focused ? 'true' : undefined}
      data-talking={talking}
    >
      {speech !== undefined && !walk.walking && (
        <span className={css.speech} data-speech={id}>{speech}</span>
      )}
      {talking === 'to' && !walk.walking && <span className={css.listening} aria-hidden>···</span>}
      {pose === 'idle' && !away && talking === undefined && <span className={css.doze} aria-hidden>zZ</span>}

      <span className={css.body}>
        <Crew kind={mask} back={back} outfit={outfit} shoes={shoes} className={css.figure} />
        {relation === 'lead' && (
          <span className={css.crown} aria-hidden>
            <IconTeamLeader16 size={12} />
          </span>
        )}
        {tasks > 0 && <span className={css.load}>{tasks}</span>}
      </span>

      <span className={css.plate}>
        <span className={css.plateName}>{name}</span>
        {(role !== undefined || relationLabel !== undefined) && (
          <span className={css.plateMeta}>{meta(role, relationLabel)}</span>
        )}
      </span>
      <span className={css.state} title={t(running ? 'status.running' : 'status.idle')}>
        <StateDot state={running ? 'ongoing' : 'done'} size={6} />
      </span>
    </button>
  )
}

/** One member's line in the roster strip: what it is doing, and its latest word. */
interface CrewRow {
  readonly id: string
  readonly name: string
  readonly seat: number
  readonly running: boolean
  readonly open: number
}

/**
 * The mailbox, as a log rather than a chat: a roster strip that keeps one
 * refreshed line per member — the newest thing it said or was told, truncated
 * so a long turn cannot push the room's cast off the pane — over the traffic
 * itself, newest last. Every member of the team writes on the same side; the
 * right-hand side belongs to the reader, and the reader does not post here.
 */
function MessageFeed(props: {
  readonly roster: readonly CrewRow[]
  readonly messages: readonly TeamMessageView[]
  readonly names: ReadonlyMap<string, string>
  readonly seats: ReadonlyMap<string, number>
  readonly leaderLabel: string
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { roster, messages, names, seats, leaderLabel, focus, onFocus, t } = props
  const scroller = useRef<HTMLDivElement>(null)

  // A new delivery is the point of the log: keep the newest row in view.
  useEffect(() => {
    const node = scroller.current
    if (node !== null) node.scrollTop = node.scrollHeight
  }, [messages.length])

  return (
    <div className={css.feed}>
      <div className={css.crewList} aria-label={t('feed.crew')}>
        {roster.map(row => {
          const latest = latestOf(row.id, messages)
          return (
            <div
              key={row.id}
              className={css.crewRow}
              data-crew-row={row.id}
              data-focus={focus === row.id ? 'true' : undefined}
              onMouseEnter={() => { onFocus(row.id) }}
              onMouseLeave={() => { onFocus(undefined) }}
            >
              <span className={css.cameoDot} aria-hidden>
                <Cameo seat={row.seat} name={row.name} />
              </span>
              <span className={css.crewName}>{row.name}</span>
              <span className={css.crewState} data-state={row.running ? 'running' : 'idle'}>
                {t(row.running ? 'status.running' : 'status.idle')}
              </span>
              {row.open > 0 && <span className={css.crewOpen}>{t('feed.open', { count: row.open })}</span>}
              <span className={css.crewLine} title={latest?.text}>
                {latest === undefined
                  ? t('feed.quiet')
                  : `${latest.way === 'got' ? '←' : '→'} ${short(latest.text, 40)}`}
              </span>
            </div>
          )
        })}
      </div>

      <h4 className={css.feedTitle}>{t('feed.log')}</h4>
      {messages.length === 0
        ? <p className={css.empty}>{t('stage.noMessages')}</p>
        : (
          <div className={css.log} ref={scroller}>
            {messages.map((message, index) => (
              <LogRow
                key={message.messageId}
                message={message}
                index={index}
                names={names}
                seats={seats}
                leaderLabel={leaderLabel}
                focus={focus}
                onFocus={onFocus}
                t={t}
              />
            ))}
          </div>
        )}
    </div>
  )
}

/** The newest traffic naming one member, and which way it went. */
function latestOf(
  memberId: string,
  messages: readonly TeamMessageView[],
): { readonly text: string, readonly way: 'got' | 'sent' } | undefined {
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index]
    if (message === undefined) continue
    if (message.from === memberId) return { text: message.text, way: 'sent' }
    if (message.to === memberId) return { text: message.text, way: 'got' }
  }
  return undefined
}

/** One row of the log: who said what to whom, on one line, cut to fit. */
function LogRow(props: {
  readonly message: TeamMessageView
  readonly index: number
  readonly names: ReadonlyMap<string, string>
  readonly seats: ReadonlyMap<string, number>
  readonly leaderLabel: string
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { message, index, names, seats, leaderLabel, focus, onFocus, t } = props
  const label = (id: string | undefined): string =>
    id === undefined ? leaderLabel : names.get(id) ?? id.slice(0, 6)
  const partner = message.from ?? message.to
  const author = label(message.from)
  return (
    <div
      className={css.logRow}
      data-message-kind={message.kind}
      data-hop={message.hop === undefined ? undefined : String(message.hop)}
      data-focus={partner !== undefined && focus === partner ? 'true' : undefined}
      style={stagger(index)}
      onMouseEnter={() => { onFocus(partner) }}
      onMouseLeave={() => { onFocus(undefined) }}
    >
      <span className={css.logAvatar} aria-hidden>
        <Cameo seat={message.from === undefined ? -1 : seats.get(message.from)} name={author} />
      </span>
      <div className={css.logBody}>
        <span className={css.logHead}>
          <span className={css.logAuthor}>{author}</span>
          <span className={css.logArrow}>→</span>
          <span className={css.logTo}>{label(message.to)}</span>
          {message.kind !== 'message' && (
            <span className={css.logKind}>
              {message.kind === 'report' ? t('message.report') : t('message.settled')}
            </span>
          )}
          {message.hop !== undefined && message.hop > 0 && (
            <span className={css.logHop} title={t('message.hopHint')}>
              {t('message.hop', { hop: message.hop })}
            </span>
          )}
          <span className={css.logTime}>{clock(message.time)}</span>
        </span>
        <span className={css.logText} title={message.text}>{short(message.text, LOG_CHARS)}</span>
      </div>
      <span className={css.logTail} aria-hidden>
        {message.from === undefined ? <IconTeamSend16 size={12} /> : <IconTeamMessage16 size={12} />}
      </span>
    </div>
  )
}

/** One note pinned to the shared workspace, as the leader last saw it. */
function NoteCard(props: {
  readonly entry: TeamBoardEntryView
  readonly index: number
  readonly seats: ReadonlyMap<string, number>
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
}) {
  const { entry, index, seats, focus, onFocus } = props
  return (
    <div
      className={css.note}
      data-note-key={entry.key}
      data-focus={focus === entry.authorId ? 'true' : undefined}
      style={stagger(index)}
      onMouseEnter={() => { onFocus(entry.authorId) }}
      onMouseLeave={() => { onFocus(undefined) }}
    >
      <span className={css.noteKey} title={entry.key}>{entry.key}</span>
      <span className={css.notePreview} title={entry.preview}>{entry.preview}</span>
      <span className={css.noteFoot}>
        <span className={css.noteAuthor}>
          <span className={css.cameoDot} aria-hidden>
            <Cameo seat={seats.get(entry.authorId)} name={entry.authorName} />
          </span>
          {entry.authorName}
        </span>
        <span className={css.noteTime}>{clock(entry.updatedAt)}</span>
      </span>
    </div>
  )
}

/** One lane of the shared task board. */
function TaskColumn(props: {
  readonly status: TeamTaskStatus
  readonly tasks: readonly TeamTaskView[]
  readonly names: ReadonlyMap<string, string>
  readonly seats: ReadonlyMap<string, number>
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { status, tasks, names, seats, focus, onFocus, t } = props
  const title = status === 'done' ? t('task.done') : status === 'active' ? t('task.active') : t('task.pending')
  return (
    <div className={css.column} data-column={status}>
      <h4 className={css.columnTitle}>
        {title}
        <span className={css.columnCount}>{tasks.length}</span>
      </h4>
      {tasks.map((task, index) => (
        <div
          key={task.taskId}
          className={css.card}
          data-task-status={task.status}
          data-focus={task.assigneeId !== undefined && focus === task.assigneeId ? 'true' : undefined}
          style={stagger(index)}
          onMouseEnter={() => { onFocus(task.assigneeId) }}
          onMouseLeave={() => { onFocus(undefined) }}
        >
          <span className={css.cardTitle} title={task.title}>{task.title}</span>
          <span className={css.cardFoot}>
            <span className={css.cardWho}>
              {task.assigneeId !== undefined && (
                <span className={css.cameoDot} aria-hidden>
                  <Cameo
                    seat={seats.get(task.assigneeId)}
                    name={names.get(task.assigneeId) ?? task.assigneeId}
                  />
                </span>
              )}
              {task.assigneeId === undefined
                ? t('task.unassigned')
                : names.get(task.assigneeId) ?? task.assigneeId.slice(0, 6)}
            </span>
            {task.note !== undefined && <span className={css.cardNote} title={task.note}>{task.note}</span>}
          </span>
        </div>
      ))}
    </div>
  )
}
