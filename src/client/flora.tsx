/**
 * The room's greenery.
 *
 * A plant used to be three overlapping radial gradients, which reads as a green
 * cloud in a pot. These are drawn the way the crew are: real blades with a
 * midrib and side veins, a light layer and a dark one so the foliage has a
 * front and a back to it, and a thrown pot with a rolled rim, a glaze
 * highlight, crumbed soil and a saucer under it.
 *
 * Every kind shares the same pot and the same frame — the pot's mouth is at
 * (50, 84), foliage grows up out of it — so a plant can be swapped for another
 * anywhere in the room without moving anything around it. Each blade is its own
 * group hinged at the point it joins the stem, so the stylesheet can sway them
 * out of step and the plant breathes instead of wobbling as one lump.
 */
import type { CSSProperties } from 'react'
import css from './TeamStage.module.css'

/** The plants the room keeps, in the order places take them. */
export const PLANTS = ['monstera', 'sansevieria', 'pothos', 'cactus', 'ficus', 'palm'] as const

/** One kind of plant. */
export type PlantKind = typeof PLANTS[number]

/**
 * Which plant stands in the nth green spot of the room: stable, so the corner
 * you learned is the corner you come back to.
 * @param index - the spot's index.
 * @returns the kind that stands there.
 */
export function plantOf(index: number): PlantKind {
  return PLANTS[((index % PLANTS.length) + PLANTS.length) % PLANTS.length] ?? 'monstera'
}

/** One blade of foliage: its shape, where it joins the plant, and its veins. */
interface Blade {
  /** The outline, drawn from the joint at (0, 0) outward. */
  readonly d: string
  /** Where on the plant it joins, and how it is turned. */
  readonly at: string
  /** The lit layer catches the window; the rest sits behind it. */
  readonly lit?: boolean
  /** The midrib and whatever branches off it. */
  readonly vein?: string
  /** Foliage that hangs rather than stands: it swings from its top edge. */
  readonly hang?: boolean
}

/** A split leaf: two notches cut into each side of a broad heart. */
const MONSTERA = 'M0 -2 C-4 -10 -12 -13 -17 -17 L-9 -19 C-13 -23 -19 -25 -22 -30 '
  + 'L-11.5 -30.5 C-16 -36 -14 -42 0 -46 C14 -42 16 -36 11.5 -30.5 '
  + 'L22 -30 C19 -25 13 -23 9 -19 L17 -17 C12 -13 4 -10 0 -2 Z'

/** The midrib of a split leaf, with a pair of ribs running into each lobe. */
const MONSTERA_VEIN = 'M0 -3 L0 -42 M0 -14 L-14 -18 M0 -14 L14 -18 '
  + 'M0 -24 L-17 -29 M0 -24 L17 -29 M0 -33 L-11 -38 M0 -33 L11 -38'

/** An upright sword, thickest at the middle and drawn to a point. */
const SWORD = 'M0 0 C-5 -7 -7.5 -22 -6.5 -36 C-5.5 -48 -3 -56 0 -60 '
  + 'C3 -56 5.5 -48 6.5 -36 C7.5 -22 5 -7 0 0 Z'

/** The pale stripe up the edge of a snake plant's blade. */
const SWORD_EDGE = 'M4.6 -12 C6 -24 6.4 -40 3.4 -52 C5.4 -42 5 -26 3 -12 Z'

/** A heart, hanging point-down the way a trailing leaf does. */
const HEART = 'M0 0 C-8 -4 -13 -10 -13 -16.5 C-13 -22 -8.5 -25 -4.5 -23 '
  + 'C-2 -21.6 -0.6 -19.4 0 -17.4 C0.6 -19.4 2 -21.6 4.5 -23 '
  + 'C8.5 -25 13 -22 13 -16.5 C13 -10 8 -4 0 0 Z'

/** The midrib of a hanging heart. */
const HEART_VEIN = 'M0 -2 L0 -18 M0 -8 L-7 -14 M0 -8 L7 -14'

/** A plain oval leaf, for a plant whose interest is in how many it has. */
const OVAL = 'M0 0 C-6 -5 -9 -11 -9 -17 C-9 -23 -5 -27 0 -28 C5 -27 9 -23 9 -17 C9 -11 6 -5 0 0 Z'

/** A long frond, tapering to a point. */
const FROND = 'M0 0 C-3.5 -14 -6 -28 -4 -42 L0 -50 L4 -42 C6 -28 3.5 -14 0 0 Z'

/** The leaflets combed off both sides of a frond. */
const FROND_VEIN = 'M0 -2 L0 -47 M0 -10 L-5.5 -16 M0 -10 L5.5 -16 M0 -19 L-6 -25 '
  + 'M0 -19 L6 -25 M0 -28 L-5.5 -34 M0 -28 L5.5 -34 M0 -36 L-4 -41 M0 -36 L4 -41'

