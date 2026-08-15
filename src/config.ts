/**
 * Deployment configuration for the team row. Every value is a cordis.yml knob;
 * this plugin holds no hardcoded tunable.
 *
 * @module dsh-team/config
 */

import z from '@deepseek-ai/schemastery'

/** Validated team configuration. */
export interface TeamConfig {
  /** `ctx.subagents` provider used to materialize teammates (the base bundle registers `spawn`). */
  readonly provider: string
  /** Ceiling on live roster size for one leader. */
  readonly maxTeammates: number
  /** Mailbox feed length kept in the durable fold and served to the panel. */
  readonly maxRecentMessages: number
}

/**
 * The row's config schema; the loader validates before the service is built.
 * Every key is defaulted, so a deployment may add the row with no options at
 * all — the input type stays partial while the validated output is complete.
 */
export const Config: z<Partial<TeamConfig>, TeamConfig> = z.object({
  provider: z.string().default('spawn'),
  maxTeammates: z.number().step(1).min(1).max(64).default(8),
  maxRecentMessages: z.number().step(1).min(1).max(1000).default(50),
})
