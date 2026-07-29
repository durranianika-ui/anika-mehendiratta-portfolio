import { Suspense, lazy, useState, useCallback, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import RouteLoading from './components/RouteLoading.jsx'
import Intro from './components/Intro.jsx'
import { useProfile } from './context/ProfileContext.jsx'

const WhoIsWatching = lazy(() => import('./pages/WhoIsWatching.jsx'))
const Browse = lazy(() => import('./pages/Home.jsx'))
const Professional = lazy(() => import('./pages/Professional.jsx'))
const Skills = lazy(() => import('./pages/Skills.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/TitleDetail.jsx'))
const Achievements = lazy(() => import('./pages/Achievements.jsx'))
const Resume = lazy(() => import('./pages/Resume.jsx'))
const HireMe = lazy(() => import('./pages/HireMe.jsx'))
const AskAnika = lazy(() => import('./pages/AskAnika.jsx'))

export default function App() {
  const location = useLocation()
  const { id: profileId } = useProfile()

  // No navbar during the intro (handled inside Entry) or on the profile screen.
  const bareRoute = location.pathname === '/' || location.pathname === '/who'

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ScrollToTop />
      {!bareRoute && <Navbar />}

      <Suspense fallback={<RouteLoading />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Entry profileId={profileId} />} />
            <Route path="/who" element={<WhoIsWatching />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/professional" element={<Professional />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/hire-me" element={<HireMe />} />
            <Route path="/ask-anika" element={<AskAnika />} />
            <Route path="/title/:id" element={<LegacyTitle />} />
            <Route path="/about" element={<Navigate to="/professional" replace />} />
            <Route path="/contact" element={<Navigate to="/hire-me" replace />} />
            <Route path="*" element={<Navigate to="/browse" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  )
}

// Root gate / application state machine:
//   INTRO_VIDEO → PROFILE_SELECTION → LOADING → BROWSE
// The intro plays once per browser session. Each state only advances after the
// previous one has completed (video → fade-to-black → onDone), never on a bare
// timeout, and Browse is never mounted until a profile has been selected.
function Entry({ profileId }) {
  const navigate = useNavigate()
  const [introPlayed, setIntroPlayed] = useState(() => {
    try { return sessionStorage.getItem('introPlayed') === '1' } catch { return true }
  })

  // Warm the profile-selection chunk while the intro plays, so the hand-off
  // from INTRO_VIDEO → PROFILE_SELECTION is seamless (no loading flash).
  useEffect(() => { if (!introPlayed) import('./pages/WhoIsWatching.jsx') }, [introPlayed])

  const finishIntro = useCallback(() => {
    try { sessionStorage.setItem('introPlayed', '1') } catch { /* noop */ }
    setIntroPlayed(true)
    // Profile selection is never skipped after the intro.
    navigate('/who', { replace: true })
  }, [navigate])

  if (!introPlayed) return <Intro onDone={finishIntro} />
  // Returning within the same session: go straight to the profile screen
  // (still never auto-entering Browse without a chosen profile).
  return <Navigate to={profileId ? '/browse' : '/who'} replace />
}

function LegacyTitle() {
  const { pathname } = useLocation()
  return <Navigate to={pathname.replace('/title/', '/projects/')} replace />
}
