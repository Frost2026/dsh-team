/**
 * The team's cast: one crew member per seat, and a different sea-creature
 * hood per seat, so a member is recognizable in the room before its nameplate
 * is read.
 *
 * Every character is a person — shoes, trousers, a shirt, arms at its sides —
 * wearing a whale or shark as a hood: the hood is drawn in profile, snout
 * forward and flukes over the back of the head, because a whale reads as a
 * whale from the side and as a blob from the front. The face looks out from
 * under its chin. A kind is what the hood adds (a dorsal fin, a tusk, a
 * blowhole spout, a blocky brow, gill slits), never a different body: one
 * figure, seven hoods. Legs and arms are their own groups so the stylesheet
 * can swing them while the member walks.
 *
 * A member at work is drawn from BEHIND: the screen faces the room, so its
 * owner faces the screen. The back view keeps the same figure and turns the
 * hood the other way — snout toward the monitor on its left — so the hood is
 * still read in profile while the human face, which nobody needs while somebody
 * is typing, is simply not there to draw.
 */
import type { CSSProperties } from 'react'
import css from './TeamStage.module.css'

/** The sea-creature hoods a seat can wear, in the order seats take them. */
export const MASKS = ['blue', 'orca', 'humpback', 'narwhal', 'beluga', 'sperm', 'shark'] as const

/** One kind of sea-creature hood. */
export type MaskKind = typeof MASKS[number]

/** Hue shifts of the room's colour, one per seat: stable, distinct, theme-owned. */
const ACCENTS = [0, 46, 96, 148, 200, 252, 296, 330] as const

/**
 * The seat's own accent, as a style object: the room's one saturated token
 * turned by this much, never a literal color, so a theme change carries every
 * member along. The leader keeps the unturned blue its whale is named for, and
 * the teammates start one step past it.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the custom property the stage styles read.
 */
export function accentOf(seat: number): CSSProperties {
  const shift = seat < 0 ? 0 : ACCENTS[(seat + 1) % ACCENTS.length] ?? 0
  return { '--team-accent-shift': `${shift}deg` } as CSSProperties
}

/**
 * The hood one seat wears: the leader takes the blue whale the room is built
 * around, teammates take the rest in roster order.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the kind.
 */
export function maskOf(seat: number): MaskKind {
  if (seat < 0) return 'blue'
  return MASKS[(seat + 1) % MASKS.length] ?? 'blue'
}

/** The whale worn as a hood: flukes at the left, snout out to the right. */
const WHALE = 'M10 10 C10 -6 21 -16 37 -16 C51 -16 61 -8 65 2 '
  + 'C66.5 5 65 9 61 9.5 C52 11 44 15 36 20 C28 25 19 26 14 24 '
  + 'C10.5 22 10 17 10 10 Z'

/** The flukes, one lobe over the back of the head and one below it. */
const FLUKES = 'M11 3 C5 -1 1 -7 0 -14 C6 -11 10 -6 13 -1 Z '
  + 'M10 14 C5 17 1 22 -1 28 C5 27 10 23 13.5 18 Z'

/** The pale underside, from the throat to the tip of the jaw. */
const BELLY = 'M15 21 C21 24 29 23 36 19 C43 15 52 10.5 60 9.5 '
  + 'C52 15 44 19 36 22.5 C28 26 19 26 15 21 Z'

/** The shirt: shoulders, a straight body, a hem over the hips. */
const SHIRT = 'M32 46 C40 46 45.5 50.5 46.5 58.5 L47.5 76 C47.5 79 45.8 80.5 42.8 80.5 '
  + 'L21.2 80.5 C18.2 80.5 16.5 79 16.5 76 L17.5 58.5 C18.5 50.5 24 46 32 46 Z'

/**
 * The back of the head: hair, cut in a fringe. A member at its own computer is
 * seen from behind, and the one thing a head shows from behind is hair — a
 * blank skin oval under the hood reads as the back of a mannequin.
 */
const HAIR = 'M18 30 C18 18 23 11.5 32 11.5 C41 11.5 46 18 46 30 C46 34 44.5 36.5 42 36.5 '
  + 'C39 36.5 38 33.5 35 33.5 C32 33.5 31 36.5 28 36.5 C25 36.5 24 33.5 22 33.5 '
  + 'C20 33.5 19 35 18 35 Z'

/** A soft highlight across the crown of the hair. */
const HAIR_SHINE = 'M24 21 C26 16 29 13.5 33 13 C30.5 16.5 28.5 20 27.5 24 Z'

