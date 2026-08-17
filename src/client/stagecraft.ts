/**
 * The room's perspective: how a place on the floor plan becomes a place on the
 * screen.
 *
 * `room.ts` owns a flat 0–100 floor plan — where the desks are, where the
 * aisles run, what a walk avoids — and knows nothing about how the room is
 * drawn. This module is the other half: it takes a point on that plan and puts
 * it inside a box you are looking into, where the floor narrows toward a back
 * wall, the two side walls close in with it, and something standing further
 * back draws smaller because the floor under it is narrower there.
 *
 * The screen space is 0–100 in each axis as well, so every style stays a plain
 * `left: X%; top: Y%` and nothing in the room has to be measured.
 */
import type { CSSProperties } from 'react'
import type { Point } from './room.ts'

/**
 * The shape of the box, as fractions of the stage.
 *
 * `far` is how wide the floor still is where it meets the back wall, `top` and
 * `bottom` are the band of the stage the floor covers, and `bend` is how fast
 * depth runs away from the viewer: below 1 the far half of the plan is squeezed
 * into a thin strip at the back, which is what makes floorboards bunch up.
 */
export const SHELL = {
  far: 0.72,
  top: 23,
  bottom: 100,
  bend: 0.55,
} as const

/** How high the back wall stands, as a fraction of the stage. */
export const WALL_TOP = 3

/** A place on the screen: where it goes, and how large it draws there. */
export interface Screen {
  /** Percent across the stage. */
  readonly left: number
  /** Percent down the stage. */
  readonly top: number
  /** How wide the floor still is at this depth: one number for every size. */
  readonly scale: number
}

/** Round geometry so a style, a test and a route all read the same number. */
function round(value: number): number {
  return Math.round(value * 100) / 100
}

/**
 * How far into the room a plan depth lies, after perspective: 0 at the near
 * edge of the floor, 1 where it meets the back wall. The plan runs the other
 * way — y grows toward the viewer — and the curve is the perspective divide,
 * so equal steps back cover less and less of the screen.
 * @param y - the plan depth, 0 at the back wall and 100 at the near edge.
 * @returns the screen depth, 0 near and 1 far.
 */
export function depthOf(y: number): number {
  const back = Math.min(1, Math.max(0, 1 - y / 100))
  return back / (back + SHELL.bend * (1 - back))
}

/**
 * How wide the floor is at a screen depth, as a fraction of the stage: 1 across
 * the near edge, `SHELL.far` where it meets the back wall.
 * @param depth - the screen depth, 0 near and 1 far.
 * @returns the fraction of the stage the floor spans there.
 */
export function widthAt(depth: number): number {
  return 1 + (SHELL.far - 1) * depth
}

/**
 * One place on the floor plan, as a place on the screen. The scale it comes
 * back with is the floor's own narrowing at that depth, so a member, its desk
 * and the aisle it walks all shrink by exactly the same amount and nothing
 * drifts off its own feet.
 * @param point - the place on the 0–100 floor plan.
 * @returns where it draws, and how large.
 */
export function project(point: Point): Screen {
  const depth = depthOf(point.y)
  const scale = widthAt(depth)
  return {
    left: round(50 + (point.x - 50) * scale),
    top: round(SHELL.bottom - (SHELL.bottom - SHELL.top) * depth),
    scale: round(scale),
  }
}

/**
 * Where a fixture on the back wall goes across the stage. The wall stands at
 * the far end of the floor, so it is only `SHELL.far` of the stage wide: a
 * window hung at plan x lands here, which is what lets a member walk up to the
 * window it is actually standing under.
 * @param x - the place across the floor plan the fixture hangs above.
 * @returns the percent across the stage.
 */
export function onWall(x: number): number {
  return round(50 + (x - 50) * SHELL.far)
}

/**
 * The box's own numbers, as custom properties. The shell's five faces are cut
 * out of `clip-path` polygons, and the polygons and this module's arithmetic
 * have to agree to the percent or the walls will not meet the floor — so they
 * read the same variables rather than each carrying their own copy.
 * @returns the style to hang on the room.
 */
export function shellVars(): CSSProperties {
  const inset = round(((1 - SHELL.far) / 2) * 100)
  return {
    '--team-far-inset': `${inset}%`,
    '--team-floor-top': `${SHELL.top}%`,
    '--team-wall-top': `${WALL_TOP}%`,
    '--team-far-width': `${round(SHELL.far * 100)}%`,
  } as CSSProperties
}
