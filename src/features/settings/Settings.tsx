import { useState } from 'react'
import { SUBJECTS, subjectById } from '../../content/subjects'
import { actions, useAppState } from '../../lib/store'
import { useAuth } from '../../lib/firebase/sync'

export default function Settings() {
  const state = useAppState()
  const auth = useAuth()
  const [subjectId, setSubjectId] = useState(state.subjectIds[0] ?? 'maths')
  const [label, setLabel] = useState('')
  const [url, setUrl] = useState('')
  const [error, setError] = useState('')

  const subject = subjectById(subjectId)
  const custom = state.customResources[subjectId] ?? []

  function addResource(e: React.FormEvent) {
    e.preventDefault()
    try {
      const u = new URL(url)
      if (u.protocol !== 'https:' && u.protocol !== 'http:') throw new Error('protocol')
      actions.addResource(subjectId, { label: label.trim() || u.hostname, url: u.href })
      setLabel('')
      setUrl('')
      setError('')
    } catch {
      setError('Enter a full web address, starting with https://')
    }
  }

  return (
    <>
      <h1 className="text-3xl font-extrabold">Settings</h1>

      <section className="grid gap-2 rounded-3xl bg-[var(--raise)] p-4">
        <h2 className="mono text-xs font-bold tracking-widest text-[var(--muted)] uppercase">Account</h2>
        {!auth.available ? (
          <p className="text-sm text-[var(--muted)]">Sync is not set up yet. Your progress is saved on this device.</p>
        ) : auth.user ? (
          <div className="flex items-center justify-between gap-2 text-sm">
            <span>Synced as <b>{auth.user.email}</b></span>
            <button type="button" onClick={() => void auth.signOut()} className="rounded-xl bg-[var(--raise2)] px-3 py-2 font-bold">Sign out</button>
          </div>
        ) : (
          <>
            <p className="text-sm text-[var(--muted)]">Sign in to keep your progress on every device.</p>
            <button type="button" onClick={() => void auth.signIn()} className="rounded-xl bg-white py-3 font-extrabold text-[var(--ink)]">Sign in with Google</button>
            {auth.error && <p role="alert" className="text-sm font-bold text-[var(--r-again)]">{auth.error}</p>}
          </>
        )}
      </section>

      <section className="grid gap-2 rounded-3xl bg-[var(--raise)] p-4">
        <h2 className="mono text-xs font-bold tracking-widest text-[var(--muted)] uppercase">Theme</h2>
        <div className="grid grid-cols-3 gap-2">
          {(['arctic', 'molten', 'obsidian'] as const).map((t) => (
            <button key={t} type="button" aria-pressed={state.theme === t} onClick={() => actions.setTheme(t)}
              className={`rounded-xl py-2.5 text-sm font-bold capitalize ${state.theme === t ? 'bg-white text-[var(--ink)]' : 'bg-[var(--raise2)]'}`}>
              {t}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-2 rounded-3xl bg-[var(--raise)] p-4">
        <h2 className="mono text-xs font-bold tracking-widest text-[var(--muted)] uppercase">My subjects</h2>
        <div className="grid gap-1.5">
          {SUBJECTS.filter((s) => !s.portfolioOnly).map((s) => {
            const on = state.subjectIds.includes(s.id)
            return (
              <div key={s.id} className="grid grid-cols-[1fr_auto] items-center gap-2">
                <button type="button" aria-pressed={on} onClick={() => actions.toggleSubject(s.id)}
                  className="flex items-center gap-2 rounded-xl bg-[var(--raise2)] px-3 py-2 text-left text-sm font-bold">
                  <span className="size-3 rounded-full" style={{ background: on ? s.color : 'transparent', border: `2px solid ${s.color}` }} />
                  <span className="flex-1">{s.name}</span>
                  <span className="mono text-xs text-[var(--muted)]">{s.board} {s.code}</span>
                </button>
                {on && (
                  <input type="date" aria-label={`${s.name} first exam date`} value={state.examDates[s.id] ?? ''}
                    onChange={(e) => actions.setExamDate(s.id, e.target.value)}
                    className="rounded-xl bg-[var(--raise2)] px-2 py-2 text-xs" />
                )}
              </div>
            )
          })}
        </div>
      </section>

      <section className="grid gap-3 rounded-3xl bg-[var(--raise)] p-4">
        <h2 className="mono text-xs font-bold tracking-widest text-[var(--muted)] uppercase">Revision resources</h2>
        <label className="grid gap-1 text-sm font-bold">
          Subject
          <select value={subjectId} onChange={(e) => setSubjectId(e.target.value)} className="rounded-xl bg-[var(--raise2)] px-3 py-2.5">
            {SUBJECTS.map((s) => <option key={s.id} value={s.id}>{s.name}</option>)}
          </select>
        </label>
        <ul className="grid gap-1.5 text-sm">
          {subject?.resources.map((r) => (
            <li key={r.url}><a className="font-bold underline" href={r.url} target="_blank" rel="noreferrer">{r.label}</a></li>
          ))}
          {custom.map((r) => (
            <li key={r.url} className="flex items-center justify-between gap-2">
              <a className="font-bold underline" href={r.url} target="_blank" rel="noreferrer">{r.label} <span className="mono text-xs text-[var(--muted)]">(yours)</span></a>
              <button type="button" onClick={() => actions.removeResource(subjectId, r.url)} className="rounded-lg bg-[var(--raise2)] px-2 py-1 text-xs font-bold">Remove</button>
            </li>
          ))}
          {!subject?.resources.length && !custom.length && <li className="text-[var(--muted)]">No built-in links for this subject. Add your own below.</li>}
        </ul>
        <form onSubmit={addResource} className="grid gap-2">
          <label className="grid gap-1 text-sm font-bold">Name
            <input id="res-label" value={label} onChange={(e) => setLabel(e.target.value)} placeholder="Mr Smith's notes" className="rounded-xl bg-[var(--raise2)] px-3 py-2.5 font-normal" />
          </label>
          <label className="grid gap-1 text-sm font-bold">Web address
            <input id="res-url" required value={url} onChange={(e) => setUrl(e.target.value)} placeholder="https://" inputMode="url" className="rounded-xl bg-[var(--raise2)] px-3 py-2.5 font-normal" />
          </label>
          {error && <p role="alert" className="text-sm font-bold text-[var(--r-again)]">{error}</p>}
          <button type="submit" className="rounded-xl bg-white py-3 font-extrabold text-[var(--ink)]">Add resource</button>
        </form>
      </section>
    </>
  )
}
