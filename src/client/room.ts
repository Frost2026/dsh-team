/**
 * The room's own arithmetic: where every workstation stands, what its owner is
 * doing there, and how a member walks from one place on the floor to another.
 *
 * All of it is pure geometry over the roster — a place comes from a member's
 * index, never from a DOM measurement — and a walk is a chain of horizontal
 * and vertical legs that leaves the desk row through its aisle and crosses the
 * floor along a lane, so a member walks around the furniture instead of
 * drifting over it.
 */

/** A point on the floor, in the room's own 0–100 space. */
export interface Point {
  readonly x: number
  readonly y: number
}

/** A rectangle of the floor, in the same space. */
export interface Rect extends Point {
  readonly w: number
  readonly h: number
}

/**
 * A place a member stands: the point under its feet, how much clear floor it
 * has beside it (where a visitor stops to talk), and how large it draws there
 * — a desk further back stands smaller, so the room has depth.
 */
export interface Post extends Point {
  readonly gap: number
  readonly scale: number
}

/** One workstation, and the row of desks it belongs to. */
export interface Desk extends Post {
  readonly row: number
  readonly rows: number
  readonly columns: number
}

/** The floor the desks are laid out on. */
export const FIELD: Rect = { x: 7, y: 30, w: 60, h: 62 }

/** The break corner, in the near right of the room. */
export const LOUNGE: Rect = { x: 69, y: 38, w: 29, h: 50 }

/** The walkway across the front of the room: every cross-row trip uses it. */
export const CORRIDOR = 91

/** The two vertical lanes down the sides of the desk field. */
export const LANES = { left: 3.5, right: 68.5 } as const

/** How far in front of a desk its own aisle runs. */
const AISLE = 5.5

/** Half the height of the floor one desk and its chair take up. */
const FOOT_HEIGHT = 4.4

/** Two places closer than this are the same place. */
const NEAR = 0.5

/** Rows of desks that differ by less than this share one aisle. */
const BAND = 4

/** Round geometry so a style, a test and a route all read the same number. */
function round(value: number): number {
  return Math.round(value * 100) / 100
}

/** Keep a place on the floor rather than through a wall. */
function clamp(value: number, low: number, high: number): number {
  return Math.min(high, Math.max(low, value))
}

/**
 * How many rows of desks a roster of this size stands in. Rows stay wide and
 * shallow: a room reads better across than back, and three rows is as deep as
 * the aisles between them can stay walkable.
 * @param count - how many members the room seats.
 * @returns the number of rows.
 */
export function rowsFor(count: number): number {
  if (count <= 3) return 1
  return count <= 8 ? 2 : 3
}

/**
 * One member's own desk: the same seat for the same roster index, every
 * render. Desks fill left to right and front rows draw larger than back ones.
 * @param index - the member's index on the roster (the leader takes the first).
 * @param count - how many members the room seats.
 * @returns the workstation.
 */
export function deskOf(index: number, count: number): Desk {
  const rows = rowsFor(count)
  const columns = Math.max(1, Math.ceil(count / rows))
  const row = Math.min(rows - 1, Math.floor(index / columns))
  const column = index % columns
  // A short last row is centered under the full ones rather than left-hung.
  const filled = Math.min(columns, count - row * columns)
  const slack = (columns - filled) / 2
  const cell = FIELD.w / columns
  const depth = rows === 1 ? 1 : row / (rows - 1)
  return {
    x: round(FIELD.x + cell * (column + slack + 0.5)),
    y: round(FIELD.y + FIELD.h * ((row + 0.5) / rows)),
    gap: round(cell / 2),
    scale: round((0.84 + 0.16 * depth) * (columns <= 3 ? 1 : columns === 4 ? 0.88 : 0.76)),
    row,
    rows,
    columns,
  }
}

/**
 * Where the break corner puts the nth member taking one. There are three
 * places to stand around the sofa, all of them in front of the furniture and
 * close enough to it to belong to it — a member on a break stands at the
 * coffee table, never in it, and never marooned on the floor below it — and a
 * fourth member shares the first.
 * @param index - the member's index among those on a break.
 * @returns the place it stands.
 */
export function breakAt(index: number): Post {
  const spots: readonly Point[] = [
    { x: LOUNGE.x + 8, y: LOUNGE.y + 31 },
    { x: LOUNGE.x + 20, y: LOUNGE.y + 36 },
    { x: LOUNGE.x + 14, y: LOUNGE.y + 25 },
  ]
  const spot = spots[index % spots.length] ?? spots[0]!
  return { x: round(spot.x), y: round(spot.y), gap: 7, scale: 0.9 }
}

