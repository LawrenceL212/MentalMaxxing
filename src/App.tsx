import { useEffect } from 'react'
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './ui/Layout'
import Logo from './ui/Logo'
import Home from './features/home/Home'
import Session from './features/session/Session'
import MissionRun from './features/run/MissionRun'
import Progress from './features/progress/Progress'
import Settings from './features/settings/Settings'
import Help from './features/help/Help'
import Welcome from './features/auth/Welcome'
import Setup from './features/onboarding/Setup'
import Tutorial from './features/onboarding/Tutorial'
import { actions, useAppState } from './lib/store'
import { startSync, useAuthStatus, useGuest } from './lib/firebase/sync'
import { firebaseConfigured } from './lib/firebase'

startSync()

function Splash() {
  return (
    <div className="grid min-h-dvh place-items-center" role="status" aria-label="Loading">
      <span className="float"><Logo size={64} /></span>
    </div>
  )
}

/** First-run flow: sign in (or guest) -> setup -> quick tutorial -> app. */
function Gate() {
  const state = useAppState()
  const status = useAuthStatus()
  const guest = useGuest()

  useEffect(() => {
    document.documentElement.dataset.theme = state.theme
  }, [state.theme])

  if (firebaseConfigured) {
    if (status === 'loading' || status === 'syncing') return <Splash />
    if (status === 'signedOut' && !guest) return <Welcome />
  }
  if (!state.onboarded) return <Setup />
  if (!state.tutorialSeen) return <Tutorial onClose={() => actions.setTutorialSeen(true)} />

  return (
    <HashRouter>
      <Routes>
        <Route path="session" element={<Session />} />
        <Route path="run/:kind" element={<MissionRun />} />
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="progress" element={<Progress />} />
          <Route path="settings" element={<Settings />} />
          <Route path="help" element={<Help />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  )
}

export default Gate
