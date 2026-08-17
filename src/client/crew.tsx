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
 * Under the hood everybody is their own person: a hairstyle, a hair colour, a
 * skin tone, an outfit, shoes and one piece of gear, all picked by seat index
 * so a member looks the same on every render and no two neighbours are twins.
 * Tone and skin ride data attributes rather than inline colours, so the theme
 * still owns the palette.
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

/** Pick the nth entry of a wardrobe rack, counting the leader as the first. */
function pick<T>(rack: readonly T[], seat: number): T {
  return rack[(Math.max(0, seat + 1)) % rack.length] ?? rack[0]!
}

/**
 * The hood one seat wears: the leader takes the blue whale the room is built
 * around, teammates take the rest in roster order.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the kind.
 */
export function maskOf(seat: number): MaskKind {
  if (seat < 0) return 'blue'
  return pick(MASKS, seat)
}

/** The outfits a seat can wear, in the order seats take them. */
export const OUTFITS = [
  'shirt', 'tee', 'sweater', 'polo', 'hoodie', 'tunic', 'vest', 'jacket', 'stripes', 'dungarees',
] as const

/** One kind of outfit. */
export type OutfitKind = typeof OUTFITS[number]

/** The shoes a seat can wear, in the order seats take them. */
export const SHOE_KINDS = ['sneaker', 'boot', 'loafer', 'hightop', 'sandal'] as const

/** One kind of shoe. */
export type ShoeKind = typeof SHOE_KINDS[number]

/** The hairstyles a seat can wear, in the order seats take them. */
export const HAIRS = ['fringe', 'bun', 'curls', 'crop', 'ponytail', 'buzz'] as const

/** One hairstyle. */
export type HairKind = typeof HAIRS[number]

/** The one thing a member carries or wears besides its clothes. */
export const GEARS = ['none', 'glasses', 'headphones', 'scarf', 'lanyard', 'backpack'] as const

/** One piece of gear. */
export type GearKind = typeof GEARS[number]

/** How many hair colours the stylesheet keeps. */
const HAIR_TONES = 5

/** How many skin tones the stylesheet keeps. */
const SKIN_TONES = 4

/**
 * The outfit one seat wears: the leader keeps the tailored shirt, teammates
 * take the rest in roster order, so a full team is not a row of identical
 * shirts.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the kind.
 */
export function outfitOf(seat: number): OutfitKind {
  if (seat < 0) return 'shirt'
  return pick(OUTFITS, seat)
}

/**
 * The shoes one seat wears; each pair is tinted by the seat's own accent.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the kind.
 */
export function shoeOf(seat: number): ShoeKind {
  if (seat < 0) return 'sneaker'
  return pick(SHOE_KINDS, seat)
}

/**
 * The hairstyle one seat wears. It is picked off a different-length rack to
 * the outfits and the hoods, so the three cycles fall out of step and two
 * members never end up dressed identically from head to foot.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the kind.
 */
export function hairOf(seat: number): HairKind {
  if (seat < 0) return 'crop'
  return pick(HAIRS, seat)
}

/**
 * Which of the stylesheet's hair colours this seat has. Hair is NOT tinted by
 * the seat accent: rotating the room's blue would give a team with green and
 * magenta hair, and the accent is already carried by the hood, the mug and the
 * shoes.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the tone index the stylesheet keys on.
 */
export function toneOf(seat: number): number {
  return (Math.max(0, seat + 1) * 3) % HAIR_TONES
}

/**
 * Which of the stylesheet's skin tones this seat has.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the tone index the stylesheet keys on.
 */
export function skinOf(seat: number): number {
  return (Math.max(0, seat + 1) * 5) % SKIN_TONES
}

/**
 * The one thing this seat wears besides its clothes. A third of the team
 * carries nothing: gear reads as a detail only while it is not universal.
 * @param seat - the member's index on the roster; the leader passes -1.
 * @returns the kind.
 */
export function gearOf(seat: number): GearKind {
  if (seat < 0) return 'lanyard'
  return pick(GEARS, seat)
}

