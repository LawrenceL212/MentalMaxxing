import { HashRouter, Route, Routes } from 'react-router-dom'
import Layout from './ui/Layout'
import Home from './features/home/Home'
import Session from './features/session/Session'
import Progress from './features/progress/Progress'
import Settings from './features/settings/Settings'

// HashRouter: GitHub Pages is static, so deep links cannot rely on server rewrites.
export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="session" element={<Session />} />
          <Route path="progress" element={<Progress />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
