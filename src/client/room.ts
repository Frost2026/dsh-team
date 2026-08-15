/**
 * Where every member of the team is, drawn as a room rather than a list.
 *
 * The floor is four areas — workstations, the lounge, the pool, the snack bar
 * — and a member's own live state decides which one it is standing in. All of
 * it is pure geometry over the roster: slots are computed from a member's
 * index inside its area, never measured from the DOM, so the picture is a
 * function of the durable state and nothing else.
 */

/** The four areas of the room. */
export type ZoneId = 'work' | 'lounge' | 'pool' | 'snack'

/** A rectangle of the floor, in the room's own 0–100 space. */
export interface Rect {
  readonly x: number
  readonly y: number
  readonly w: number
  readonly h: number
}

/** A point on the floor, in the room's own 0–100 space. */
export interface Point {
  readonly x: number
  readonly y: number
}

/** Where each area sits on the floor. */
export const ZONES: Record<ZoneId, Rect> = {
  work: { x: 1.5, y: 13, w: 62, h: 47 },
  snack: { x: 66.5, y: 13, w: 32, h: 22 },
  pool: { x: 66.5, y: 39, w: 32, h: 47 },
  lounge: { x: 1.5, y: 64, w: 62, h: 22 },
}

/** Painting order: the areas along the back wall first. */
export const ZONE_ORDER: readonly ZoneId[] = ['work', 'snack', 'pool', 'lounge']

/** Roughly how wide one occupant is, in floor units. */
const SLOT_WIDTH = 17

/**
 * Where one occupant of an area stands. Occupants fill left to right, then
 * wrap — the same reading order as the roster they came from.
 * @param zone - the area.
 * @param index - the occupant's position among the area's occupants.
 * @param count - how many occupants the area holds.
 * @returns the point, in the room's own 0–100 space.
 */
export function slotOf(zone: ZoneId, index: number, count: number): Point {
  const rect = ZONES[zone]
  const columns = Math.max(1, Math.min(count, Math.round(rect.w / SLOT_WIDTH)))
  const rows = Math.max(1, Math.ceil(count / columns))
  return {
    x: rect.x + rect.w * (((index % columns) + 0.5) / columns),
    y: rect.y + rect.h * ((Math.floor(index / columns) + 0.5) / rows),
  }
}

/** The last thing that happened to one member in the visible mailbox tail. */
export type Touch = 'got' | 'sent' | 'reported'

/**
 * Which area one member is in. A member mid-turn, or one with mail on its
 * screen, is at a workstation; one whose own report is the last thing it did
 * has earned the snack bar; one that still owns open work waits in the lounge;
 * one with nothing on its plate swims.
 * @param running - whether the member is mid-turn.
 * @param touch - the last mailbox event that named it, if any.
 * @param openTasks - how many unfinished tasks name it as assignee.
 * @returns the area it stands in.
 */
export function zoneFor(running: boolean, touch: Touch | undefined, openTasks: number): ZoneId {
  if (running || touch === 'got') return 'work'
  if (touch === 'reported') return 'snack'
  return openTasks > 0 ? 'lounge' : 'pool'
}