/** A ribbed column, for the one plant in the room nobody has to water. */
const COLUMN = 'M0 0 C-9.5 0 -12.5 -5 -12.5 -15 L-12.5 -34 C-12.5 -45 -8 -50 0 -50 '
  + 'C8 -50 12.5 -45 12.5 -34 L12.5 -15 C12.5 -5 9.5 0 0 0 Z'

/** A shorter column, for an arm off the side of one. */
const LIMB = 'M0 0 C-6.5 0 -8.5 -3.5 -8.5 -10 L-8.5 -22 C-8.5 -30 -5.5 -33.5 0 -33.5 '
  + 'C5.5 -33.5 8.5 -30 8.5 -22 L8.5 -10 C8.5 -3.5 6.5 0 0 0 Z'

/** The ribs down a cactus, and the ones down its arms. */
const RIBS = 'M-6 -6 C-7.5 -18 -7.5 -32 -6 -43 M0 -4 L0 -47 M6 -6 C7.5 -18 7.5 -32 6 -43'

/** The blades of one kind, back layer first. */
function bladesOf(kind: PlantKind): readonly Blade[] {
  switch (kind) {
    case 'monstera':
      return [
        { d: MONSTERA, at: 'translate(50 82) rotate(-38) scale(0.86)', vein: MONSTERA_VEIN },
        { d: MONSTERA, at: 'translate(50 82) rotate(36) scale(0.9)', vein: MONSTERA_VEIN },
        { d: MONSTERA, at: 'translate(50 80) rotate(-14) scale(1.02)', lit: true, vein: MONSTERA_VEIN },
        { d: MONSTERA, at: 'translate(50 80) rotate(16) scale(0.94)', lit: true, vein: MONSTERA_VEIN },
        { d: MONSTERA, at: 'translate(50 78) rotate(2) scale(0.74)', lit: true, vein: MONSTERA_VEIN },
      ]
    case 'sansevieria':
      return [
        { d: SWORD, at: 'translate(50 84) rotate(-22) scale(0.82)' },
        { d: SWORD, at: 'translate(50 84) rotate(20) scale(0.88)' },
        { d: SWORD, at: 'translate(50 84) rotate(-8) scale(1)', lit: true, vein: SWORD_EDGE },
        { d: SWORD, at: 'translate(50 84) rotate(7) scale(0.94)', lit: true, vein: SWORD_EDGE },
        { d: SWORD, at: 'translate(50 84) rotate(-15) scale(0.66)', lit: true, vein: SWORD_EDGE },
      ]
    case 'pothos':
      return [
        { d: SWORD, at: 'translate(50 82) rotate(-10) scale(0.5)' },
        { d: SWORD, at: 'translate(50 82) rotate(12) scale(0.44)', lit: true },
        { d: HEART, at: 'translate(28 84) rotate(196) scale(0.78)', hang: true, vein: HEART_VEIN },
        { d: HEART, at: 'translate(22 96) rotate(184) scale(0.7)', hang: true, lit: true, vein: HEART_VEIN },
        { d: HEART, at: 'translate(74 86) rotate(166) scale(0.76)', hang: true, vein: HEART_VEIN },
        { d: HEART, at: 'translate(80 99) rotate(176) scale(0.66)', hang: true, lit: true, vein: HEART_VEIN },
        { d: HEART, at: 'translate(50 70) rotate(180) scale(0.6)', hang: true, lit: true, vein: HEART_VEIN },
      ]
    case 'cactus':
      return [
        { d: LIMB, at: 'translate(30 62) rotate(-24)', vein: RIBS },
        { d: LIMB, at: 'translate(70 58) rotate(22) scale(0.9)', vein: RIBS },
        { d: COLUMN, at: 'translate(50 82)', lit: true, vein: RIBS },
      ]
    case 'ficus':
      return [
        { d: OVAL, at: 'translate(36 56) rotate(-40)' },
        { d: OVAL, at: 'translate(64 54) rotate(42)' },
        { d: OVAL, at: 'translate(32 70) rotate(-62) scale(0.86)' },
        { d: OVAL, at: 'translate(68 68) rotate(64) scale(0.86)' },
        { d: OVAL, at: 'translate(44 42) rotate(-16)', lit: true },
        { d: OVAL, at: 'translate(58 40) rotate(18)', lit: true },
        { d: OVAL, at: 'translate(50 32) rotate(0) scale(0.9)', lit: true },
      ]
    case 'palm':
    default:
      return [
        { d: FROND, at: 'translate(50 82) rotate(-52) scale(0.92)', vein: FROND_VEIN },
        { d: FROND, at: 'translate(50 82) rotate(50) scale(0.96)', vein: FROND_VEIN },
        { d: FROND, at: 'translate(50 80) rotate(-26)', lit: true, vein: FROND_VEIN },
        { d: FROND, at: 'translate(50 80) rotate(24) scale(0.96)', lit: true, vein: FROND_VEIN },
        { d: FROND, at: 'translate(50 78) rotate(-2) scale(0.88)', lit: true, vein: FROND_VEIN },
      ]
  }
}

