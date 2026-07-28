import { Suspense, lazy, useState, useCallback } from 'react'
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

// Root gate: intro (once per browser session) → profile select → portfolio.
function Entry({ profileId }) {
  const navigate = useNavigate()
  const [introPlayed, setIntroPlayed] = useState(() => {
    try { return sessionStorage.getItem('introPlayed') === '1' } catch { return true }
  })

  const finishIntro = useCallback(() => {
    try { sessionStorage.setItem('introPlayed', '1') } catch { /* noop */ }
    setIntroPlayed(true)
    navigate(profileId ? '/browse' : '/who', { replace: true })
  }, [navigate, profileId])

  if (!introPlayed) return <Intro onDone={finishIntro} />
  return <Navigate to={profileId ? '/browse' : '/who'} replace />
}

function LegacyTitle() {
  const { pathname } = useLocation()
  return <Navigate to={pathname.replace('/title/', '/projects/')} replace />
}
