/** Locale copy for the agent-team floating surface. Product copy is Chinese. */
export const NS = 'team'

export const zh = {
  'button.close': '关闭团队面板',
  'button.title': 'Agent 团队',
  'panel.title': 'Agent 团队',
  'panel.members': '成员',
  'panel.tasks': '任务',
  'panel.messages': '消息流',
  'panel.noTasks': '暂无任务',
  'panel.noMessages': '暂无消息',
  'panel.running': '{count} 名成员工作中',
  'panel.idle': '全部空闲',
  'member.leader': '主会话',
  'member.open': '打开 {name} 的会话',
  'member.openLeader': '回到主会话',
  'relation.managed': '受管',
  'relation.peer': '同级',
  'status.running': '工作中',
  'status.idle': '空闲',
  'task.pending': '待办',
  'task.active': '进行中',
  'task.done': '已完成',
  'task.unassigned': '未指派',
  'message.report': '汇报',
  'message.settled': '已收工',
} as const

/** The namespace's dictionary key union (literal keys, locale-typed seats). */
export type TeamKey = keyof typeof zh

export const en: Record<TeamKey, string> = {
  'button.close': 'Close the team panel',
  'button.title': 'Agent team',
  'panel.title': 'Agent team',
  'panel.members': 'Members',
  'panel.tasks': 'Tasks',
  'panel.messages': 'Mailbox',
  'panel.noTasks': 'No tasks yet',
  'panel.noMessages': 'No messages yet',
  'panel.running': '{count} working',
  'panel.idle': 'All idle',
  'member.leader': 'Main session',
  'member.open': 'Open the session of {name}',
  'member.openLeader': 'Back to the main session',
  'relation.managed': 'Managed',
  'relation.peer': 'Peer',
  'status.running': 'Working',
  'status.idle': 'Idle',
  'task.pending': 'To do',
  'task.active': 'In progress',
  'task.done': 'Done',
  'task.unassigned': 'Unassigned',
  'message.report': 'report',
  'message.settled': 'finished',
}
