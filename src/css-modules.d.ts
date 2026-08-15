/**
 * CSS modules are compiled into the browser bundle by the build's own
 * lightningcss inliner (see tsdown.config.ts), which returns the local→hashed
 * class map as the default export. This declaration gives the type checker the
 * same shape without pulling a bundler-specific ambient package.
 */
declare module '*.module.css' {
  const classes: Readonly<Record<string, string>>
  export default classes
}
