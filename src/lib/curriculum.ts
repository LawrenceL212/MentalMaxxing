import { fogByTopic } from './fog'
import { orderedTopics, type AppState } from './store'

export const topicId = (subjectId: string, topic: string) => `${subjectId}:${topic}`

export { orderedTopics }

/** The course in school order, split at the "we're up to here" marker: topics marked as covered, then the rest. */
export function schoolOrder(s: AppState, subjectId: string): { taught: string[]; upcoming: string[] } {
  const all = orderedTopics(s, subjectId)
  return { taught: all.filter((t) => s.taught[topicId(subjectId, t)]), upcoming: all.filter((t) => !s.taught[topicId(subjectId, t)]) }
}

/** The topic to revise next in a subject: the foggiest of what has been taught in class (everything if nothing is marked yet). */
export function focusTopic(s: AppState, subjectId: string, now = Date.now()): string | null {
  const { taught } = schoolOrder(s, subjectId)
  const pool = taught.length ? taught : orderedTopics(s, subjectId)
  if (!pool.length) return null
  const fogs = new Map(fogByTopic(s, subjectId, now).map((c) => [c.topic, c.fog ?? 1]))
  const worst = Math.max(...pool.map((t) => fogs.get(t) ?? 1))
  const ties = pool.filter((t) => (fogs.get(t) ?? 1) === worst)
  // Ties: prefer what comes latest in the school order (what the class did most recently), else rotate by day.
  if (taught.length) return ties[ties.length - 1]
  return ties[Math.floor(now / 86_400_000) % ties.length]
}

/** A covered topic the student has not learned in the app yet (no self-rating): the latest in school order, newest subject first. */
export function topicToLearn(s: AppState): { subjectId: string; topic: string } | null {
  const pending = s.subjectIds.flatMap((subjectId) => {
    const topic = schoolOrder(s, subjectId).taught.filter((t) => !s.topicKnow[topicId(subjectId, t)]).pop()
    return topic ? [{ subjectId, topic, at: s.taught[topicId(subjectId, topic)] }] : []
  })
  pending.sort((a, b) => b.at - a.at)
  return pending[0] ? { subjectId: pending[0].subjectId, topic: pending[0].topic } : null
}
