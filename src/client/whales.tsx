/**
 * The team's cast: one whale per member, and a different kind of whale per
 * seat, so a member is recognizable in the room before its nameplate is read.
 *
 * Every silhouette shares one body path and one viewBox — a kind is what it
 * adds (a dorsal fin, a tusk, a blocky head), never a different drawing. The
 * scarf is a separate path so the member's accent colors it, and the eye
 * closes when the whale is asleep.
 */
import type { CSSProperties } from 'react'
import css from './TeamStage.module.css'

/** The kinds a seat can be given, in the order seats take them. */
export const WHALE_KINDS = ['blue', 'orca', 'humpback', 'narwhal', 'beluga', 'sperm'] as const

/** One kind of whale. */
export type WhaleKind = typeof WHALE_KINDS[number]

/** Hue shifts of the brand token, one per seat: stable, distinct, theme-owned. */
const ACCENTS = [0, 46, 96, 148, 200, 252, 296, 330] as const

/** The shared body: a lens facing right, tail flukes on the left. */
const BODY = 'M10 20 C14 11 28 7 46 8.5 C58 9.5 66 14 68 20 C66 26 58 30.5 46 31.5 C28 33 14 29 10 20 Z'

/** Tail flukes, drawn behind the body. */
const TAIL = 'M12 20 L1 10 L4 20 L1 30 Z'

/** The pectoral fin every kind but the humpback wears. */
const FIN = 'M34 29 C32 33 28 36 23 37 C27 33 30 30 32 28 Z'

/**
 * The seat's own accent, as a style object: one brand token rotated, never a
 * literal color, so a theme change carries every whale along.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the custom property the stage styles read.
 */
export function accentOf(seat: number): CSSProperties {
  const shift = seat < 0 ? 0 : ACCENTS[seat % ACCENTS.length] ?? 0
  return { '--team-accent-shift': `${shift}deg` } as CSSProperties
}

/**
 * The kind of whale one seat is: the leader is the blue whale the room is
 * built around, teammates take the rest in roster order.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the kind.
 */
export function kindOf(seat: number): WhaleKind {
  if (seat < 0) return 'blue'
  return WHALE_KINDS[(seat + 1) % WHALE_KINDS.length] ?? 'blue'
}

/** What one kind adds to the shared body. */
function extras(kind: WhaleKind) {
  switch (kind) {
    case 'orca':
      return (
        <>
          <path className={css.whaleBody} d="M30 9 L35 -7 L42 9 Z" />
          <path className={css.whalePatch} d="M20 24 C30 31 44 31 56 27 C46 32 28 33 20 27 Z" />
          <ellipse className={css.whalePatch} cx="56" cy="14" rx="5" ry="2.6" />
        </>
      )
    case 'humpback':
      return (
        <>
          <path className={css.whaleBody} d="M36 28 C30 38 18 42 8 41 C19 37 27 32 33 27 Z" />
          <circle className={css.whaleBody} cx="56" cy="10.5" r="1.8" />
          <circle className={css.whaleBody} cx="62" cy="12.5" r="1.6" />
          <circle className={css.whaleBody} cx="50" cy="9.5" r="1.6" />
        </>
      )
    case 'narwhal':
      return (
        <>
          <path className={css.whaleTusk} d="M67 16 L88 4" />
          <path className={css.whaleBody} d="M26 9 L30 3 L33 10 Z" />
        </>
      )
    case 'beluga':
      return <circle className={css.whaleBody} cx="58" cy="16" r="9.5" />
    case 'sperm':
      return (
        <>
          <path className={css.whaleBody} d="M44 7 H66 a4 4 0 0 1 4 4 v15 a4 4 0 0 1 -4 4 H44 Z" />
          <path className={css.whaleLine} d="M46 27 H66" />
        </>
      )
    case 'blue':
    default:
      return <path className={css.whaleBody} d="M24 9 L28 2 L31 10 Z" />
  }
}

/**
 * One whale.
 * @param props - the kind, whether it is asleep, and the class the room sizes it with.
 * @returns the silhouette.
 */
export function Whale(props: {
  readonly kind: WhaleKind
  readonly className?: string
  readonly asleep?: boolean
}) {
  const { kind, className, asleep = false } = props
  const eye = kind === 'sperm' ? { x: 60, y: 16 } : kind === 'beluga' ? { x: 62, y: 15 } : { x: 58, y: 17 }
  return (
    <svg
      className={`${css.whale} ${className ?? ''}`}
      viewBox="0 -10 92 54"
      data-kind={kind}
      aria-hidden
      focusable="false"
    >
      <path className={css.whaleBody} d={TAIL} />
      <path className={css.whaleBody} d={BODY} />
      {kind !== 'humpback' && <path className={css.whaleBody} d={FIN} />}
      {extras(kind)}
      <path className={css.whaleScarf} d="M43 8 C47 14 47 26 43 32" />
      {asleep
        ? <path className={css.whaleLine} d={`M${eye.x - 2.4} ${eye.y} q2.4 2 4.8 0`} />
        : <circle className={css.whaleEye} cx={eye.x} cy={eye.y} r="1.5" />}
    </svg>
  )
}
