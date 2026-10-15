import { NavLink, Outlet } from 'react-router-dom'
import { actions, useAppState } from '../lib/store'
import { streakDays } from '../lib/streak'
import { sfx } from '../lib/fx/sound'
import Icon, { type IconName } from './Icon'
import Logo from './Logo'

const LINKS: { to: string; label: string; icon: IconName }[] = [
  { to: '/', label: 'Home', icon: 'home' },
  { to: '/cards', label: 'Cards', icon: 'cards' },
  { to: '/progress', label: 'Progress', icon: 'chart' },
  { to: '/settings', label: 'Settings', icon: 'gear' },
]

export default function Layout() {
  const state = useAppState()
  const streak = streakDays(state)

  return (
    <>
      <header className="wrap flex items-center justify-between gap-3 pt-[max(14px,env(safe-area-inset-top,0px))]">
        <NavLink to="/" className="flex items-center gap-2.5" aria-label="MentalMaxxing home">
          <Logo size={30} />
          <span className="text-xl font-extrabold tracking-tight">MentalMaxxing</span>
        </NavLink>

        <nav aria-label="Main" className="hidden items-center gap-1 rounded-2xl bg-[var(--raise)] p-1 md:flex">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end onClick={() => sfx('tap')}
              className={({ isActive }) => `flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-bold transition-colors ${isActive ? 'bg-white text-[var(--ink)]' : 'text-[var(--muted)] hover:text-white'}`}>
              <Icon name={l.icon} size={18} />{l.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <span className="chip" title="Days in a row" aria-label={`${streak} day streak`}>
            <Icon name="flame" size={16} className={streak ? 'text-[var(--m-dump)]' : 'text-[var(--muted)]'} />{streak}
          </span>
          <button type="button" aria-label={state.soundOn ? 'Mute sound' : 'Turn sound on'} aria-pressed={state.soundOn}
            onClick={() => { actions.setSound(!state.soundOn); if (!state.soundOn) setTimeout(() => sfx('select'), 0) }}
            className="press grid size-9 place-items-center rounded-full bg-[var(--raise2)]">
            <Icon name={state.soundOn ? 'volume' : 'mute'} size={18} />
          </button>
          <NavLink to="/help" aria-label="Help and tutorial" className="press grid size-9 place-items-center rounded-full bg-[var(--raise2)]" onClick={() => sfx('tap')}>
            <Icon name="help" size={18} />
          </NavLink>
        </div>
      </header>

      <main className="wrap main-pad">
        <Outlet />
      </main>

      <nav aria-label="Main" className="tabbar md:hidden">
        <div className="surface mx-auto grid max-w-md grid-cols-4 gap-1 !rounded-3xl p-1.5">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end onClick={() => sfx('tap')}
              className={({ isActive }) => `press flex flex-col items-center gap-0.5 rounded-2xl py-2 text-xs font-bold transition-colors ${isActive ? 'bg-white text-[var(--ink)]' : 'text-[var(--muted)]'}`}>
              <Icon name={l.icon} size={22} />{l.label}
            </NavLink>
          ))}
        </div>
      </nav>
    </>
  )
}
