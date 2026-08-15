/**
 * ic_ds_team_* glyphs for the agent-team stage view. Same language as the
 * shipped icon set: 16px viewBox, single-color outline, fill=currentColor.
 */
import type { CSSProperties } from 'react'

export interface TeamIconProps {
  readonly size?: number
  readonly className?: string
  readonly style?: CSSProperties
}

/** Leader crown: three-point crown over a base band. */
export function IconTeamLeader16({ size = 16, className, style }: TeamIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.8 5.1 2.8 10.9 13.2 10.9 13.2 5.1 10.9 6.9 8 4.2 5.1 6.9 Z M1.8 4.05 C 1.8 3.45 2.55 3.15 2.95 3.6 L 5.2 6.05 8 3.35 10.8 6.05 13.05 3.6 C 13.45 3.15 14.2 3.45 14.2 4.05 L 14.2 11.4 C 14.2 11.68 13.98 11.9 13.7 11.9 L 2.3 11.9 C 2.02 11.9 1.8 11.68 1.8 11.4 Z M1.4 12.6 L 14.6 12.6 L 14.6 14.2 L 1.4 14.2 Z"
        fill="currentColor"
      />
    </svg>
  )
}


/** Team mailbox: envelope with a delivery arrow entering the slot. */
export function IconTeamMailbox16({ size = 16, className, style }: TeamIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.6 3.7 L 14.4 3.7 C 14.62 3.7 14.8 3.88 14.8 4.1 L 14.8 11.6 C 14.8 11.82 14.62 12 14.4 12 L 1.6 12 C 1.38 12 1.2 11.82 1.2 11.6 L 1.2 4.1 C 1.2 3.88 1.38 3.7 1.6 3.7 Z M2.2 5.35 L 8 9.15 13.8 5.35 L 13.8 10.9 L 2.2 10.9 Z M1.2 3.2 C 1.2 2.92 1.42 2.7 1.7 2.7 L 14.3 2.7 C 14.58 2.7 14.8 2.92 14.8 3.2 L 14.8 3.2 C 14.8 3.48 14.58 3.7 14.3 3.7 L 1.7 3.7 C 1.42 3.7 1.2 3.48 1.2 3.2 Z M6.5 1.1 C 6.78 1.1 7 1.32 7 1.6 L 7 2.3 L 5 2.3 L 5 1.6 C 5 1.32 5.22 1.1 5.5 1.1 Z M10.7 1.1 C 10.98 1.1 11.2 1.32 11.2 1.6 L 11.2 2.3 L 9.2 2.3 L 9.2 1.6 C 9.2 1.32 9.42 1.1 9.7 1.1 Z"
        fill="currentColor"
      />
    </svg>
  )
}


