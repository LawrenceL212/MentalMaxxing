import { useState } from 'react'
import { FAQ, GUIDE, INSTALL, SHORTCUTS } from '../../content/guide'
import Icon from '../../ui/Icon'
import Tutorial from '../onboarding/Tutorial'

export default function Help() {
  const [touring, setTouring] = useState(false)
  if (touring) return <div className="fixed inset-0 z-50 overflow-auto bg-[var(--bg)]"><Tutorial onClose={() => setTouring(false)} /></div>

  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-6">
      <section className="surface rise grid content-start gap-3 p-5 md:col-span-2">
        <h1 className="text-3xl font-extrabold">How MentalMaxxing works</h1>
        <p className="text-lg text-[var(--muted)]">Short version: open the app, do the mission it shows you, rate yourself honestly, and watch your progress climb.</p>
        <button type="button" onClick={() => setTouring(true)} className="btn btn-primary w-fit">Replay the quick tour</button>
      </section>

      {GUIDE.map((g, i) => (
        <section key={g.title} className="surface rise grid content-start gap-2 p-5" style={{ ['--i' as string]: i % 4 }}>
          <div className="flex items-center gap-3">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--accent)] text-[var(--ink)]"><Icon name={g.icon} /></span>
            <h2 className="text-xl font-extrabold">{g.title}</h2>
          </div>
          <p className="leading-snug text-[var(--muted)]">{g.body}</p>
          {g.points && (
            <ul className="grid gap-1.5">
              {g.points.map((p) => <li key={p} className="flex gap-2 leading-snug"><Icon name="check" size={18} className="mt-0.5 shrink-0 text-[var(--r-good)]" /><span>{p}</span></li>)}
            </ul>
          )}
        </section>
      ))}

      <section className="surface grid content-start gap-3 p-5">
        <h2 className="text-xl font-extrabold">Common questions</h2>
        {FAQ.map((f) => (
          <details key={f.q} className="rounded-2xl bg-[var(--raise2)] p-3.5">
            <summary className="cursor-pointer font-bold">{f.q}</summary>
            <p className="mt-2 leading-snug text-[var(--muted)]">{f.a}</p>
          </details>
        ))}
      </section>

      <div className="grid content-start gap-4">
        <section className="surface grid gap-3 p-5">
          <h2 className="text-xl font-extrabold">Keyboard shortcuts</h2>
          <dl className="grid gap-2">
            {SHORTCUTS.map((s) => (
              <div key={s.keys} className="flex items-center justify-between gap-3">
                <dd className="text-[var(--muted)]">{s.does}</dd>
                <dt className="mono rounded-lg bg-[var(--raise2)] px-2.5 py-1 text-sm font-bold whitespace-nowrap">{s.keys}</dt>
              </div>
            ))}
          </dl>
        </section>
        <section className="surface grid gap-3 p-5">
          <h2 className="text-xl font-extrabold">Install it like an app</h2>
          {INSTALL.map((s) => (
            <p key={s.device} className="leading-snug"><b>{s.device}.</b> <span className="text-[var(--muted)]">{s.steps}</span></p>
          ))}
        </section>
      </div>
    </div>
  )
}
