/**
 * The room's own arithmetic: which area a member's live state puts it in, and
 * where inside that area it stands. Pure geometry — no DOM, no measurement.
 *
 * @module dsh-team/tests/room
 */

import { describe, expect, it } from 'vitest'
import { ZONES, ZONE_ORDER, scaleOf, slotOf, zoneFor, type ZoneId } from '../src/client/room.ts'

describe('where a member stands', () => {
  it('puts a member mid-turn at a workstation, whatever else is true of it', () => {
    expect(zoneFor(true, undefined, 0)).toBe('work')
    expect(zoneFor(true, 'reported', 3)).toBe('work')
  })

  it('seats a member that was just messaged at a workstation: the ask is on its screen', () => {
    expect(zoneFor(false, 'got', 0)).toBe('work')
  })

  it('sends a member to the snack bar once its own report is the last thing it did', () => {
    expect(zoneFor(false, 'reported', 2)).toBe('snack')
  })

  it('keeps a member that still owns open work in the lounge', () => {
    expect(zoneFor(false, undefined, 1)).toBe('lounge')
    expect(zoneFor(false, 'sent', 1)).toBe('lounge')
  })

  it('lets a member with nothing on its plate swim', () => {
    expect(zoneFor(false, undefined, 0)).toBe('pool')
    expect(zoneFor(false, 'sent', 0)).toBe('pool')
  })
})

describe('where the area puts it', () => {
  it('keeps every occupant inside the area it belongs to', () => {
    for (const zone of ZONE_ORDER) {
      const rect = ZONES[zone]
      for (let count = 1; count <= 9; count += 1) {
        for (let index = 0; index < count; index += 1) {
          const slot = slotOf(zone, index, count)
          expect(slot.x).toBeGreaterThan(rect.x)
          expect(slot.x).toBeLessThan(rect.x + rect.w)
          expect(slot.y).toBeGreaterThan(rect.y)
          expect(slot.y).toBeLessThan(rect.y + rect.h)
        }
      }
    }
  })

  it('gives every occupant of one area its own place', () => {
    const places = Array.from({ length: 8 }, (_, index) => slotOf('work', index, 8))
      .map(slot => `${slot.x},${slot.y}`)
    expect(new Set(places).size).toBe(8)
  })

  it('centers a single occupant in its area', () => {
    const rect = ZONES.lounge
    const slot = slotOf('lounge', 0, 1)
    expect(slot).toMatchObject({ x: rect.x + rect.w / 2, y: rect.y + rect.h / 2, row: 0, rows: 1 })
  })

  it('fills a row before starting the next one, and says which row it is', () => {
    const first = slotOf('work', 0, 8)
    const second = slotOf('work', 1, 8)
    const wrapped = slotOf('work', 4, 8)
    expect(second.x).toBeGreaterThan(first.x)
    expect(second.row).toBe(0)
    expect(wrapped.row).toBe(1)
    expect(wrapped.x).toBe(first.x)
    expect(wrapped.y).toBeGreaterThan(first.y)
  })

  it('packs the whales tighter the more rows an area needs', () => {
    expect(scaleOf(1)).toBe(1)
    expect(scaleOf(2)).toBeLessThan(1)
    expect(scaleOf(3)).toBeLessThan(scaleOf(2))
  })

  it('lays the areas out without overlapping one another', () => {
    const overlaps = (a: ZoneId, b: ZoneId): boolean => {
      const one = ZONES[a]
      const other = ZONES[b]
      return one.x < other.x + other.w && other.x < one.x + one.w
        && one.y < other.y + other.h && other.y < one.y + one.h
    }
    for (const zone of ZONE_ORDER) {
      for (const other of ZONE_ORDER) {
        if (zone !== other) expect(overlaps(zone, other)).toBe(false)
      }
      const rect = ZONES[zone]
      expect(rect.x + rect.w).toBeLessThanOrEqual(100)
      expect(rect.y + rect.h).toBeLessThanOrEqual(100)
    }
  })
})
