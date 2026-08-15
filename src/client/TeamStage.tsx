/**
 * The agent-team stage: a conversation view tab that draws the team as a room
 * you can look into — every member is a whale standing where its own live
 * state puts it (at a workstation, in the lounge, in the pool, at the snack
 * bar), and a delivery is a whale swimming over to say something. The room is
 * the whole tab; the mailbox, the shared workspace and the task board wait
 * behind a dock of doors on the right edge and open as a glass drawer over
 * the floor, so the picture is never pushed out of view by its own ledgers.
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
  IconTeam16, IconTeamExpand16, IconTeamLeader16, IconTeamMailbox16, IconTeamMessage16,
  IconTeamPeer16, IconTeamSend16, IconTeamTask16, IconTeamWorkspace16,
} from './icons.tsx'
import type { TeamKey } from './locales.ts'
import { ZONES, ZONE_ORDER, scaleOf, slotOf, zoneFor, type Point, type Slot, type Touch, type ZoneId } from './room.ts'
import { Whale, accentOf, kindOf } from './whales.tsx'
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

/** Navigation the plugin body owns (it holds the session service). */
export interface TeamInjected {
  /** Open one teammate's transcript through its durable parent address. */
  readonly openMember: (leaderId: string, memberId: string) => void
  /** Return to the leader's own conversation. */
  readonly openLeader: (leaderId: string) => void
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

/** How much of a message the courier's bubble carries across the room. */
const BUBBLE_CHARS = 42

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

/** One line of a message, short enough to read while it crosses the room. */
function short(text: string, limit = BUBBLE_CHARS): string {
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
const APPS = ['doc', 'code', 'mail', 'grid', 'chart'] as const
type AppKind = typeof APPS[number]

/** Which picture one seat's monitor shows; the leader watches the dashboard. */
function appOf(seat: number): AppKind {
  if (seat < 0) return 'chart'
  return APPS[seat % APPS.length] ?? 'doc'
}

/** One preset screen picture, drawn from bars alone so the theme owns it. */
function ScreenApp(props: { readonly app: AppKind }) {
  const { app } = props
  const bars = app === 'doc' || app === 'mail' ? 3 : 4
  return (
    <span className={css.screenApp} data-app={app} aria-hidden>
      {Array.from({ length: bars }, (_, index) => <i key={index} />)}
    </span>
  )
}

/** A member as a tiny portrait: its own kind of whale in its own accent. */
function Cameo(props: { readonly seat: number | undefined, readonly name: string }) {
  const { seat, name } = props
  if (seat === undefined) return <span className={css.discGlyph}>{initial(name)}</span>
  return (
    <span className={css.cameo} data-cameo-species={kindOf(seat)} style={accentOf(seat)}>
      <Whale kind={kindOf(seat)} className={css.cameoWhale} />
    </span>
  )
}

/** Place one occupant on the floor: where it stands, how it packs, who is in front. */
function at(slot: Slot): CSSProperties {
  return {
    left: `${slot.x}%`,
    top: `${slot.y}%`,
    // The row rides a variable, not an inline z-index: an inline z-index
    // would outrank the stylesheet and pin a hovered tile under its neighbors.
    '--team-row': slot.row,
    '--team-tile-scale': scaleOf(slot.rows),
  } as CSSProperties
}

/**
 * The team stage. Rendered as one conversation view tab, so it exists only
 * while the surrounding session has a team — an ordinary conversation never
 * grows a tab it cannot fill.
 */
export function TeamStage(props: TeamStageProps) {
  const { useTeam, useSessions, openMember, openLeader, t } = props
  const state = useTeam(snapshot => snapshot)
  const sessions: SessionListState = useSessions(snapshot => snapshot)
  /** The member the pointer is over, anywhere on the stage. */
  const [focus, setFocus] = useState<string | undefined>(undefined)
  /** Which ledger the drawer is showing; the room stands alone by default. */
  const [panel, setPanel] = useState<PanelId | undefined>(undefined)
  /** Theater mode: the room covers the whole window, composer included. */
  const [wide, setWide] = useState(false)

  useEffect(() => {
    if (!wide) return undefined
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setWide(false)
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey) }
  }, [wide])

  const { leaderId, currentId, members, tasks, messages, board, boardAt } = state

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