/** One shoe path, mirrored per side. */
function shoePath(kind: ShoeKind, side: 'left' | 'right'): string {
  const flip = side === 'right'
  const inner = flip ? 32.9 : 31.1
  const outer = flip ? 45.2 : 18.8
  const toe = flip ? 41.5 : 22.5
  const way = flip ? -1 : 1
  if (kind === 'boot') {
    return `M${toe} 79 H${inner} V95 Q${inner} 100 ${inner - way * 3.5} 100 `
      + `H${outer + way * 1.6} Q${outer} 100 ${outer} 98.4 L${outer} 94 L${outer + way * 2} 92.6 L${toe} 91 Z`
  }
  if (kind === 'loafer') {
    return `M${toe} 94 H${inner} V97 Q${inner} 100 ${inner - way * 3.5} 100 `
      + `H${outer + way * 1.6} Q${outer} 100 ${outer} 98.4 Q${outer} 96.8 ${outer + way * 2} 95.9 L${toe} 94.8 Z`
  }
  if (kind === 'hightop') {
    return `M${toe} 86 H${inner} V96 Q${inner} 100 ${inner - way * 3.5} 100 `
      + `H${outer + way * 1.6} Q${outer} 100 ${outer} 98.2 Q${outer} 96 ${outer + way * 2} 95 L${toe} 93.6 Z`
  }
  if (kind === 'sandal') {
    return `M${toe} 95.5 H${inner} V97.5 Q${inner} 100 ${inner - way * 3.5} 100 `
      + `H${outer + way * 1.6} Q${outer} 100 ${outer} 98.6 Q${outer} 97.4 ${outer + way * 2} 96.8 L${toe} 96.2 Z`
  }
  return `M${toe} 91 H${inner} V97 Q${inner} 100 ${inner - way * 3.5} 100 `
    + `H${outer + way * 1.6} Q${outer} 100 ${outer} 98.4 Q${outer} 96.6 ${outer + way * 2} 95.6 L${toe} 94.6 Z`
}

