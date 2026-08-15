import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    css: false,
    // The whole suite runs on the fast node pool; the panel spec opts itself
    // into jsdom with a `@vitest-environment` docblock.
    environment: 'node',
    include: ['tests/**/*.spec.ts', 'tests/**/*.spec.tsx'],
    alias: {
      // The shipped runtime `client` entry is a closure factory that registers
      // with the web shell's module loader; outside the shell it exports
      // nothing. The suite substitutes the one store engine the plugin uses.
      '@deepseek-ai/dsh-client-runtime/client': fileURLToPath(
        new URL('./tests/doubles/client-runtime.ts', import.meta.url),
      ),
    },
    server: {
      deps: {
        // The primitives package ships component CSS (and pulls katex's) through
        // plain imports: Vite must transform it, node's ESM loader cannot.
        inline: [/@deepseek-ai\/dsh-client-ui-/],
      },
    },
  },
})