  // The leader anchors the workstations; every teammate stands where its own
  // state puts it. Slots are handed out per area, in roster order.
  const filling: Record<ZoneId, string[]> = { work: [], lounge: [], pool: [], snack: [] }
  const zoneById = new Map<string, ZoneId>()
  const admit = (id: string, zone: ZoneId): ZoneId => {
    filling[zone].push(id)
    zoneById.set(id, zone)
    return zone
  }
  admit(leaderId, 'work')
  for (const member of members) {
    admit(
      member.memberId,
      zoneFor(running.has(member.memberId), touched.get(member.memberId), openOf(member.memberId)),
    )
  }
  const points = new Map<string, Slot>()
  for (const zone of ZONE_ORDER) {
    filling[zone].forEach((id, index) => { points.set(id, slotOf(zone, index, filling[zone].length)) })
  }

  const peers = members.filter(member => member.relation === 'peer')
  const openTasks = tasks.filter(task => task.status !== 'done').length
  const leaderRunning = sessions.byId[leaderId as SessionId]?.running === true

  /** The newest delivery, as a whale on its way across the room. */
  const latest = messages[messages.length - 1]
  const errand = errandOf(latest, leaderId, points)
  const talking = new Map<string, 'from' | 'to'>()
  if (errand !== undefined) {
    talking.set(errand.fromId, 'from')
    talking.set(errand.toId, 'to')
  }

  const toggle = (id: PanelId): void => { setPanel(current => current === id ? undefined : id) }
  const titleOf = (id: PanelId): string =>
    id === 'feed' ? t('stage.feed') : id === 'workspace' ? t('stage.workspace') : t('stage.board')

