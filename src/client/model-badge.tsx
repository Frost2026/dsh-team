import React, { useState, useSyncExternalStore } from 'react'
import { Menu, type MenuEntry } from '@deepseek-ai/dsh-client-ui-primitives'
import type { ISessions, SessionId, SnapshotStore } from '@deepseek-ai/dsh-client-runtime/client'
import type { TeamView } from '../contract.ts'
import type { TeamPanelState } from './index.ts'

export interface TeammateModelBadgeProps {
  readonly sessionId?: string | undefined
  readonly store: SnapshotStore<TeamPanelState>
  readonly sessions: ISessions
}

export function TeammateModelBadge({ sessionId, store, sessions }: TeammateModelBadgeProps) {
  const [open, setOpen] = useState(false)
  const teamState = useSyncExternalStore(store.subscribe, store.getSnapshot)
  const listState = useSyncExternalStore(sessions.list.subscribe, sessions.list.getSnapshot)

  const currentId = (sessionId ?? listState.current) as SessionId | undefined
  if (!currentId) return null

  const summary = listState.byId[currentId]
  const isSubagent = summary?.origin === 'subagent' || sessions.subagentAddress(currentId) !== undefined
  if (!isSubagent) return null

  // 1. Try finding member from current store by exact memberId
  let member = teamState.members.find((m: { readonly memberId: string }) => m.memberId === currentId)
  let isDismissed = false

  // Check if it is in current store's dismissedMembers
  if (!member && teamState.dismissedMembers) {
    const dismissed = teamState.dismissedMembers.find((m: { readonly memberId: string }) => m.memberId === currentId)
    if (dismissed) {
      member = dismissed
      isDismissed = true
    }
  }

  // 2. Fallback: try finding member from parent session's team projection by exact memberId
  if (!member && summary?.parentId) {
    const parentBinding = sessions.binding(summary.parentId as SessionId)
    if (parentBinding) {
      const parentTeam = parentBinding.session.projections.faceOf('team')?.getSnapshot() as TeamView | undefined
      if (parentTeam) {
        member = parentTeam.members.find((m: { readonly memberId: string }) => m.memberId === currentId)
        if (!member && parentTeam.dismissedMembers) {
          const dismissed = parentTeam.dismissedMembers.find((m: { readonly memberId: string }) => m.memberId === currentId)
          if (dismissed) {
            member = dismissed
            isDismissed = true
          }
        }
      }
    }
  }

  // If still not found in active members, this subagent session is an unmanaged or dismissed session
  if (!member) {
    isDismissed = true
  }

  const name = member?.name ?? (summary?.displayTitle || 'teammate')
  const provider = member?.provider ?? 'inherited'
  const model = member?.model ?? (isDismissed ? 'default (继承)' : 'default')
  const effort = member?.effort

  const label = isDismissed ? `已解散 · ${model}` : `${model}${effort ? ` · ${effort}` : ''}`

  const items: MenuEntry[] = [
    {
      type: 'label',
      id: 'header-label',
      text: isDismissed ? '子智能体配置（已解散）' : '子智能体模型配置（已锁定）',
    },
    {
      id: 'member-info',
      label: `成员：${name}`,
      disabled: true,
    },
    {
      id: 'provider-info',
      label: `提供方：${provider}`,
      disabled: true,
    },
    {
      id: 'model-info',
      label: `模型：${model}`,
      disabled: true,
    },
    ...effort ? [{
      id: 'effort-info',
      label: `推理等级：${effort}`,
      disabled: true,
    }] : [],
    {
      type: 'separator',
      id: 'sep',
    },
    {
      id: 'hint-info',
      label: isDismissed ? '该成员已在团队中解散，当前会话仅供历史查阅' : '模型在派生时已固定，切换需解散重建',
      disabled: true,
    },
  ]

  const anchor = (
    <button
      type="button"
      onClick={() => setOpen(prev => !prev)}
      aria-label={`子智能体模型: ${label}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '2px 8px',
        borderRadius: '12px',
        backgroundColor: open
          ? 'var(--dsw-alias-interactive-bg-active, rgba(125, 125, 125, 0.2))'
          : 'var(--dsw-alias-interactive-bg-hover, rgba(125, 125, 125, 0.12))',
        border: '1px solid var(--dsw-alias-border-l2, rgba(125, 125, 125, 0.25))',
        color: isDismissed ? 'var(--dsw-alias-label-tertiary, #999)' : 'var(--dsw-alias-label-secondary, #888)',
        opacity: isDismissed ? 0.65 : 1,
        fontSize: '12px',
        lineHeight: '18px',
        fontFamily: 'inherit',
        cursor: 'pointer',
        userSelect: 'none',
        marginRight: '8px',
        outline: 'none',
      }}
    >
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="currentColor"
        style={{ opacity: 0.7, flexShrink: 0 }}
      >
        <path d="M4 6V4a4 4 0 1 1 8 0v2h1a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2zm2 0h4V4a2 2 0 1 0-4 0v2z" />
      </svg>
      <span style={{ fontWeight: 500, color: 'var(--dsw-alias-label-primary, inherit)' }}>{label}</span>
      <span
        style={{
          fontSize: '10px',
          opacity: 0.7,
          padding: '0 3px',
          borderRadius: '3px',
          border: '1px solid currentColor',
          lineHeight: '12px',
        }}
      >
        {isDismissed ? '归档' : '锁定'}
      </span>
    </button>
  )

  return (
    <Menu
      open={open}
      anchor={anchor}
      items={items}
      onSelect={() => {}}
      onClose={() => setOpen(false)}
      side="top"
      align="end"
      portal={true}
      compact={true}
    />
  )
}
