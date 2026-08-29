/**
 * Bundle the README screenshot harness: the stage from source, the CSS module
 * as the site builds it, and the shell's platform-module table reduced to the
 * one primitive the stage actually draws. `index.html` here is the entry; the
 * build lands in `.tmp-screenshot/dist`, which shoot.mjs serves and shoots.
 */
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const here = (path: string): string => fileURLToPath(new URL(path, import.meta.url))

export default defineConfig({
  // The harness page is the root; `src/…` and node_modules still resolve
  // from the package root.
  root: here('.'),
  publicDir: false,
  base: './',
  resolve: {
    alias: {
      // The shell's frozen module table hands the plugin this one primitive;
      // keep the rest of the primitives barrel out of the bundle — it drags
      // shiki, katex and the markdown dom in with it.
      '@deepseek-ai/dsh-client-ui-primitives': here('./stubs/state-dot.tsx'),
    },
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    outDir: here('../../.tmp-screenshot/dist'),
    emptyOutDir: true,
    minify: false,
    sourcemap: false,
    rollupOptions: {
      input: here('./index.html'),
    },
  },
})
