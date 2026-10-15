import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { actions, useAppState, type MissionKind } from '../../lib/store'
import { todayPlan } from '../../lib/missions'
import { sfx } from '../../lib/fx/sound'
import { confetti } from '../../lib/fx/confetti'
import { KIND } from '../home/Home'
import Icon from '../../ui/Icon'
import Ring from '../../ui/Ring'

const STEPS: Record<'dump' | 'prove' | 'paper', { how: string }> = {
  dump: { how: 'Notes closed. On paper, write everything you can remember about the subject. Then open your notes and add what you missed in a different colour.' },
  prove: { how: 'Pick one idea. Explain it out loud as if teaching a friend, notes closed. Stop when the timer ends. Note where you stalled.' },
  paper: { how: 'Do the paper under timed conditions, then mark it with the mark scheme. Enter your marks to track how you are improving.' },
}

/** Brain Dump, Prove It and Past paper: the app frames the task, the student works on paper, then records how it went. */
export default function MissionRun() {
  const { kind } = useParams()
  const state = useAppState()
  const nav = useNavigate()
  const k = kind as MissionKind
  const item = todayPlan(state).find((i) => i.kind === k)
  const [phase, setPhase] = useState<'brief' | 'work' | 'record' | 'done'>('brief')
  const [left, setLeft] = useState(90)
  const [rating, setRating] = useState(0)
  const [stall, setStall] = useState('')
  const [got, setGot] = useState('')
  const [outOf, setOutOf] = useState('')
  const tick = useRef<ReturnType<typeof setInterval>>(undefined)

  const isProve = k === 'prove'
  const startedProve = phase === 'work' && isProve

  useEffect(() => {
    if (!startedProve) return
    tick.current = setInterval(() => setLeft((s) => s - 1), 1000)
    return () => clearInterval(tick.current)
  }, [startedProve])

  useEffect(() => {
    if (startedProve && left <= 0) {
      clearInterval(tick.current)
      sfx('complete')
      setPhase('record')
    }
  }, [left, startedProve])

  if (!(k in STEPS)) return <Navigate to="/" replace />
  const color = KIND[k].color
  const subject = item?.subject ?? null

  function finish(detail: string) {
    actions.logMission({ kind: k, subjectId: subject?.id ?? null, detail })
    sfx('complete')
    confetti()
    setPhase('done')
  }

  const m = (STEPS as Record<string, { how: string }>)[k]

  if (phase === 'done') {
    return (
      <div className="mx-auto grid min-h-dvh max-w-md content-center gap-4 px-5 py-8 text-center">
        <span className="pop mx-auto grid size-20 place-items-center rounded-full text-[var(--ink)]" style={{ background: color }}><Icon name="check" size={40} /></span>
        <h1 className="rise text-4xl font-extrabold">Mission complete</h1>
        <p className="rise text-lg text-[var(--muted)]">Logged. Come back tomorrow to keep your streak alive.</p>
        <button type="button" onClick={() => nav('/')} className="btn btn-primary">Back home</button>
      </div>
    )
  }

  return (
    <div className="mx-auto flex min-h-dvh max-w-2xl flex-col gap-3 px-4 pt-[max(14px,env(safe-area-inset-top,0px))] pb-[max(16px,env(safe-area-inset-bottom,0px))]">
      <Link to="/" aria-label="Exit mission" className="press grid size-10 place-items-center rounded-full bg-[var(--raise2)]"><Icon name="back" /></Link>

      <section className="rise rounded-[28px] p-5 text-[var(--ink)] md:p-7" style={{ background: color }}>
        <span className="label !text-[var(--ink)]">{item?.minutes ?? 10} min · {subject?.name ?? 'All subjects'}</span>
        <h1 className="mt-2 text-5xl font-extrabold tracking-tight">{item?.title ?? 'Mission'}</h1>
        <p className="mt-3 leading-snug font-medium">{m.how}</p>
      </section>

      {phase === 'brief' && (
        <div className="surface grid gap-3 p-4">
          {subject && subject.resources.length > 0 && (
            <>
              <h2 className="label">Useful links for {subject.name}</h2>
              <ul className="grid gap-1.5">
                {[...subject.resources, ...(state.customResources[subject.id] ?? [])].map((r) => (
                  <li key={r.url}><a href={r.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold underline"><Icon name="link" size={16} />{r.label}</a></li>
                ))}
              </ul>
            </>
          )}
          <button type="button" className="btn btn-light w-full py-4 text-lg" onClick={() => { sfx('select'); setPhase(isProve ? 'work' : 'work') }}>
            {isProve ? 'Start the 90 seconds' : 'I am ready'}
          </button>
        </div>
      )}

      {phase === 'work' && (
        <div className="surface grid justify-items-center gap-4 p-6">
          {isProve ? (
            <Ring value={left / 90} size={160} stroke={12} color={color} label={`${Math.max(left, 0)} seconds left`}>
              <span className="mono text-4xl font-extrabold">{Math.max(left, 0)}</span>
            </Ring>
          ) : (
            <p className="text-center text-lg">Work on paper. Tap below when you have finished.</p>
          )}
          <button type="button" className="btn btn-light w-full py-4 text-lg" onClick={() => { sfx('select'); setPhase('record') }}>
            {isProve ? 'Stop early' : 'I have finished'}
          </button>
        </div>
      )}

      {phase === 'record' && (
        <form
          className="surface grid gap-4 p-4"
          onSubmit={(e) => {
            e.preventDefault()
            finish(k === 'paper' ? `${got}/${outOf}` : k === 'prove' ? `${rating}/5${stall ? ` · stalled: ${stall}` : ''}` : `${rating}/5`)
          }}
        >
          {k === 'paper' ? (
            <div className="grid grid-cols-2 gap-3">
              <label className="grid gap-1 text-sm font-bold">Marks you got
                <input className="field" inputMode="numeric" required value={got} onChange={(e) => setGot(e.target.value.replace(/\D/g, ''))} />
              </label>
              <label className="grid gap-1 text-sm font-bold">Out of
                <input className="field" inputMode="numeric" required value={outOf} onChange={(e) => setOutOf(e.target.value.replace(/\D/g, ''))} />
              </label>
            </div>
          ) : (
            <div role="group" aria-label={k === 'dump' ? 'How much did you remember?' : 'How well did you explain it?'}>
              <span className="label mb-2 block">{k === 'dump' ? 'How much did you remember?' : 'How well did you explain it?'}</span>
              <div className="grid grid-cols-5 gap-1.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <button key={n} type="button" aria-pressed={rating === n} onClick={() => { setRating(n); sfx('tap') }}
                    className={`press rounded-xl py-3 text-lg font-extrabold ${rating === n ? 'bg-white text-[var(--ink)]' : 'bg-[var(--raise2)]'}`}>{n}</button>
                ))}
              </div>
              <div className="mono mt-1 flex justify-between text-[11px]"><span>Very little</span><span>Everything</span></div>
            </div>
          )}
          {k === 'prove' && (
            <label className="grid gap-1 text-sm font-bold">Where did you stall? (optional)
              <input className="field" value={stall} onChange={(e) => setStall(e.target.value)} placeholder="e.g. the second step of photosynthesis" />
            </label>
          )}
          <button type="submit" disabled={k === 'paper' ? !got || !outOf : !rating} className="btn btn-primary w-full py-4 text-lg">Log it</button>
        </form>
      )}
    </div>
  )
}
