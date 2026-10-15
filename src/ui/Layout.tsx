import { NavLink, Outlet } from 'react-router-dom'
import { useEffect } from 'react'
import { useAppState } from '../lib/store'

const links = [
  { to: '/', label: 'Home' },
  { to: '/progress', label: 'Progress' },
  { to: '/settings', label: 'Settings' },
]

export default function Layout() {
  const theme = useAppState().theme
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  return (
    <div className="mx-auto flex min-h-dvh w-full max-w-md flex-col gap-4 py-4">
      <main className="flex flex-1 flex-col gap-4">
        <Outlet />
      </main>
      <nav aria-label="Main" className="grid grid-cols-3 gap-2 rounded-2xl bg-[var(--raise)] p-1.5">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end
            className={({ isActive }) =>
              `rounded-xl py-2.5 text-center text-sm font-bold ${isActive ? 'bg-white text-[var(--ink)]' : 'text-[var(--muted)]'}`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
    </div>
  )
}