/** The sole edge under a shoe, and the laces or straps across it. */
function shoeTrim(kind: ShoeKind, side: 'left' | 'right') {
  const flip = side === 'right'
  const at = flip ? 37 : 27
  if (kind === 'sandal') {
    return <path className={css.crewShoeTrim} d={`M${at - 4} 97.5 L${at + 4} 96.5 M${at - 4} 99 L${at + 4} 98.2`} />
  }
  if (kind === 'boot') {
    return <path className={css.crewShoeTrim} d={`M${at - 4.2} 83 H${at + 4.2} M${at - 4.2} 88 H${at + 4.2}`} />
  }
  if (kind === 'hightop') {
    return <path className={css.crewShoeTrim} d={`M${at - 3.6} 89 H${at + 3.6} M${at - 3.6} 92.5 H${at + 3.6}`} />
  }
  if (kind === 'loafer') return <path className={css.crewShoeTrim} d={`M${at - 3.4} 96 H${at + 3.4}`} />
  return <path className={css.crewShoeTrim} d={`M${at - 3.6} 93.4 H${at + 3.6} M${at - 3} 95.6 H${at + 3}`} />
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

/** The seam over each shoulder, where the sleeve is set into the body. */
const SHOULDER_SEAM = 'M21.5 51.5 C23.5 55 24 60 24 64 M42.5 51.5 C40.5 55 40 60 40 64'

/** The fold the hem falls into over the hips. */
const HEM_FOLD = 'M18 77.5 C24 79.5 40 79.5 46 77.5'

/**
 * The back of the head is not a bald oval: whichever way a member is turned it
 * has hair on it, cut in one of the room's six styles. The cap is the mass
 * that shows either way; the back view fills in everything below it.
 */
const CAPS: Record<HairKind, string> = {
  fringe: 'M18 30 C18 18 23 11 32 11 C41 11 46 18 46 30 C46 33 44.5 35 42.5 35 '
    + 'C40 35 39 32 36 32 C33 32 32 35 29 35 C26 35 25 32 23 32 C21 32 19.5 34 18 34 Z',
  crop: 'M18.5 28 C18.5 17.5 24 11 32 11 C40 11 45.5 17.5 45.5 28 C45.5 30.4 44.4 31.2 42.8 30.4 '
    + 'C40.6 29.3 39.4 26 32 26 C24.6 26 23.4 29.3 21.2 30.4 C19.6 31.2 18.5 30.4 18.5 28 Z',
  buzz: 'M19 27 C19 17.5 24.5 11.5 32 11.5 C39.5 11.5 45 17.5 45 27 C45 28.6 44 29 43 28.2 '
    + 'C40.5 26 37 24.6 32 24.6 C27 24.6 23.5 26 21 28.2 C20 29 19 28.6 19 27 Z',
  curls: 'M18 29 C18 18 23 11 32 11 C41 11 46 18 46 29 C46 32 44 33 42.6 31.6 '
    + 'C41.4 30.4 40.4 31.6 39 31 C37.6 30.4 37.4 28.6 35.6 28.6 C33.8 28.6 33.4 30.6 32 30.6 '
    + 'C30.6 30.6 30.2 28.6 28.4 28.6 C26.6 28.6 26.4 30.4 25 31 C23.6 31.6 22.6 30.4 21.4 31.6 '
    + 'C20 33 18 32 18 29 Z',
  bun: 'M18.5 29 C18.5 18 23.5 11 32 11 C40.5 11 45.5 18 45.5 29 C45.5 31.5 44 33 42 32 '
    + 'C40 31 39 27 32 27 C25 27 24 31 22 32 C20 33 18.5 31.5 18.5 29 Z',
  ponytail: 'M18.5 30 C18.5 18 23.5 11 32 11 C40.5 11 45.5 18 45.5 30 C45.5 32.5 44 33.5 42 32.5 '
    + 'C40 31.5 39 27.5 32 27.5 C25 27.5 24 31.5 22 32.5 C20 33.5 18.5 32.5 18.5 30 Z',
}

/** The mass of hair that only shows when you are looking at the back of a head. */
const NAPE = 'M19 27 C19 39.5 24 44.5 32 44.5 C40 44.5 45 39.5 45 27 Z'

/** A soft highlight across the crown of the hair. */
const HAIR_SHINE = 'M24 21 C26 16 29 13.5 33 13 C30.5 16.5 28.5 20 27.5 24 Z'

/** A cool highlight along the whale hood's back, so it reads as a smooth hood. */
const HOOD_SHEEN = 'M17 -3 C18 -10 23 -15 30 -16 C25 -12 21 -8 19 -2 Z'

/** A soft shadow under the whale's jaw, where the hood meets the collar. */
const HOOD_SHADE = 'M14 21 C20 24.5 28 24.5 35 21.5 C42 18.5 50 14 59 11 '
  + 'C52 15.5 45 18.5 38 21 C30 23.8 21 24.5 14 21 Z'

/** A ribbed hem across the bottom of a sweater. */
const RIB_HEM = 'M16.5 74 L47.5 74 L47.5 80.5 L16.5 80.5 Z'

/** A kangaroo pocket across the front of a hoodie. */
const POCKET = 'M27 57 C29 53.5 35 53.5 37 57 L38 63 L26 63 Z'

/** The hood lying around the neck of a hoodie. */
const HOOD_FABRIC = 'M24 44 C24 33 28 28.5 32 28.5 C36 28.5 40 33 40 44 '
  + 'L40 47 C36 48 28 48 24 47 Z'

/** A knitted vest, open at the neck and stopping short of the hem. */
const VEST = 'M32 47 C38 47 42.5 50.5 43.5 57 L44.5 73 C44.5 75.5 43 76.5 40.5 76.5 '
  + 'L23.5 76.5 C21 76.5 19.5 75.5 19.5 73 L20.5 57 C21.5 50.5 26 47 32 47 Z '
  + 'M32 47 L27 56 L32 62 L37 56 Z'

/** The two front panels of an open jacket. */
const JACKET = 'M23.5 47.5 C20.5 50 18.8 54.5 18.3 59 L17.4 76.5 L27 76.5 L29 52 Z '
  + 'M40.5 47.5 C43.5 50 45.2 54.5 45.7 59 L46.6 76.5 L37 76.5 L35 52 Z'

/** The bib and straps of a pair of dungarees. */
const BIB = 'M25.5 58 H38.5 V72 H25.5 Z'

/** The straps over the shoulders of a pair of dungarees. */
const STRAPS = 'M26 58 L23.5 48 M38 58 L40.5 48'

/** Stripes across the front of a jersey. */
const STRIPES = 'M18 56 H46 M17.7 62 H46.3 M17.5 68 H46.5 M17.3 74 H46.7'

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

/** The part of a hairstyle that hangs behind the head, drawn under the face. */
function hairBehind(kind: HairKind, back: boolean) {
  if (kind === 'ponytail') {
    return (
      <path
        className={css.crewHair}
        d={back
          ? 'M32 24 C36 24 38 28 38 34 C38 42 36.5 48 34.5 52 L29.5 52 C31.5 48 33 42 33 34 C33 28 30 26 32 24 Z'
          : 'M44 26 C48 28 50 33 49.5 39 C49 45 46.5 49 44 51 C46 46 46.5 40 45.5 35 C44.8 31 44 28 44 26 Z'}
      />
    )
  }
  if (kind === 'curls' && back) {
    return <path className={css.crewHair} d="M17 30 C13.5 32 13 38 16 41 C18 43 20 42 20.5 39 Z M47 30 C50.5 32 51 38 48 41 C46 43 44 42 43.5 39 Z" />
  }
  return null
}

/** The part of a hairstyle that sits over everything, like a bun. */
function hairAbove(kind: HairKind) {
  if (kind !== 'bun') return null
  return (
    <>
      <circle className={css.crewHair} cx="32" cy="8" r="6.2" />
      <path className={css.crewHairShine} d="M28.5 5.5 C29.5 3.5 31.5 2.6 33.5 3 C31.5 3.6 30 4.6 29.4 6.4 Z" />
    </>
  )
}

/** Whatever a member wears on its head besides its own hood. */
function headGear(kind: GearKind, back: boolean) {
  switch (kind) {
    case 'glasses':
      if (back) return null
      return (
        <g className={css.crewGlasses}>
          <rect x="21" y="26.6" width="9.4" height="7.4" rx="3.2" />
          <rect x="33.6" y="26.6" width="9.4" height="7.4" rx="3.2" />
          <path d="M30.4 29.8 H33.6 M21 29.4 L17.6 30.4 M43 29.4 L46.4 30.4" />
        </g>
      )
    case 'headphones':
      return (
        <g className={css.crewCans}>
          <path className={css.crewCansBand} d="M16.5 31 C16.5 16 23.5 9 32 9 C40.5 9 47.5 16 47.5 31" />
          <rect className={css.crewCansCup} x="12.6" y="26" width="8" height="12" rx="4" />
          {back && <rect className={css.crewCansCup} x="43.4" y="26" width="8" height="12" rx="4" />}
        </g>
      )
    default:
      return null
  }
}

/** Whatever a member wears over its clothes. */
function bodyGear(kind: GearKind, back: boolean) {
  switch (kind) {
    case 'scarf':
      return (
        <>
          <path className={css.crewScarf} d="M23 45 C27 50 37 50 41 45 L42.5 53 C37 56.5 27 56.5 21.5 53 Z" />
          <path className={css.crewScarf} d={back ? 'M29 54 L27.5 68 L33 68.5 L34.5 54 Z' : 'M39 54 L41.5 69 L36 69.5 L34.5 54 Z'} />
        </>
      )
    case 'lanyard':
      return (
        <>
          <path className={css.crewCord} d="M27 48 L31 62 M37 48 L33 62" />
          {!back && <rect className={css.crewBadge} x="28.6" y="61" width="6.8" height="9" rx="1.4" />}
          {!back && <path className={css.crewBadgeLine} d="M30 64.5 H34 M30 67 H33" />}
        </>
      )
    case 'backpack':
      return back
        ? (
          <>
            <path className={css.crewPack} d="M23 52 C23 48.5 26 47 32 47 C38 47 41 48.5 41 52 L41 70 C41 73 38.5 74 32 74 C25.5 74 23 73 23 70 Z" />
            <path className={css.crewPackTrim} d="M25 62 H39 M28 55 H36" />
          </>
        )
        : <path className={css.crewStrap} d="M25.5 48 C25 56 25.5 64 26.5 71 M38.5 48 C39 56 38.5 64 37.5 71" />
    default:
      return null
  }
}

/**
 * The head. Face on: the person looks out from under the whale's chin. From
 * behind — which is how you see somebody who is at their own computer — there
 * is no face to draw, both ears show, the back of the head is all hair, and
 * the whale looks the other way.
 */
function head(kind: MaskKind, hair: HairKind, gear: GearKind, back: boolean) {
  return (
    <>
      {hairBehind(hair, back)}
      <ellipse className={css.crewEar} cx="17.5" cy="32" rx="3.4" ry="3.8" />
      {back && <ellipse className={css.crewEar} cx="46.5" cy="32" rx="3.4" ry="3.8" />}
      <path
        className={css.crewFace}
        d="M32 12 C41.5 12 46 20 46 29 C46 38.5 40 44 32 44 C24 44 18 38.5 18 29 C18 20 22.5 12 32 12 Z"
      />
      {back && <path className={css.crewHair} d={NAPE} />}
      {!back && (
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
      <path className={css.crewHair} d={CAPS[hair]} />
      <path className={css.crewHairShine} d={HAIR_SHINE} />
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
      {hairAbove(hair)}
      {headGear(gear, back)}
    </>
  )
}

/** What one outfit adds over the plain body, seen from the front. */
function outfitFront(outfit: OutfitKind) {
  switch (outfit) {
    case 'shirt':
      return (
        <>
          <path className={css.crewCollar} d="M25.5 48.5 C28 52.5 36 52.5 38.5 48.5" />
          <path className={css.crewPlacket} d="M32 50 L32 79" />
          <circle className={css.crewButton} cx="32" cy="55" r="0.8" />
          <circle className={css.crewButton} cx="32" cy="63" r="0.8" />
          <circle className={css.crewButton} cx="32" cy="71" r="0.8" />
          <path className={css.crewStitch} d="M38 57 H44 V64 H38 Z" />
        </>
      )
    case 'polo':
      return (
        <>
          <path className={css.crewCollar} d="M25.5 48.5 C28 52.5 36 52.5 38.5 48.5" />
          <path className={css.crewPlacket} d="M32 49 L32 60" />
          <circle className={css.crewButton} cx="32" cy="54" r="0.8" />
          <circle className={css.crewButton} cx="32" cy="58.5" r="0.8" />
        </>
      )
    case 'tee':
      return <path className={css.crewNeckBand} d="M25 48 C28 51.5 36 51.5 39 48 C38 53 26 53 25 48 Z" />
    case 'sweater':
      return (
        <>
          <path className={css.crewNeckBand} d="M24.5 46.5 C28 51 36 51 39.5 46.5 C38 53.5 26 53.5 24.5 46.5 Z" />
          <path className={css.crewRib} d={RIB_HEM} />
        </>
      )
    case 'hoodie':
      return (
        <>
          <path className={css.crewDraw} d="M29 47 L30.5 55" />
          <path className={css.crewDraw} d="M35 47 L33.5 55" />
          <path className={css.crewPocket} d={POCKET} />
        </>
      )
    case 'tunic':
      return (
        <>
          <path className={css.crewStitch} d="M21 50 L21 78 M43 50 L43 78" />
          <path className={css.crewBelt} d="M18 68 Q32 72 46 68" />
        </>
      )
    case 'vest':
      return (
        <>
          <path className={css.crewCollar} d="M25.5 48.5 C28 52.5 36 52.5 38.5 48.5" />
          <path className={css.crewVest} d={VEST} />
          <path className={css.crewRib} d="M19.5 73 L44.5 73 L44.5 76.5 L19.5 76.5 Z" />
        </>
      )
    case 'jacket':
      return (
        <>
          <path className={css.crewJacket} d={JACKET} />
          <path className={css.crewCollar} d="M24 48 L29 52 M40 48 L35 52" />
          <circle className={css.crewButton} cx="28" cy="62" r="0.9" />
          <circle className={css.crewButton} cx="28" cy="70" r="0.9" />
        </>
      )
    case 'stripes':
      return (
        <>
          <path className={css.crewNeckBand} d="M25 48 C28 51.5 36 51.5 39 48 C38 53 26 53 25 48 Z" />
          <path className={css.crewStripes} d={STRIPES} />
        </>
      )
    case 'dungarees':
    default:
      return (
        <>
          <path className={css.crewNeckBand} d="M25 48 C28 51.5 36 51.5 39 48 C38 53 26 53 25 48 Z" />
          <path className={css.crewBib} d={BIB} />
          <path className={css.crewDraw} d={STRAPS} />
          <circle className={css.crewButton} cx="26.6" cy="58.6" r="0.9" />
          <circle className={css.crewButton} cx="37.4" cy="58.6" r="0.9" />
        </>
      )
  }
}

/** What one outfit adds over the plain body, seen from behind. */
function outfitBack(outfit: OutfitKind) {
  switch (outfit) {
    case 'shirt':
    case 'polo':
      return (
        <>
          <path className={css.crewCollar} d="M25 49 L39 49" />
          <path className={css.crewStitch} d="M26 57 C29 60 35 60 38 57" />
        </>
      )
    case 'sweater':
    case 'vest':
      return <path className={css.crewRib} d={RIB_HEM} />
    case 'jacket':
      return <path className={css.crewStitch} d="M32 48 L32 79" />
    case 'stripes':
      return <path className={css.crewStripes} d={STRIPES} />
    case 'dungarees':
      return <path className={css.crewDraw} d="M26 76 L23.5 48 M38 76 L40.5 48" />
    default:
      return null
  }
}

/**
 * One member of the crew.
 * @param props - the whale it wears, whether you are behind it, whether only
 * the head is wanted (a portrait), and everything it is dressed in.
 * @returns the character.
 */
export function Crew(props: {
  readonly kind: MaskKind
  readonly className?: string
  /** Seen from behind: the pose of somebody facing their own computer. */
  readonly back?: boolean
  /** A portrait: the hooded head alone, framed for a small round avatar. */
  readonly portrait?: boolean
  /** The outfit the member wears; teammates rotate through the wardrobe. */
  readonly outfit?: OutfitKind
  /** The shoes the member wears; teammates rotate through the shoe rack. */
  readonly shoes?: ShoeKind
  /** The hairstyle under the hood. */
  readonly hair?: HairKind
  /** The one thing it wears besides its clothes. */
  readonly gear?: GearKind
  /** Which of the stylesheet's hair colours it has. */
  readonly tone?: number
  /** Which of the stylesheet's skin tones it has. */
  readonly skin?: number
}) {
  const {
    kind, className, back = false, portrait = false, outfit = 'shirt', shoes = 'sneaker',
    hair = 'crop', gear = 'none', tone = 0, skin = 0,
  } = props
  return (
    <svg
      className={`${css.crew} ${className ?? ''}`}
      viewBox={portrait ? '-1 -20 70 70' : '-6 -26 80 134'}
      data-kind={kind}
      data-back={back ? 'true' : undefined}
      data-outfit={outfit}
      data-shoes={shoes}
      data-hair={hair}
      data-gear={gear}
      data-tone={tone}
      data-skin={skin}
      aria-hidden
      focusable="false"
    >
      {!portrait && (
        <>
          <g className={css.crewLimbBack}>
            <rect className={css.crewTrouser} x="22.5" y="70" width="8.6" height="27" rx="3.8" />
            <path className={css.crewShoe} d={shoePath(shoes, 'left')} />
            {shoeTrim(shoes, 'left')}
          </g>
          <g className={css.crewLimbFront}>
            <rect className={css.crewTrouser} x="32.9" y="70" width="8.6" height="27" rx="3.8" />
            <path className={css.crewShoe} d={shoePath(shoes, 'right')} />
            {shoeTrim(shoes, 'right')}
          </g>
          <g className={css.crewArmBack}>
            <rect className={css.crewSleeve} x="12" y="53" width="7.8" height="22" rx="3.9" />
            <path className={css.crewCuff} d="M12 71.5 H19.8" />
            <circle className={css.crewHand} cx="15.9" cy="76.5" r="3.8" />
          </g>
          <g className={css.crewArmFront}>
            <rect className={css.crewSleeve} x="44.2" y="53" width="7.8" height="22" rx="3.9" />
            <path className={css.crewCuff} d="M44.2 71.5 H52" />
            <circle className={css.crewHand} cx="48.1" cy="76.5" r="3.8" />
          </g>
          <rect className={css.crewNeck} x="28.2" y="40" width="7.6" height="11" rx="3.2" />
          <path className={css.crewShirt} d={SHIRT} />
          <path className={css.crewSeam} d={SHOULDER_SEAM} />
          <path className={css.crewSeam} d={HEM_FOLD} />
          {outfit === 'hoodie' && <path className={css.crewHoodFabric} d={HOOD_FABRIC} />}
          {back ? outfitBack(outfit) : outfitFront(outfit)}
          {bodyGear(gear, back)}
        </>
      )}
      {head(kind, hair, gear, back)}
    </svg>
  )
}
