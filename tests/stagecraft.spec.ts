/**
 * The room's perspective: how a place on the flat floor plan lands inside the
 * box you look into. Pure arithmetic — the plan stays 0–100, the screen stays
 * 0–100, and this file pins down that the one maps onto the other the way a
 * room would.
 *
 * @module dsh-team/tests/stagecraft
 */

import { describe, expect, it } from 'vitest'
import { SHELL, WALL_TOP, depthOf, onWall, project, shellVars, widthAt } from '../src/client/stagecraft.ts'

describe('the projection', () => {
  it('puts the near edge of the floor at the bottom of the stage', () => {
    expect(project({ x: 50, y: 100 }).top).toBe(SHELL.bottom)
    expect(project({ x: 50, y: 100 }).left).toBe(50)
  })

  it('puts the back wall at the top of the floor, on the centre line', () => {
    expect(project({ x: 50, y: 0 }).top).toBe(SHELL.top)
    expect(project({ x: 50, y: 0 }).left).toBe(50)
  })

  it('draws the floor wider at the front than at the back', () => {
    expect(widthAt(0)).toBe(1)
    expect(widthAt(1)).toBe(SHELL.far)
    expect(project({ x: 0, y: 100 }).left).toBeLessThan(project({ x: 0, y: 0 }).left)
    expect(project({ x: 100, y: 100 }).left).toBeGreaterThan(project({ x: 100, y: 0 }).left)
  })

  it('keeps the centre line straight, whatever the depth', () => {
    for (let y = 0; y <= 100; y += 10) expect(project({ x: 50, y }).left).toBe(50)
  })

  it('shrinks what stands further back by exactly the narrowing of the floor', () => {
    expect(project({ x: 50, y: 40 }).scale).toBeLessThan(project({ x: 50, y: 60 }).scale)
    expect(project({ x: 50, y: 100 }).scale).toBe(1)
  })

  it('crowds the plan toward the back: equal steps cover less screen there', () => {
    const nearGap = project({ x: 50, y: 40 }).top - project({ x: 50, y: 50 }).top
    const farGap = project({ x: 50, y: 0 }).top - project({ x: 50, y: 10 }).top
    expect(Math.abs(farGap)).toBeLessThan(Math.abs(nearGap))
  })

  it('runs the depth through a smooth, monotone curve', () => {
    expect(depthOf(0)).toBe(1)
    expect(depthOf(100)).toBe(0)
    for (let y = 0; y < 100; y += 5) {
      expect(depthOf(y)).toBeGreaterThanOrEqual(depthOf(y + 5))
    }
  })

  it('puts a wall fixture over the floor place it belongs to', () => {
    expect(onWall(50)).toBe(50)
    expect(onWall(0)).toBe(50 - (SHELL.far * 100) / 2)
    expect(onWall(100)).toBe(50 + (SHELL.far * 100) / 2)
  })
})

describe('the shell', () => {
  it('hands the stylesheet the same numbers the projection uses', () => {
    const vars = shellVars() as Record<string, string>
    expect(Number.parseFloat(vars['--team-floor-top']!)).toBe(SHELL.top)
    expect(Number.parseFloat(vars['--team-far-width']!)).toBe(SHELL.far * 100)
    expect(Number.parseFloat(vars['--team-far-inset']!)).toBeCloseTo(((1 - SHELL.far) / 2) * 100)
    expect(Number.parseFloat(vars['--team-wall-top']!)).toBe(WALL_TOP)
  })

})
