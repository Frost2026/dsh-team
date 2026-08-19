/**
 * The things standing in the room, drawn as objects rather than as stickers.
 *
 * Every prop here is built the same way: a TOP face, a FRONT face and one SIDE
 * face, receding up and to the right by a fixed amount, over a soft contact
 * shadow on the floor. That is the whole trick of the room's 2.5D — a rectangle
 * with a lid and a flank reads as a box, and a rectangle on its own reads as a
 * sticker — and keeping the recede in one direction for every prop is what
 * stops the corner looking like six objects lit by six different suns.
 *
 * They live here rather than in `TeamStage.tsx` because a stage that draws the
 * team should not also be the file that knows how a coffee machine is shaped.
 */
import { useId } from 'react'
import css from './TeamStage.module.css'

/** Strip the colons React puts in a generated id, so it is safe in a url(). */
function safeId(raw: string): string {
  return raw.replaceAll(':', '')
}

/**
 * The water cooler: a large 5-gallon bottled jug on a modern cabinet with
 * real lid, flank, water level, hot/cold taps, drip tray grille, LED lights,
 * and rising bubbles.
 * @returns the cooler.
 */
export function CoolerFigure() {
  const uid = safeId(useId())
  return (
    <svg className={css.coolerSvg} viewBox="0 0 80 115" aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${uid}-cabinet`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" style={{ stopColor: 'var(--team-cooler-lit)' }} />
          <stop offset="0.45" style={{ stopColor: 'var(--team-cooler)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-cooler-dark)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-bottle`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--team-cooler-bottle-dark)' }} />
          <stop offset="0.25" style={{ stopColor: 'var(--team-cooler-bottle)' }} />
          <stop offset="0.65" style={{ stopColor: 'var(--team-cooler-bottle-lit)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-cooler-bottle-dark)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-water`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--team-cooler-water-lit)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-cooler-water)' }} />
        </linearGradient>
      </defs>

      {/* Ground contact shadow */}
      <ellipse className={css.propShade} cx="38" cy="106" rx="34" ry="8" />

      {/* The cabinet: front, flank, lid. */}
      <path className={css.propSide} d="M58 54 L70 45 L70 98 Q70 102 65 105 L58 105 Z" />
      <path className={css.coolerCabinet} d="M12 54 H58 V99 Q58 105 52 105 H18 Q12 105 12 99 Z" fill={`url(#${uid}-cabinet)`} />
      <path className={css.propTop} d="M12 54 L24 45 H70 L58 54 Z" />
      <path className={css.coolerCabinetEdge} d="M12 54 H58 V99 Q58 105 52 105 H18 Q12 105 12 99 Z" />

      {/* Recessed alcove panel for taps & drip tray */}
      <path className={css.coolerPanel} d="M18 64 H52 V94 H18 Z" />
      <path className={css.coolerPanelDepth} d="M18 64 L21 61 H49 L52 64" />
      <path className={css.coolerDoorSeam} d="M18 97 H52" />

      {/* Hot and Cold taps with metallic faucets */}
      <path className={css.coolerTap} d="M24 72 H32 M38 72 H46" />
      <path className={css.coolerFaucet} d="M28 72 V76 M42 72 V76" />
      <circle className={css.coolerHandleWarm} cx="28" cy="68" r="2.6" />
      <circle className={css.coolerHandleCool} cx="42" cy="68" r="2.6" />

      {/* Drip tray with perforated grille */}
      <ellipse className={css.coolerDrip} cx="35" cy="95" rx="17" ry="4.2" />
      <ellipse className={css.coolerDripWell} cx="35" cy="94.5" rx="14" ry="2.8" />
      <path className={css.coolerGrille} d="M26 94.5 H44 M28 95.5 H42 M30 93.5 H40" />

      {/* Status indicator LEDs */}
      <circle className={css.coolerLedPower} cx="16" cy="59" r="1.1" />
      <circle className={css.coolerLedCold} cx="20" cy="59" r="1.1" />

      {/* The 5-gallon water jug with realistic ribs and neck */}
      <path className={css.coolerBottle} d="M20 54 C20 36 24 22 31 15 L47 15 C54 22 58 36 58 54 Z" fill={`url(#${uid}-bottle)`} />
      <path className={css.coolerWater} d="M22 54 C22 39 25.5 26 31.5 20 L46.5 20 C52.5 26 56 39 56 54 Z" fill={`url(#${uid}-water)`} />

      {/* Polycarbonate ribbed strengthening rings */}
      <path className={css.coolerRib} d="M21.5 42 Q39 45 56.5 42 M23.5 30 Q39 33 54.5 30" />

      <path className={css.coolerNeck} d="M31 15 L31 6 C31 4 32.5 3 34.5 3 L43.5 3 C45.5 3 47 4 47 6 L47 15 Z" fill={`url(#${uid}-bottle)`} />
      <ellipse className={css.coolerCap} cx="39" cy="3" rx="9" ry="3" />
      <ellipse className={css.coolerCapTop} cx="39" cy="2" rx="6" ry="2" />

      {/* Specular gloss highlights */}
      <path className={css.coolerShine} d="M24 51 C24 38 27.5 25 33 18 C30 25 26.5 36 26.5 51 Z" />
      <path className={css.coolerShineRim} d="M52 51 C54.5 39 55 28 53 21" />

      {/* Rising animated micro-bubbles in the water */}
      <circle className={css.coolerBubble} cx="31" cy="38" r="1.3" style={{ animationDelay: '0s' }} />
      <circle className={css.coolerBubble} cx="45" cy="44" r="1.6" style={{ animationDelay: '-1.7s' }} />
      <circle className={css.coolerBubble} cx="37" cy="32" r="1.1" style={{ animationDelay: '-3.1s' }} />
      <circle className={css.coolerBubble} cx="49" cy="33" r="1.2" style={{ animationDelay: '-4.4s' }} />
      <circle className={css.coolerBubble} cx="29" cy="47" r="0.9" style={{ animationDelay: '-5.2s' }} />
    </svg>
  )
}

