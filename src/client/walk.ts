/**
 * Walking, one leg at a time.
 *
 * A member never drifts across the floor: `routeBetween` breaks the trip into
 * horizontal and vertical legs around the furniture, and this hook hands the
 * tile ONE leg at a time — where that leg ends, and how long it takes. The
 * stylesheet tweens `left`/`top` linearly for exactly that long, so the
 * browser owns the motion and React renders once per leg (four or five in a
 * whole trip) instead of once per frame.
 */
import { useEffect, useRef, useState } from 'react'
import { routeBetween, walkMs, type Point } from './room.ts'

/** Which way a member is turned; standing still it faces the room. */
export type Facing = 'left' | 'right' | 'front'

/** The leg a member is on: where it ends, how long it takes, which way it goes. */
export interface Walk extends Point {
  /** Milliseconds this leg takes; zero when the member is standing still. */
  readonly ms: number
  readonly facing: Facing
  readonly walking: boolean
}

/** Two places closer than this are the same place. */
const NEAR = 0.5

/** Whether the reader asked for no motion. */
function still(): boolean {
  return typeof window !== 'undefined'
    && typeof window.matchMedia === 'function'
    && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

/**
 * Walk a member from where it is to where it should be.
 *
 * A target that changes mid-trip is re-routed from the end of the leg in
 * flight rather than from the pixel the member is on — the walk stays on the
 * aisles, at the cost of one shortened leg where it turns around.
 * @param home - where the member starts, before it has walked anywhere.
 * @param target - where it should be standing now.
 * @returns the current leg.
 */
export function useWalk(home: Point, target: Point): Walk {
  const [walk, setWalk] = useState<Walk>(() => ({ x: home.x, y: home.y, ms: 0, facing: 'front', walking: false }))
  /** Where the leg in flight ends: the next route is planned from there. */
  const at = useRef<Point>({ x: home.x, y: home.y })
  /** The way the member last turned, kept across the vertical legs. */
  const facing = useRef<Facing>('front')

  useEffect(() => {
    const start = at.current
    if (Math.abs(start.x - target.x) < NEAR && Math.abs(start.y - target.y) < NEAR) return undefined
    if (still()) {
      at.current = { x: target.x, y: target.y }
      setWalk({ x: target.x, y: target.y, ms: 0, facing: 'front', walking: false })
      return undefined
    }
    const legs = routeBetween(start, target).slice(1)
    let index = 0
    let timer: ReturnType<typeof setTimeout> | undefined
    const step = (): void => {
      const next = legs[index]
      index += 1
      if (next === undefined) {
        facing.current = 'front'
        setWalk(current => ({ ...current, ms: 0, facing: 'front', walking: false }))
        return
      }
      const from = at.current
      const ms = walkMs(Math.abs(next.x - from.x) + Math.abs(next.y - from.y))
      if (next.x > from.x + NEAR) facing.current = 'right'
      else if (next.x < from.x - NEAR) facing.current = 'left'
      at.current = next
      setWalk({ x: next.x, y: next.y, ms, facing: facing.current, walking: true })
      timer = setTimeout(step, ms)
    }
    step()
    return () => { if (timer !== undefined) clearTimeout(timer) }
  }, [target.x, target.y])

  return walk
}
