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
 * The water cooler: a bottled jug on a cabinet with a real lid and flank, its
 * own water line, two taps and a drip tray that reads as a tray because it is
 * drawn as an ellipse seen from above rather than as a bar.
 * @returns the cooler.
 */
export function CoolerFigure() {
  const uid = safeId(useId())
  return (
    <svg className={css.coolerSvg} viewBox="0 0 72 100" aria-hidden focusable="false">
      <defs>
        <linearGradient id={`${uid}-cabinet`} x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0" style={{ stopColor: 'var(--team-cooler-lit)' }} />
          <stop offset="0.45" style={{ stopColor: 'var(--team-cooler)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-cooler-dark)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-bottle`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" style={{ stopColor: 'var(--team-cooler-bottle-dark)' }} />
          <stop offset="0.3" style={{ stopColor: 'var(--team-cooler-bottle)' }} />
          <stop offset="0.66" style={{ stopColor: 'var(--team-cooler-bottle-lit)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-cooler-bottle-dark)' }} />
        </linearGradient>
        <linearGradient id={`${uid}-water`} x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" style={{ stopColor: 'var(--team-cooler-water-lit)' }} />
          <stop offset="1" style={{ stopColor: 'var(--team-cooler-water)' }} />
        </linearGradient>
      </defs>

      <ellipse className={css.propShade} cx="34" cy="92" rx="26" ry="6" />

      {/* The cabinet: front, flank, lid. */}
      <path className={css.propSide} d="M52 48 L62 41 L62 84 Q62 88 58 90 L52 90 Z" />
      <path className={css.coolerCabinet} d="M12 48 H52 V85 Q52 90 47 90 H17 Q12 90 12 85 Z" fill={`url(#${uid}-cabinet)`} />
      <path className={css.propTop} d="M12 48 L22 41 H62 L52 48 Z" />
      <path className={css.coolerCabinetEdge} d="M12 48 H52 V85 Q52 90 47 90 H17 Q12 90 12 85 Z" />

      <path className={css.coolerPanel} d="M17 58 H47 V80 H17 Z" />
      <path className={css.coolerDoorSeam} d="M32 58 V80" />
      <path className={css.coolerTap} d="M22 62 H30 M34 62 H42" />
      <circle className={css.coolerHandleWarm} cx="26" cy="59" r="2" />
      <circle className={css.coolerHandleCool} cx="38" cy="59" r="2" />
      {/* A tray is a shallow dish seen from above, so it is an ellipse. */}
      <ellipse className={css.coolerDrip} cx="32" cy="84" rx="15" ry="3.4" />
      <ellipse className={css.coolerDripWell} cx="32" cy="83.6" rx="12" ry="2.2" />

      {/* The jug. Its own top face is the ring the neck sits in. */}
      <path className={css.coolerBottle} d="M19 48 C19 33 22.5 21 28 14 L40 14 C45.5 21 49 33 49 48 Z" fill={`url(#${uid}-bottle)`} />
      <path className={css.coolerWater} d="M21 48 C21 35.5 23.8 24 28.3 18.5 L39.7 18.5 C44.2 24 47 35.5 47 48 Z" fill={`url(#${uid}-water)`} />
      <path className={css.coolerNeck} d="M28 14 L28 6 C28 4.5 29 3.5 30.5 3.5 L37.5 3.5 C39 3.5 40 4.5 40 6 L40 14 Z" fill={`url(#${uid}-bottle)`} />
      <ellipse className={css.coolerCap} cx="34" cy="3" rx="8" ry="2.6" />
      <path className={css.coolerShine} d="M22.5 46 C22.5 34.5 25.3 23.5 30 17 C27.2 23 24.5 32.5 24.5 46 Z" />
      <circle className={css.coolerBubble} cx="28" cy="34" r="1" style={{ animationDelay: '0s' }} />
      <circle className={css.coolerBubble} cx="39" cy="39" r="1.3" style={{ animationDelay: '-1.7s' }} />
      <circle className={css.coolerBubble} cx="33" cy="29" r="0.8" style={{ animationDelay: '-3.1s' }} />
      <circle className={css.coolerBubble} cx="43" cy="30" r="0.9" style={{ animationDelay: '-4.4s' }} />
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
        <path className={css.chairMeshLine} d="M19 17 L45 17 M19 22 L45 22 M19 27 L45 27 M19 32 L45 32 M19 37 L45 37 M19 42 L45 42" />
        <path className={css.chairLumbar} d="M20 30 C24 27.5 40 27.5 44 30 L44 37 C40 40 24 40 20 37 Z" fill={`url(#${uid}-shell)`} />
        {/* The seat pan, with its own lid: from behind you see the back edge of
            the cushion over the front of the pan, not a flat post. */}
        <path className={css.chairPan} d="M15 52 H49 Q52 52 52 55 L50 61 Q49.5 63 47 63 H17 Q14.5 63 14 61 L12 55 Q12 52 15 52 Z" />
        <path className={css.chairPanTop} d="M15 52 H49 Q52 52 52 54.5 H12 Q12 52 15 52 Z" />
        <rect className={css.chairMechanism} x="24" y="62" width="16" height="6" rx="2.5" />
      </g>
      <rect className={css.chairLift} x="30" y="68" width="4" height="15" rx="2" fill={`url(#${uid}-lift)`} />
      <ellipse className={css.chairHub} cx="32" cy="86" rx="6.5" ry="2.4" />
      <g className={css.chairSpokes}>
        <path d="M32 85.5 L8 90.5" />
        <path d="M32 85.5 L19 93" />
        <path d="M32 85.5 L45 93" />
        <path d="M32 85.5 L56 90.5" />
        <path d="M32 85.5 L32 94" />
      </g>
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
      {/* The lid, sunk into the top face so the scanner reads as a scanner. */}
      <path className={css.propInset} d="M15 22.5 L24.5 18 H68 L58.5 22.5 Z" />
      {/* Paper standing out of the feeder at the back. */}
      <path className={css.propPaper} d="M32 16 L41 10.5 H60 L51 16 Z" />
      {/* The out-tray with a printed sheet lying in it. */}
      <path className={css.propTray} d="M12 38 H58 L54 45 H12 Z" />
      <path className={css.propPaper} d="M16 38 H50 L47 43.5 H16 Z" />
      <path className={css.propInset} d="M12 52 H58 V64 H12 Z" />
      <path className={css.propSeam} d="M12 58 H58" />
      <circle className={css.propLampLive} cx="52" cy="30" r="2" />
      <circle className={css.propLampIdle} cx="45" cy="30" r="2" />
    </svg>
  )
}

/**
 * The coffee machine: a hopper, a group head with a cup under it, and a jug on
 * a warmer plate. Somebody's mug is on top, because somebody's mug always is.
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
      {/* The bean hopper, standing on the lid. */}
      <path className={css.propInset} d="M22 23 L28 12 H44 L50 23 Z" />
      <path className={css.propGlass} d="M25 20 L29.5 14 H42.5 L47 20 Z" />
      {/* The group head and the cup under it. */}
      <path className={css.propSeam} d="M20 42 H40" />
      <rect className={css.propInset} x="17" y="46" width="26" height="16" rx="2" />
      <path className={css.propSpout} d="M26 46 V52 M34 46 V52" />
      <path className={css.propCup} d="M25 55 H35 L33.5 62 Q33 63.5 30 63.5 Q27 63.5 26.5 62 Z" />
      {/* The jug on its warmer plate. */}
      <path className={css.propTray} d="M14 78 H46 V81 H14 Z" />
      <path className={css.propGlass} d="M20 66 H40 L38 77 H22 Z" />
      <path className={css.propBrew} d="M21.4 71 H38.6 L38 77 H22 Z" />
      <circle className={css.propLampLive} cx="45" cy="36" r="1.8" />
      {/* The mug on the lid. */}
      <path className={css.propCup} d="M52 18 H61 L59.8 24 Q59.4 25.4 56.5 25.4 Q53.6 25.4 53.2 24 Z" />
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
        </g>
      ))}
      {/* A folder somebody never filed, standing out of the top drawer. */}
      <path className={css.propFolder} d="M22 36 L28 26 H42 L36 36 Z" />
      <path className={css.propPaper} d="M25 34 L30 27 H40 L35 34 Z" />
      {/* The archive box on the lid. */}
      <path className={css.propSide} d="M44 16 L52 11 L52 23 L44 28 Z" />
      <path className={css.propBox} d="M24 16 H44 V28 H24 Z" />
      <path className={css.propBoxTop} d="M24 16 L32 11 H52 L44 16 Z" />
      <path className={css.propSeam} d="M28 21 H40" />
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
  return (
    <svg className={css.pendantSvg} viewBox="0 0 60 100" aria-hidden focusable="false">
      {/* The flex fills the element: however high the ceiling is above the
          lamp's own depth, the wire reaches it. */}
      <path className={css.pendantFlex} d="M30 0 V74" />
      <path className={css.pendantGlow} d="M30 88 L58 100 H2 Z" />
      <path className={css.pendantShade} d="M30 74 L48 92 H12 Z" />
      <ellipse className={css.pendantMouth} cx="30" cy="92" rx="18" ry="4.6" />
      <ellipse className={css.pendantBulb} cx="30" cy="90" rx="6" ry="3" />
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
      <path className={css.catTail} d="M12 24 C4 22 2 14 7 9 C5 15 8 20 13 20 Z" />
      <path className={css.catBody} d="M14 22 C14 15 20 12 30 12 C41 12 47 15 47 22 L47 30 C47 34 44 36 40 36 L21 36 C17 36 14 34 14 30 Z" />
      <path className={css.catLeg} d="M20 32 H24 V37 H20 Z M28 32 H32 V37 H28 Z M36 32 H40 V37 H36 Z" />
      <path className={css.catBody} d="M44 16 C51 16 55 20 55 25 C55 30 51 33 45 33 C41 33 39 30 39 25 C39 20 41 16 44 16 Z" />
      <path className={css.catEar} d="M42 17 L41 9 L48 14 Z M52 14 L57 9 L57 17 Z" />
      <circle className={css.catEye} cx="48" cy="24" r="1.5" />
      <circle className={css.catEye} cx="54" cy="24" r="1.5" />
      <path className={css.catWhisker} d="M52 28 L60 26 M52 29 L60 30" />
      <path className={css.catStripe} d="M22 14 L24 20 M29 13 L31 19 M36 14 L38 20" />
    </svg>
  )
}