/** A cool highlight along the whale hood's back, so it reads as a smooth hood. */
const HOOD_SHEEN = 'M17 -3 C18 -10 23 -15 30 -16 C25 -12 21 -8 19 -2 Z'

/** A soft shadow under the whale's jaw, where the hood meets the collar. */
const HOOD_SHADE = 'M14 21 C20 24.5 28 24.5 35 21.5 C42 18.5 50 14 59 11 '
  + 'C52 15.5 45 18.5 38 21 C30 23.8 21 24.5 14 21 Z'

/** What one kind wears behind the whale, so its base merges into the hood. */
function behind(kind: MaskKind) {
  switch (kind) {
    case 'orca':
      return <path className={css.crewHood} d="M26 -12 C27 -22 32 -29 40 -32 C37 -24 33 -17 32 -12 Z" />
    case 'humpback':
      // The long pectoral flipper, swept forward under the throat: the whale's
      // belly already lies over the person's brow, so the only room left for a
      // fin that reads at this size is in front of the jaw.
      return <path className={css.crewHood} d="M43 16 C50 20 56 26 60 34 C58 24 52 17 45 13 Z" />
    case 'narwhal':
      return <path className={css.crewTusk} d="M63 6 L81 -2" />
    case 'sperm':
      return <path className={css.crewHood} d="M40 -15 L58 -15 C62 -15 65 -12 65 -8 L65 9.5 C56 10.5 47 14 40 17 Z" />
    case 'shark':
      // A taller, swept-back dorsal fin: the silhouette that says "shark".
      return <path className={css.crewHood} d="M36 -20 C38 -27 43 -32 51 -34 C48 -25 44 -18 40 -11 Z" />
    case 'beluga':
    case 'blue':
    default:
      return null
  }
}

/** What one kind adds over the whale. */
function front(kind: MaskKind) {
  switch (kind) {
    case 'orca':
      return <ellipse className={css.crewPatch} cx="47" cy="-4" rx="6.5" ry="3.2" transform="rotate(-16 47 -4)" />
    case 'humpback':
      return (
        <>
          {[[45, -6], [51, -2], [56, 1], [60, 3.5]].map(([x, y]) => (
            <circle key={`${x}`} className={css.crewKnob} cx={x} cy={y} r="1.5" />
          ))}
        </>
      )
    case 'beluga':
      return <path className={css.crewMelon} d="M22 -9 C28 -18 42 -18 50 -11 C40 -12.5 29 -11.5 22 -9 Z" />
    case 'shark':
      return (
        <>
          <path className={css.crewGill} d="M39 5 C41.5 6.5 41.5 9.5 39 11" />
          <path className={css.crewGill} d="M43 4 C45.5 5.5 45.5 8.5 43 10" />
          <path className={css.crewGill} d="M47 3.5 C49 5 49 7.5 47 9" />
        </>
      )
    case 'blue':
      return (
        <>
          <path className={css.crewSpout} d="M44 -15 C43 -21 42 -25 39 -28" />
          <path className={css.crewSpout} d="M44 -15 C46 -21 48 -24 52 -26" />
          <path className={css.crewSpout} d="M44 -15 C41 -19 38 -21 34 -22" />
        </>
      )
    default:
      return null
  }
}

/**
 * The head. Face on: the person looks out from under the whale's chin. From
 * behind — which is how you see somebody who is at their own computer — there
 * is no face to draw, both ears show, the back of the head has hair on it, and
 * the whale looks the other way.
 */
