/**
 * The floating agent-team surface: a bottom-right button that appears while
 * the current session has a team, and a panel over the roster, the shared task
 * list, and the mailbox feed.
 *
 * Every value it renders is the host's own `team` projection, delivered
 * through the injected store — the browser folds nothing.
 */
import { useEffect, useMemo, useState } from 'react'
import { StateDot } from '@deepseek-ai/dsh-client-ui-primitives'
import type { PropsLocale, PropsRuntime, SnapshotSelectorHook } from '@deepseek-ai/dsh-client-ui-slots'
import type { SessionId, SessionListState } from '@deepseek-ai/dsh-client-runtime/client'
import type { TeamMemberView, TeamMessageView, TeamTaskView } from '../contract.ts'
import {
  IconTeam16, IconTeamClose16, IconTeamLeader16, IconTeamMessage16, IconTeamSend16,
  IconTeamTask16, IconTeammate16,
} from './icons.tsx'
import type { TeamKey } from './locales.ts'
import css from './TeamFloating.module.css'

/** What the plugin's session follower publishes to this entry. */
export interface TeamPanelState {
  /** The session whose log owns the team; absent while no team is in view. */
  readonly leaderId?: string
  /** The session currently open, so the panel can mark the row you are reading. */
  readonly currentId?: string
  readonly members: readonly TeamMemberView[]
  readonly tasks: readonly TeamTaskView[]
  readonly messages: readonly TeamMessageView[]
}

/** Navigation the plugin body owns (it holds the session service). */
export interface TeamInjected {
  /** Open one teammate's transcript through its durable parent address. */
  readonly openMember: (leaderId: string, memberId: string) => void
  /** Return to the leader's own conversation. */
  readonly openLeader: (leaderId: string) => void
}

/** Complete overlay entry props: the root kit, the locale, and the inject face. */
export type TeamFloatingProps =
  PropsRuntime<'shell.overlay', 'agent-team'>
  & PropsLocale<'team'>
  & TeamInjected
  & { readonly useTeam: SnapshotSelectorHook<TeamPanelState> }

type Translate = PropsLocale<'team'>['t']

/** The disclosure pair needs one stable id; the surface is a singleton. */
const PANEL_ID = 'agent-team-panel'

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
function stagger(index: number): { animationDelay: string } {
  return { animationDelay: `${Math.min(index, 8) * 26}ms` }
}

/**
 * The floating button and its panel. Renders nothing at all while the current
 * session has no team, so an ordinary conversation is untouched.
 */
export function TeamFloating(props: TeamFloatingProps) {
  const { useTeam, useSessions, openMember, openLeader, t } = props
  const state = useTeam(snapshot => snapshot)
  const sessions: SessionListState = useSessions(snapshot => snapshot)
  const [open, setOpen] = useState(false)

  const { leaderId, currentId, members, tasks, messages } = state
  const present = leaderId !== undefined && members.length > 0

  const running = useMemo(
    () => members.filter(member => sessions.byId[member.memberId as SessionId]?.running === true).length,
    [members, sessions.byId],
  )

  // The team ended (or the session changed): fold the panel with it.
  useEffect(() => {
    if (!present) setOpen(false)
  }, [present])

  useEffect(() => {
    if (!open) return undefined
    const onKey = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('keydown', onKey) }
  }, [open])

  if (!present || leaderId === undefined) return null

  const names = new Map<string, string>([[leaderId, t('member.leader')]])
  for (const member of members) names.set(member.memberId, member.name)
  const openTasks = tasks.filter(task => task.status !== 'done').length
  const leaderRunning = sessions.byId[leaderId as SessionId]?.running === true

  return (
    <div className={css.root} data-agent-team-root>
      {open && (
        <section className={css.panel} id={PANEL_ID} data-agent-team-panel aria-label={t('panel.title')}>
          <header className={css.panelHeader}>
            <span className={css.panelTitle}>
              <IconTeam16 size={16} className={css.headerIcon} />
              {t('panel.title')}
            </span>
            <span className={css.headerHint}>
              {running > 0 ? t('panel.running', { count: running }) : t('panel.idle')}
            </span>
            <button
              type="button"
              className={css.iconButton}
              onClick={() => { setOpen(false) }}
              aria-label={t('button.close')}
            >
              <IconTeamClose16 size={14} />
            </button>
          </header>

          <div className={css.panelBody}>
            <section className={css.section} aria-label={t('panel.members')}>
              <h3 className={css.sectionTitle}>
                {t('panel.members')}
                <span className={css.sectionCount}>{members.length + 1}</span>
              </h3>
              <button
                type="button"
                className={`${css.row} ${css.leaderRow}`}
                onClick={() => { openLeader(leaderId) }}
                aria-label={t('member.openLeader')}
                aria-current={currentId === leaderId}
                style={stagger(0)}
              >
                <span className={css.rowIcon}><IconTeamLeader16 size={16} /></span>
                <span className={css.rowMain}>
                  <span className={css.rowName}>{t('member.leader')}</span>
                </span>
                <span className={css.statusSlot} title={t(leaderRunning ? 'status.running' : 'status.idle')}>
                  <StateDot state={leaderRunning ? 'ongoing' : 'done'} size={8} />
                </span>
              </button>
              {members.map((member, index) => (
                <MemberRow
                  key={member.memberId}
                  member={member}
                  index={index + 1}
                  current={currentId === member.memberId}
                  running={sessions.byId[member.memberId as SessionId]?.running === true}
                  onOpen={() => { openMember(leaderId, member.memberId) }}
                  t={t}
                />
              ))}
            </section>

            <section className={css.section} aria-label={t('panel.tasks')}>
              <h3 className={css.sectionTitle}>
                {t('panel.tasks')}
                {tasks.length > 0 && <span className={css.sectionCount}>{openTasks}/{tasks.length}</span>}
              </h3>
              {tasks.length === 0
                ? <p className={css.empty}>{t('panel.noTasks')}</p>
                : tasks.map((task, index) => (
                  <TaskRow key={task.taskId} task={task} index={index} names={names} t={t} />
                ))}
            </section>

            <section className={css.section} aria-label={t('panel.messages')}>
              <h3 className={css.sectionTitle}>{t('panel.messages')}</h3>
              {messages.length === 0
                ? <p className={css.empty}>{t('panel.noMessages')}</p>
                : messages.map((message, index) => (
                  <MessageRow
                    key={message.messageId}
                    message={message}
                    index={index}
                    names={names}
                    leaderLabel={t('member.leader')}
                    t={t}
                  />
                ))}
            </section>
          </div>
        </section>
      )}

      <button
        type="button"
        className={[css.button, css.buttonOn, running > 0 ? css.buttonBusy : '', open ? css.buttonOpen : ''].join(' ')}
        onClick={() => { setOpen(value => !value) }}
        aria-label={t('button.title')}
        aria-expanded={open}
        aria-controls={PANEL_ID}
        title={t('button.title')}
      >
        <IconTeam16 size={19} className={css.buttonIcon} />
        <span className={css.badge}>{running > 0 ? running : members.length}</span>
      </button>
    </div>
  )
}

