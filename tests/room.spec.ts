/**
 * The room's own arithmetic: which desk a member gets, where a visitor stands
 * to talk to it, and the walk between two places on the floor. Pure geometry —
 * no DOM, no measurement.
 *
 * @module dsh-team/tests/room
 */

import { describe, expect, it } from 'vitest'
import {
  CORRIDOR, FIELD, LANES, aisleFor, breakAt, deskOf, footprintOf, poseFor, rowsFor,
  routeBetween, stationFor, visitAt, walkMs, type Point, type Rect,
} from '../src/client/room.ts'

/** Every desk of one roster, in seating order. */
function desks(count: number) {
  return Array.from({ length: count }, (_, index) => deskOf(index, count))
}

/** Whether one leg of a walk passes through a rectangle of the floor. */
function crosses(from: Point, to: Point, rect: Rect): boolean {
  const steps = 80
  for (let step = 0; step <= steps; step += 1) {
    const x = from.x + ((to.x - from.x) * step) / steps
    const y = from.y + ((to.y - from.y) * step) / steps
    const inside = x > rect.x + 0.02 && x < rect.x + rect.w - 0.02
      && y > rect.y + 0.02 && y < rect.y + rect.h - 0.02
    if (inside) return true
  }
  return false
}

describe('where a member sits', () => {
  it('keeps the room wide rather than deep, however many members it seats', () => {
    expect(rowsFor(1)).toBe(1)
    expect(rowsFor(3)).toBe(1)
    expect(rowsFor(4)).toBe(2)
    expect(rowsFor(9)).toBe(3)
  })

  it('keeps every desk inside the desk field', () => {
    for (let count = 1; count <= 9; count += 1) {
      for (const desk of desks(count)) {
        expect(desk.x).toBeGreaterThan(FIELD.x)
        expect(desk.x).toBeLessThan(FIELD.x + FIELD.w)
        expect(desk.y).toBeGreaterThan(FIELD.y)
        expect(desk.y).toBeLessThan(FIELD.y + FIELD.h)
      }
    }
  })

  it('gives every member a desk of its own, and the same one every render', () => {
    const places = desks(9).map(desk => `${desk.x},${desk.y}`)
    expect(new Set(places).size).toBe(9)
    expect(deskOf(4, 9)).toEqual(deskOf(4, 9))
  })

  it('fills a row before it starts the next, and centers a short last row', () => {
    const [first, second, wrapped] = [deskOf(0, 6), deskOf(1, 6), deskOf(3, 6)]
    expect(second!.x).toBeGreaterThan(first!.x)
    expect(second!.row).toBe(0)
    expect(wrapped!.row).toBe(1)
    expect(wrapped!.y).toBeGreaterThan(first!.y)

    const middle = deskOf(4, 5)
    expect(middle.row).toBe(1)
    expect(middle.x).toBeGreaterThan(deskOf(3, 5).x)
  })

  it('draws a desk further back smaller, so the room has depth', () => {
    expect(deskOf(0, 3).scale).toBe(1)
    expect(deskOf(0, 6).scale).toBeLessThan(deskOf(3, 6).scale)
  })

  it('packs the crew tighter as the rows grow crowded', () => {
    expect(deskOf(0, 8).scale).toBeLessThan(deskOf(0, 6).scale)
  })
})

describe('where a visitor stands', () => {
  it('stops beside its host, on the side it came from, clear of the host desk', () => {
    const host = deskOf(1, 3)
    const left = visitAt(host, 0)
    const right = visitAt(host, 100)
    expect(left.x).toBeLessThan(host.x)
    expect(right.x).toBeGreaterThan(host.x)
    for (const spot of [left, right]) {
      expect(crosses(spot, spot, footprintOf(host))).toBe(false)
    }
  })

  it('stands a step in front, so neither of them is hidden behind the other', () => {
    const host = deskOf(0, 3)
    expect(visitAt(host, 100).y).toBeGreaterThan(host.y)
  })

  it('hands the break corner three places to stand, and shares them beyond that', () => {
    const spots = [breakAt(0), breakAt(1), breakAt(2)].map(spot => `${spot.x},${spot.y}`)
    expect(new Set(spots).size).toBe(3)
    expect(breakAt(3)).toEqual(breakAt(0))
  })
})

describe('walking the floor', () => {
  it('turns every walk into horizontal and vertical legs, never a diagonal', () => {
    const route = routeBetween(deskOf(0, 9), visitAt(deskOf(8, 9), deskOf(0, 9).x))
    expect(route.length).toBeGreaterThan(2)
    for (let index = 1; index < route.length; index += 1) {
      const from = route[index - 1]!
      const to = route[index]!
      const moves = (Math.abs(from.x - to.x) > 0.5 ? 1 : 0) + (Math.abs(from.y - to.y) > 0.5 ? 1 : 0)
      expect(moves).toBe(1)
    }
  })

  it('walks around the desks: only the leg out of its own desk touches one', () => {
    const floor = desks(9)
    const rects = floor.map(footprintOf)
    for (const [seat, desk] of floor.entries()) {
      const route = routeBetween(floor[0]!, visitAt(desk, floor[0]!.x))
      if (seat === 0) continue
      for (let index = 2; index < route.length; index += 1) {
        for (const rect of rects) {
          expect(crosses(route[index - 1]!, route[index]!, rect), `seat ${seat}, leg ${index}`).toBe(false)
        }
      }
    }
  })

  it('crosses the aisle in front of a row rather than the row itself', () => {
    const [from, to] = [deskOf(0, 6), deskOf(2, 6)]
    const route = routeBetween(from, to)
    expect(route.map(point => point.y)).toContain(aisleFor(from.y))
    // Two desks at the same depth never send anybody out to a side lane.
    expect(route.map(point => point.x)).not.toContain(LANES.right)
  })

  it('goes around by a side lane when the rows differ', () => {
    const route = routeBetween(deskOf(0, 9), deskOf(8, 9))
    expect(route.map(point => point.x)).toContain(LANES.right)
  })

  it('keeps the front walkway in front of every desk', () => {
    for (const desk of desks(9)) expect(aisleFor(desk.y)).toBeLessThanOrEqual(CORRIDOR)
    expect(aisleFor(CORRIDOR + 10)).toBe(CORRIDOR)
  })

  it('says nothing to walk when the member is already there', () => {
    const desk = deskOf(0, 3)
    expect(routeBetween(desk, { x: desk.x, y: desk.y })).toEqual([desk])
  })

  it('takes longer over a longer leg, and never less than a step', () => {
    expect(walkMs(60)).toBeGreaterThan(walkMs(20))
    expect(walkMs(0.4)).toBe(140)
  })
})

describe('what a member is doing', () => {
  it('keeps a member at its own desk while it is working or has just been asked', () => {
    expect(stationFor(true, 'reported', 0)).toBe('desk')
    expect(stationFor(false, 'got', 0)).toBe('desk')
    expect(stationFor(false, undefined, 0)).toBe('desk')
  })

  it('sends a member to the break corner once it has delivered and owns nothing', () => {
    expect(stationFor(false, 'reported', 0)).toBe('break')
    expect(stationFor(false, 'reported', 2)).toBe('desk')
  })

  it('reads the pose off the same live state', () => {
    expect(poseFor(true, undefined, 0)).toBe('working')
    expect(poseFor(false, 'got', 0)).toBe('reading')
    expect(poseFor(false, undefined, 1)).toBe('reading')
    expect(poseFor(false, 'sent', 0)).toBe('idle')
  })
})
