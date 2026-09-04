import { useEffect, useState } from 'react'

export function TeamSettingsCard() {
  const [prompt, setPrompt] = useState<string>('')
  const [defaultPrompt, setDefaultPrompt] = useState<string>('')
  const [isCustom, setIsCustom] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)
  const [saving, setSaving] = useState<boolean>(false)
  const [notice, setNotice] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  useEffect(() => {
    fetch('/api/team/leader-prompt')
      .then(res => res.json())
      .then(data => {
        if (data.ok) {
          setPrompt(data.prompt || '')
          setDefaultPrompt(data.defaultPrompt || '')
          setIsCustom(Boolean(data.isCustom))
        }
      })
      .catch(err => {
        setNotice({ text: '加载提示词配置失败: ' + String(err), type: 'error' })
      })
      .finally(() => setLoading(false))
  }, [])

  const handleSave = async () => {
    setSaving(true)
    setNotice(null)
    try {
      const res = await fetch('/api/team/leader-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      })
      const data = await res.json()
      if (data.ok) {
        setIsCustom(Boolean(data.isCustom))
        setNotice({ text: '保存成功！团队 Leader 提示词已更新并立即生效。', type: 'success' })
      } else {
        setNotice({ text: '保存失败: ' + (data.error || '未知错误'), type: 'error' })
      }
    } catch (err) {
      setNotice({ text: '保存失败: ' + String(err), type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  const handleReset = async () => {
    setSaving(true)
    setNotice(null)
    try {
      const res = await fetch('/api/team/leader-prompt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: defaultPrompt, reset: true }),
      })
      const data = await res.json()
      if (data.ok) {
        setPrompt(defaultPrompt)
        setIsCustom(false)
        setNotice({ text: '已恢复为内建默认提示词！', type: 'success' })
      }
    } catch (err) {
      setNotice({ text: '恢复失败: ' + String(err), type: 'error' })
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div style={{ padding: '24px 0', color: 'var(--dsw-alias-label-secondary)' }}>
        正在读取团队配置...
      </div>
    )
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', padding: '8px 0', maxWidth: '850px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '16px' }}>
        <div>
          <h3 style={{ margin: '0 0 6px 0', fontSize: '15px', fontWeight: 600, color: 'var(--dsw-alias-label-primary)' }}>
            团队协作 (Agent Teams) Leader 提示词配置
          </h3>
          <p style={{ margin: 0, fontSize: '12px', color: 'var(--dsw-alias-label-secondary)', lineHeight: '1.6' }}>
            主会话（Leader）的系统指导提示词。指导 Agent 何时组建队伍、如何选择异构模型与 Provider、以及如何自主协调执行任务。
          </p>
        </div>
        <div style={{
          fontSize: '11px',
          padding: '2px 10px',
          borderRadius: '12px',
          backgroundColor: isCustom ? 'var(--dsw-alias-state-business-primary, #2f6fed)' : 'var(--dsw-alias-bg-layer-3, rgba(125, 125, 125, 0.15))',
          color: isCustom ? '#ffffff' : 'var(--dsw-alias-label-tertiary, #888888)',
          whiteSpace: 'nowrap',
          flexShrink: 0,
        }}>
          {isCustom ? '已启用自定义提示词' : '内建默认提示词'}
        </div>
      </div>

      <textarea
        value={prompt}
        onChange={e => {
          setPrompt(e.target.value)
          if (notice) setNotice(null)
        }}
        spellCheck={false}
        rows={16}
        style={{
          width: '100%',
          boxSizing: 'border-box',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid var(--dsw-alias-border-l2, rgba(125, 125, 125, 0.2))',
          backgroundColor: 'var(--dsw-alias-bg-layer-2, rgba(0, 0, 0, 0.05))',
          color: 'var(--dsw-alias-label-primary, inherit)',
          fontSize: '12px',
          lineHeight: '1.6',
          fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
          resize: 'vertical',
          outline: 'none',
        }}
      />

      {notice && (
        <div style={{
          fontSize: '12px',
          padding: '8px 12px',
          borderRadius: '6px',
          backgroundColor: notice.type === 'success' ? 'rgba(46, 160, 67, 0.15)' : 'rgba(218, 54, 51, 0.15)',
          color: notice.type === 'success' ? 'var(--dsw-alias-state-success-primary, #3fb950)' : 'var(--dsw-alias-state-error-primary, #f85149)',
          border: `1px solid ${notice.type === 'success' ? 'rgba(46, 160, 67, 0.3)' : 'rgba(218, 54, 51, 0.3)'}`,
        }}>
          {notice.text}
        </div>
      )}

      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <button
          type="button"
          onClick={handleSave}
          disabled={saving}
          style={{
            padding: '6px 18px',
            fontSize: '13px',
            fontWeight: 500,
            borderRadius: '6px',
            border: 'none',
            backgroundColor: 'var(--dsw-alias-brand-primary, #2f6fed)',
            color: '#ffffff',
            cursor: saving ? 'default' : 'pointer',
            opacity: saving ? 0.7 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          {saving ? '保存中...' : '保存配置'}
        </button>

        <button
          type="button"
          onClick={handleReset}
          disabled={saving || !isCustom}
          style={{
            padding: '6px 16px',
            fontSize: '13px',
            borderRadius: '6px',
            border: '1px solid var(--dsw-alias-border-l2, rgba(125, 125, 125, 0.25))',
            backgroundColor: 'transparent',
            color: 'var(--dsw-alias-label-secondary, #888888)',
            cursor: (saving || !isCustom) ? 'default' : 'pointer',
            opacity: (!isCustom || saving) ? 0.4 : 1,
            transition: 'opacity 0.2s',
          }}
        >
          恢复默认
        </button>

        <span style={{ fontSize: '11px', color: 'var(--dsw-alias-label-tertiary, #888888)', marginLeft: 'auto' }}>
          提示：保存后新建或当前主会话在下次交互时即可直接生效。
        </span>
      </div>
    </div>
  )
}