function head(kind: MaskKind, back: boolean) {
  return (
    <>
      <ellipse className={css.crewEar} cx="17.5" cy="32" rx="3.4" ry="3.8" />
      {back && <ellipse className={css.crewEar} cx="46.5" cy="32" rx="3.4" ry="3.8" />}
      <path
        className={css.crewFace}
        d="M32 12 C41.5 12 46 20 46 29 C46 38.5 40 44 32 44 C24 44 18 38.5 18 29 C18 20 22.5 12 32 12 Z"
      />
      {back
        ? (
          <>
            <path className={css.crewHair} d={HAIR} />
            <path className={css.crewHairShine} d={HAIR_SHINE} />
          </>
        )
        : (
          <>
            <path className={css.crewBrow} d="M22 25.5 Q26 23 30.2 24.6" />
            <path className={css.crewBrow} d="M33.8 24.6 Q38 23 42 25.5" />
            <circle className={css.crewPupil} cx="27" cy="30" r="1.5" />
            <circle className={css.crewPupil} cx="37" cy="30" r="1.5" />
            <circle className={css.crewEyeGlint} cx="27.6" cy="29.4" r="0.55" />
            <circle className={css.crewEyeGlint} cx="37.6" cy="29.4" r="0.55" />
            <path className={css.crewSmile} d="M28.5 35.5 Q32 38.5 35.5 35.5" />
            <circle className={css.crewBlush} cx="21.5" cy="33" r="1.9" />
            <circle className={css.crewBlush} cx="42.5" cy="33" r="1.9" />
          </>
        )}
      {/* The whale is worn in profile either way, pulled down over the brow so
          it reads as a hood rather than a hat; from behind it faces the other
          side, which is what turning around does to a hood. */}
      <g transform={back ? 'translate(64 3) scale(-1 1)' : 'translate(0 3)'}>
        {behind(kind)}
        <path className={css.crewHood} d={WHALE} />
        <path className={css.crewHood} d={FLUKES} />
        <path className={css.crewBelly} d={BELLY} />
        {front(kind)}
        <path className={css.crewHoodSheen} d={HOOD_SHEEN} />
        <path className={css.crewHoodShade} d={HOOD_SHADE} />
        <circle className={css.crewEye} cx="53" cy="0" r="2.6" />
        <circle className={css.crewPupil} cx="53.7" cy="0.4" r="1.2" />
        <circle className={css.crewEyeGlint} cx="54.2" cy="-0.1" r="0.45" />
        <path className={css.crewMouth} d="M49 9.6 C54 7.7 59 6.1 63 5.7" />
      </g>
    </>
  )
}

/**
 * One member of the crew.
 * @param props - the whale it wears, whether you are behind it, whether only
 * the head is wanted (a portrait), and the class the room sizes it with.
 * @returns the character.
 */
export function Crew(props: {
  readonly kind: MaskKind
  readonly className?: string
  /** Seen from behind: the pose of somebody facing their own computer. */
  readonly back?: boolean
  /** A portrait: the hooded head alone, framed for a small round avatar. */
  readonly portrait?: boolean
}) {
  const { kind, className, back = false, portrait = false } = props
  return (
    <svg
      className={`${css.crew} ${className ?? ''}`}
      viewBox={portrait ? '-1 -20 70 70' : '-6 -26 80 134'}
      data-kind={kind}
      data-back={back ? 'true' : undefined}
      aria-hidden
      focusable="false"
    >
      {!portrait && (
        <>
          <g className={css.crewLimbBack}>
            <rect className={css.crewTrouser} x="22.5" y="70" width="8.6" height="27" rx="3.8" />
            <path className={css.crewShoe} d="M22.5 91 H31.1 V97 Q31.1 100 27.6 100 H20.4 Q18.8 100 18.8 98.4 Q18.8 96.6 20.8 95.6 L22.5 94.6 Z" />
          </g>
          <g className={css.crewLimbFront}>
            <rect className={css.crewTrouser} x="32.9" y="70" width="8.6" height="27" rx="3.8" />
            <path className={css.crewShoe} d="M41.5 91 H32.9 V97 Q32.9 100 36.4 100 H43.6 Q45.2 100 45.2 98.4 Q45.2 96.6 43.2 95.6 L41.5 94.6 Z" />
          </g>
          <g className={css.crewArmBack}>
            <rect className={css.crewSleeve} x="12" y="53" width="7.8" height="22" rx="3.9" />
            <circle className={css.crewHand} cx="15.9" cy="76.5" r="3.8" />
          </g>
          <g className={css.crewArmFront}>
            <rect className={css.crewSleeve} x="44.2" y="53" width="7.8" height="22" rx="3.9" />
            <circle className={css.crewHand} cx="48.1" cy="76.5" r="3.8" />
          </g>
          <rect className={css.crewNeck} x="28.2" y="40" width="7.6" height="11" rx="3.2" />
          <path className={css.crewShirt} d={SHIRT} />
          {back
            ? (
              <>
                <path className={css.crewCollar} d="M25 49 L39 49" />
                <path className={css.crewStitch} d="M26 57 C29 60 35 60 38 57" />
              </>
            )
            : (
              <>
                <path className={css.crewCollar} d="M25.5 48.5 C28 52.5 36 52.5 38.5 48.5" />
                <path className={css.crewPlacket} d="M32 50 L32 79" />
                <circle className={css.crewButton} cx="32" cy="55" r="0.8" />
                <circle className={css.crewButton} cx="32" cy="63" r="0.8" />
                <circle className={css.crewButton} cx="32" cy="71" r="0.8" />
              </>
            )}
        </>
      )}
      {head(kind, back)}
    </svg>
  )
}
