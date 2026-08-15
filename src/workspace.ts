/**
 * The team's virtual workspaces: one shared blackboard every member reads and
 * writes, and one private pad per member that only its owner can see.
 *
 * "Virtual" is the point — none of this touches the user's real working tree.
 * These are the team's own notes: decisions, hand-off material, a member's
 * running scratch. They live in a storage domain (`ctx.storageDomain`) rather
 * than in a session log, because the whole reason a teammate needs a shared
 * surface is that its own tool calls land in its own log, which the leader's
 * durable state never reads. A domain record is written by whoever wrote it,
 * survives a restart, and is nobody's turn.
 *
 * The workspace is also the cheap alternative to chatter: leaving a note costs
 * no turn and no chain budget, while messaging a peer costs both.
 *
 * @module dsh-team/workspace
 */

import type { Context } from '@deepseek-ai/cordis'
import { defineDomain, domainTable, type Domain } from '@deepseek-ai/dsh-storage-domain'
import { z } from 'zod'
import type { TeamBoardEntryView } from './contract.ts'
import { TeamError } from './errors.ts'
import type { TeamConfig } from './config.ts'

/** Keys a member may name: readable, bounded, and free of the record separator. */
const KEY_PATTERN = /^[\w .\-一-鿿]{1,64}$/u

/** Longest preview one board entry contributes to the leader's projection. */
const PREVIEW_CHARS = 180

/** The shared area's stable id; every other area id is a member's session id. */
export const SHARED_AREA = 'shared'

/** One stored note, whole: the record IS the entity, never a delta. */
const entrySchema = z.object({
  /** The leader session whose team owns this workspace. */
  leaderId: z.string(),
  /** `shared`, or the session id of the member whose private pad this is. */
  area: z.string(),
  key: z.string(),
  text: z.string(),
  authorId: z.string(),
  authorName: z.string(),
  updatedAt: z.number(),
})

/** One stored note. */
export type WorkspaceEntry = z.infer<typeof entrySchema>

/** The domain this plugin owns: one table of notes across every team. */
export const WORKSPACE_DOMAIN = defineDomain({
  name: 'team_workspace',
  version: 1,
  tables: { entries: domainTable<string, WorkspaceEntry>(entrySchema) },
})

/** Who is writing, as the note records them. */
export interface NoteAuthor {
  readonly id: string
  readonly name: string
}

/** Record address: leader, area, and key, in one line-separated string. */
function recordKey(leaderId: string, area: string, key: string): string {
  return `${leaderId}\n${area}\n${key}`
}

/** Reject a key the model invented that would not survive as an address. */
function assertKey(key: string): string {
  const trimmed = key.trim()
  if (!KEY_PATTERN.test(trimmed)) {
    throw new TeamError('INVALID_NOTE_KEY', 'use up to 64 letters, digits, spaces, dots, or dashes')
  }
  return trimmed
}

/** The one-line preview the leader's projection carries for one entry. */
function previewOf(text: string): string {
  const line = text.split('\n').find(part => part.trim().length > 0)?.trim() ?? ''
  return line.length > PREVIEW_CHARS ? `${line.slice(0, PREVIEW_CHARS)}…` : line
}

/** Newest first: a workspace is read from the top. */
function byNewest(left: WorkspaceEntry, right: WorkspaceEntry): number {
  return right.updatedAt - left.updatedAt
}

/**
 * The team workspaces over one open storage domain. One instance serves every
 * team in the process; records carry their own leader and area, so a read is a
 * filter and no two teams can see each other's notes.
 */
export class TeamWorkspace {
  private readonly opening: Promise<Domain<typeof WORKSPACE_DOMAIN>>
  private disposed = false

  /**
   * @param ctx - a context whose `storageDomain` is already resolved.
   * @param config - the row config carrying the workspace bounds.
   */
  constructor(ctx: Context, private readonly config: TeamConfig) {
    this.opening = ctx.storageDomain.open(WORKSPACE_DOMAIN)
    // A domain opened after this instance was released still has to be closed:
    // the facility hands out one handle per name, and a leaked one blocks the
    // next open of the same domain for the life of the process.
    void this.opening.then((domain) => {
      if (this.disposed) void domain.close()
    }, () => undefined)
  }

