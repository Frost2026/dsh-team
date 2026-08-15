/**
 * The agent-team stage: a conversation view tab that draws the team as a
 * constellation — the leader at the hub, teammates on their own seats, the
 * spokes that carry mail, and the peer ring that says who may talk to whom —
 * beside a bubble feed of the mailbox and a board of the shared tasks.
 *
 * Every value it renders is the host's own `team` projection, delivered
 * through the injected store: the browser folds nothing. Geometry is computed
 * from the roster alone (no DOM measurement), so the picture is a function of
 * the durable state and nothing else.
 */
import { useEffect, useMemo, useRef, useState } from 'react'
import type { CSSProperties } from 'react'
import { StateDot } from '@deepseek-ai/dsh-client-ui-primitives'
import type { PropsLocale, PropsRuntime, SnapshotSelectorHook } from '@deepseek-ai/dsh-client-ui-slots'
import type { SessionId, SessionListState } from '@deepseek-ai/dsh-client-runtime/client'
import type {} from '@deepseek-ai/dsh-client-ui-conversation/client'
import type {
  TeamBoardEntryView, TeamMemberView, TeamMessageView, TeamTaskStatus, TeamTaskView,
} from '../contract.ts'
import {
  IconTeam16, IconTeamLeader16, IconTeamMailbox16, IconTeamMessage16, IconTeamPeer16,
  IconTeamSend16, IconTeamTask16, IconTeamWorkspace16,
} from './icons.tsx'
import type { TeamKey } from './locales.ts'
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

/** Hub position and orbit radius, in the constellation's own 0–100 space. */
const HUB = 50
const ORBIT = 33

/** How far back the feed counts as "this member is in the conversation now". */
const LIVE_MESSAGES = 4

/** The board's columns, left to right. */
const COLUMNS: readonly TeamTaskStatus[] = ['pending', 'active', 'done']

/** Seat of one teammate on the orbit: index 0 sits at twelve o'clock. */
function seatOf(index: number, count: number): { readonly x: number; readonly y: number } {
  const angle = (index / Math.max(count, 1)) * Math.PI * 2 - Math.PI / 2
  return { x: HUB + Math.cos(angle) * ORBIT, y: HUB + Math.sin(angle) * ORBIT }
}

/**
 * A stable accent per seat, derived from the theme's brand token rather than
 * from a literal color: every avatar is the same token, rotated.
 */
function accentOf(index: number, count: number): CSSProperties {
  return { '--team-accent-shift': `${Math.round((index / Math.max(count, 1)) * 300)}deg` } as CSSProperties
}

/** The glyph one avatar carries: the member's first character. */
function initial(name: string): string {
  return [...name][0]?.toUpperCase() ?? '?'
}

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

/** Stagger the entry animation of a list without hard-coding per-row CSS. */
function stagger(index: number): CSSProperties {
  return { animationDelay: `${Math.min(index, 10) * 30}ms` }
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
  /** The member the pointer is over, in the graph or in the feed. */
  const [focus, setFocus] = useState<string | undefined>(undefined)

  const { leaderId, currentId, members, tasks, messages, board, boardAt } = state

  const running = useMemo(
    () => new Set(members
      .filter(member => sessions.byId[member.memberId as SessionId]?.running === true)
      .map(member => member.memberId)),
    [members, sessions.byId],
  )

  /** Members that carried traffic in the visible tail: their spokes light up. */
  const live = useMemo(() => {
    const recent = messages.slice(-LIVE_MESSAGES)
    return new Set(recent.flatMap(message => [message.from, message.to].filter(id => id !== undefined)))
  }, [messages])

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
  const seats = new Map(members.map((member, index) => [member.memberId, seatOf(index, members.length)]))
  const peers = members.filter(member => member.relation === 'peer')
  const openTasks = tasks.filter(task => task.status !== 'done').length
  const leaderRunning = sessions.byId[leaderId as SessionId]?.running === true

  return (
    <div className={css.stage} data-agent-team-stage>
      <header className={css.bar}>
        <span className={css.barTitle}>
          <IconTeam16 size={15} className={css.barIcon} />
          {t('stage.title')}
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

      <div className={css.grid}>
        <section className={css.graph} aria-label={t('stage.graph')}>
          <div className={css.orbit}>
            <svg className={css.links} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
              {peers.length > 1 && (
                <circle
                  className={css.peerRing}
                  cx={HUB}
                  cy={HUB}
                  r={ORBIT}
                  vectorEffect="non-scaling-stroke"
                />
              )}
              {members.map((member) => {
                const seat = seats.get(member.memberId) ?? { x: HUB, y: HUB }
                const lit = live.has(member.memberId) || running.has(member.memberId)
                return (
                  <line
                    key={member.memberId}
                    className={css.spoke}
                    x1={HUB}
                    y1={HUB}
                    x2={seat.x}
                    y2={seat.y}
                    vectorEffect="non-scaling-stroke"
                    data-relation={member.relation}
                    data-live={lit ? 'true' : undefined}
                    data-focus={focus === member.memberId ? 'true' : undefined}
                  />
                )
              })}
            </svg>

            <button
              type="button"
              className={css.hub}
              style={{ left: `${HUB}%`, top: `${HUB}%` }}
              onClick={() => { openLeader(leaderId) }}
              onMouseEnter={() => { setFocus(leaderId) }}
              onMouseLeave={() => { setFocus(undefined) }}
              aria-label={t('member.openLeader')}
              aria-current={currentId === leaderId}
              data-running={leaderRunning ? 'true' : undefined}
            >
              <span className={css.hubDisc}>
                <IconTeamLeader16 size={20} />
              </span>
              <span className={css.nodeName}>{t('member.leader')}</span>
            </button>

            {members.map((member, index) => (
              <MemberNode
                key={member.memberId}
                member={member}
                seat={seats.get(member.memberId) ?? { x: HUB, y: HUB }}
                accent={accentOf(index, members.length)}
                index={index}
                current={currentId === member.memberId}
                running={running.has(member.memberId)}
                focused={focus === member.memberId}
                tasks={tasks.filter(task => task.assigneeId === member.memberId && task.status !== 'done').length}
                onOpen={() => { openMember(leaderId, member.memberId) }}
                onFocus={setFocus}
                t={t}
              />
            ))}
          </div>
          {peers.length > 1 && (
            <p className={css.legend}>
              <IconTeamPeer16 size={13} />
              {t('stage.peerRing')}
            </p>
          )}
        </section>

        <section className={css.feed} aria-label={t('stage.feed')}>
          <h3 className={css.paneTitle}>
            <IconTeamMailbox16 size={13} />
            {t('stage.feed')}
          </h3>
          <MessageFeed
            messages={messages}
            names={names}
            leaderLabel={t('member.leader')}
            focus={focus}
            onFocus={setFocus}
            t={t}
          />
        </section>
      </div>

      <section className={css.board} aria-label={t('stage.workspace')}>
        <h3 className={css.paneTitle}>
          <IconTeamWorkspace16 size={13} />
          {t('stage.workspace')}
          {boardAt !== undefined && (
            <span className={css.paneNote} title={t('stage.boardStale')}>
              {t('stage.boardAt', { time: clock(boardAt) })}
            </span>
          )}
        </h3>
        {board.length === 0
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
                  focus={focus}
                  onFocus={onFocus => { setFocus(onFocus) }}
                  t={t}
                />
              ))}
            </div>
          )}
      </section>

      <section className={css.board} aria-label={t('stage.board')}>
        <h3 className={css.paneTitle}>
          <IconTeamTask16 size={13} />
          {t('stage.board')}
        </h3>
        {tasks.length === 0
          ? <p className={css.empty}>{t('stage.noTasks')}</p>
          : (
            <div className={css.columns}>
              {COLUMNS.map(status => (
                <TaskColumn
                  key={status}
                  status={status}
                  tasks={tasks.filter(task => task.status === status)}
                  names={names}
                  focus={focus}
                  onFocus={setFocus}
                  t={t}
                />
              ))}
            </div>
          )}
      </section>
    </div>
  )
}