/**
 * Where a visitor stops to talk: beside its host, on the side it arrived from,
 * one step in front so neither of them is hidden behind the other.
 * @param host - the place the member being visited stands.
 * @param fromX - where the visitor is coming from.
 * @returns the place the visitor stands while it talks.
 */
export function visitAt(host: Post, fromX: number): Point {
  const side = fromX < host.x ? -1 : 1
  return { x: round(clamp(host.x + side * host.gap, 4, 96)), y: round(host.y + 2) }
}

/** The floor one desk and its chair take up; a route must not cross it. */
export function footprintOf(post: Post): Rect {
  return {
    x: round(post.x - post.gap * 0.84),
    y: round(post.y - FOOT_HEIGHT),
    w: round(post.gap * 1.68),
    h: FOOT_HEIGHT * 2,
  }
}

/** The walkway in front of whatever stands at this depth. */
export function aisleFor(y: number): number {
  return round(Math.min(CORRIDOR, y + AISLE))
}

/** Which side lane a trip between these two columns goes around by. */
function laneFor(fromX: number, toX: number): number {
  return (fromX + toX) / 2 < FIELD.x + FIELD.w / 2 ? LANES.left : LANES.right
}

/** Drop the legs a walk would not take: zero-length ones, and straight-throughs. */
function prune(points: readonly Point[]): readonly Point[] {
  const out: Point[] = []
  for (const point of points) {
    const last = out[out.length - 1]
    if (last !== undefined && Math.abs(last.x - point.x) < NEAR && Math.abs(last.y - point.y) < NEAR) continue
    const before = out[out.length - 2]
    // Three points on one line are two legs of the same walk: keep the far end.
    if (
      last !== undefined && before !== undefined
      && ((Math.abs(before.x - last.x) < NEAR && Math.abs(last.x - point.x) < NEAR)
        || (Math.abs(before.y - last.y) < NEAR && Math.abs(last.y - point.y) < NEAR))
    ) {
      out.pop()
    }
    out.push(point)
  }
  return out
}

/**
 * The walk from one place on the floor to another, as the corners it turns.
 * Two places at the same depth share the aisle in front of them; anywhere else
 * the walk goes out to its own aisle, down a side lane, and in along the
 * destination's aisle. Every leg is horizontal or vertical: nobody cuts a
 * diagonal through a desk.
 * @param from - where the walk starts.
 * @param to - where it ends.
 * @returns the corners, starting at `from` and ending at `to`.
 */
export function routeBetween(from: Point, to: Point): readonly Point[] {
  if (Math.abs(from.x - to.x) < NEAR && Math.abs(from.y - to.y) < NEAR) return [from]
  if (Math.abs(from.y - to.y) <= BAND) {
    const aisle = aisleFor(Math.max(from.y, to.y))
    return prune([from, { x: from.x, y: aisle }, { x: to.x, y: aisle }, to])
  }
  const lane = laneFor(from.x, to.x)
  const out = aisleFor(from.y)
  const back = aisleFor(to.y)
  return prune([
    from,
    { x: from.x, y: out },
    { x: lane, y: out },
    { x: lane, y: back },
    { x: to.x, y: back },
    to,
  ])
}

/** How long a walk of this length takes, at a walking pace. */
export function walkMs(distance: number, speed = 34): number {
  return Math.max(140, Math.round((distance / speed) * 1000))
}

/** The last thing that happened to one member in the visible mailbox tail. */
export type Touch = 'got' | 'sent' | 'reported'

/** Where a member is: at its own desk, or taking a break in the corner. */
export type Station = 'desk' | 'break'

/** What a member is doing there. */
export type Pose = 'working' | 'reading' | 'idle'

/**
 * Whether a member is at its desk or on a break. A member keeps its own desk
 * for good — it only leaves it once its own report is the last thing it did
 * and nothing open is left with its name on it.
 * @param running - whether the member is mid-turn.
 * @param touch - the last mailbox event that named it, if any.
 * @param openTasks - how many unfinished tasks name it as assignee.
 * @returns where it stands.
 */
export function stationFor(running: boolean, touch: Touch | undefined, openTasks: number): Station {
  if (running || touch === 'got') return 'desk'
  return touch === 'reported' && openTasks === 0 ? 'break' : 'desk'
}

/**
 * What a member is doing where it stands: mid-turn it works, with mail or open
 * work on its plate it reads, and with neither it idles.
 * @param running - whether the member is mid-turn.
 * @param touch - the last mailbox event that named it, if any.
 * @param openTasks - how many unfinished tasks name it as assignee.
 * @returns the pose.
 */
export function poseFor(running: boolean, touch: Touch | undefined, openTasks: number): Pose {
  if (running) return 'working'
  return touch === 'got' || openTasks > 0 ? 'reading' : 'idle'
}