/**
 * Modern Nordic 3-seater Sofa with deep tufted cushions, throw pillows,
 * rounded armrests, natural wood tapered legs, and contact shadows.
 * @returns the sofa figure.
 */
export function SofaFigure() {
  const uid = safeId(useId())
  return (
    <svg className={css.sofaSvg} viewBox="0 0 140 85" aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${uid}-sofa-back`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--team-fabric-lit)' }} />
          <stop offset="0.6" style={{ stopColor: 'var(--team-fabric)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-fabric-dark)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-sofa-seat`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'color-mix(in srgb, var(--dsw-static-neutral-00) 24%, var(--team-fabric-lit))' }} />
          <stop offset="0.3" style={{ stopColor: 'var(--team-fabric-lit)' }} />
          <stop offset="0.75" style={{ stopColor: 'var(--team-fabric)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-fabric-dark)' }} />
        </linearGradient>
      </defs>

      {/* Floor contact shadow */}
      <ellipse className={css.propShade} cx="70" cy="79" rx="64" ry="6" />

      {/* Four tapered wooden legs */}
      <path className={css.sofaLeg} d="M18 68 L14 80 L18 80 L21 68 Z M122 68 L126 80 L122 80 L119 68 Z M36 68 L34 78 L37 78 L39 68 Z M104 68 L106 78 L103 78 L101 68 Z" />

      {/* Sofa Backrest with 3 plush sections and button tufting */}
      <path
        className={css.sofaBack}
        d="M12 14 C12 6 22 2 70 2 C118 2 128 6 128 14 L128 48 C128 54 118 56 70 56 C22 56 12 54 12 48 Z"
        fill={`url(#${uid}-sofa-back)`}
      />
      {/* Backrest top highlight */}
      <path className={css.sofaBackTop} d="M14 12 C24 5 116 5 126 12" />

      {/* Cushion dividers & button tufts */}
      <path className={css.sofaSeam} d="M50 6 V46 M90 6 V46" />
      <circle className={css.sofaButton} cx="31" cy="24" r="1.8" />
      <circle className={css.sofaButton} cx="70" cy="24" r="1.8" />
      <circle className={css.sofaButton} cx="109" cy="24" r="1.8" />

      {/* Thick plush 3D Seat Cushions with piping seam */}
      <rect
        className={css.sofaSeat}
        x="10"
        y="38"
        width="120"
        height="26"
        rx="6"
        fill={`url(#${uid}-sofa-seat)`}
      />
      <path className={css.sofaSeatSeam} d="M50 38 V64 M90 38 V64" />
      <path className={css.sofaSeatPiping} d="M12 42 H128" />

      {/* Rounded Armrests with 3D depth */}
      <path className={css.sofaArm} d="M6 24 C6 18 10 16 16 16 C20 16 22 20 22 28 L22 56 C22 62 18 64 12 64 C8 64 6 60 6 56 Z" />
      <path className={css.sofaArmTop} d="M8 20 C10 18 16 18 18 20" />
      <path className={css.sofaArm} d="M134 24 C134 18 130 16 124 16 C120 16 118 20 118 28 L118 56 C118 62 122 64 128 64 C132 64 134 60 134 56 Z" />
      <path className={css.sofaArmTop} d="M126 20 C128 18 134 18 132 20" />

      {/* Two colorful decorative throw pillows */}
      {/* Left pillow (warm terracotta / mustard) */}
      <rect className={css.sofaPillowWarm} x="20" y="26" width="18" height="18" rx="4" transform="rotate(-12 29 35)" />
      <path className={css.sofaPillowLine} d="M22 35 L36 35" transform="rotate(-12 29 35)" />
      {/* Right pillow (ocean blue / teal) */}
      <rect className={css.sofaPillowCool} x="102" y="26" width="18" height="18" rx="4" transform="rotate(10 111 35)" />
      <path className={css.sofaPillowLine} d="M104 35 L118 35" transform="rotate(10 111 35)" />
    </svg>
  )
}

