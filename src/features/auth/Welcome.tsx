import { useState } from 'react'
import { continueAsGuest, useAuth } from '../../lib/firebase/sync'
import { sfx } from '../../lib/fx/sound'
import Logo from '../../ui/Logo'
import Icon, { type IconName } from '../../ui/Icon'

const POINTS: { icon: IconName; title: string; text: string }[] = [
  { icon: 'brain', title: 'Remember more', text: 'Cards come back just before you forget them.' },
  { icon: 'target', title: 'No decisions', text: 'Open the app and it tells you what to revise today.' },
  { icon: 'chart', title: 'See it working', text: 'Watch your recall climb week by week.' },
]

export default function Welcome() {
  const auth = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [creating, setCreating] = useState(true)
  const [remember, setRemember] = useState(true)
  const [busy, setBusy] = useState(false)

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    sfx('tap')
    setBusy(true)
    const ok = await auth.submit(email.trim(), password, creating, remember)
    setBusy(false)
    sfx(ok ? 'complete' : 'error')
  }

  return (
    <div className="mx-auto grid min-h-dvh w-full max-w-5xl items-center gap-8 px-5 py-8 md:grid-cols-2 md:gap-14">
      <section className="rise grid gap-6">
        <div className="flex items-center gap-3">
          <span className="float"><Logo size={44} /></span>
          <span className="text-2xl font-extrabold tracking-tight">MentalMaxxing</span>
        </div>
        <h1 className="text-4xl leading-[1.05] font-extrabold tracking-tight md:text-6xl">
          Revise what you are <span className="text-[var(--accent)]">about to forget.</span>
        </h1>
        <p className="max-w-md text-lg leading-snug text-[var(--muted)]">
          A study planner for GCSE students. You write on paper, like in the exam. The app decides what to study, when, and shows you how much you are improving.
        </p>
        <ul className="grid gap-3">
          {POINTS.map((p, i) => (
            <li key={p.title} className="rise flex items-center gap-3" style={{ ['--i' as string]: i + 2 }}>
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-[var(--raise2)] text-[var(--accent)]">
                <Icon name={p.icon} />
              </span>
              <span><b className="block">{p.title}</b><span className="text-[var(--muted)]">{p.text}</span></span>
            </li>
          ))}
        </ul>
      </section>

      <section className="surface pop grid gap-4 p-6" aria-label={creating ? 'Create account' : 'Sign in'}>
        <h2 className="text-2xl font-extrabold">{creating ? 'Create your account' : 'Welcome back'}</h2>
        {!auth.available ? (
          <p className="text-[var(--muted)]">Accounts are not switched on yet. You can still use the app on this device.</p>
        ) : (
          <form onSubmit={submit} className="grid gap-3" autoComplete="off">
            <label className="grid gap-1.5 text-sm font-bold">
              Email
              <input
                id="auth-email"
                name="mm-email"
                type="email"
                required
                autoComplete="off"
                autoCapitalize="none"
                spellCheck={false}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="field font-normal"
                placeholder="you@example.com"
              />
            </label>
            <label className="grid gap-1.5 text-sm font-bold">
              Password
              <input
                id="auth-password"
                name="mm-password"
                type="password"
                required
                minLength={6}
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="field font-normal"
                placeholder="At least 6 characters"
              />
            </label>
            <label className="flex items-center gap-2.5 text-sm font-bold">
              <input id="auth-remember" type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} className="size-5 accent-[var(--accent)]" />
              Keep me signed in on this device
            </label>
            {auth.error && <p role="alert" className="text-sm font-bold text-[var(--r-again)]">{auth.error}</p>}
            {auth.notice && <p role="status" className="text-sm font-bold text-[var(--r-good)]">{auth.notice}</p>}
            <button type="submit" disabled={busy} className="btn btn-primary mt-1 w-full text-lg">
              {busy ? 'One moment…' : creating ? 'Create account' : 'Sign in'}
            </button>
            <div className="flex flex-wrap justify-between gap-2 text-sm font-bold">
              <button type="button" onClick={() => { sfx('tap'); setCreating((c) => !c) }} className="underline underline-offset-4">
                {creating ? 'I already have an account' : 'New here? Create account'}
              </button>
              {!creating && (
                <button type="button" onClick={() => email && void auth.resetPassword(email.trim())} className="underline underline-offset-4">
                  Forgot password
                </button>
              )}
            </div>
          </form>
        )}
        <button type="button" onClick={() => { sfx('tap'); continueAsGuest() }} className="text-sm text-[var(--muted)] underline underline-offset-4">
          Use without an account (progress stays on this device)
        </button>
      </section>
    </div>
  )
}