  return (
    <div className={css.stage} data-agent-team-stage data-wide={wide ? 'true' : undefined}>
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
        <button
          type="button"
          className={css.barToggle}
          aria-pressed={wide}
          aria-label={t(wide ? 'stage.theaterExit' : 'stage.theater')}
          title={t(wide ? 'stage.theaterExit' : 'stage.theater')}
          onClick={() => { setWide(current => !current) }}
        >
          <IconTeamExpand16 size={14} />
        </button>
      </header>

      <div className={css.scene}>
        <section className={css.roomPane} aria-label={t('stage.room')}>
          <div className={css.floor}>
            <span className={css.wallBoard} data-prop="whiteboard" aria-hidden />
            <span className={css.wallClock} data-prop="clock" aria-hidden />
            {ZONE_ORDER.map(zone => (
              <div
                key={zone}
                className={css.zone}
                data-zone={zone}
                data-occupied={filling[zone].length > 0 ? 'true' : undefined}
                style={{
                  left: `${ZONES[zone].x}%`,
                  top: `${ZONES[zone].y}%`,
                  width: `${ZONES[zone].w}%`,
                  height: `${ZONES[zone].h}%`,
                }}
              >
                <span className={css.zoneLabel} title={t(`zone.${zone}Hint` as TeamKey)}>
                  {t(`zone.${zone}` as TeamKey)}
                  {filling[zone].length > 0 && <span className={css.zoneCount}>{filling[zone].length}</span>}
                </span>
                {zone === 'lounge' && (
                  <>
                    <span className={css.sofa} data-prop="sofa" aria-hidden />
                    <span className={css.plant} data-prop="plant" aria-hidden />
                  </>
                )}
                {zone === 'snack' && <span className={css.vending} data-prop="vending" aria-hidden />}
                {zone === 'pool' && (
                  <>
                    <span className={css.buoy} data-prop="buoy" aria-hidden />
                    <span className={css.ladder} data-prop="ladder" aria-hidden />
                  </>
                )}
              </div>
            ))}

            <MemberTile
              id={leaderId}
              name={t('member.leader')}
              seat={-1}
              zone="work"
              slot={points.get(leaderId) ?? { x: 50, y: 50, row: 0, rows: 1 }}
              relation="lead"
              role={undefined}
              current={currentId === leaderId}
              running={leaderRunning}
              focused={focus === leaderId}
              talking={talking.get(leaderId)}
              screenLine={screenLineOf(leaderId, tasks, messages)}
              tasks={0}
              label={t('member.openLeader')}
              title={t('member.leader')}
              onOpen={() => { openLeader(leaderId) }}
              onFocus={setFocus}
              t={t}
            />

            {members.map((member, index) => (
              <MemberTile
                key={member.memberId}
                id={member.memberId}
                name={member.name}
                seat={index}
                zone={zoneById.get(member.memberId) ?? 'pool'}
                slot={points.get(member.memberId) ?? { x: 50, y: 50, row: 0, rows: 1 }}
                relation={member.relation}
                role={member.role}
                current={currentId === member.memberId}
                running={running.has(member.memberId)}
                focused={focus === member.memberId}
                talking={talking.get(member.memberId)}
                screenLine={screenLineOf(member.memberId, tasks, messages)}
                tasks={openOf(member.memberId)}
                label={t('member.open', { name: member.name })}
                title={meta(
                  member.name,
                  member.role,
                  member.model,
                  member.effort,
                  member.relation === 'peer' ? t('relation.peer') : t('relation.managed'),
                )}
                onOpen={() => { openMember(leaderId, member.memberId) }}
                onFocus={setFocus}
                t={t}
              />
            ))}

            {errand !== undefined && (
              <div
                key={errand.message.messageId}
                className={css.courier}
                data-courier={errand.message.messageId}
                data-from={errand.fromId}
                data-to={errand.toId}
                data-direction={errand.to.x >= errand.from.x ? 'right' : 'left'}
                style={{
                  '--from-x': `${errand.from.x}%`,
                  '--from-y': `${errand.from.y}%`,
                  '--to-x': `${errand.to.x}%`,
                  '--to-y': `${errand.to.y}%`,
                  ...accentOf(seatOf(errand.fromId, leaderId, members)),
                } as CSSProperties}
                aria-label={t('stage.courier', {
                  name: names.get(errand.fromId) ?? errand.fromId,
                  to: names.get(errand.toId) ?? errand.toId,
                })}
              >
                <span className={css.courierBubble}>{short(errand.message.text)}</span>
                <Whale kind={kindOf(seatOf(errand.fromId, leaderId, members))} className={css.courierWhale} />
              </div>
            )}
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
                          t={t}
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

/** The seat one id holds on the roster; the leader's seat is -1. */
function seatOf(id: string, leaderId: string, members: readonly TeamMemberView[]): number {
  if (id === leaderId) return -1
  const index = members.findIndex(member => member.memberId === id)
  return index < 0 ? -1 : index
}

/** One delivery in flight across the room. */
interface Errand {
  readonly message: TeamMessageView
  readonly fromId: string
  readonly toId: string
  readonly from: Point
  readonly to: Point
}

/**
 * The newest delivery as an errand between two places on the floor. Absent
 * when either end is off the roster (a dismissed sender) or when the message
 * never crossed the room.
 */
function errandOf(
  message: TeamMessageView | undefined,
  leaderId: string,
  points: ReadonlyMap<string, Point>,
): Errand | undefined {
  if (message === undefined) return undefined
  const fromId = message.from ?? leaderId
  const toId = message.to ?? leaderId
  const from = points.get(fromId)
  const to = points.get(toId)
  if (from === undefined || to === undefined || fromId === toId) return undefined
  return { message, fromId, toId, from, to }
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

/** One member of the team, standing in the area its own state puts it in. */
function MemberTile(props: {
  readonly id: string
  readonly name: string
  readonly seat: number
  readonly zone: ZoneId
  readonly slot: Slot
  readonly relation: 'peer' | 'managed' | 'lead'
  readonly role: string | undefined
  readonly current: boolean
  readonly running: boolean
  readonly focused: boolean
  readonly talking: 'from' | 'to' | undefined
  readonly screenLine: string | undefined
  readonly tasks: number
  readonly label: string
  readonly title: string
  readonly onOpen: () => void
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const {
    id, name, seat, zone, slot, relation, role, current, running, focused, talking,
    screenLine, tasks, label, title, onOpen, onFocus, t,
  } = props
  const kind = kindOf(seat)
  const screen = running ? 'working' : screenLine !== undefined ? 'reading' : 'off'
  const relationLabel = relation === 'lead'
    ? undefined
    : relation === 'peer' ? t('relation.peer') : t('relation.managed')
  return (
    <button
      type="button"
      className={css.tile}
      style={{ ...at(slot), ...accentOf(seat), ...stagger(seat + 1) }}
      onClick={onOpen}
      onMouseEnter={() => { onFocus(id) }}
      onMouseLeave={() => { onFocus(undefined) }}
      aria-label={label}
      aria-current={current}
      title={title}
      data-desk={id}
      data-zone={zone}
      data-relation={relation}
      data-species={kind}
      data-running={running ? 'true' : undefined}
      data-focus={focused ? 'true' : undefined}
      data-talking={talking}
    >
      {zone === 'work' && (
        <span className={css.monitor} data-screen={screen} title={screenLine} aria-hidden>
          <span className={css.screen}>
            {screen === 'off'
              ? <span className={css.screenOff} />
              : (
                <>
                  <ScreenApp app={appOf(seat)} />
                  <span className={css.screenText}>{screenLine ?? t('screen.working')}</span>
                </>
              )}
          </span>
          <span className={css.stand} />
        </span>
      )}
      {zone === 'lounge' && <span className={css.zzz} aria-hidden>zZ</span>}
      {zone === 'snack' && <span className={css.snack} aria-hidden />}

      <span className={css.seat} data-zone={zone} aria-hidden>
        {zone === 'pool' && <span className={css.water} />}
        <Whale kind={kind} className={css.tileWhale} asleep={zone === 'lounge'} />
        {zone === 'work' && (
          <>
            <span className={css.keyboard} data-prop="keyboard" />
            <span className={css.mug} data-prop="mug" />
          </>
        )}
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

/** The mailbox as a conversation: bubbles, oriented from the leader's side. */
function MessageFeed(props: {
  readonly messages: readonly TeamMessageView[]
  readonly names: ReadonlyMap<string, string>
  readonly seats: ReadonlyMap<string, number>
  readonly leaderLabel: string
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { messages, names, seats, leaderLabel, focus, onFocus, t } = props
  const scroller = useRef<HTMLDivElement>(null)

  // A new delivery is the point of the feed: keep the newest row in view.
  useEffect(() => {
    const node = scroller.current
    if (node !== null) node.scrollTop = node.scrollHeight
  }, [messages.length])

  if (messages.length === 0) return <p className={css.empty}>{t('stage.noMessages')}</p>

  return (
    <div className={css.stream} ref={scroller}>
      {messages.map((message, index) => (
        <MessageBubble
          key={message.messageId}
          message={message}
          index={index}
          grouped={index > 0 && messages[index - 1]?.from === message.from && messages[index - 1]?.to === message.to}
          names={names}
          seats={seats}
          leaderLabel={leaderLabel}
          focus={focus}
          onFocus={onFocus}
          t={t}
        />
      ))}
    </div>
  )
}

/** One mailbox row as a chat bubble; the leader's own sends sit on the right. */
function MessageBubble(props: {
  readonly message: TeamMessageView
  readonly index: number
  readonly grouped: boolean
  readonly names: ReadonlyMap<string, string>
  readonly seats: ReadonlyMap<string, number>
  readonly leaderLabel: string
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { message, index, grouped, names, seats, leaderLabel, focus, onFocus, t } = props
  const label = (id: string | undefined): string =>
    id === undefined ? leaderLabel : names.get(id) ?? id.slice(0, 6)
  const outbound = message.from === undefined
  const partner = outbound ? message.to : message.from
  const author = label(message.from)
  return (
    <div
      className={css.bubbleRow}
      data-message-kind={message.kind}
      data-hop={message.hop === undefined ? undefined : String(message.hop)}
      data-outbound={outbound ? 'true' : undefined}
      data-focus={partner !== undefined && focus === partner ? 'true' : undefined}
      style={stagger(index)}
      onMouseEnter={() => { onFocus(partner) }}
      onMouseLeave={() => { onFocus(undefined) }}
    >
      <span className={css.bubbleAvatar} aria-hidden data-hidden={grouped ? 'true' : undefined}>
        <Cameo seat={message.from === undefined ? -1 : seats.get(message.from)} name={author} />
      </span>
      <div className={css.bubble}>
        <span className={css.bubbleHead}>
          <span className={css.bubbleAuthor}>{author}</span>
          <span className={css.bubbleArrow}>→</span>
          <span className={css.bubbleTo}>{label(message.to)}</span>
          {message.kind !== 'message' && (
            <span className={css.bubbleKind}>
              {message.kind === 'report' ? t('message.report') : t('message.settled')}
            </span>
          )}
          {message.hop !== undefined && message.hop > 0 && (
            <span className={css.bubbleHop} title={t('message.hopHint')}>
              {t('message.hop', { hop: message.hop })}
            </span>
          )}
          <span className={css.bubbleTime}>{clock(message.time)}</span>
        </span>
        <span className={css.bubbleText} title={message.text}>{message.text}</span>
      </div>
      <span className={css.bubbleTail} aria-hidden>
        {outbound ? <IconTeamSend16 size={12} /> : <IconTeamMessage16 size={12} />}
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
  readonly t: Translate
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
