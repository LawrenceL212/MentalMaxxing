import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { actions, useAppState } from '../../lib/store'
import { subjectById } from '../../content/subjects'
import { PAPERS, PAPER_SITES } from '../../content/papers'
import { TOPICS } from '../../content/topics'
import { byTopic, clock, levelFor, totals, type MarkRow } from '../../lib/mock'
import { sfx } from '../../lib/fx/sound'
import { confetti } from '../../lib/fx/confetti'
import Icon from '../../ui/Icon'
import Ring from '../../ui/Ring'
import { MAX_FILE_BYTES, deleteFile, getFile, putFile } from '../../lib/files'
import PaperViewer from './PaperViewer'

const KEY = 'mentalmaxxing:mock'
interface Running { subjectId: string; paper: string; minutes: number; marks: number; link: string; startedAt: number; endAt: number }

const load = (): Running | null => {
  try { return JSON.parse(localStorage.getItem(KEY) ?? 'null') } catch { return null }
}
const save = (r: Running | null) => {
  try { if (r) localStorage.setItem(KEY, JSON.stringify(r)); else localStorage.removeItem(KEY) } catch { /* ignore */ }
}

/** Device-only storage keys for the student's own copy of a paper and its mark scheme. */
const fileKey = (subjectId: string, paper: string, kind: 'paper' | 'scheme') => `mock:${subjectId}:${paper}:${kind}`

const emptyRow = (n: number): MarkRow => ({ label: `Q${n}`, topic: '', got: 0, out: 0 })

