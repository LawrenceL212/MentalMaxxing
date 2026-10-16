import { useEffect, useRef, useState } from 'react'
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
import { actions, useAppState, type MissionKind } from '../../lib/store'
import { todayPlan } from '../../lib/missions'
import { sfx } from '../../lib/fx/sound'
import { confetti } from '../../lib/fx/confetti'
import { KIND } from '../home/Home'
import { NOTES } from '../../content/notes'
import { LESSONS } from '../../content/lessons'
import { compareDump, ratingFor, type DumpResult } from '../../lib/dump'
import { readPhoto } from '../../lib/ocr'
import { topicId } from '../../lib/curriculum'
import Icon from '../../ui/Icon'
import Ring from '../../ui/Ring'

const STEPS: Record<'dump' | 'prove' | 'paper', { how: string }> = {
  dump: { how: 'Notes closed. On paper, write everything you can remember about this topic. Then add a photo or type it in and the app shows what you missed.' },
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
  const [dumpText, setDumpText] = useState('')
  const [result, setResult] = useState<DumpResult | null>(null)
  const [reading, setReading] = useState<number | null>(null)
  const [photoMsg, setPhotoMsg] = useState('')
  const [photo, setPhoto] = useState('')
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

  const topic = item?.topic
  const org = subject && topic ? state.organisers[topicId(subject.id, topic)] : undefined
  const checkAgainst = org?.text.trim() ? org.text.trim().split(/\r?\n/).filter(Boolean) : topic ? NOTES[topic] ?? LESSONS[topic]?.keyPoints ?? [] : []
  const m = (STEPS as Record<string, { how: string }>)[k]
  const dumpAbout = topic ?? subject?.name ?? 'the subject'

  async function onPhoto(f: File | undefined) {
    if (!f) return
    if (photo) URL.revokeObjectURL(photo)
    setPhoto(URL.createObjectURL(f))
    setReading(0)
    setPhotoMsg('')
    try {
      const text = await readPhoto(f, setReading)
      if (text.length < 5) setPhotoMsg('Could not read any words in that photo. Try a clearer, well-lit shot, or type your dump below.')
      else { setDumpText(text); setPhotoMsg('Read it. Fix any mistakes below, then check.') }
    } catch {
      setPhotoMsg('Could not read the photo here (it needs a connection the first time). Type your dump below instead.')
    } finally {
      setReading(null)
    }
  }

  function check() {
    const r = compareDump(dumpText, checkAgainst)
    setResult(r)
    setRating(ratingFor(r.pct))
    sfx(r.missing.length ? 'tap' : 'complete')
  }

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
        {item?.topic && <p className="mt-2 text-2xl leading-tight font-extrabold">{k === 'dump' ? `Dump everything about: ${item.topic}` : item.topic}</p>}
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
          {k === 'dump' && checkAgainst.length > 0 && (
            <div className="grid gap-3 rounded-2xl bg-[var(--raise2)] p-3">
              <h2 className="label">What did you miss?</h2>
              <p className="text-sm">Take a photo of your brain dump on {dumpAbout}, or type it. The app reads the words and compares them with the {org?.text.trim() ? 'points in your knowledge organiser' : 'key points for this topic'}. It matches words only, so it cannot tell if an idea is right.</p>
              <label className="btn btn-ghost cursor-pointer">
                <Icon name="plus" size={18} />{reading !== null ? `Reading... ${Math.round(reading * 100)}%` : photo ? 'Use a different photo' : 'Add a photo of your dump'}
                <input type="file" accept="image/*" capture="environment" className="sr-only" disabled={reading !== null} onChange={(e) => { void onPhoto(e.target.files?.[0]); e.target.value = '' }} />
              </label>
              {photo && <img src={photo} alt="Your brain dump" className="max-h-48 w-full rounded-xl object-contain" />}
              {photoMsg && <p role="status" className="text-sm font-bold">{photoMsg}</p>}
              <textarea className="field min-h-28" aria-label="Your brain dump as text" placeholder="Or type what you wrote" value={dumpText} onChange={(e) => { setDumpText(e.target.value); setResult(null) }} />
              <button type="button" className="btn btn-light" disabled={dumpText.trim().length < 5} onClick={check}>Check what is missing</button>
              {result && (
                <div className="grid gap-2" aria-live="polite">
                  <p className="mono text-sm font-bold">You covered {result.covered.length} of {checkAgainst.length} points ({result.pct}%)</p>
                  {result.missing.length > 0 ? (
                    <>
                      <h3 className="label">Missing: add these in a different colour</h3>
                      <ul className="grid max-h-64 gap-1.5 overflow-auto text-sm">{result.missing.map((l, i) => <li key={i} className="rounded-lg bg-[var(--raise)] p-2 leading-snug">{l}</li>)}</ul>
                    </>
                  ) : <p className="font-bold">Nothing missing. Nice.</p>}
                  {result.covered.length > 0 && <details><summary className="cursor-pointer text-sm font-bold">What you covered ({result.covered.length})</summary><ul className="mt-1 grid gap-1 text-sm">{result.covered.map((l, i) => <li key={i}>✓ {l}</li>)}</ul></details>}
                  <p className="text-sm">Rating set to {rating}/5 from this. Change it below if that is wrong.</p>
                </div>
              )}
            </div>
          )}
          {k === 'prove' && checkAgainst.length > 0 && (
            <div className="rounded-2xl bg-[var(--raise2)] p-3">
              <h2 className="label mb-2">Check yourself against {org?.text.trim() ? 'your knowledge organiser' : 'the key points'}</h2>
              <ul className="grid max-h-64 gap-1.5 overflow-auto text-sm">
                {checkAgainst.map((l, i) => <li key={i} className="leading-snug">• {l}</li>)}
              </ul>
              <p className="mt-2 text-sm font-bold">Tick off what you remembered. The rest is what to study next.</p>
            </div>
          )}
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