/**
 * Natural Oak Coffee Table with chamfered edge, splayed wooden legs,
 * glossy design magazine and steaming coffee cup.
 * @returns the table figure.
 */
export function TableFigure() {
  const uid = safeId(useId())
  return (
    <svg className={css.tableSvg} viewBox="0 0 100 55" aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${uid}-tabletop`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'color-mix(in srgb, var(--team-warm) 45%, var(--dsw-static-neutral-00))' }} />
          <stop offset="0.5" style={{ stopColor: 'color-mix(in srgb, var(--team-warm) 50%, var(--dsw-static-neutral-00))' }} />
          <stop offset="1" style={{ stopColor: 'color-mix(in srgb, var(--team-warm) 60%, var(--dsw-static-neutral-600))' }} />
        </linearGradient>
      </defs>

      {/* Floor shadow */}
      <ellipse className={css.propShade} cx="50" cy="50" rx="44" ry="5" />

      {/* Splayed wooden legs with brass ferrules */}
      <path className={css.tableLeg} d="M16 28 L10 49 L14 49 L20 28 Z M84 28 L90 49 L86 49 L80 28 Z M28 28 L25 46 L28 46 L31 28 Z M72 28 L75 46 L72 46 L69 28 Z" />

      {/* Solid Oak Tabletop with 3D bevel and grain */}
      <path
        className={css.tableTop}
        d="M6 18 C6 12 16 8 50 8 C84 8 94 12 94 18 L94 25 C94 31 84 35 50 35 C16 35 6 31 6 25 Z"
        fill={`url(#${uid}-tabletop)`}
      />
      <ellipse className={css.tableSurface} cx="50" cy="18" rx="42" ry="9" />
      <path className={css.tableEdge} d="M8 18 C8 27 92 27 92 18 L92 25 C92 34 8 34 8 25 Z" />
      <path className={css.tableGrain} d="M22 17 C34 14 66 14 78 17 M28 20 C40 18 60 18 72 20" />

      {/* Open design magazine */}
      <path className={css.tableMagazine} d="M22 16 L36 12 L44 15 L30 19 Z" />
      <path className={css.tableMagPage} d="M24 16 L34 13 M38 13 L42 15" />

      {/* Steaming ceramic coffee mug */}
      <ellipse className={css.tableSaucer} cx="68" cy="18" rx="8" ry="3.5" />
      <path className={css.tableCup} d="M63 12 H73 L71.5 18 C71 20 65 20 64.5 18 Z" />
      <path className={css.tableMugHandle} d="M72 13 C75 13 75 16 71.5 17" />
      <path className={css.propSteam} d="M66 10 Q68 7 66 5 M70 10 Q72 7 70 5" />
    </svg>
  )
}

/**
 * Mid-century Arched Floor Lamp with brass stem, marble base,
 * warm glowing linen drum shade, and floor illumination.
 * @returns the floor lamp figure.
 */
export function LampFigure() {
  return (
    <svg className={css.lampSvg} viewBox="0 0 50 120" aria-hidden focusable="false">
      {/* Downward cone light pool */}
      <path className={css.lampBeam} d="M25 38 L48 116 H2 Z" />

      {/* Heavy marble round base */}
      <ellipse className={css.propShade} cx="25" cy="116" rx="18" ry="4" />
      <ellipse className={css.lampBase} cx="25" cy="114" rx="12" ry="3.2" />

      {/* Arched brushed brass stem */}
      <path className={css.lampStem} d="M25 114 V55 C25 24 25 18 25 12" />
      <circle className={css.lampFinial} cx="25" cy="10" r="2" />

      {/* Warm glowing linen drum shade */}
      <path className={css.lampShade} d="M12 16 H38 L42 38 H8 Z" />
      <ellipse className={css.lampShadeTop} cx="25" cy="16" rx="13" ry="3.2" />
      <ellipse className={css.lampShadeBottom} cx="25" cy="38" rx="17" ry="4.2" />
      <circle className={css.lampBulb} cx="25" cy="37" r="4" />
    </svg>
  )
}

/**
 * Wall-mounted Split Air Conditioner with sleek louvers, digital 24°C LED display,
 * and refreshing cool breeze airflow.
 * @returns the air conditioner figure.
 */
export function AirConditionerFigure() {
  return (
    <svg className={css.acSvg} viewBox="0 0 90 45" aria-hidden focusable="false">
      {/* Wall shadow */}
      <rect className={css.propShade} x="4" y="6" width="82" height="24" rx="4" />

      {/* 2.5D Isometric AC Housing: Top, Side, Front */}
      <path className={css.propSide} d="M80 8 L86 4 L86 24 L80 28 Z" />
      <path className={css.acBody} d="M4 8 H80 V28 Q80 30 76 30 H8 Q4 30 4 28 Z" />
      <path className={css.propTop} d="M4 8 L10 4 H86 L80 8 Z" />
      <path className={css.acEdge} d="M4 8 H80 V28 Q80 30 76 30 H8 Q4 30 4 28 Z" />

      {/* Air intake top grille */}
      <path className={css.acGrille} d="M12 6 H78 M14 7.5 H76" />

      {/* Front panel display & brand line */}
      <path className={css.acSeam} d="M6 22 H78" />

      {/* Oscillating airflow flap / louver */}
      <path className={css.acLouver} d="M8 24 H76 V27 H8 Z" />

      {/* Digital LED temperature display (24°C) */}
      <text className={css.acTemp} x="64" y="18">24°</text>

      {/* Status indicator LEDs */}
      <circle className={css.acLedPower} cx="74" cy="14.5" r="1" />
      <circle className={css.acLedCool} cx="74" cy="18.5" r="1" />

      {/* Refreshing downward animated airflow breeze */}
      <path className={css.acBreeze} d="M14 31 Q20 38 16 44 M30 31 Q38 38 34 44 M46 31 Q54 38 50 44 M62 31 Q70 38 66 44" />
    </svg>
  )
}

/**
 * A 2.5D fitness treadmill for the wellness corner: a low deck whose belt
 * disappears under a rounded motor hood, console uprights flanking the hood
 * (the near one clear of it, the far one rising behind it), handrails that
 * sweep back along the deck's sides with pulse grips on the run, and a touch
 * console with the safety key still in it and a bottle in the holder.
 * @returns the treadmill figure.
 */
export function TreadmillFigure() {
  const uid = safeId(useId())
  return (
    <svg className={css.treadmillSvg} viewBox="0 0 100 100" aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${uid}-belt`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--dsw-static-neutral-800)' }} />
          <stop offset="0.5" style={{ stopColor: 'var(--dsw-static-neutral-900)' }} />
          <stop offset="1" style={{ stopColor: 'var(--dsw-static-neutral-1000)' }} />
        </linearGradient>
      </defs>

      {/* Floor contact shadow */}
      <ellipse className={css.propShade} cx="47" cy="93" rx="42" ry="6.5" />

      {/* The deck: far flank, front and top, in the room's shared 2.5D faces */}
      <path className={css.propSide} d="M80 56 L90 50 L90 84 L80 90 Z" />
      <path className={css.treadmillBase} d="M12 62 L80 56 L80 90 L12 96 Z" />
      <path className={css.propTop} d="M12 62 L22 56 L90 50 L80 56 Z" />

      {/* The running belt, tucked under the motor hood at the far end */}
      <path className={css.treadmillBelt} d="M16 63 L66 60 L66 87 L16 90 Z" fill={`url(#${uid}-belt)`} />
      <path className={css.treadmillTread} d="M20 66 L62 63.5 M20 71 L62 68.5 M20 76 L62 73.5 M20 81 L62 78.5 M20 86 L62 83.5" />

      {/* The step rail along the near edge */}
      <path className={css.treadmillRail} d="M13 62.4 L16 62.1 L16 89.6 L13 89.9 Z" />

      {/* The far upright, rising from behind the hood */}
      <path className={css.treadmillPost} d="M85 52 L85 13" />

      {/* The rounded motor hood over the front roller, belt disappearing under it */}
      <path className={css.treadmillHood} d="M66 59 C66 48.5 70.5 42.5 77.5 42 L82 41.6 C87.5 41.4 90 44.5 90 49 L90 64.5 C90 69.5 86.8 72.5 81.8 72.5 L72 73 C67.5 73.2 66 69 66 64.5 Z" />
      <path className={css.treadmillHoodSheen} d="M69 47.5 C71.5 43.8 76 42 81 41.8 C85.5 41.7 88 43.5 88.8 46.8" />
      <path className={css.treadmillHoodVent} d="M70 55 L87 53.2 M70 59 L87 57.2 M70 63 L87 61.2" />

      {/* The near upright, standing clear of the hood's flank */}
      <path className={css.treadmillPost} d="M63 61 L63 17" />

      {/* Handrails sweeping back along the deck's sides, pulse grips on the run */}
      <path className={css.treadmillArm} d="M63 28 L21 33.5 L21 37 L63 31.5 Z" />
      <path className={css.treadmillArm} d="M85 23 L35 32.5 L35 36 L85 26.5 Z" />
      <path className={css.treadmillSensor} d="M28 33.6 H34 M42 32.2 H48" />

      {/* The touch console carried across both uprights */}
      <path className={css.treadmillConsole} d="M56 18 L88 13 L84.5 3.5 L53 8.5 Z" />
      <path className={css.treadmillScreen} d="M59.5 14.8 L84.5 10.9 L82 6.4 L57 10.3 Z" />
      <path className={css.treadmillMetrics} d="M62 13 L80 10.2 M62 10.6 L75 8.5" />

      {/* Safety key on its cord, and the bottle in the holder at the console's base */}
      <circle className={css.treadmillStopKey} cx="79" cy="12.8" r="1.4" />
      <path className={css.treadmillKeyCord} d="M79 12.8 C76 16.5 73 20.5 70.5 24.5" />
      <rect className={css.treadmillBottle} x="54.5" y="14" width="3.2" height="6.5" rx="1.2" />
    </svg>
  )
}

/**
 * A chair seen from behind: a curved shell, a mesh panel, a lumbar pad, a seat
 * pan with a lid on it, a gas lift and a five-star base. The base ellipse is
 * flattened to the floor's own foreshortening, so the chair stands on the room
 * rather than in front of it.
 * @returns the chair.
 */
export function ChairFigure() {
  const uid = safeId(useId())
  return (
    <svg className={css.chairSvg} viewBox="0 0 64 95" aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${uid}-shell`} x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--team-chair-lit)' }} />
          <stop offset="0.55" style={{ stopColor: 'var(--team-chair)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-chair-dark)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-mesh`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" style={{ stopColor: 'color-mix(in srgb, var(--team-chair-lit) 58%, transparent)' }} />
          <stop offset="1" style={{ stopColor: 'color-mix(in srgb, var(--team-chair) 42%, transparent)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-lift`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--team-chair-dark)' }} />
          <stop offset="0.35" style={{ stopColor: 'var(--team-chair-lit)' }} />
          <stop offset="0.65" style={{ stopColor: 'var(--team-chair)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-chair-dark)' }} />
        </linearGradient>
      </defs>
      <g className={css.chairRide}>
        {/* Armrest brackets standing on sides */}
        <path className={css.chairArmrest} d="M8 32 C8 26 12 24 14 26 L14 44 C12 46 8 42 8 36 Z" />
        <path className={css.chairArmrest} d="M56 32 C56 26 52 24 50 26 L50 44 C52 46 56 42 56 36 Z" />

        {/* Ergonomic curved back shell */}
        <path
          className={css.chairShell}
          d="M12 12 C12 4 20 1.5 32 1.5 C44 1.5 52 4 52 12 L52 44 C52 51 45 53.5 32 53.5 C19 53.5 12 51 12 44 Z"
          fill={`url(#${uid}-shell)`}
        />
        <path
          className={css.chairShellEdge}
          d="M12 12 C12 4 20 1.5 32 1.5 C44 1.5 52 4 52 12 L52 44 C52 51 45 53.5 32 53.5 C19 53.5 12 51 12 44 Z"
        />
        <path
          className={css.chairMesh}
          d="M18 14 C18 10.5 23 8 32 8 C41 8 46 10.5 46 14 L46 40 C46 45.5 40 47.5 32 47.5 C24 47.5 18 45.5 18 40 Z"
          fill={`url(#${uid}-mesh)`}
        />
        {/* Breathable mesh horizontal and vertical weave texture */}
        <path className={css.chairMeshLine} d="M19 17 L45 17 M19 22 L45 22 M19 27 L45 27 M19 32 L45 32 M19 37 L45 37 M19 42 L45 42" />
        <path className={css.chairMeshSpine} d="M32 10 V46" />

        {/* Dynamic lumbar support pad */}
        <path className={css.chairLumbar} d="M20 30 C24 27.5 40 27.5 44 30 L44 37 C40 40 24 40 20 37 Z" fill={`url(#${uid}-shell)`} />
        <circle className={css.chairLumbarKnob} cx="32" cy="33.5" r="1.5" />

        {/* Contoured 3D seat cushion with waterfall front edge */}
        <path className={css.chairPan} d="M15 52 H49 Q52 52 52 55 L50 61 Q49.5 63 47 63 H17 Q14.5 63 14 61 L12 55 Q12 52 15 52 Z" />
        <path className={css.chairPanTop} d="M15 52 H49 Q52 52 52 54.5 H12 Q12 52 15 52 Z" />
        <path className={css.chairPanStitch} d="M20 54 H44" />
        <rect className={css.chairMechanism} x="24" y="62" width="16" height="6" rx="2.5" />
      </g>

      {/* Gas lift cylinder & 5-star base */}
      <rect className={css.chairLift} x="30" y="68" width="4" height="15" rx="2" fill={`url(#${uid}-lift)`} />
      <ellipse className={css.chairHub} cx="32" cy="86" rx="6.5" ry="2.4" />
      <g className={css.chairSpokes}>
        <path d="M32 85.5 L8 90.5" />
        <path d="M32 85.5 L19 93" />
        <path d="M32 85.5 L45 93" />
        <path d="M32 85.5 L56 90.5" />
        <path d="M32 85.5 L32 94" />
      </g>
      {/* Dual wheel polyurethane casters with contact shadows */}
      <g className={css.chairCasters}>
        <ellipse cx="8" cy="90.5" rx="2.6" ry="2" />
        <ellipse cx="19" cy="93" rx="2.6" ry="2" />
        <ellipse cx="45" cy="93" rx="2.6" ry="2" />
        <ellipse cx="56" cy="90.5" rx="2.6" ry="2" />
        <ellipse cx="32" cy="94" rx="2.6" ry="2" />
      </g>
    </svg>
  )
}

/**
 * The office printer: a box with a lid, an out-tray with a sheet still in it,
 * a paper cassette pulled a little proud of the body, and a status light.
 * @returns the printer.
 */
export function PrinterFigure() {
  return (
    <svg className={css.propSvg} viewBox="0 0 84 74" aria-hidden focusable="false">
      <ellipse className={css.propShade} cx="40" cy="69" rx="32" ry="5" />
      <path className={css.propSide} d="M64 24 L76 16 L76 62 L64 70 Z" />
      <path className={css.propFront} d="M8 24 H64 V70 H8 Z" />
      <path className={css.propTop} d="M8 24 L20 16 H76 L64 24 Z" />
      <path className={css.propSeam} d="M8 24 H64 V70 H8 Z" />

      {/* Flatbed scanner lid with handle notch */}
      <path className={css.propInset} d="M15 22.5 L24.5 18 H68 L58.5 22.5 Z" />
      <path className={css.propScannerHandle} d="M34 22 H48" />

      {/* Angled touch screen control panel */}
      <path className={css.propScreen} d="M14 26 H30 V34 H14 Z" />
      <path className={css.propScreenGlint} d="M16 28 L24 28 M16 31 L21 31" />

      {/* Paper standing out of the feeder at the back. */}
      <path className={css.propPaper} d="M32 16 L41 10.5 H60 L51 16 Z" />
      <path className={css.propPaperLine} d="M38 14.5 L46 14.5" />

      {/* The out-tray with a printed sheet lying in it. */}
      <path className={css.propTray} d="M12 38 H58 L54 45 H12 Z" />
      <path className={css.propPaper} d="M16 38 H50 L47 43.5 H16 Z" />
      <path className={css.propTextLines} d="M20 40.5 H38 M20 42 H32" />

      {/* Lower paper drawer cassette with level indicator */}
      <path className={css.propInset} d="M12 52 H58 V64 H12 Z" />
      <path className={css.propSeam} d="M12 58 H58" />
      <rect className={css.propDrawerHandle} x="30" y="54" width="10" height="2" rx="1" />
      <rect className={css.propPaperGauge} x="16" y="54" width="3" height="6" rx="0.5" />

      {/* Status LEDs */}
      <circle className={css.propLampLive} cx="52" cy="30" r="2.2" />
      <circle className={css.propLampWifi} cx="45" cy="30" r="1.8" />
      <circle className={css.propLampIdle} cx="38" cy="30" r="1.8" />
    </svg>
  )
}

/**
 * The coffee machine: an Italian espresso & drip station with hopper, group head,
 * steaming cup, glass carafe on warmer plate, and barista details.
 * @returns the coffee machine.
 */
export function CoffeeFigure() {
  return (
    <svg className={css.propSvg} viewBox="0 0 68 92" aria-hidden focusable="false">
      <ellipse className={css.propShade} cx="33" cy="87" rx="26" ry="5" />
      <path className={css.propSide} d="M50 30 L60 23 L60 82 L50 88 Z" />
      <path className={css.propFront} d="M10 30 H50 V88 H10 Z" />
      <path className={css.propTop} d="M10 30 L20 23 H60 L50 30 Z" />
      <path className={css.propSeam} d="M10 30 H50 V88 H10 Z" />

      {/* The bean hopper with coffee beans visible through glass */}
      <path className={css.propInset} d="M22 23 L28 12 H44 L50 23 Z" />
      <path className={css.propGlass} d="M25 20 L29.5 14 H42.5 L47 20 Z" />
      <ellipse className={css.propBean} cx="33" cy="17" rx="1.5" ry="1" />
      <ellipse className={css.propBean} cx="38" cy="18" rx="1.4" ry="1" />

      {/* Pressure gauge dial */}
      <circle className={css.propGauge} cx="18" cy="36" r="3.2" />
      <path className={css.propGaugeNeedle} d="M18 36 L19.5 34.5" />

      {/* Group head and espresso cup */}
      <path className={css.propSeam} d="M20 42 H42" />
      <rect className={css.propInset} x="17" y="46" width="26" height="16" rx="2" />
      <path className={css.propSpout} d="M26 46 V52 M34 46 V52" />
      <path className={css.propPortafilter} d="M17 48 H25 M35 48 H43" />
      <path className={css.propCup} d="M25 55 H35 L33.5 62 Q33 63.5 30 63.5 Q27 63.5 26.5 62 Z" />
      {/* Steam rising from cup */}
      <path className={css.propSteam} d="M28 53 Q30 50 28 48 M32 53 Q34 50 32 48" />

      {/* The glass carafe jug on its warmer plate */}
      <path className={css.propTray} d="M14 78 H46 V81 H14 Z" />
      <path className={css.propWarmerPlate} d="M16 78 H44" />
      <path className={css.propGlass} d="M20 66 H40 L38 77 H22 Z" />
      <path className={css.propBrew} d="M21.4 71 H38.6 L38 77 H22 Z" />
      <path className={css.propCarafeHandle} d="M40 68 C43 68 43 75 39 76" />

      <circle className={css.propLampLive} cx="45" cy="36" r="1.8" />

      {/* The colorful mug resting on the warmer lid */}
      <path className={css.propCup} d="M52 18 H61 L59.8 24 Q59.4 25.4 56.5 25.4 Q53.6 25.4 53.2 24 Z" />
      <path className={css.propMugHandle} d="M60.5 19.5 C63 20 63 23 59.5 23.5" />
    </svg>
  )
}

/**
 * The filing cabinet: three drawers with pull handles and a label card, a
 * folder standing out of the top one, and a box of files on the lid.
 * @returns the filing cabinet.
 */
export function CabinetFigure() {
  return (
    <svg className={css.propSvg} viewBox="0 0 72 108" aria-hidden focusable="false">
      <ellipse className={css.propShade} cx="34" cy="103" rx="27" ry="5" />
      <path className={css.propSide} d="M54 30 L64 23 L64 96 L54 102 Z" />
      <path className={css.propFront} d="M10 30 H54 V102 H10 Z" />
      <path className={css.propTop} d="M10 30 L20 23 H64 L54 30 Z" />
      <path className={css.propSeam} d="M10 30 H54 V102 H10 Z" />
      {[36, 60, 84].map(top => (
        <g key={top}>
          <path className={css.propInset} d={`M14 ${top} H50 V${top + 18} H14 Z`} />
          <rect className={css.propHandle} x="26" y={top + 6} width="12" height="3" rx="1.5" />
          <rect className={css.propLabel} x="17" y={top + 4} width="7" height="5" rx="1" />
          <path className={css.propLabelLine} d={`M18.5 ${top + 6.5} H22.5`} />
        </g>
      ))}
      {/* A folder standing out of the top drawer */}
      <path className={css.propFolder} d="M22 36 L28 26 H42 L36 36 Z" />
      <path className={css.propPaper} d="M25 34 L30 27 H40 L35 34 Z" />
      <path className={css.propFolderTab} d="M30 26 H36 V24 H30 Z" />

      {/* The archive box on the lid */}
      <path className={css.propSide} d="M44 16 L52 11 L52 23 L44 28 Z" />
      <path className={css.propBox} d="M24 16 H44 V28 H24 Z" />
      <path className={css.propBoxTop} d="M24 16 L32 11 H52 L44 16 Z" />
      <path className={css.propSeam} d="M28 21 H40" />
      <ellipse className={css.propBoxHole} cx="34" cy="22" rx="2" ry="1.2" />
    </svg>
  )
}

/**
 * A pendant lamp over the room: a flex, a cone shade with a lit rim, and the
 * pool of light it throws. It hangs from the ceiling strip, which is what
 * finally tells the reader the room has one.
 * @returns the pendant.
 */
export function PendantFigure() {
  const uid = safeId(useId())
  return (
    <svg className={css.pendantSvg} viewBox="0 0 60 100" aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${uid}-beam`} x1="0.5" y1="0" x2="0.5" y2="1">
          <stop offset="0" style={{ stopColor: 'color-mix(in srgb, var(--team-warm) 36%, transparent)' }} />
          <stop offset="0.6" style={{ stopColor: 'color-mix(in srgb, var(--team-warm) 18%, transparent)' }} />
          <stop offset="1" style={{ stopColor: 'transparent' }} />
        </linearGradient>
      </defs>
      {/* The flex suspension cord with brass ceiling rose canopy */}
      <rect className={css.pendantRose} x="27" y="0" width="6" height="3.5" rx="1.5" />
      <path className={css.pendantFlex} d="M30 0 V72" />

      {/* Decorative brass neck ring */}
      <rect className={css.pendantNeck} x="27" y="70" width="6" height="4" rx="1.5" />

      {/* Atmospheric warm cone beam of downward light */}
      <path className={css.pendantGlow} d="M30 88 L58 100 H2 Z" fill={`url(#${uid}-beam)`} />

      {/* Designer dome cone shade */}
      <path className={css.pendantShade} d="M30 74 L48 92 H12 Z" />
      <ellipse className={css.pendantMouth} cx="30" cy="92" rx="18" ry="4.6" />
      <ellipse className={css.pendantBulb} cx="30" cy="90" rx="6" ry="3" />
      <circle className={css.pendantFilament} cx="30" cy="89.5" r="1.5" />
    </svg>
  )
}

/**
 * The cat that lives here. It walks the front of the room now and again and is
 * the one thing in the office nobody assigned a task to.
 * @returns the cat.
 */
export function CatFigure() {
  return (
    <svg className={css.catSvg} viewBox="0 0 64 40" aria-hidden focusable="false">
      <ellipse className={css.propShade} cx="32" cy="37" rx="20" ry="3" />
      {/* Fluffy tail */}
      <path className={css.catTail} d="M12 24 C4 22 2 13 7 8 C5 14 8 19 13 19.5 Z" />
      <path className={css.catTailTip} d="M7 8 C8 10 7 12 5 14 Z" />

      {/* Body & legs */}
      <path className={css.catBody} d="M14 22 C14 15 20 12 30 12 C41 12 47 15 47 22 L47 30 C47 34 44 36 40 36 L21 36 C17 36 14 34 14 30 Z" />
      <path className={css.catLeg} d="M19 32 H23 V37.5 H19 Z M27 32 H31 V37.5 H27 Z M35 32 H39 V37.5 H35 Z M42 32 H46 V37.5 H42 Z" />

      {/* Head, ears with inner pink fuzz */}
      <path className={css.catBody} d="M44 16 C51 16 55 20 55 25 C55 30 51 33 45 33 C41 33 39 30 39 25 C39 20 41 16 44 16 Z" />
      <path className={css.catEar} d="M42 17 L41 8.5 L48 14 Z M52 14 L57 8.5 L57 17 Z" />
      <path className={css.catEarInner} d="M42.5 15.5 L42 10.5 L46.5 14 Z M53 14 L56 10.5 L56 15.5 Z" />

      {/* Sparkling emerald eyes */}
      <circle className={css.catEye} cx="47.5" cy="23.5" r="1.6" />
      <circle className={css.catEye} cx="53.5" cy="23.5" r="1.6" />
      <circle className={css.catPupil} cx="47.5" cy="23.5" r="0.9" />
      <circle className={css.catPupil} cx="53.5" cy="23.5" r="0.9" />
      <circle className={css.catGlint} cx="48" cy="23" r="0.5" />
      <circle className={css.catGlint} cx="54" cy="23" r="0.5" />

      {/* Cute nose & whiskers */}
      <circle className={css.catNose} cx="50.5" cy="26" r="0.7" />
      <path className={css.catWhisker} d="M51 28 L59 26 M51 29 L59 29.5 M51 30 L58 32 M41 27 L33 26 M41 29 L33 29 M41 30 L34 32" />
      <path className={css.catStripe} d="M22 14 L24 20 M29 13 L31 19 M36 14 L38 20 M46 14 L47 17" />
    </svg>
  )
}
