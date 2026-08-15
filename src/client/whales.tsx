/**
 * The team's cast: one whale per member, and a different kind of whale per
 * seat, so a member is recognizable in the room before its nameplate is read.
 *
 * Every character stands upright like a person — a rounded body on tail-fluke
 * feet, fin arms at its sides, face forward — and shares one body path and
 * one viewBox: a kind is what it adds (a dorsal fin, a tusk, a blocky head),
 * never a different drawing. The scarf is a separate path so the member's
 * accent colors it, and the eyes close when the whale is asleep.
 */
import type { CSSProperties } from 'react'
import css from './TeamStage.module.css'

/** The kinds a seat can be given, in the order seats take them. */
export const WHALE_KINDS = ['blue', 'orca', 'humpback', 'narwhal', 'beluga', 'sperm'] as const

/** One kind of whale. */
export type WhaleKind = typeof WHALE_KINDS[number]

/** Hue shifts of the brand token, one per seat: stable, distinct, theme-owned. */
const ACCENTS = [0, 46, 96, 148, 200, 252, 296, 330] as const

/** The shared standing body: head up, shoulders wide, tapering to the tail. */
const BODY = 'M32 2 C45 2 53 13 53 28 C53 46 45 64 32 64 C19 64 11 46 11 28 C11 13 19 2 32 2 Z'

/** Tail flukes worn as feet, one lobe out each side. */
const TAIL = 'M30 60 C27 68 20 71 12 70 C18 65 23 62 26 58 Z '
  + 'M34 60 C37 68 44 71 52 70 C46 65 41 62 38 58 Z'

/** Fin arms, resting at the sides. */
const FINS = 'M13 30 C6 34 3 40 3 47 C9 43 13 38 16 33 Z '
  + 'M51 30 C58 34 61 40 61 47 C55 43 51 38 48 33 Z'

/** The lighter front every kind wears. */
const BELLY = 'M32 24 C40 24 45 34 44 46 C43 56 38 62 32 62 C26 62 21 56 20 46 C19 34 24 24 32 24 Z'

/** The scarf: a band at the neck and a loose end over the belly. */
const SCARF = 'M16 28 C22 34 42 34 48 28 M45 31 C47 36 46 41 44 45'

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

/** What one kind wears behind the body, so its base merges into the silhouette. */
function behind(kind: WhaleKind) {
  if (kind === 'orca') {
    return <path className={css.whaleBody} d="M29 2 C28 -6 30 -12 35 -15 C36 -8 35 -2 33 2.5 Z" />
  }
  return null
}

/** What one kind adds in front of the shared body. */
function front(kind: WhaleKind) {
  switch (kind) {
    case 'orca':
      return (
        <>
          <path className={css.whalePatch} d="M18 13 C21 10.5 26 10.5 28 13 C25.5 15 20.5 15.2 18 14.2 Z" />
          <path className={css.whalePatch} d="M46 13 C43 10.5 38 10.5 36 13 C38.5 15 43.5 15.2 46 14.2 Z" />
        </>
      )
    case 'humpback':
      return (
        <>
          <path className={css.whaleBody} d="M12 32 C2 38 -3 47 -1 56 C6 50 11 42 15 35 Z" />
          <path className={css.whaleBody} d="M52 32 C62 38 67 47 65 56 C58 50 53 42 49 35 Z" />
          <circle className={css.whaleEye} cx="26" cy="3.6" r="1.3" />
          <circle className={css.whaleEye} cx="32" cy="2.6" r="1.3" />
          <circle className={css.whaleEye} cx="38" cy="3.6" r="1.3" />
        </>
      )
    case 'narwhal':
      return <path className={css.whaleTusk} d="M35 2 L43 -15" />
    case 'beluga':
      return (
        <>
          <path
            className={css.whalePatch}
            d="M32 12 C42 12 48 24 47 42 C46 56 40 63 32 63 C24 63 18 56 17 42 C16 24 22 12 32 12 Z"
          />
          <path className={css.whaleLine} d="M23 9 C27 5.5 37 5.5 41 9" />
        </>
      )
    case 'sperm':
      return <path className={css.whaleBody} d="M14 2 L50 2 C52 2 53.5 4 53.5 7 L53.5 18 L10.5 18 L10.5 7 C10.5 4 12 2 14 2 Z" />
    case 'blue':
    default:
      return <path className={css.whaleCrease} d="M27 30 C27 34 27 38 27.5 41 M32 29 C32 34 32 38 32 41 M37 30 C37 34 37 38 36.5 41" />
  }
}

/**
 * One whale, standing.
 * @param props - the kind, whether it is asleep, and the class the room sizes it with.
 * @returns the character.
 */
export function Whale(props: {
  readonly kind: WhaleKind
  readonly className?: string
  readonly asleep?: boolean
}) {
  const { kind, className, asleep = false } = props
  return (
    <svg
      className={`${css.whale} ${className ?? ''}`}
      viewBox="-6 -18 76 92"
      data-kind={kind}
      aria-hidden
      focusable="false"
    >
      {behind(kind)}
      <path className={css.whaleBody} d={TAIL} />
      <path className={css.whaleBody} d={FINS} />
      <path className={css.whaleBody} d={BODY} />
      {kind === 'sperm' && front(kind)}
      <path className={css.whalePatch} d={BELLY} />
      {kind !== 'sperm' && front(kind)}
      <path className={css.whaleScarf} d={SCARF} />
      {asleep
        ? (
          <path className={css.whaleLine} d="M21.5 19 Q24 21.5 26.5 19 M37.5 19 Q40 21.5 42.5 19" />
        )
        : (
          <>
            <circle className={css.whaleEye} cx="24" cy="19" r="2.1" />
            <circle className={css.whaleEye} cx="40" cy="19" r="2.1" />
          </>
        )}
      <path className={css.whaleCrease} d="M28 25 Q32 28 36 25" />
    </svg>
  )
}
