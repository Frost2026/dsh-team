/**
 * The browser store engine, as the test suite substitutes it. In production
 * `@deepseek-ai/dsh-client-runtime/client` is a platform module the web shell
 * shares into its frozen module table; under vitest that closure factory has no
 * loader to register with, so the suite aliases this equivalent in its place
 * (see vitest.config.ts). The plugin uses exactly one value from it.
 *
 * @module dsh-team/tests/doubles/client-runtime
 */

/** The store contract the plugin body consumes: read, subscribe, replace. */
export interface SnapshotStore<T> {
  getSnapshot(): T
  subscribe(fn: () => void): () => void
  update(mutator: (draft: T) => void): void
  set(next: T): void
}

/**
 * Create one synchronous snapshot store.
 * @param init - initial state.
 * @returns the store.
 */
export function createSnapshotStore<T>(init: T): SnapshotStore<T> {
  let state = init
  const listeners = new Set<() => void>()
  return {
    getSnapshot: () => state,
    subscribe(fn) {
      listeners.add(fn)
      return () => { listeners.delete(fn) }
    },
    update(mutator) {
      const draft = structuredClone(state)
      mutator(draft)
      state = draft
      for (const fn of [...listeners]) fn()
    },
    set(next) {
      state = next
      for (const fn of [...listeners]) fn()
    },
  }
}
