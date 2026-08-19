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
  /** Secondary detail or variegation on the blade. */
  readonly detail?: string
}

/** A split leaf: organic notches cut into each side of a broad monstera heart. */
const MONSTERA = 'M0 -2 C-4 -10 -12 -13 -17 -17 L-8.5 -19 C-13 -23 -19 -25 -22 -30 '
  + 'L-11.5 -30.5 C-16 -36 -14 -42 0 -46 C14 -42 16 -36 11.5 -30.5 '
  + 'L22 -30 C19 -25 13 -23 8.5 -19 L17 -17 C12 -13 4 -10 0 -2 Z'

/** Monstera leaf fenestration (inner perforations) and veins. */
const MONSTERA_VEIN = 'M0 -3 L0 -43 M0 -14 L-14 -18 M0 -14 L14 -18 '
  + 'M0 -24 L-17 -29 M0 -24 L17 -29 M0 -33 L-11 -38 M0 -33 L11 -38 '
  + 'M-6 -22 C-7 -25 -7 -27 -5 -28 C-4 -27 -4 -24 -5 -22 Z '
  + 'M6 -22 C7 -25 7 -27 5 -28 C4 -27 4 -24 5 -22 Z'

/** An upright sword, thickest at the middle with elegant wavy edges and drawn to a sharp tip. */
const SWORD = 'M0 0 C-5.5 -7 -8 -22 -7 -36 C-6 -48 -3.5 -57 0 -62 '
  + 'C3.5 -57 6 -48 7 -36 C8 -22 5.5 -7 0 0 Z'

/** The golden variegated margin along the edges of a snake plant's blade. */
const SWORD_EDGE = 'M-6.2 -22 C-7.2 -32 -6 -44 -2.8 -54 C-1.8 -46 -4.8 -32 -4.8 -20 Z '
  + 'M6.2 -22 C7.2 -32 6 -44 2.8 -54 C1.8 -46 4.8 -32 4.8 -20 Z'

/** Transverse zebra banding on the snake plant blade. */
const SWORD_BANDING = 'M-4 -16 Q0 -14 4 -16 M-5 -26 Q0 -24 5 -26 M-5.5 -36 Q0 -34 5.5 -36 M-4 -46 Q0 -44 4 -46'

/** A lush heart, hanging point-down the way a trailing pothos leaf does. */
const HEART = 'M0 0 C-8.5 -4 -13.5 -10 -13.5 -17 C-13.5 -22.5 -9 -25.5 -4.5 -23.5 '
  + 'C-2 -22 -0.6 -19.6 0 -17.5 C0.6 -19.6 2 -22 4.5 -23.5 '
  + 'C9 -25.5 13.5 -22.5 13.5 -17 C13.5 -10 8.5 -4 0 0 Z'

/** The midrib and branching lateral veins of a hanging heart. */
const HEART_VEIN = 'M0 -2 L0 -19 M0 -7 L-7.5 -13.5 M0 -7 L7.5 -13.5 M0 -13 L-6 -17.5 M0 -13 L6 -17.5'

/** Variegated marble splashes on pothos leaves. */
const HEART_SPLASH = 'M-3 -10 C-5 -12 -3 -15 -1 -13 C-2 -11 -3 -10 -3 -10 Z M4 -8 C6 -10 5 -13 2 -11 C4 -9 4 -8 4 -8 Z'

/** A broad oval fiddle leaf with glossy curvature. */
const OVAL = 'M0 0 C-7 -5 -10 -11.5 -10 -18 C-10 -24.5 -5.5 -28.5 0 -29.5 C5.5 -28.5 10 -24.5 10 -18 C10 -11.5 7 -5 0 0 Z'
const OVAL_VEIN = 'M0 -2 L0 -27 M0 -9 L-7 -14 M0 -9 L7 -14 M0 -17 L-7.5 -21 M0 -17 L7.5 -21'

/** A long graceful palm frond. */
const FROND = 'M0 0 C-3.8 -14 -6.5 -28 -4.2 -43 L0 -52 L4.2 -43 C6.5 -28 3.8 -14 0 0 Z'

/** The leaflets combed off both sides of a frond. */
const FROND_VEIN = 'M0 -2 L0 -49 M0 -10 L-6 -16.5 M0 -10 L6 -16.5 M0 -19 L-6.8 -25.5 '
  + 'M0 -19 L6.8 -25.5 M0 -28 L-6.2 -34.5 M0 -28 L6.2 -34.5 M0 -36 L-4.5 -42 M0 -36 L4.5 -42'

/** A ribbed 3D column, for a saguaro / barrel cactus. */
const COLUMN = 'M0 0 C-10 0 -13 -5 -13 -15.5 L-13 -35 C-13 -46.5 -8.5 -52 0 -52 '
  + 'C8.5 -52 13 -46.5 13 -35 L13 -15.5 C13 -5 10 0 0 0 Z'

/** A shorter column, for an arm off the side of one. */
const LIMB = 'M0 0 C-7 0 -9 -3.5 -9 -10.5 L-9 -23 C-9 -31.5 -6 -35 0 -35 '
  + 'C6 -35 9 -31.5 9 -23 L9 -10.5 C9 -3.5 7 0 0 0 Z'

