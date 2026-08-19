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
import { useEffect, useMemo, useRef, useState } from 'react'
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
  ROOM_BLOCKS, breakAt, deskOf, obstaclesOf, poseFor, spread, stationFor, visitAt,
  type Desk, type Point, type Pose, type Post, type Rect, type Touch,
} from './room.ts'
import { onWall, project, shellVars } from './stagecraft.ts'
import { useIdleErrand, useWalk, type Facing } from './walk.ts'
import {
  Crew, accentOf, gearOf, hairOf, maskOf, outfitOf, shoeOf, skinOf, toneOf,
} from './crew.tsx'
import { Plant, plantOf } from './flora.tsx'
import {
  AirConditionerFigure, CabinetFigure, CatFigure, ChairFigure, CoffeeFigure, CoolerFigure, LampFigure, PendantFigure, PrinterFigure, SofaFigure, TableFigure, TreadmillFigure,
} from './props.tsx'
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
      <Crew
        kind={maskOf(seat)}
        className={css.cameoCrew}
        portrait
        hair={hairOf(seat)}
        gear={gearOf(seat)}
        tone={toneOf(seat)}
        skin={skinOf(seat)}
      />
    </span>
  )
}

/** Where one thing stands on the floor, and how big it draws there. */
function at(post: Post | Point, scale: number): CSSProperties {
  const screen = project(post)
  return {
    left: `${screen.left}%`,
    top: `${screen.top}%`,
    // Depth rides a variable rather than an inline z-index: an inline z-index
    // would outrank the stylesheet and pin a hovered member under its desk.
    '--team-depth': Math.round(post.y),
    // Perspective and the member's own size are one number by the time the
    // stylesheet sees them: something further back is smaller by exactly the
    // amount the floor under it is narrower.
    '--team-scale': Math.round(screen.scale * scale * 1000) / 1000,
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
  const stations: Post[] = []
  let breaks = 0
  for (const id of roster) {
    const desk = desks.get(id) ?? deskOf(0, roster.length)
    const station = id === leaderId
      ? 'desk'
      : stationFor(running.has(id), touched.get(id), openOf(id))
    if (station === 'break') away.add(id)
    stations.push(station === 'break' ? breakAt(breaks++) : desk)
  }
  // Four members on a break share three places to stand around the sofa; one
  // pass of separation keeps the fourth beside the first rather than inside it.
  const parted = spread(stations)
  roster.forEach((id, index) => {
    const post = stations[index]!
    homes.set(id, { ...post, ...parted[index]! })
  })

  /**
   * Where one piece of the break corner stands, and how large it draws there.
   * A piece is placed by its OWN plan rectangle — the same rectangle a walk
   * goes around — so the furniture it is drawn as and the furniture it is
   * walked around as are the same furniture, and it can never creep off the
   * floor and up a wall.
   */
  const loungePiece = (rect: Rect): CSSProperties => {
    const screen = project({ x: rect.x + rect.w / 2, y: rect.y + rect.h / 2 })
    return {
      left: `${screen.left}%`,
      top: `${screen.top}%`,
      '--team-depth': Math.round(rect.y + rect.h / 2),
      '--team-scale': Math.round(screen.scale * 1000) / 1000,
    } as CSSProperties
  }
  /** The rug and the floor lamp are furniture too, so they get plan rects. */
  const rugRect: Rect = { x: 70.5, y: 53.5, w: 21, h: 7.5 }
  const lampRect: Rect = { x: 70, y: 47.5, w: 3, h: 7 }
  const [sofaBlock, tableBlock, plantBlock, coolerBlock] = ROOM_BLOCKS

  const peers = members.filter(member => member.relation === 'peer')
  const openTasks = tasks.filter(task => task.status !== 'done').length
  const leaderRunning = sessions.byId[leaderId as SessionId]?.running === true

  /** The delivery on its feet: who carries it, to whom, and where they meet. */
  const errand = errandOf(visit, leaderId, homes)
  const visitOf = (id: string): Point | undefined =>
    errand !== undefined && errand.fromId === id ? errand.meet : undefined
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
        errand={visitOf(id)}
        count={roster.length}
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
          <div className={css.floor} style={shellVars()}>
            {/* The box you are looking into. Five faces, all cut from the same
                numbers the floor arithmetic uses, so the walls meet the floor
                exactly where a member standing at the back wall would. */}
            <span className={css.shell} aria-hidden>
              <span className={css.ceiling} />
              <span className={css.wallLeft} />
              <span className={css.wallRight} />
              <span className={css.wallBack} />
              <span className={css.floorPlane} />
              <span className={css.skirting} />
            </span>

            <RoomWall />

            {/* Over the desk field and the shelf: the ceiling between the
                windows is where a real office hangs its lamps. */}
            <span className={css.pendant} style={{ left: `${onWall(50)}%` }} aria-hidden>
              <PendantFigure />
            </span>

            {/* The service wall on the left: the things an office has that
                nobody has a desk for. */}
            <span className={css.utility} style={at({ x: 4.5, y: 64 }, 1)} aria-hidden>
              <span className={css.utilityCabinet} data-prop="cabinet"><CabinetFigure /></span>
              <span className={css.utilityPrinter} data-prop="printer"><PrinterFigure /></span>
              <span className={css.utilityCoffee} data-prop="coffee"><CoffeeFigure /></span>
            </span>

            <span className={css.cat} data-prop="cat" aria-hidden>
              <CatFigure />
            </span>

            {/* The treadmill in the front-right corner: the wellness zone, in
                front of the lounge where the floor is empty, clear of the
                cooler above it and of everybody's way past it. */}
            <span className={css.treadmill} data-prop="treadmill" style={at({ x: 93, y: 87 }, 1)} aria-hidden>
              <TreadmillFigure />
            </span>

            <div className={css.lounge} aria-hidden>
              <span className={css.rug} data-prop="rug" style={loungePiece(rugRect)} />
              <span className={css.sofa} data-prop="sofa" style={loungePiece(sofaBlock!)}>
                <SofaFigure />
              </span>
              <span className={css.table} data-prop="table" style={loungePiece(tableBlock!)}>
                <TableFigure />
              </span>
              <span className={css.lamp} data-prop="lamp" style={loungePiece(lampRect)}>
                <LampFigure />
              </span>
              <span className={css.plant} data-prop="plant" style={loungePiece(plantBlock!)}>
                <Plant kind={plantOf(0)} />
              </span>
              <span className={css.cooler} data-prop="cooler" style={loungePiece(coolerBlock!)}>
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
  // Scanned backwards in place: a copy-and-reverse per member per render is
  // the one cost this stage does not need to pay on every snapshot.
  for (let index = messages.length - 1; index >= 0; index -= 1) {
    const message = messages[index]
    if (message?.to === memberId) return short(message.text, 34)
  }
  return undefined
}

/**
 * The back wall of the room, and everything hung on it.
 *
 * Every fixture is placed by the SAME floor coordinate a member would stand at
 * to look at it: `onWall` maps a place on the plan onto the wall's own width,
 * so the window somebody wanders over to is the window they end up under. The
 * wall itself is a face of the shell; this is only what is screwed to it.
 */
function RoomWall() {
  return (
    <span className={css.wall} aria-hidden>
      {/* The wall's fixtures, left to right, each with room to breathe: the
          calendar clears the whiteboard's frame, the hanger trails between
          the board and the near window with air on both sides of it, and the
          air conditioner owns the wall's right end alone. */}
      <span className={css.calendar} data-prop="calendar" style={{ left: `${onWall(4)}%` }}>
        <span className={css.calendarHead} />
        <span className={css.calendarGrid} />
      </span>

      <span className={css.whiteboard} data-prop="whiteboard" style={{ left: `${onWall(15.5)}%` }}>
        <span className={css.boardGhost} />
        <span className={css.boardInk} />
        <span className={css.boardNote} data-note="a" />
        <span className={css.boardNote} data-note="b" />
        <span className={css.boardTray} />
        <span className={css.boardTrayTop} />
        <span className={css.boardPens} />
        <span className={css.boardEraser} />
      </span>

      <span className={css.hanger} style={{ left: `${onWall(26)}%` }}>
        <span className={css.hangerBracket} />
        <Plant kind="pothos" className={css.hangerPlant} />
      </span>

      {[36.5, 65].map(where => (
        <span key={where} className={css.window} data-prop="window" style={{ left: `${onWall(where)}%` }}>
          <span className={css.pane}>
            <span className={css.sky} />
            <span className={css.cloud} data-cloud="near" />
            <span className={css.cloud} data-cloud="far" />
            <span className={css.sea} />
            <span className={css.sail} />
          </span>
          {/* The reveal: two faces of the opening, so the glass is set into a
              wall with thickness rather than painted onto a flat one. */}
          <span className={css.reveal} />
          <span className={css.mullion} />
          <span className={css.sillTop} />
          <span className={css.sill} />
          <span className={css.beam} />
        </span>
      ))}

      <span className={css.shelf} data-prop="shelf" style={{ left: `${onWall(50)}%` }}>
        <span className={css.books} />
        <span className={css.bookLeaning} />
        <span className={css.trophy} />
        <Plant kind="cactus" className={css.shelfPlant} />
        <span className={css.plankTop} />
        <span className={css.plank} />
        <span className={css.plankBracket} />
      </span>

      <span className={css.clockProp} data-prop="clock" style={{ left: `${onWall(79)}%` }}>
        <span className={css.clockTicks} />
        <span className={css.clockHand} data-hand="hour" />
        <span className={css.clockHand} data-hand="minute" />
        <span className={css.clockHand} data-hand="second" />
        <span className={css.clockPin} />
      </span>

      <span className={css.airConditioner} data-prop="ac" style={{ left: `${onWall(89.5)}%` }}>
        <AirConditionerFigure />
      </span>
    </span>
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
        {/* The slab is a box: a lid you can see across, an apron under its near
            edge and one flank. Everything standing on the desk is placed on the
            lid, so a mug sits back on the surface instead of on the front rail. */}
        <span className={css.deskTop} data-prop="desk">
          <span className={css.deskFlank} />
          <span className={css.deskSurface} />
          <span className={css.deskApron} />
          <span className={css.deskGrain} />
        </span>
        <span className={css.deskLegs} />
        <span className={css.deskModesty} />
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
        {/* Drawn after the computer, because they sit on the near half of the
            lid while it stands at the back of it. */}
        <span className={css.keyboard} data-prop="keyboard" />
        <span className={css.mug} data-prop="mug" />
        <span className={css.papers} data-prop="papers" />
        <span className={css.deskPlant} data-prop="deskPlant">
          <Plant kind={plantOf(seat + 2)} />
        </span>
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
  /** Where a delivery has called it away to, while one is in flight. */
  readonly errand: Point | undefined
  /** How many members the room seats, so the tile knows the furniture. */
  readonly count: number
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
    id, name, seat, home, errand, count, scale, relation, role, current, running, pose, away,
    focused, talking, turn, speech, tasks, label, title, onOpen, onFocus, t,
  } = props
  // The furniture only changes when the roster does, and the walk hook keys its
  // frame loop on this list: rebuilding it every render would restart the trip.
  const obstacles = useMemo(
    () => obstaclesOf(Array.from({ length: count }, (_, index) => deskOf(index, count))),
    [count],
  )
  // Somebody with nothing on their plate and nowhere to be drifts off now and
  // then. A delivery outranks a daydream, and the leader keeps its seat — the
  // first desk is the room's anchor, and a wandering host is a dropped mail.
  const loose = seat >= 0 && pose === 'idle' && errand === undefined && talking === undefined
  const wander = useIdleErrand(seat, loose)
  const spot: Point = errand ?? (loose ? wander ?? home : home)
  const walk = useWalk(home, spot, obstacles, scale)
  const mask = maskOf(seat)
  const outfit = outfitOf(seat)
  const shoes = shoeOf(seat)
  // At its own desk a member faces its own computer, so you see it from
  // behind; on its feet or away from its desk it turns back around.
  const seated = !walk.walking && !away && talking === undefined && wander === undefined
  const facing = walk.walking ? walk.facing : turn ?? (seated ? 'back' : 'front')
  const relationLabel = relation === 'lead'
    ? undefined
    : relation === 'peer' ? t('relation.peer') : t('relation.managed')
  return (
    <button
      type="button"
      ref={walk.ref}
      className={css.person}
      style={{
        ...accentOf(seat),
        ...chairDelay(seat),
        ...stagger(seat + 1),
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
      data-facing={facing}
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
        <Crew
          kind={mask}
          back={facing === 'back' || facing === 'away'}
          outfit={outfit}
          shoes={shoes}
          hair={hairOf(seat)}
          gear={gearOf(seat)}
          tone={toneOf(seat)}
          skin={skinOf(seat)}
          className={css.figure}
        />
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
