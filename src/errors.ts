/**
 * Team failures the model reads back as tool errors. One class with a closed
 * code set: the code is the stable fact, the message is the sentence the model
 * acts on.
 *
 * @module dsh-team/errors
 */

/** Every way a team operation refuses. */
export type TeamErrorCode =
  | 'NO_TEAM'
  | 'NESTED_TEAM'
  | 'MAX_TEAMMATES'
  | 'DUPLICATE_NAME'
  | 'UNKNOWN_MEMBER'
  | 'UNKNOWN_TASK'
  | 'TASK_TITLE_REQUIRED'
  | 'SELF_MESSAGE'
  | 'UNAUTHORIZED'
  | 'UNKNOWN_EFFORT'

/** Stable sentence per code; `detail` appends the caller-specific part. */
const MESSAGES: Record<TeamErrorCode, string> = {
  NO_TEAM: 'no team here yet — spawn a teammate with team_spawn to start one',
  NESTED_TEAM: 'a teammate cannot lead its own team; ask your leader to spawn one instead',
  MAX_TEAMMATES: 'the team is full — dismiss a teammate before spawning another',
  DUPLICATE_NAME: 'a teammate with that name is already on the roster',
  UNKNOWN_MEMBER: 'no teammate with that id or name is on the roster',
  UNKNOWN_TASK: 'no task with that id is on the shared task list',
  TASK_TITLE_REQUIRED: 'a new task needs a title',
  SELF_MESSAGE: 'a member cannot message itself',
  UNAUTHORIZED: 'this team operation is not available to you',
  UNKNOWN_EFFORT: 'that reasoning effort is not offered by the selected model',
}

/** One refused team operation. */
export class TeamError extends Error {
  /**
   * @param code - the stable refusal code.
   * @param detail - the caller-specific part appended to the stable sentence.
   */
  constructor(readonly code: TeamErrorCode, readonly detail?: string) {
    super(detail === undefined ? MESSAGES[code] : `${MESSAGES[code]}: ${detail}`)
    this.name = 'TeamError'
  }
}
