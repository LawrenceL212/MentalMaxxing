import { useAppState } from '../../lib/store'
import { subjectById } from '../../content/subjects'
import { retention } from './stats'
import { streakDays, reviewsPerDay } from '../../lib/streak'
import Ring from '../../ui/Ring'
import { fog, fogByTopic } from '../../lib/fog'
import { daysUntilExam } from '../../lib/missions'
import { useState } from 'react'

export default function Progress() {
  const state = useAppState()
  const weeks = retention(state.log)
  const latest = weeks.at(-1)
  const first = weeks[0]
  const reviewed = new Set(state.log.map((l) => l.cardId)).size
  const streak = streakDays(state)
  const days = reviewsPerDay(state.log, 14)
  const peak = Math.max(1, ...days.map((d) => d.n))
  const gap = state.log.filter((l) => l.confidence >= 4 && l.grade === 'again').length
  const [peek, setPeek] = useState('')
  const SCORE = { again: 0, hard: 0.33, good: 0.66, easy: 1 }
  const dots = state.log.filter((l) => l.confidence > 0).slice(-50)
  const papers = state.missionLog.filter((m) => m.kind === 'paper' && m.detail)

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      <section className="rise glow relative overflow-hidden rounded-[28px] bg-[var(--accent)] p-5 text-[var(--ink)] md:col-span-2 md:p-7" style={{ ['--mc' as string]: 'var(--accent)' }}>
        <b className="block text-7xl leading-none font-extrabold">{latest ? `${latest.pct}%` : '–'}</b>
        <span className="label mt-2 block !text-[var(--ink)]">Recalled well this week</span>
        <p className="mt-3 text-lg font-bold">
          {weeks.length < 2 ? `Review cards across two weeks and your trend appears here. ${state.log.length} reviews so far.`
            : `${latest!.pct >= first.pct ? 'Yes, you are improving. ' : 'Not yet. '}${Math.abs(latest!.pct - first.pct)} points ${latest!.pct >= first.pct ? 'above' : 'below'} your first week.`}
        </p>
      </section>

      <section className="surface rise grid auto-rows-min grid-cols-3 content-start gap-2 p-4" style={{ ['--i' as string]: 1 }} aria-label="Totals">
        {[['Streak', `${streak}d`], ['Cards seen', String(reviewed)], ['Reviews', String(state.log.length)]].map(([l, v]) => (
          <div key={l} className="rounded-2xl bg-[var(--raise2)] p-3 text-center">
            <b className="block text-3xl leading-none font-extrabold">{v}</b>
            <span className="label mt-1 block">{l}</span>
          </div>
        ))}
      </section>

      <section className="surface rise p-4" style={{ ['--i' as string]: 2 }}>
        <h2 className="label mb-3">Last 14 days</h2>
        <div className="flex h-24 items-end gap-1" role="img" aria-label="Reviews per day for the last 14 days">
          {days.map((d, i) => (
            <span key={i} className="flex-1 rounded-t-md bg-[var(--m-queue)]" style={{ height: `${Math.max(4, (d.n / peak) * 100)}%`, opacity: d.n ? 1 : 0.25 }} />
          ))}
        </div>
      </section>

      <section className="surface rise grid gap-2.5 p-4" style={{ ['--i' as string]: 3 }}>
        <h2 className="label">By subject</h2>
        {state.subjectIds.map((id) => {
          const s = subjectById(id)
          if (!s) return null
          const mine = state.log.filter((l) => l.subjectId === id)
          const pct = mine.length ? Math.round((mine.filter((l) => l.grade === 'good' || l.grade === 'easy').length / mine.length) * 100) : 0
          return (
            <div key={id} className="grid grid-cols-[7rem_1fr_3rem] items-center gap-2 text-sm">
              <span className="truncate font-bold" style={{ color: s.color }}>{s.name}</span>
              <span className="h-3 overflow-hidden rounded-full bg-[var(--raise2)]">
                <span className="block h-full rounded-full transition-[width] duration-700" style={{ width: `${pct}%`, background: s.color }} />
              </span>
              <b className="mono text-right">{mine.length ? `${pct}%` : '–'}</b>
            </div>
          )
        })}
      </section>


      <section className="surface rise grid content-start gap-2 p-4 md:col-span-2" style={{ ['--i' as string]: 4 }}>
        <div className="flex items-baseline justify-between"><h2 className="label">Fog map</h2><span className="mono text-xs">by topic</span></div>
        <div className="grid gap-1.5">
          {state.subjectIds.map((id) => {
            const s = subjectById(id)
            const cells = fogByTopic(state, id)
            if (!s || !cells.length) return null
            return (
              <div key={id} className="grid grid-cols-[4.5rem_1fr] items-center gap-2">
                <span className="truncate text-xs font-bold" style={{ color: s.color }}>{s.name}</span>
                <div className="flex gap-1">
                  {cells.map((c) => (
                    <button key={c.topic} type="button" title={c.topic} aria-label={`${c.topic}: ${c.fog === null ? 'not started' : `${Math.round(c.fog * 100)}% fog`}`}
                      onClick={() => setPeek(`${s.name} · ${c.topic}: ${c.fog === null ? 'no cards yet' : `${Math.round(c.fog * 100)}% fog`}`)}
                      className="h-8 flex-1 rounded-md border border-[var(--line)]"
                      style={{ background: c.fog === null ? 'transparent' : `color-mix(in srgb, ${s.color} ${Math.round((1 - c.fog) * 70 + 25)}%, var(--raise2))` }} />
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <p className="mono min-h-5 text-xs font-bold">{peek || 'Tap a square. Bright = remembered, dark = fogged, empty = no cards yet.'}</p>
      </section>

      <section className="surface rise grid content-start gap-2 p-4" style={{ ['--i' as string]: 5 }}>
        <div className="flex items-baseline justify-between"><h2 className="label">Confidence vs result</h2><span className="mono text-xs">last {dots.length}</span></div>
        {dots.length < 5 ? <p className="text-sm">Review a few more cards. Each dot is a card: how sure you were against how it went. Dots low and to the right are things you only think you know.</p> : (
          <svg viewBox="0 0 220 130" role="img" aria-label="Confidence against result" className="w-full">
            <rect x="130" y="70" width="80" height="45" rx="6" fill="none" stroke="var(--m-prove)" strokeDasharray="4 3" />
            <text x="134" y="82" fontSize="9" fill="var(--m-prove)" fontFamily="var(--f-mono)" fontWeight="700">fluency illusion</text>
            <line x1="15" y1="115" x2="210" y2="15" stroke="var(--line)" strokeDasharray="3 3" />
            {dots.map((l, i) => {
              const x = 25 + ((l.confidence - 1) / 4) * 175 + ((i * 7) % 9) - 4
              const y = 115 - SCORE[l.grade] * 95 + ((i * 5) % 7) - 3
              const bad = l.confidence >= 4 && SCORE[l.grade] <= 0.33
              return <circle key={i} cx={x} cy={y} r="3.5" fill={bad ? 'var(--m-prove)' : 'var(--accent)'} />
            })}
            <text x="15" y="127" fontSize="8" fill="var(--muted)" fontFamily="var(--f-mono)">confidence 1 to 5</text>
          </svg>
        )}
      </section>

      <section className="surface rise grid content-start gap-2.5 p-4" style={{ ['--i' as string]: 6 }}>
        <h2 className="label">Exam readiness</h2>
        {state.subjectIds.map((id) => {
          const s = subjectById(id)
          const known = fogByTopic(state, id).filter((c) => c.fog !== null)
          const f = known.length ? known.reduce((a, c) => a + (c.fog ?? 0), 0) / known.length : fog(state, id)
          if (!s || f === null) return null
          const days = daysUntilExam(state.examDates[id])
          return (
            <div key={id} className="grid grid-cols-[6rem_1fr_3rem] items-center gap-2 text-sm">
              <span className="truncate font-bold">{s.name}{days !== null && days >= 0 && <span className="mono block text-[10px]">{days}d to go</span>}</span>
              <span className="h-3 overflow-hidden rounded-full bg-[var(--raise2)]"><span className="block h-full rounded-full bg-[var(--accent)] transition-[width] duration-700" style={{ width: `${Math.round((1 - f) * 100)}%` }} /></span>
              <b className="mono text-right">{Math.round((1 - f) * 100)}%</b>
            </div>
          )
        })}
      </section>

      <section className="surface rise grid gap-2 p-4" style={{ ['--i' as string]: 7 }}>
        <h2 className="label">Confidence check</h2>
        <div className="flex items-center gap-4">
          <Ring value={Math.min(1, gap / 10)} size={64} stroke={8} color="var(--m-prove)" label={`${gap} confident misses`}>
            <span className="mono font-bold">{gap}</span>
          </Ring>
          <p className="leading-snug">Times you felt sure (4 or 5) but got it wrong. These are your hidden gaps. Aim for zero.</p>
        </div>
      </section>

      {papers.length > 0 && (
        <section className="surface rise grid gap-1.5 p-4" style={{ ['--i' as string]: 5 }}>
          <h2 className="label">Past papers</h2>
          {papers.slice(-5).reverse().map((p) => {
            const [a, b] = (p.detail ?? '').split('/').map(Number)
            return (
              <div key={p.at} className="flex justify-between text-sm"><b>{subjectById(p.subjectId ?? '')?.name ?? 'Paper'}</b><span className="mono font-bold">{a}/{b} · {b ? Math.round((a / b) * 100) : 0}%</span></div>
            )
          })}
        </section>
      )}
    </div>
  )
}
