import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { actions, useAppState } from '../../lib/store'
import { dueCards } from '../../lib/missions'
import { subjectById } from '../../content/subjects'
import { INITIAL_SRS, review, type Grade } from '../../lib/srs/sm2'
import { sfx } from '../../lib/fx/sound'
import { confetti } from '../../lib/fx/confetti'
import Icon from '../../ui/Icon'

const GRADES: { grade: Grade; label: string; color: string; key: string }[] = [
  { grade: 'again', label: 'Again', color: 'var(--r-again)', key: '1' },
  { grade: 'hard', label: 'Hard', color: 'var(--r-hard)', key: '2' },
  { grade: 'good', label: 'Good', color: 'var(--r-good)', key: '3' },
  { grade: 'easy', label: 'Easy', color: 'var(--r-easy)', key: '4' },
]

const fmt = (days: number) => (days < 1 ? '10 min' : days === 1 ? '1 day' : `${Math.round(days)} days`)

/** Full-screen review. Lives outside the tab layout so nothing competes with the card. */
export default function Session() {
  const state = useAppState()
  // Snapshot the queue once so cards do not vanish from under the student mid-session.
  const [queue, setQueue] = useState(() => dueCards(state))
  const total = useRef(queue.length)
  const [index, setIndex] = useState(0)
  const [confidence, setConfidence] = useState(0)
  const [revealed, setRevealed] = useState(false)
  const [note, setNote] = useState('')
  const [good, setGood] = useState(0)
  const logged = useRef(false)

  const card = queue[index]
  const done = !card
  const subject = card ? subjectById(card.subjectId) : undefined

  useEffect(() => {
    if (done && total.current > 0 && !logged.current) {
      logged.current = true
      actions.logMission({ kind: 'queue', subjectId: null, detail: `${total.current} cards` })
      sfx('complete')
      confetti()
    }
  }, [done])

  const prog = card ? state.progress[card.id] ?? { ...INITIAL_SRS, cardId: card.id, dueAt: 0 } : null
  const preview = (g: Grade) => (prog ? fmt(review(prog, g).dueInDays) : '')

  function rate(grade: Grade) {
    if (!card) return
    sfx(grade)
    const result = actions.rate(card.id, card.subjectId, grade, confidence)
    if (grade === 'good' || grade === 'easy') setGood((n) => n + 1)
    if (grade === 'again') setQueue((q) => [...q, card]) // see it again before finishing
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

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (done || (e.target as HTMLElement).tagName === 'INPUT') return
      if (!revealed && /^[1-5]$/.test(e.key)) {
        setConfidence(Number(e.key))
        sfx('tap')
      } else if (!revealed && (e.key === ' ' || e.key === 'Enter') && confidence) {
        e.preventDefault()
        sfx('reveal')
        setRevealed(true)
      } else if (revealed) {
        const g = GRADES.find((x) => x.key === e.key)
        if (g) rate(g.grade)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  if (done) {
    const n = total.current
    return (
      <div className="mx-auto grid min-h-dvh max-w-md content-center gap-4 px-5 py-8 text-center">
        <span className="pop mx-auto grid size-20 place-items-center rounded-full bg-[var(--m-queue)] text-[var(--ink)]"><Icon name="check" size={40} /></span>
        <h1 className="rise text-4xl font-extrabold">{n ? 'Queue cleared' : 'Nothing due'}</h1>
        <p className="rise text-lg text-[var(--muted)]">
          {n ? `You reviewed ${n} card${n === 1 ? '' : 's'} and recalled ${good} well.` : 'Every card is up to date. They return when you are about to forget them.'}
        </p>
        <Link to="/" className="btn btn-primary">Back home</Link>
      </div>
    )
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col gap-3 px-4 pt-[max(14px,env(safe-area-inset-top,0px))] pb-[max(16px,env(safe-area-inset-bottom,0px))]">
      <div className="flex items-center gap-3">
        <Link to="/" aria-label="Exit session" className="press grid size-10 place-items-center rounded-full bg-[var(--raise2)]"><Icon name="back" /></Link>
        <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--raise2)]" role="progressbar" aria-valuemin={0} aria-valuemax={queue.length} aria-valuenow={index}>
          <div className="h-full rounded-full bg-[var(--m-queue)] transition-[width] duration-300" style={{ width: `${(index / queue.length) * 100}%` }} />
        </div>
        <span className="mono text-sm font-bold">{index + 1}/{queue.length}</span>
      </div>

      <article key={card.id + index} className="pop surface flex flex-1 flex-col overflow-hidden !rounded-3xl">
        <header className="flex items-center justify-between px-4 py-3 text-[var(--ink)]" style={{ background: subject?.color }}>
          <b className="font-extrabold">{subject?.name}</b>
          <span className="mono text-xs font-bold">{card.topic}</span>
        </header>
        <div className="grid flex-1 content-start gap-4 p-5">
          <h1 className="text-2xl leading-tight font-bold md:text-3xl">{card.front}</h1>
          <p className="flex items-center gap-2 rounded-xl bg-[var(--raise2)] p-3 text-sm"><Icon name="pen" size={18} />Write your answer on paper first.</p>
          <div role="group" aria-label="How sure are you?">
            <span className="label mb-2 block">How sure are you?</span>
            <div className="grid grid-cols-5 gap-1.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <button key={n} type="button" disabled={revealed} aria-pressed={confidence === n}
                  onClick={() => { setConfidence(n); sfx('tap') }}
                  className={`press rounded-xl py-3 text-lg font-extrabold ${confidence === n ? 'bg-white text-[var(--ink)]' : 'bg-[var(--raise2)]'}`}>
                  {n}
                </button>
              ))}
            </div>
            <div className="mono mt-1 flex justify-between text-[11px]"><span>Guessing</span><span>Certain</span></div>
          </div>
          {revealed && <p className="rise border-t-2 border-dashed border-[var(--line)] pt-4 text-lg leading-relaxed">{card.back}</p>}
        </div>
      </article>

      {note && <p role="status" className="rounded-2xl bg-[var(--m-prove)] p-3 text-sm font-bold text-[var(--ink)]">{note}</p>}

      {!revealed ? (
        <button type="button" disabled={!confidence} onClick={() => { sfx('reveal'); setRevealed(true) }} className="btn btn-light w-full py-4 text-lg">
          Reveal answer <span className="mono hidden text-xs opacity-60 md:inline">Space</span>
        </button>
      ) : (
        <div className="grid grid-cols-4 gap-2">
          {GRADES.map((g) => (
            <button key={g.grade} type="button" onClick={() => rate(g.grade)} className="press rounded-2xl py-3 text-[var(--ink)]" style={{ background: g.color }}>
              <b className="block text-base font-extrabold">{g.label}</b>
              <span className="mono block text-[11px] font-bold">{preview(g.grade)}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
