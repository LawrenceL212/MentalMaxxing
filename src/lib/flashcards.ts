import { SAMPLE_CARDS, type Card } from '../content/cards'
import { subjectById } from '../content/subjects'
import { TOPICS } from '../content/topics'
import type { AppState } from './store'

export interface Deck {
  topic: string
  cards: Card[]
}

/** "4.2 Bonding" and "4.2 Bonding, structure and properties" are the same topic; match on the number, else the whole name. */
const key = (t: string) => (/^\d/.test(t) ? t.split(' ')[0] : t.trim().toLowerCase())

/** The automatic card every topic gets: a prompt, with the revision links as the way to check. */
export function topicCard(subjectId: string, topic: string): Card {
  const name = topic.replace(/^[\d.]+\s*/, '')
  const subject = subjectById(subjectId)
  return {
    id: `t-${subjectId}-${key(topic)}`,
    subjectId,
    topic,
    front: `${name}: what are the key ideas?`,
    back: `Write down everything you know about ${name} from memory, then check it against your notes or ${subject?.resources[0]?.label ?? 'a revision site'}. Anything you missed is what to study next.`,
    sample: true,
  }
}

/** One deck per topic: the automatic card first, then any real cards that belong to that topic. */
export function decksFor(s: AppState, subjectId: string): Deck[] {
  const real = [...SAMPLE_CARDS, ...s.userCards].filter((c) => c.subjectId === subjectId)
  const topics = TOPICS[subjectId] ?? []
  const decks: Deck[] = topics.map((t) => ({ topic: t, cards: [topicCard(subjectId, t), ...real.filter((c) => key(c.topic) === key(t))] }))
  // Student cards under a topic we do not list still get a deck.
  const known = new Set(topics.map(key))
  for (const c of real.filter((c) => !known.has(key(c.topic)))) {
    const d = decks.find((x) => x.topic === c.topic)
    if (d) d.cards.push(c)
    else decks.push({ topic: c.topic, cards: [topicCard(subjectId, c.topic), c] })
  }
  return decks
}
