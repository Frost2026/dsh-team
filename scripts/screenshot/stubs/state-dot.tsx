/**
 * StateDot — the one platform primitive the stage imports at runtime. The web
 * shell provides it through its frozen module table; the screenshot harness
 * aliases the package to this stub, drawn the same way the shipped component
 * draws it (see the dsh-client-ui-primitives package's StateDot).
 */
const MATRIX_CELLS: readonly [number, number][] = [
  [0, 0], [4, 0], [8, 0], [8, 4], [8, 8], [4, 8], [0, 8], [0, 4],
]

export function StateDot(props: {
  readonly state: 'ongoing' | 'done' | 'warning' | 'error'
  readonly size?: number
  readonly className?: string
}) {
  const { state, size = 10, className } = props
  if (state === 'ongoing') {
    return (
      <svg
        className={`dot-matrix ${className ?? ''}`}
        data-state="ongoing"
        width={size}
        height={size}
        viewBox="0 0 10 10"
        shapeRendering="crispEdges"
        aria-hidden
      >
        {MATRIX_CELLS.map(([x, y], index) => (
          <rect
            key={`${x}-${y}`}
            className="dot-cell"
            x={x}
            y={y}
            width={2}
            height={2}
            style={{ animationDelay: `${(index - MATRIX_CELLS.length) * 125}ms` }}
          />
        ))}
      </svg>
    )
  }
  return (
    <span
      className={`dot ${className ?? ''}`}
      data-state={state}
      style={{ width: size, height: size }}
      aria-hidden
    />
  )
}