/** The vertical contour ribs down a cactus. */
const RIBS = 'M-6.5 -6 C-8 -18 -8 -33 -6.5 -44 M0 -4 L0 -49 M6.5 -6 C8 -18 8 -33 6.5 -44'

/**
 * The blades of one kind, back layer first. Built once at module load — the
 * stage re-renders its greenery on every snapshot, and rebuilding these
 * little arrays each time is the one allocation it can do without.
 */
const BLADES: Record<PlantKind, readonly Blade[]> = {
  monstera: [
    { d: MONSTERA, at: 'translate(50 82) rotate(-38) scale(0.88)', vein: MONSTERA_VEIN },
    { d: MONSTERA, at: 'translate(50 82) rotate(36) scale(0.92)', vein: MONSTERA_VEIN },
    { d: MONSTERA, at: 'translate(50 80) rotate(-14) scale(1.04)', lit: true, vein: MONSTERA_VEIN },
    { d: MONSTERA, at: 'translate(50 80) rotate(16) scale(0.96)', lit: true, vein: MONSTERA_VEIN },
    { d: MONSTERA, at: 'translate(50 78) rotate(2) scale(0.76)', lit: true, vein: MONSTERA_VEIN },
  ],
  sansevieria: [
    { d: SWORD, at: 'translate(50 84) rotate(-22) scale(0.84)', vein: SWORD_BANDING, detail: SWORD_EDGE },
    { d: SWORD, at: 'translate(50 84) rotate(20) scale(0.9)', vein: SWORD_BANDING, detail: SWORD_EDGE },
    { d: SWORD, at: 'translate(50 84) rotate(-8) scale(1.02)', lit: true, vein: SWORD_BANDING, detail: SWORD_EDGE },
    { d: SWORD, at: 'translate(50 84) rotate(7) scale(0.96)', lit: true, vein: SWORD_BANDING, detail: SWORD_EDGE },
    { d: SWORD, at: 'translate(50 84) rotate(-15) scale(0.68)', lit: true, vein: SWORD_BANDING, detail: SWORD_EDGE },
  ],
  pothos: [
    { d: SWORD, at: 'translate(50 82) rotate(-10) scale(0.52)' },
    { d: SWORD, at: 'translate(50 82) rotate(12) scale(0.46)', lit: true },
    { d: HEART, at: 'translate(28 84) rotate(196) scale(0.8)', hang: true, vein: HEART_VEIN, detail: HEART_SPLASH },
    { d: HEART, at: 'translate(22 96) rotate(184) scale(0.72)', hang: true, lit: true, vein: HEART_VEIN, detail: HEART_SPLASH },
    { d: HEART, at: 'translate(74 86) rotate(166) scale(0.78)', hang: true, vein: HEART_VEIN, detail: HEART_SPLASH },
    { d: HEART, at: 'translate(80 99) rotate(176) scale(0.68)', hang: true, lit: true, vein: HEART_VEIN, detail: HEART_SPLASH },
    { d: HEART, at: 'translate(50 70) rotate(180) scale(0.62)', hang: true, lit: true, vein: HEART_VEIN, detail: HEART_SPLASH },
  ],
  cactus: [
    { d: LIMB, at: 'translate(29 62) rotate(-24)', vein: RIBS },
    { d: LIMB, at: 'translate(71 58) rotate(22) scale(0.92)', vein: RIBS },
    { d: COLUMN, at: 'translate(50 82)', lit: true, vein: RIBS },
  ],
  ficus: [
    { d: OVAL, at: 'translate(35 55) rotate(-42)', vein: OVAL_VEIN },
    { d: OVAL, at: 'translate(65 53) rotate(44)', vein: OVAL_VEIN },
    { d: OVAL, at: 'translate(31 70) rotate(-64) scale(0.88)', vein: OVAL_VEIN },
    { d: OVAL, at: 'translate(69 68) rotate(66) scale(0.88)', vein: OVAL_VEIN },
    { d: OVAL, at: 'translate(43 41) rotate(-18)', lit: true, vein: OVAL_VEIN },
    { d: OVAL, at: 'translate(59 39) rotate(20)', lit: true, vein: OVAL_VEIN },
    { d: OVAL, at: 'translate(50 31) rotate(0) scale(0.92)', lit: true, vein: OVAL_VEIN },
  ],
  palm: [
    { d: FROND, at: 'translate(50 82) rotate(-54) scale(0.94)', vein: FROND_VEIN },
    { d: FROND, at: 'translate(50 82) rotate(52) scale(0.98)', vein: FROND_VEIN },
    { d: FROND, at: 'translate(50 80) rotate(-26)', lit: true, vein: FROND_VEIN },
    { d: FROND, at: 'translate(50 80) rotate(24) scale(0.98)', lit: true, vein: FROND_VEIN },
    { d: FROND, at: 'translate(50 78) rotate(-2) scale(0.9)', lit: true, vein: FROND_VEIN },
  ],
}

