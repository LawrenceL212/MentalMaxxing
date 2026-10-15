import { useEffect, useState } from 'react'
import { useAppState } from '../../lib/store'
import { decksFor, type Deck } from '../../lib/flashcards'
import { subjectById } from '../../content/subjects'
import { sfx } from '../../lib/fx/sound'
import Icon from '../../ui/Icon'

const shuffle = <T,>(a: T[]) => [...a].sort(() => Math.random() - 0.5)

/** Free practice: flip through a topic's cards. Does not touch your review schedule. */
function DeckPlayer({ deck, color, onClose }: { deck: Deck; color: string; onClose: () => void }) {
  const [cards, setCards] = useState(deck.cards)
  const [i, setI] = useState(0)
  const [flipped, setFlipped] = useState(false)
  const card = cards[i]

  const go = (d: number) => {
    sfx('tap')
    setI((x) => Math.min(cards.length - 1, Math.max(0, x + d)))
    setFlipped(false)
  }
  const flip = () => {
    sfx('reveal')
    setFlipped((f) => !f)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); flip() }
      else if (e.key === 'ArrowRight') go(1)
      else if (e.key === 'ArrowLeft') go(-1)
      else if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  return (
    <div className="fixed inset-0 z-50 flex flex-col gap-3 overflow-auto bg-[var(--bg)] px-4 pt-[max(14px,env(safe-area-inset-top,0px))] pb-[max(16px,env(safe-area-inset-bottom,0px))]">
      <div className="mx-auto flex w-full max-w-2xl items-center gap-3">
        <button type="button" onClick={onClose} aria-label="Close deck" className="press grid size-10 place-items-center rounded-full bg-[var(--raise2)]"><Icon name="back" /></button>
        <b className="flex-1 truncate">{deck.topic}</b>
        <span className="mono text-sm font-bold">{i + 1}/{cards.length}</span>
      </div>
      <button type="button" onClick={flip} key={card.id + String(flipped)} aria-label={flipped ? 'Show question' : 'Show answer'}
        className="pop mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center gap-4 rounded-[28px] p-6 text-left md:p-10"
        style={flipped ? { background: 'var(--raise)', border: `3px solid ${color}` } : { background: color, color: 'var(--ink)' }}>
        <span className="label" style={flipped ? undefined : { color: 'var(--ink)' }}>{flipped ? 'Answer' : 'Question'} · tap to flip</span>
        <span className={`leading-tight font-bold ${flipped ? 'text-xl md:text-2xl' : 'text-3xl md:text-4xl'}`}>{flipped ? card.back : card.front}</span>
      </button>
      <div className="mx-auto grid w-full max-w-2xl grid-cols-[1fr_1fr_1fr] gap-2">
        <button type="button" className="btn btn-ghost" disabled={i === 0} onClick={() => go(-1)}>Back</button>
        <button type="button" className="btn btn-ghost" onClick={() => { sfx('select'); setCards(shuffle(cards)); setI(0); setFlipped(false) }}>Shuffle</button>
        <button type="button" className="btn btn-light" disabled={i === cards.length - 1} onClick={() => go(1)}>Next</button>
      </div>
    </div>
  )
}

export default function Flashcards() {
  const state = useAppState()
  const [subjectId, setSubjectId] = useState(state.subjectIds[0] ?? 'maths')
  const [open, setOpen] = useState<Deck | null>(null)
  const subject = subjectById(subjectId)
  const decks = decksFor(state, subjectId)

  return (
    <div className="grid gap-4">
      <section className="rise rounded-[28px] bg-[var(--m-shuffle)] p-5 text-[var(--ink)] md:p-7">
        <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Flashcards</h1>
        <p className="mt-2 font-medium">Every topic has a deck. Flip through to test yourself. This is free practice, so it does not change your review schedule.</p>
      </section>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Subject">
        {state.subjectIds.map((id) => {
          const s = subjectById(id)
          if (!s) return null
          return (
            <button key={id} type="button" aria-pressed={id === subjectId} onClick={() => { sfx('select'); setSubjectId(id) }}
              className="chip press" style={id === subjectId ? { background: s.color, color: 'var(--ink)' } : undefined}>{s.name}</button>
          )
        })}
      </div>

      {decks.length === 0 ? (
        <p className="surface p-5">No topics listed for {subject?.name} yet. Add your own cards in Settings and they will appear here.</p>
      ) : (
        <ul className="grid gap-2 md:grid-cols-2">
          {decks.map((d, n) => (
            <li key={d.topic} className="rise" style={{ ['--i' as string]: n % 6 }}>
              <button type="button" onClick={() => { sfx('select'); setOpen(d) }}
                className="surface press flex w-full items-center gap-3 p-3 text-left" style={{ borderLeft: `6px solid ${subject?.color}` }}>
                <span className="flex-1 font-bold">{d.topic}</span>
                <span className="mono text-xs font-bold">{d.cards.length} card{d.cards.length === 1 ? '' : 's'}</span>
                <Icon name="arrow" size={18} />
              </button>
            </li>
          ))}
        </ul>
      )}
      {open && <DeckPlayer deck={open} color={subject?.color ?? 'var(--accent)'} onClose={() => setOpen(null)} />}
    </div>
  )
}
