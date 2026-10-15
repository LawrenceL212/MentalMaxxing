import { useState } from 'react'
import { Link } from 'react-router-dom'
import { actions, useAppState } from '../../lib/store'
import { dueCards } from '../../lib/missions'
import { subjectById } from '../../content/subjects'
import type { Grade } from '../../lib/srs/sm2'

const GRADES: { grade: Grade; label: string; color: string }[] = [
  { grade: 'again', label: 'Again', color: 'var(--r-again)' },
  { grade: 'hard', label: 'Hard', color: 'var(--r-hard)' },
  { grade: 'good', label: 'Good', color: 'var(--r-good)' },
  { grade: 'easy', label: 'Easy', color: 'var(--r-easy)' },
]

export default function Session() {
  const state = useAppState()
  // Snapshot the queue once so cards do not vanish from under the student mid-session.
  const [queue] = useState(() => dueCards(state))
  const [index, setIndex] = useState(0)
  const [confidence, setConfidence] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [note, setNote] = useState('')

  const card = queue[index]
  if (!card) {
    return (
      <div className="grid gap-4 rounded-3xl bg-[var(--raise)] p-6 text-center">
        <h1 className="text-3xl font-extrabold">{queue.length ? 'Queue done' : 'Nothing due'}</h1>
        <p className="text-[var(--muted)]">{queue.length ? `You reviewed ${queue.length} cards.` : 'Come back later, or add some cards in Settings.'}</p>
        <Link to="/" className="rounded-2xl bg-white py-3 font-bold text-[var(--ink)]">Back home</Link>
      </div>
    )
  }
  const subject = subjectById(card.subjectId)

  function rate(grade: Grade) {
    const result = actions.rate(card.id, card.subjectId, grade, confidence)
    setNote(
      result.tooSoon
        ? 'That came back too soon. It will be spaced out further next time.'
        : grade === 'again' && confidence >= 4
          ? 'You felt sure but missed it. That gap is worth a Prove It later.'
          : '',
    )
    setIndex((i) => i + 1)
    setConfidence(0)
    setRevealed(false)
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between px-1 text-sm text-[var(--muted)]">
        <Link to="/" className="font-bold">← Exit</Link>
        <span className="mono">{index + 1} / {queue.length}</span>
      </div>
      <article className="overflow-hidden rounded-3xl bg-[var(--raise)]">
        <header className="flex items-center justify-between px-4 py-3 text-[var(--ink)]" style={{ background: subject?.color }}>
          <b className="font-extrabold">{subject?.name}</b>
          <span className="mono text-xs font-bold">{card.topic}</span>
        </header>
        <div className="grid gap-4 p-4">
          <h1 className="text-2xl leading-tight font-bold">{card.front}</h1>
          <p className="rounded-xl bg-[var(--raise2)] p-3 text-sm">Write your answer on paper first.</p>
          <div role="group" aria-label="How sure are you?">
            <span className="mono mb-2 block text-xs font-bold tracking-widest text-[var(--muted)] uppercase">How sure are you?</span>
            <div className="grid grid-cols-5 gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  type="button"
                  disabled={revealed}
                  aria-pressed={confidence === n}
                  onClick={() => setConfidence(n)}
                  className={`rounded-xl py-3 text-lg font-extrabold ${confidence === n ? 'bg-white text-[var(--ink)]' : 'bg-[var(--raise2)]'}`}
                >
                  {n}
                </button>
              ))}
            </div>
          </div>
          {revealed && <p className="border-t-2 border-dashed border-[var(--line)] pt-3 leading-relaxed">{card.back}</p>}
        </div>
      </article>

      {!revealed ? (
        <button
          type="button"
          disabled={!confidence}
          onClick={() => setRevealed(true)}
          className="rounded-2xl bg-white py-4 text-base font-extrabold text-[var(--ink)] disabled:opacity-30"
        >
          Reveal answer
        </button>
      ) : (
        <div className="grid grid-cols-4 gap-1.5">
          {GRADES.map((g) => (
            <button key={g.grade} type="button" onClick={() => rate(g.grade)} className="rounded-2xl py-3 text-sm font-extrabold text-[var(--ink)]" style={{ background: g.color }}>
              {g.label}
            </button>
          ))}
        </div>
      )}
      {note && <p className="rounded-2xl bg-[var(--m-prove)] p-3 text-sm font-bold text-[var(--ink)]">{note}</p>}
    </div>
  )
}
