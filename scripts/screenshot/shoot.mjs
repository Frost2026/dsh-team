#!/usr/bin/env node
/**
 * The README screenshot, one command:
 *
 *   node scripts/screenshot/shoot.mjs [out.png]
 *   pnpm run screenshot
 *
 * Builds the harness page with vite (see vite.config.ts), then shoots it in
 * headless Chrome with the theme tokens and the representative mid-flight
 * team snapshot applied by main.tsx — the same room the web shell draws,
 * everything held still by reduced motion so the capture is reproducible.
 * Writes the PNG (default `screenshots/image.png`, the file the README shows).
 */
import { chromium } from 'playwright-core'
import { spawnSync } from 'node:child_process'
import { existsSync } from 'node:fs'
import { createServer } from 'node:http'
import { readFileSync, statSync } from 'node:fs'
import { createRequire } from 'node:module'
import { dirname, extname, join, resolve } from 'node:path'

const PROOT = resolve(dirname(new URL(import.meta.url).pathname), '..', '..')
const VITE_BIN = join(dirname(createRequire(import.meta.url).resolve('vite/package.json')), 'bin', 'vite.js')
const DIST = join(PROOT, '.tmp-screenshot', 'dist')
const OUT = resolve(process.argv[2] ?? join(PROOT, 'screenshots', 'image.png'))
const WIDTH = 1500
const HEIGHT = 760

/** The chrome binaries a runner might carry, in order to try. */
const CHROME_CANDIDATES = [
  process.env.CHROME_PATH ?? '',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/opt/google/chrome/chrome',
].filter(Boolean)

// ---- 1. Build the harness page ----
const built = spawnSync('node', [VITE_BIN, 'build', '--config', 'scripts/screenshot/vite.config.ts', '--logLevel', 'warn'], {
  cwd: PROOT, encoding: 'utf8',
})
if (built.status !== 0) {
  console.error(built.stderr || built.stdout)
  process.exit(built.status ?? 1)
}

// ---- 2. Serve it ----
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.map': 'application/json' }
const server = createServer((req, res) => {
  const url = req.url.split('?')[0]
  const path = resolve(join(DIST, url === '/' ? 'index.html' : url))
  if (!path.startsWith(DIST)) { res.writeHead(403); res.end(); return }
  try {
    const body = readFileSync(path)
    res.writeHead(200, { 'content-type': MIME[extname(path)] ?? 'application/octet-stream' })
    res.end(body)
  } catch {
    res.writeHead(404); res.end()
  }
})
await new Promise(ok => server.listen(0, '127.0.0.1', ok))
const port = server.address().port

// ---- 3. Shoot ----
const executablePath = CHROME_CANDIDATES.find(existsSync)
if (executablePath === undefined) {
  console.error('no chrome binary found; set CHROME_PATH')
  process.exit(1)
}
const browser = await chromium.launch({
  executablePath,
  headless: true,
  args: ['--no-sandbox', '--font-render-hinting=none', '--disable-lcd-text', '--force-color-profile=srgb', '--hide-scrollbars', '--disable-skia-runtime-opts'],
})
const page = await browser.newPage({
  viewport: { width: WIDTH, height: HEIGHT },
  deviceScaleFactor: 2,
  reducedMotion: 'reduce',
})
page.on('pageerror', error => console.error('[page]', error.message))
await page.goto(`http://127.0.0.1:${port}/`, { waitUntil: 'networkidle' })
await page.evaluate(() => document.fonts.ready)
await page.waitForSelector('[data-agent-team-stage]', { timeout: 15_000 })
// Reduced motion cancels every animation, so a beat is safety, not tuning.
await page.waitForTimeout(600)
await page.locator('#stage').screenshot({ path: OUT, animations: 'disabled' })
console.log('wrote', OUT, `${statSync(OUT).size} bytes`)
await browser.close()
server.close()