  /**
   * Read one area of one team's workspace, newest first.
   * @param leaderId - the team's leader session id.
   * @param area - {@link SHARED_AREA} or a member's session id.
   * @returns the notes in that area.
   */
  async read(leaderId: string, area: string): Promise<readonly WorkspaceEntry[]> {
    const table = (await this.opening).table('entries')
    const found: WorkspaceEntry[] = []
    for (const [, entry] of table.entries()) {
      if (entry.leaderId === leaderId && entry.area === area) found.push(entry)
    }
    return found.sort(byNewest)
  }

  /**
   * Write one note, replacing whatever the key held.
   * @param leaderId - the team's leader session id.
   * @param area - {@link SHARED_AREA} or the author's own session id.
   * @param key - the note's name, as the model gave it.
   * @param text - the whole note body.
   * @param author - who is writing.
   * @param now - epoch ms recorded on the note.
   * @returns the stored note.
   * @throws {TeamError} on an unusable key, an oversized note, or a full area.
   */
  async write(
    leaderId: string,
    area: string,
    key: string,
    text: string,
    author: NoteAuthor,
    now: number,
  ): Promise<WorkspaceEntry> {
    const name = assertKey(key)
    if (text.length > this.config.maxNoteChars) {
      throw new TeamError('NOTE_TOO_LONG', `${text.length} of at most ${this.config.maxNoteChars} characters`)
    }
    const table = (await this.opening).table('entries')
    const address = recordKey(leaderId, area, name)
    if (table.get(address) === undefined) {
      const held = (await this.read(leaderId, area)).length
      if (held >= this.config.maxWorkspaceEntries) {
        throw new TeamError(
          'WORKSPACE_FULL',
          `${this.config.maxWorkspaceEntries} notes already — replace or drop one before adding another`,
        )
      }
    }
    const entry: WorkspaceEntry = {
      leaderId,
      area,
      key: name,
      text,
      authorId: author.id,
      authorName: author.name,
      updatedAt: now,
    }
    await table.put(address, entry)
    return entry
  }

  /**
   * Drop one note.
   * @param leaderId - the team's leader session id.
   * @param area - the area holding it.
   * @param key - the note's name.
   * @throws {TeamError} when no note of that name is in the area.
   */
  async remove(leaderId: string, area: string, key: string): Promise<void> {
    const name = assertKey(key)
    const table = (await this.opening).table('entries')
    if (!await table.delete(recordKey(leaderId, area, name))) {
      throw new TeamError('UNKNOWN_NOTE', name)
    }
  }

  /**
   * Drop everything one area holds — a dismissed member's private pad, or a
   * disbanded team's whole workspace.
   * @param leaderId - the team's leader session id.
   * @param area - one area, or undefined for every area of this team.
   */
  async clear(leaderId: string, area?: string): Promise<void> {
    const table = (await this.opening).table('entries')
    const doomed: string[] = []
    for (const [address, entry] of table.entries()) {
      if (entry.leaderId === leaderId && (area === undefined || entry.area === area)) doomed.push(address)
    }
    for (const address of doomed) await table.delete(address)
  }

  /**
   * The shared area as the leader's durable projection carries it: names,
   * attribution, and a one-line preview, never whole note bodies. A private
   * pad is never projected — private means private, including from the panel.
   * @param leaderId - the team's leader session id.
   * @returns the board index, newest first.
   */
  async index(leaderId: string): Promise<readonly TeamBoardEntryView[]> {
    return (await this.read(leaderId, SHARED_AREA)).map(entry => ({
      key: entry.key,
      authorId: entry.authorId,
      authorName: entry.authorName,
      updatedAt: entry.updatedAt,
      preview: previewOf(entry.text),
    }))
  }

  /** Release the domain handle; queued writes drain first. */
  dispose(): void {
    this.disposed = true
    void this.opening.then(domain => domain.close(), () => undefined)
  }
}
