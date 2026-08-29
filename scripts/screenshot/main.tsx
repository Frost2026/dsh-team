/**
 * Mount the agent-team stage over one representative team snapshot, exactly
 * the way the web shell does it — theme tokens on the root, then the stage
 * with the projected state and the locale dictionary. The shell's platform
 * modules (state store, translator) are trued up by the vite aliases.
 */
import { createElement } from 'react'
import { createRoot } from 'react-dom/client'
import { TeamStage } from '../../src/client/TeamStage.tsx'
import { zh } from '../../src/client/locales.ts'
import { crewState, sessionState } from './fixture'
import { themeTokens } from './theme'

for (const [name, value] of Object.entries(themeTokens)) {
  document.documentElement.style.setProperty(name, value)
}
document.documentElement.style.fontFamily =
  "system-ui, -apple-system, 'Noto Sans CJK SC', sans-serif"

const translate = (key: string, params?: Record<string, string | number>): string => {
  const text = (zh as Record<string, string>)[key] ?? key
  return params === undefined ? text
    : Object.entries(params).reduce((line, [name, value]) =>
        line.replaceAll(`{${name}}`, String(value)), text)
}

createRoot(document.getElementById('stage')!).render(
  createElement(TeamStage, {
    useTeam: (select: (snap: typeof crewState) => unknown) => select(crewState),
    useSessions: (select: (snap: ReturnType<typeof sessionState>) => unknown) => select(sessionState()),
    openMember: () => {},
    openLeader: () => {},
    t: translate,
  }),
)