/** Timed mock: set up, sit the paper (timer runs on the clock, so it survives switching tabs or a refresh), then mark it against the mark scheme. */
export default function MockExam() {
  const state = useAppState()
  const nav = useNavigate()
  const color = 'var(--m-paper)'
  const [run, setRun] = useState<Running | null>(load)
  const [phase, setPhase] = useState<'setup' | 'exam' | 'mark' | 'result'>(() => (load() ? 'exam' : 'setup'))
  const [now, setNow] = useState(Date.now())
  const [subjectId, setSubjectId] = useState(state.subjectIds[0] ?? 'maths')
  const formats = PAPERS[subjectId] ?? []
  const [pick, setPick] = useState(0)
  const [minutes, setMinutes] = useState(formats[0]?.minutes ?? 60)
  const [marks, setMarks] = useState(formats[0]?.marks ?? 60)
  const [link, setLink] = useState('')
  const [rows, setRows] = useState<MarkRow[]>([emptyRow(1)])
  const [timeUp, setTimeUp] = useState(false)
  const [usedMs, setUsedMs] = useState(0)
  const [have, setHave] = useState({ paper: false, scheme: false })
  const [fileMsg, setFileMsg] = useState('')
  const paperName = run?.paper ?? formats[pick]?.name ?? 'Custom paper'
  const sid = run?.subjectId ?? subjectId

  const subject = subjectById(run?.subjectId ?? subjectId)
  const site = PAPER_SITES[run?.subjectId ?? subjectId]

  // Which of this paper's files are already on the device (also re-checked after attaching or removing).
  const [fileTick, setFileTick] = useState(0)
  useEffect(() => {
    let alive = true
    Promise.all([getFile(fileKey(sid, paperName, 'paper')), getFile(fileKey(sid, paperName, 'scheme'))])
      .then(([p, s]) => alive && setHave({ paper: Boolean(p), scheme: Boolean(s) }))
      .catch(() => alive && setHave({ paper: false, scheme: false }))
    return () => { alive = false }
  }, [sid, paperName, fileTick])

  async function attach(kind: 'paper' | 'scheme', file: File | undefined) {
    if (!file) return
    if (!/pdf|image/.test(file.type)) return setFileMsg('Choose a PDF or a photo of the paper.')
    if (file.size > MAX_FILE_BYTES) return setFileMsg('That file is over 15 MB. Try a smaller copy.')
    try {
      await putFile(fileKey(sid, paperName, kind), file)
      setFileMsg(`${kind === 'paper' ? 'Paper' : 'Mark scheme'} saved on this device.`)
      setFileTick((n) => n + 1)
    } catch {
      setFileMsg('Could not save that file here. Use the link instead.')
    }
  }
  async function detach(kind: 'paper' | 'scheme') {
    await deleteFile(fileKey(sid, paperName, kind)).catch(() => undefined)
    setFileTick((n) => n + 1)
  }

  useEffect(() => {
    if (phase !== 'exam') return
    const t = setInterval(() => setNow(Date.now()), 500)
    return () => clearInterval(t)
  }, [phase])

  const left = run ? run.endAt - now : 0
  useEffect(() => {
    if (phase === 'exam' && run && left <= 0) {
      sfx('complete')
      setTimeUp(true)
      finish()
    }
  })
  // Gentle warnings at 10 and 5 minutes.
  const mins = Math.ceil(left / 60000)
  useEffect(() => {
    if (phase === 'exam' && (mins === 10 || mins === 5) && left > 0) sfx('error')
  }, [mins, phase, left])

  function chooseSubject(id: string) {
    sfx('select')
    setSubjectId(id)
    const f = PAPERS[id]?.[0]
    setPick(0)
    setMinutes(f?.minutes ?? 60)
    setMarks(f?.marks ?? 60)
  }

  function start() {
    sfx('select')
    const f = formats[pick]
    const t = Date.now()
    const r: Running = { subjectId, paper: f?.name ?? 'Custom paper', minutes, marks, link: link.trim(), startedAt: t, endAt: t + minutes * 60000 }
    save(r)
    setRun(r)
    setNow(t)
    setPhase('exam')
  }

  function finish() {
    if (!run) return
    setUsedMs(Math.min(Date.now(), run.endAt) - run.startedAt)
    save(null)
    setPhase('mark')
  }

  const sum = totals(rows)
  const breakdown = byTopic(rows)

  function submitMarks() {
    if (!run) return
    actions.logMission({ kind: 'paper', subjectId: run.subjectId, detail: `${sum.got}/${sum.out || run.marks}` })
    for (const t of breakdown) actions.setTopicKnow(`${run.subjectId}:${t.topic}`, levelFor(t.pct))
    sfx('complete')
    confetti()
    setPhase('result')
  }

  const setRow = (i: number, patch: Partial<MarkRow>) => setRows((rs) => rs.map((r, n) => (n === i ? { ...r, ...patch } : r)))
  const num = (v: string) => Math.max(0, Number(v.replace(/\D/g, '')) || 0)

  const shell = 'mx-auto flex min-h-dvh max-w-2xl flex-col gap-3 px-4 pt-[max(14px,env(safe-area-inset-top,0px))] pb-[max(16px,env(safe-area-inset-bottom,0px))]'
  const header = (
    <section className="rise rounded-[28px] p-5 text-[var(--ink)] md:p-7" style={{ background: color }}>
      <span className="label !text-[var(--ink)]">Mock exam</span>
      <h1 className="mt-1 text-4xl font-extrabold tracking-tight">{phase === 'setup' ? 'Sit a past paper' : `${subject?.name ?? 'Paper'}`}</h1>
      {run && <p className="font-bold">{run.paper} · {run.marks} marks · {run.minutes} min</p>}
    </section>
  )

  if (phase === 'setup') {
    return (
      <div className={shell}>
        <Link to="/" aria-label="Back" className="press grid size-10 place-items-center rounded-full bg-[var(--raise2)]"><Icon name="back" /></Link>
        {header}
        <div className="surface grid gap-4 p-4">
          <div role="group" aria-label="Subject" className="flex flex-wrap gap-2">
            {state.subjectIds.map((id) => {
              const s = subjectById(id)
              return s && <button key={id} type="button" aria-pressed={id === subjectId} onClick={() => chooseSubject(id)} className="chip press" style={id === subjectId ? { background: s.color, color: 'var(--ink)' } : undefined}>{s.name}</button>
            })}
          </div>
          {formats.length > 0 && (
            <label className="grid gap-1 text-sm font-bold">Paper
              <select className="field" value={pick} onChange={(e) => { const n = Number(e.target.value); setPick(n); setMinutes(formats[n].minutes); setMarks(formats[n].marks) }}>
                {formats.map((f, n) => <option key={f.name} value={n}>{f.name}</option>)}
              </select>
            </label>
          )}
          <div className="grid grid-cols-2 gap-3">
            <label className="grid gap-1 text-sm font-bold">Minutes
              <input className="field" inputMode="numeric" value={minutes} onChange={(e) => setMinutes(num(e.target.value))} />
            </label>
            <label className="grid gap-1 text-sm font-bold">Total marks
              <input className="field" inputMode="numeric" value={marks} onChange={(e) => setMarks(num(e.target.value))} />
            </label>
          </div>
          <div className="grid gap-2 rounded-2xl bg-[var(--raise2)] p-3">
            <b className="text-sm">Put the real questions on screen</b>
            <p className="text-sm">Attach the paper and its mark scheme (PDF or photo, from your school or a past-paper site). The questions then sit beside the clock, and the mark scheme beside your marking. They stay on this device only.</p>
            {(['paper', 'scheme'] as const).map((k) => (
              <div key={k} className="flex flex-wrap items-center gap-2">
                <label className="btn btn-ghost cursor-pointer">
                  {have[k] ? 'Replace' : 'Attach'} {k === 'paper' ? 'question paper' : 'mark scheme'}
                  <input type="file" accept="application/pdf,image/*" className="sr-only" onChange={(e) => { attach(k, e.target.files?.[0]); e.target.value = '' }} />
                </label>
                {have[k] && <><span className="mono text-xs font-bold">Saved</span><button type="button" className="text-sm font-bold underline" onClick={() => detach(k)}>Remove</button></>}
              </div>
            ))}
            {fileMsg && <p role="status" className="text-sm font-bold">{fileMsg}</p>}
          </div>
          <label className="grid gap-1 text-sm font-bold">Or a link to the paper (optional)
            <input className="field font-normal" inputMode="url" placeholder="https://" value={link} onChange={(e) => setLink(e.target.value)} />
          </label>
          <p className="text-sm">Find the paper and its mark scheme{site ? ' on the site below' : ''}. {formats.length ? 'Lengths and marks match the real exam.' : 'Set the length and marks from the front of your paper.'} Print it if you can, and write your answers on paper.</p>
          {site && <a href={site} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold underline"><Icon name="link" size={16} />Past papers and mark schemes</a>}
          <button type="button" disabled={!minutes || !marks} onClick={start} className="btn btn-primary w-full py-4 text-lg">Start the clock</button>
        </div>
      </div>
    )
  }

  if (phase === 'exam' && run) {
    const frac = Math.max(0, left) / (run.minutes * 60000)
    const buttons = (
      <div className="grid w-full gap-2">
        {!have.paper && (run.link || site) && <a href={run.link || site} target="_blank" rel="noreferrer" className="btn btn-ghost"><Icon name="link" size={18} />Open the paper</a>}
        <button type="button" onClick={() => { sfx('select'); finish() }} className="btn btn-light">I have finished</button>
        <button type="button" onClick={() => { save(null); nav('/') }} className="text-sm font-bold underline">Abandon this mock</button>
      </div>
    )
    const note = mins <= 10 ? `${mins} minute${mins === 1 ? '' : 's'} left. Finish the question you are on.` : 'The clock keeps running if you switch tabs. Write your answers on paper.'
    if (have.paper) {
      return (
        <div className="mx-auto flex min-h-dvh max-w-7xl flex-col gap-3 px-4 pt-[max(14px,env(safe-area-inset-top,0px))] pb-[max(16px,env(safe-area-inset-bottom,0px))]">
          <section className="rounded-[20px] p-3 text-[var(--ink)] md:px-5" style={{ background: color }}>
            <b className="block text-lg">{subject?.name} · {run.paper}</b>
            <span className="mono text-xs font-bold">{run.marks} marks · {run.minutes} min</span>
          </section>
          <div className="grid gap-3 lg:grid-cols-[minmax(0,1fr)_20rem] lg:items-start">
            {/* Phone: slim sticky timer above the paper. */}
            <div className="surface sticky top-2 z-10 flex items-center justify-between gap-3 p-3 lg:hidden">
              <span className="mono text-3xl font-extrabold" style={{ color: mins <= 5 ? 'var(--r-again)' : undefined }}>{clock(left)}</span>
              <button type="button" onClick={() => { sfx('select'); finish() }} className="btn btn-light">I have finished</button>
            </div>
            <PaperViewer fileKey={fileKey(run.subjectId, run.paper, 'paper')} title="Question paper" className="h-[75dvh] lg:h-[calc(100dvh-8rem)]" />
            <div className="surface sticky top-4 hidden justify-items-center gap-4 p-6 lg:grid">
              <Ring value={frac} size={200} stroke={14} color={mins <= 5 ? 'var(--r-again)' : color} label={`${clock(left)} left`}>
                <span className="mono text-3xl font-extrabold" aria-live="off">{clock(left)}</span>
              </Ring>
              <p className="text-center text-sm">{note}</p>
              {buttons}
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className={shell}>
        {header}
        <div className="surface grid justify-items-center gap-4 p-6">
          <Ring value={frac} size={200} stroke={14} color={mins <= 5 ? 'var(--r-again)' : color} label={`${clock(left)} left`}>
            <span className="mono text-3xl font-extrabold" aria-live="off">{clock(left)}</span>
          </Ring>
          <p className="text-center text-sm">{note}</p>
          {buttons}
          <p className="text-center text-sm">Tip: attach the paper in the mock setup and the questions show right here.</p>
        </div>
      </div>
    )
  }

  if (phase === 'mark' && run) {
    const topics = TOPICS[run.subjectId] ?? []
    return (
      <div className={have.scheme ? 'mx-auto flex min-h-dvh max-w-7xl flex-col gap-3 px-4 pt-[max(14px,env(safe-area-inset-top,0px))] pb-[max(16px,env(safe-area-inset-bottom,0px))]' : shell}>
        {header}
        <div className={have.scheme ? 'grid gap-3 lg:grid-cols-2 lg:items-start' : 'contents'}>
        {have.scheme && <PaperViewer fileKey={fileKey(run.subjectId, run.paper, 'scheme')} title="Mark scheme" className="h-[60dvh] lg:sticky lg:top-4 lg:h-[calc(100dvh-2rem)]" />}
        <div className="surface grid gap-3 p-4">
          <h2 className="text-2xl font-extrabold">{timeUp ? 'Time is up' : 'Well done'}. Now mark it.</h2>
          <p className="text-sm">You used {clock(usedMs)}. Open the mark scheme, mark each question honestly, and enter the marks below. Tag a topic on each question to find your weak areas.</p>
          {!have.scheme && (run.link || site) && <a href={site ?? run.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-bold underline"><Icon name="link" size={16} />Open mark schemes</a>}
          <div className="grid gap-2">
            {rows.map((r, i) => (
              <div key={i} className="grid grid-cols-[3.5rem_1fr_3.5rem_3.5rem] items-center gap-1.5">
                <input className="field !px-2 !py-2" aria-label="Question" value={r.label} onChange={(e) => setRow(i, { label: e.target.value })} />
                <select className="field !px-2 !py-2" aria-label="Topic" value={r.topic} onChange={(e) => setRow(i, { topic: e.target.value })}>
                  <option value="">Topic</option>
                  {topics.map((t) => <option key={t} value={t}>{t}</option>)}
                </select>
                <input className="field !px-2 !py-2 text-center" inputMode="numeric" aria-label="Marks got" placeholder="Got" value={r.got || ''} onChange={(e) => setRow(i, { got: num(e.target.value) })} />
                <input className="field !px-2 !py-2 text-center" inputMode="numeric" aria-label="Marks available" placeholder="Out of" value={r.out || ''} onChange={(e) => setRow(i, { out: num(e.target.value) })} />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button type="button" className="btn btn-ghost" onClick={() => { sfx('tap'); setRows((rs) => [...rs, emptyRow(rs.length + 1)]) }}>Add question</button>
            <button type="button" className="btn btn-ghost" disabled={rows.length < 2} onClick={() => setRows((rs) => rs.slice(0, -1))}>Remove last</button>
          </div>
          <div className="mono flex items-center justify-between rounded-xl bg-[var(--raise2)] p-3 font-bold"><span>Total</span><span>{sum.got} / {sum.out || run.marks}</span></div>
          <button type="button" disabled={sum.out === 0} onClick={submitMarks} className="btn btn-primary w-full py-4 text-lg">Save my result</button>
        </div>
        </div>
      </div>
    )
  }

  if (phase === 'result' && run) {
    const out = sum.out || run.marks
    const pct = Math.round((sum.got / out) * 100)
    return (
      <div className={shell}>
        <section className="pop rounded-[28px] p-6 text-[var(--ink)]" style={{ background: color }}>
          <span className="label !text-[var(--ink)]">{subject?.name} · {run.paper}</span>
          <b className="mt-1 block text-7xl leading-none font-extrabold">{pct}%</b>
          <p className="mono mt-2 font-bold">{sum.got} / {out} marks · {clock(usedMs)} used</p>
        </section>
        {breakdown.length > 0 && (
          <section className="surface grid gap-2 p-4">
            <h2 className="label">Revise these first</h2>
            {breakdown.map((t) => (
              <div key={t.topic} className="grid grid-cols-[1fr_3rem] items-center gap-2 text-sm">
                <span><b className="block truncate">{t.topic}</b><span className="mt-1 block h-2.5 overflow-hidden rounded-full bg-[var(--raise2)]"><span className="block h-full rounded-full" style={{ width: `${t.pct}%`, background: subject?.color }} /></span></span>
                <b className="mono text-right">{t.pct}%</b>
              </div>
            ))}
            <p className="text-sm">Your Study topics and fog map now reflect these results.</p>
          </section>
        )}
        <div className="grid gap-2 md:grid-cols-2">
          <Link to="/study" className="btn btn-primary">Study weak topics</Link>
          <Link to="/" className="btn btn-ghost">Back home</Link>
        </div>
      </div>
    )
  }
  return null
}