/** One teammate on the orbit: avatar, live ring, name, and its own load. */
function MemberNode(props: {
  readonly member: TeamMemberView
  readonly seat: { readonly x: number; readonly y: number }
  readonly accent: CSSProperties
  readonly index: number
  readonly current: boolean
  readonly running: boolean
  readonly focused: boolean
  readonly tasks: number
  readonly onOpen: () => void
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { member, seat, accent, index, current, running, focused, tasks, onOpen, onFocus, t } = props
  const relation = member.relation === 'peer' ? t('relation.peer') : t('relation.managed')
  return (
    <button
      type="button"
      className={css.node}
      style={{ left: `${seat.x}%`, top: `${seat.y}%`, ...accent, ...stagger(index) }}
      onClick={onOpen}
      onMouseEnter={() => { onFocus(member.memberId) }}
      onMouseLeave={() => { onFocus(undefined) }}
      aria-label={t('member.open', { name: member.name })}
      aria-current={current}
      title={meta(member.name, member.role, member.model, member.effort, relation)}
      data-relation={member.relation}
      data-running={running ? 'true' : undefined}
      data-focus={focused ? 'true' : undefined}
    >
      <span className={css.disc}>
        <span className={css.discGlyph}>{initial(member.name)}</span>
        {tasks > 0 && <span className={css.load}>{tasks}</span>}
      </span>
      <span className={css.nodeName}>{member.name}</span>
      <span className={css.nodeMeta}>{meta(member.role, relation)}</span>
      <span className={css.nodeState} title={t(running ? 'status.running' : 'status.idle')}>
        <StateDot state={running ? 'ongoing' : 'done'} size={7} />
      </span>
    </button>
  )
}

/** The mailbox as a conversation: bubbles, oriented from the leader's side. */
function MessageFeed(props: {
  readonly messages: readonly TeamMessageView[]
  readonly names: ReadonlyMap<string, string>
  readonly leaderLabel: string
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { messages, names, leaderLabel, focus, onFocus, t } = props
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
  readonly leaderLabel: string
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { message, index, grouped, names, leaderLabel, focus, onFocus, t } = props
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
        {outbound ? <IconTeamLeader16 size={13} /> : <span className={css.discGlyph}>{initial(author)}</span>}
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

/** One note on the shared workspace, as the leader last saw it. */
function NoteCard(props: {
  readonly entry: TeamBoardEntryView
  readonly index: number
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { entry, index, focus, onFocus, t } = props
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
        <span className={css.noteAuthor}>{entry.authorName}</span>
        <span className={css.noteTime}>{clock(entry.updatedAt)}</span>
      </span>
    </div>
  )
}

/** One column of the shared task board. */
function TaskColumn(props: {
  readonly status: TeamTaskStatus
  readonly tasks: readonly TeamTaskView[]
  readonly names: ReadonlyMap<string, string>
  readonly focus: string | undefined
  readonly onFocus: (memberId: string | undefined) => void
  readonly t: Translate
}) {
  const { status, tasks, names, focus, onFocus, t } = props
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