/** Team task: clipboard with a check stroke. */
export function IconTeamTask16({ size = 16, className, style }: TeamIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 1.1 C 5.22 1.1 5.4 1.28 5.4 1.5 L 5.4 2.4 L 10.6 2.4 L 10.6 1.5 C 10.6 1.28 10.78 1.1 11 1.1 C 11.22 1.1 11.4 1.28 11.4 1.5 L 11.4 2.4 L 12.6 2.4 C 12.88 2.4 13.1 2.62 13.1 2.9 L 13.1 14.1 C 13.1 14.38 12.88 14.6 12.6 14.6 L 3.4 14.6 C 3.12 14.6 2.9 14.38 2.9 14.1 L 2.9 2.9 C 2.9 2.62 3.12 2.4 3.4 2.4 L 4.6 2.4 L 4.6 1.5 C 4.6 1.28 4.78 1.1 5 1.1 Z M3.7 3.4 L 3.7 13.8 L 12.3 13.8 L 12.3 3.4 L 3.7 3.4 Z M10.4 6.4 C 10.62 6.4 10.8 6.58 10.8 6.8 L 10.8 7.9 C 10.8 8.12 10.62 8.3 10.4 8.3 L 6.1 8.3 C 5.88 8.3 5.7 8.12 5.7 7.9 L 5.7 6.8 C 5.7 6.58 5.88 6.4 6.1 6.4 Z M5.6 8.9 L 7 10.3 L 9.7 7.6 L 8.65 6.55 L 7 8.2 L 6.65 7.85 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Team peer link: two nodes joined by a horizontal link. */
export function IconTeamPeer16({ size = 16, className, style }: TeamIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.6 4.2 C 2.72 4.2 2 4.92 2 5.8 C 2 6.68 2.72 7.4 3.6 7.4 C 4.48 7.4 5.2 6.68 5.2 5.8 C 5.2 4.92 4.48 4.2 3.6 4.2 Z M1 5.8 C 1 4.36 2.16 3.2 3.6 3.2 C 5.04 3.2 6.2 4.36 6.2 5.8 C 6.2 7.24 5.04 8.4 3.6 8.4 C 2.16 8.4 1 7.24 1 5.8 Z M12.4 8.6 C 11.52 8.6 10.8 9.32 10.8 10.2 C 10.8 11.08 11.52 11.8 12.4 11.8 C 13.28 11.8 14 11.08 14 10.2 C 14 9.32 13.28 8.6 12.4 8.6 Z M9.8 10.2 C 9.8 8.76 10.96 7.6 12.4 7.6 C 13.84 7.6 15 8.76 15 10.2 C 15 11.64 13.84 12.8 12.4 12.8 C 10.96 12.8 9.8 11.64 9.8 10.2 Z M5.9 8.1 L 10.1 9.9 L 10.1 8.2 L 5.9 6.4 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Team message: paper plane with a motion trail. */
export function IconTeamMessage16({ size = 16, className, style }: TeamIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.9 1.4 C 14.12 1.4 14.3 1.58 14.3 1.8 C 14.3 1.88 14.28 1.96 14.25 2.04 L 10.35 14.04 C 10.24 14.36 9.88 14.5 9.6 14.34 C 9.47 14.27 9.38 14.14 9.35 14 L 7.8 8.8 L 2.6 7.25 C 2.34 7.17 2.17 6.9 2.22 6.63 C 2.25 6.5 2.34 6.39 2.46 6.33 L 14.46 2.33 C 14.62 2.28 14.78 2.33 14.9 2.45 Z M4.5 6.4 L 7.9 7.7 L 8.6 11.9 L 11.8 3.4 Z M8.4 8.1 L 12.4 4.2 L 7.1 6.1 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** The team mark: three nodes around a hub. */
export function IconTeam16({ size = 16, className, style }: TeamIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 1.2 C 8.28 1.2 8.5 1.42 8.5 1.7 L 8.5 4 L 11.2 4 C 11.48 4 11.7 4.22 11.7 4.5 C 11.7 4.78 11.48 5 11.2 5 L 8.5 5 L 8.5 7.7 C 8.5 7.98 8.28 8.2 8 8.2 C 7.72 8.2 7.5 7.98 7.5 7.7 L 7.5 5 L 4.8 5 C 4.52 5 4.3 4.78 4.3 4.5 C 4.3 4.22 4.52 4 4.8 4 L 7.5 4 L 7.5 1.7 C 7.5 1.42 7.72 1.2 8 1.2 Z M2.6 9.4 C 2.88 9.4 3.1 9.62 3.1 9.9 L 3.1 11.5 L 4.7 11.5 C 4.98 11.5 5.2 11.72 5.2 12 C 5.2 12.28 4.98 12.5 4.7 12.5 L 3.1 12.5 L 3.1 14.1 C 3.1 14.38 2.88 14.6 2.6 14.6 C 2.32 14.6 2.1 14.38 2.1 14.1 L 2.1 12.5 L 0.5 12.5 C 0.22 12.5 0 12.28 0 12 C 0 11.72 0.22 11.5 0.5 11.5 L 2.1 11.5 L 2.1 9.9 C 2.1 9.62 2.32 9.4 2.6 9.4 Z M12.9 8.9 C 13.18 8.9 13.4 9.12 13.4 9.4 L 13.4 10.8 L 14.8 10.8 C 15.08 10.8 15.3 11.02 15.3 11.3 C 15.3 11.58 15.08 11.8 14.8 11.8 L 13.4 11.8 L 13.4 13.2 C 13.4 13.48 13.18 13.7 12.9 13.7 C 12.62 13.7 12.4 13.48 12.4 13.2 L 12.4 11.8 L 11 11.8 C 10.72 11.8 10.5 11.58 10.5 11.3 C 10.5 11.02 10.72 10.8 11 10.8 L 12.4 10.8 L 12.4 9.4 C 12.4 9.12 12.62 8.9 12.9 8.9 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Mailbox-send glyph for the roster mail affordance. */
export function IconTeamSend16({ size = 16, className, style }: TeamIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.7 1.1 C 7.98 1.1 8.2 1.32 8.2 1.6 L 8.2 6.1 L 10.9 3.4 C 11.1 3.2 11.4 3.2 11.6 3.4 C 11.8 3.6 11.8 3.9 11.6 4.1 L 8.7 7 L 11.6 9.9 C 11.8 10.1 11.8 10.4 11.6 10.6 C 11.4 10.8 11.1 10.8 10.9 10.6 L 8.2 7.9 L 8.2 12.4 C 8.2 12.68 7.98 12.9 7.7 12.9 C 7.42 12.9 7.2 12.68 7.2 12.4 L 7.2 7.9 L 4.5 10.6 C 4.3 10.8 4 10.8 3.8 10.6 C 3.6 10.4 3.6 10.1 3.8 9.9 L 6.7 7 L 3.8 4.1 C 3.6 3.9 3.6 3.6 3.8 3.4 C 4 3.2 4.3 3.2 4.5 3.4 L 7.2 6.1 L 7.2 1.6 C 7.2 1.32 7.42 1.1 7.7 1.1 Z M0.8 13.6 C 1.08 13.6 1.3 13.82 1.3 14.1 C 1.3 14.38 1.08 14.6 0.8 14.6 C 0.52 14.6 0.3 14.38 0.3 14.1 C 0.3 13.82 0.52 13.6 0.8 13.6 Z"
        fill="currentColor"
      />
    </svg>
  )
}


/** Theater-mode corners: the room stretched to the whole window. */
export function IconTeamExpand16({ size = 16, className, style }: TeamIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.8 6.2 L1.8 2.3 C1.8 2.02 2.02 1.8 2.3 1.8 L6.2 1.8 L6.2 2.8 L2.8 2.8 L2.8 6.2 Z M9.8 1.8 L13.7 1.8 C13.98 1.8 14.2 2.02 14.2 2.3 L14.2 6.2 L13.2 6.2 L13.2 2.8 L9.8 2.8 Z M14.2 9.8 L14.2 13.7 C14.2 13.98 13.98 14.2 13.7 14.2 L9.8 14.2 L9.8 13.2 L13.2 13.2 L13.2 9.8 Z M6.2 14.2 L2.3 14.2 C2.02 14.2 1.8 13.98 1.8 13.7 L1.8 9.8 L2.8 9.8 L2.8 13.2 L6.2 13.2 Z"
        fill="currentColor"
      />
    </svg>
  )
}

/** Team workspace: a shared board with two pinned notes. */
export function IconTeamWorkspace16({ size = 16, className, style }: TeamIconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style} aria-hidden>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.1 2.4 C 1.82 2.4 1.6 2.62 1.6 2.9 L 1.6 12.2 C 1.6 12.48 1.82 12.7 2.1 12.7 L 13.9 12.7 C 14.18 12.7 14.4 12.48 14.4 12.2 L 14.4 2.9 C 14.4 2.62 14.18 2.4 13.9 2.4 Z M2.6 3.4 L 13.4 3.4 L 13.4 11.7 L 2.6 11.7 Z M4.2 5 L 7.4 5 C 7.62 5 7.8 5.18 7.8 5.4 L 7.8 8 C 7.8 8.22 7.62 8.4 7.4 8.4 L 4.2 8.4 C 3.98 8.4 3.8 8.22 3.8 8 L 3.8 5.4 C 3.8 5.18 3.98 5 4.2 5 Z M9.1 5 L 11.8 5 C 12.02 5 12.2 5.18 12.2 5.4 C 12.2 5.62 12.02 5.8 11.8 5.8 L 9.1 5.8 C 8.88 5.8 8.7 5.62 8.7 5.4 C 8.7 5.18 8.88 5 9.1 5 Z M9.1 6.9 L 11.8 6.9 C 12.02 6.9 12.2 7.08 12.2 7.3 C 12.2 7.52 12.02 7.7 11.8 7.7 L 9.1 7.7 C 8.88 7.7 8.7 7.52 8.7 7.3 C 8.7 7.08 8.88 6.9 9.1 6.9 Z M4.2 9.5 L 11.8 9.5 C 12.02 9.5 12.2 9.68 12.2 9.9 C 12.2 10.12 12.02 10.3 11.8 10.3 L 4.2 10.3 C 3.98 10.3 3.8 10.12 3.8 9.9 C 3.8 9.68 3.98 9.5 4.2 9.5 Z M6.6 13.6 L 9.4 13.6 L 9.4 14.6 L 6.6 14.6 Z"
        fill="currentColor"
      />
    </svg>
  )
}