/** The woody stems a kind shows between the soil and its foliage. */
const STEMS: Record<PlantKind, string | undefined> = {
  monstera: 'M50 84 C46 72 40 66 34 62 M50 84 C54 72 60 68 65 64 M50 84 L50 66',
  ficus: 'M50 84 L50 40 M50 68 C46 62 42 58 37 55 M50 66 C54 60 59 56 63 53 '
    + 'M50 56 C47 50 45 46 43 43 M50 54 C53 48 55 45 57 42',
  pothos: 'M48 82 C40 80 32 82 28 86 M52 82 C60 80 68 82 74 88 M28 86 C24 90 22 94 22 97 '
    + 'M74 88 C78 92 80 96 80 100',
  palm: 'M50 84 C48 78 44 72 38 66 M50 84 C52 78 56 72 62 66',
  sansevieria: undefined,
  cactus: undefined,
}

/**
 * One plant, pot and all.
 * @param props - which kind it is, and the class the room sizes it with.
 * @returns the plant.
 */
export function Plant(props: { readonly kind: PlantKind, readonly className?: string }) {
  const { kind, className } = props
  const blades = BLADES[kind]
  const stems = STEMS[kind]
  return (
    <svg
      className={`${css.flora} ${className ?? ''}`}
      viewBox="0 0 100 128"
      data-plant={kind}
      aria-hidden
      focusable="false"
    >
      {/* The saucer and the soft shadow it casts */}
      <ellipse className={css.floraShade} cx="50" cy="122" rx="28" ry="5.5" />
      <path className={css.floraSaucer} d="M28 116 H72 Q76 116 76 119.5 Q76 123.5 72 123.5 H28 Q24 123.5 24 119.5 Q24 116 28 116 Z" />
      <path className={css.floraSaucerLip} d="M26 117.5 H74" />

      {stems !== undefined && <path className={css.floraStem} d={stems} />}

      {blades.map((blade, index) => (
        <g key={`${blade.at}-${index}`} transform={blade.at}>
          <g
            className={css.floraLeaf}
            data-hang={blade.hang === true ? 'true' : undefined}
            style={{ '--team-leaf-delay': `${-((index * 0.83) % 4).toFixed(2)}s` } as CSSProperties}
          >
            <path className={blade.lit === true ? css.floraBladeLit : css.floraBlade} d={blade.d} />
            {blade.detail !== undefined && <path className={css.floraBladeDetail} d={blade.detail} />}
            {blade.vein !== undefined && <path className={css.floraVein} d={blade.vein} />}
          </g>
        </g>
      ))}

      {kind === 'cactus' && (
        <g className={css.floraCactusDetails}>
          {/* Spine clusters with radial needle rays */}
          <path className={css.floraSpine} d="M42 44 L38 41 M42 44 L37 44 M42 44 L38 47 M42 54 L38 51 M42 54 L37 54 M42 54 L38 57 M42 64 L38 61 M42 64 L37 64 M58 42 L62 39 M58 42 L63 42 M58 42 L62 45 M58 52 L62 49 M58 52 L63 52 M58 62 L62 59 M58 62 L63 62" />
          {/* Beautiful desert cactus flower bloom */}
          <circle className={css.floraBloomOuter} cx="50" cy="30" r="5" />
          <circle className={css.floraBloom} cx="50" cy="30" r="3.8" />
          <circle className={css.floraBloomHeart} cx="50" cy="30" r="1.6" />
          <circle className={css.floraBloomStamen} cx="49.3" cy="29.3" r="0.6" />
          <circle className={css.floraBloomStamen} cx="50.7" cy="30.5" r="0.6" />
        </g>
      )}

      {/* The planter pot: thrown terracotta with rolled rim, rim lip, glaze specular shine, soil and pebbles */}
      <path className={css.floraPot} d="M28 87 H72 L67.5 117 Q67 120 63 120 H37 Q33 120 32.5 117 Z" />
      <path className={css.floraPotShade} d="M60 87 L72 87 L67.5 117 Q67 120 63 120 H57 Q61 106 60 87 Z" />
      <path className={css.floraGlaze} d="M35 91 C32.5 101 33 110 35.5 117 L39.5 117 C37 109 36.5 101 38.5 91 Z" />
      <path className={css.floraRim} d="M25 78.5 H75 Q78.5 78.5 78.5 82 V86.5 Q78.5 89.5 75 89.5 H25 Q21.5 89.5 21.5 86.5 V82 Q21.5 78.5 25 78.5 Z" />
      <path className={css.floraRimLip} d="M23.5 80.5 H76.5" />
      <ellipse className={css.floraSoil} cx="50" cy="81.5" rx="24" ry="4.2" />
      {/* Rich potting soil texture crumbs and small moss pebbles */}
      <circle className={css.floraCrumb} cx="38" cy="81" r="1.5" />
      <circle className={css.floraCrumb} cx="60" cy="82.5" r="1.2" />
      <circle className={css.floraCrumb} cx="51" cy="79.5" r="1" />
      <circle className={css.floraMoss} cx="44" cy="82.8" r="1.4" />
      <circle className={css.floraMoss} cx="56" cy="80.8" r="1.2" />
    </svg>
  )
}