/** One teammate row: identity, relation, live state, and its transcript. */
function MemberRow(props: {
  readonly member: TeamMemberView
  readonly index: number
  readonly current: boolean
  readonly running: boolean
  readonly onOpen: () => void
  readonly t: Translate
}) {
  const { member, index, current, running, onOpen, t } = props
  return (
    <button
      type="button"
      className={css.row}
      onClick={onOpen}
      aria-label={t('member.open', { name: member.name })}
      aria-current={current}
      style={stagger(index)}
    >
      <span className={css.rowIcon}><IconTeammate16 size={16} /></span>
      <span className={css.rowMain}>
        <span className={css.rowName}>{member.name}</span>
        <span className={css.rowMeta}>{meta(member.role, member.model, member.effort)}</span>
      </span>
      <span className={`${css.pill} ${member.relation === 'peer' ? css.pillPeer : ''}`}>
        {member.relation === 'peer' ? t('relation.peer') : t('relation.managed')}
      </span>
      <span
        className={`${css.statusSlot} ${running ? css.statusRunning : ''}`}
        title={t(running ? 'status.running' : 'status.idle')}
      >
        <StateDot state={running ? 'ongoing' : 'done'} size={8} />
      </span>
    </button>
  )
}

/** One shared-task row. */
function TaskRow(props: {
  readonly task: TeamTaskView
  readonly index: number
  readonly names: ReadonlyMap<string, string>
  readonly t: Translate
}) {
  const { task, index, names, t } = props
  const dot = task.status === 'done' ? 'done' : task.status === 'active' ? 'ongoing' : 'warning'
  const label = task.status === 'done' ? 'task.done' : task.status === 'active' ? 'task.active' : 'task.pending'
  return (
    <div
      className={`${css.taskRow} ${task.status === 'done' ? css.taskDone : ''}`}
      data-task-status={task.status}
      style={stagger(index)}
    >
      <span className={css.rowIcon}><IconTeamTask16 size={14} /></span>
      <span className={css.taskTitle} title={task.title}>{task.title}</span>
      <span className={css.taskAssignee}>
        {task.assigneeId === undefined ? t('task.unassigned') : names.get(task.assigneeId) ?? task.assigneeId.slice(0, 6)}
      </span>
      <span className={css.statusSlot} title={t(label)}><StateDot state={dot} size={8} /></span>
    </div>
  )
}

/** One mailbox row, oriented from the leader's point of view. */
function MessageRow(props: {
  readonly message: TeamMessageView
  readonly index: number
  readonly names: ReadonlyMap<string, string>
  readonly leaderLabel: string
  readonly t: Translate
}) {
  const { message, index, names, leaderLabel, t } = props
  const label = (id: string | undefined): string =>
    id === undefined ? leaderLabel : names.get(id) ?? id.slice(0, 6)
  const outbound = message.from === undefined
  return (
    <div
      className={`${css.messageRow} ${outbound ? css.messageOut : ''}`}
      data-message-kind={message.kind}
      style={stagger(index)}
    >
      <span className={css.messageIcon}>
        {outbound ? <IconTeamSend16 size={13} /> : <IconTeamMessage16 size={13} />}
      </span>
      <span className={css.messageBody}>
        <span className={css.messageDirection}>
          {label(message.from)}
          <span className={css.messageArrow}>→</span>
          {label(message.to)}
          {message.kind !== 'message' && (
            <span className={css.messageKind}>
              {message.kind === 'report' ? t('message.report') : t('message.settled')}
            </span>
          )}
        </span>
        <span className={css.messageText}>{message.text}</span>
      </span>
      <span className={css.messageTime}>{clock(message.time)}</span>
    </div>
  )
}