/** The woody stems a kind shows between the soil and its foliage. */
function stemsOf(kind: PlantKind): string | undefined {
  switch (kind) {
    case 'monstera':
      return 'M50 84 C46 72 40 66 34 62 M50 84 C54 72 60 68 65 64 M50 84 L50 66'
    case 'ficus':
      return 'M50 84 L50 40 M50 68 C46 62 42 58 37 55 M50 66 C54 60 59 56 63 53 '
        + 'M50 56 C47 50 45 46 43 43 M50 54 C53 48 55 45 57 42'
    case 'pothos':
      return 'M48 82 C40 80 32 82 28 86 M52 82 C60 80 68 82 74 88 M28 86 C24 90 22 94 22 97 '
        + 'M74 88 C78 92 80 96 80 100'
    case 'palm':
      return 'M50 84 C48 78 44 72 38 66 M50 84 C52 78 56 72 62 66'
    case 'sansevieria':
    case 'cactus':
    default:
      return undefined
  }
}

/**
 * One plant, pot and all.
 * @param props - which kind it is, and the class the room sizes it with.
 * @returns the plant.
 */
export function Plant(props: { readonly kind: PlantKind, readonly className?: string }) {
  const { kind, className } = props
  const blades = bladesOf(kind)
  const stems = stemsOf(kind)
  return (
    <svg
      className={`${css.flora} ${className ?? ''}`}
      viewBox="0 0 100 128"
      data-plant={kind}
      aria-hidden
      focusable="false"
    >
      {/* The saucer and the shadow it casts go down first: everything else in
          the pot stands on them. */}
      <ellipse className={css.floraShade} cx="50" cy="121" rx="27" ry="5" />
      <path className={css.floraSaucer} d="M29 116 H71 Q75 116 75 119.5 Q75 123 71 123 H29 Q25 123 25 119.5 Q25 116 29 116 Z" />

      {stems !== undefined && <path className={css.floraStem} d={stems} />}

      {blades.map((blade, index) => (
        <g key={`${blade.at}-${index}`} transform={blade.at}>
          <g
            className={css.floraLeaf}
            data-hang={blade.hang === true ? 'true' : undefined}
            style={{ '--team-leaf-delay': `${-((index * 0.83) % 4).toFixed(2)}s` } as CSSProperties}
          >
            <path className={blade.lit === true ? css.floraBladeLit : css.floraBlade} d={blade.d} />
            {blade.vein !== undefined && <path className={css.floraVein} d={blade.vein} />}
          </g>
        </g>
      ))}

      {kind === 'cactus' && (
        <>
          <path className={css.floraSpine} d="M42 44 L38 41 M42 54 L38 51 M42 64 L38 61 M58 42 L62 39 M58 52 L62 49 M58 62 L62 59" />
          <circle className={css.floraBloom} cx="50" cy="31" r="3.6" />
          <circle className={css.floraBloomHeart} cx="50" cy="31" r="1.5" />
        </>
      )}

      {/* The pot last, so a leaf that leans over the rim is tucked behind it. */}
      <path className={css.floraPot} d="M28 87 H72 L67.5 117 Q67 120 63 120 H37 Q33 120 32.5 117 Z" />
      <path className={css.floraPotShade} d="M60 87 L72 87 L67.5 117 Q67 120 63 120 H57 Q61 106 60 87 Z" />
      <path className={css.floraGlaze} d="M36 92 C33.5 101 34 110 36.5 117 L40 117 C37.5 109 37 101 39 92 Z" />
      <path className={css.floraRim} d="M25 79 H75 Q78 79 78 82 V86 Q78 89 75 89 H25 Q22 89 22 86 V82 Q22 79 25 79 Z" />
      <path className={css.floraRimLip} d="M24 80.5 H76" />
      <ellipse className={css.floraSoil} cx="50" cy="81.5" rx="24" ry="4" />
      <circle className={css.floraCrumb} cx="40" cy="81" r="1.4" />
      <circle className={css.floraCrumb} cx="59" cy="82.5" r="1.1" />
      <circle className={css.floraCrumb} cx="52" cy="79.6" r="0.9" />
    </svg>
  )
}
