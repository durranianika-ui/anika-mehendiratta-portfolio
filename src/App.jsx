import { Suspense, lazy, useState, useCallback, useEffect } from 'react'
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Navbar from './components/Navbar.jsx'
import ActionBar from './components/ActionBar.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import RouteLoading from './components/RouteLoading.jsx'
import Intro from './components/Intro.jsx'
import ProfileSelect from './pages/WhoIsWatching.jsx'
import { useProfile } from './context/ProfileContext.jsx'
import { useSound } from './context/SoundContext.jsx'

const Browse = lazy(() => import('./pages/Home.jsx'))
const Professional = lazy(() => import('./pages/Professional.jsx'))
const Skills = lazy(() => import('./pages/Skills.jsx'))
const Projects = lazy(() => import('./pages/Projects.jsx'))
const ProjectDetail = lazy(() => import('./pages/TitleDetail.jsx'))
const Achievements = lazy(() => import('./pages/Achievements.jsx'))
const Resume = lazy(() => import('./pages/Resume.jsx'))
const HireMe = lazy(() => import('./pages/HireMe.jsx'))
const AskAnika = lazy(() => import('./pages/AskAnika.jsx'))

const INTRO_SEEN_KEY = 'portfolioIntroSeen'

// Explicit application states. Exactly ONE is ever rendered.
//   INTRO            → the full-screen intro video, nothing else
//   PROFILE_SELECTION→ the full-screen "Who's Watching?" screen, nothing else
//   PROFILE_LOADING  → a brief loading transition after a profile is chosen
//   BROWSE           → the real portfolio; ONLY here does the navigation mount
function readIntroSeen() {
  try { return sessionStorage.getItem(INTRO_SEEN_KEY) === '1' } catch { return false }
}

export default function App() {
  const location = useLocation()
  const navigate = useNavigate()
  const { id: profileId, setProfile, clearProfile } = useProfile()
  const sound = useSound()

  // Derive the starting state from session + route, per the required flow:
  //   fresh session at "/"            → INTRO
  //   returning (profile this session)→ BROWSE
  //   direct portfolio route, no pick → PROFILE_SELECTION (skip intro)
  const [appState, setAppState] = useState(() => {
    if (profileId) return 'BROWSE'
    if (location.pathname === '/' && !readIntroSeen()) return 'INTRO'
    return 'PROFILE_SELECTION'
  })

  // Warm the heavy portfolio chunk while the user is on the startup screens so
  // the hand-off into BROWSE has no extra loading flash.
  useEffect(() => {
    if (appState === 'INTRO' || appState === 'PROFILE_SELECTION') {
      import('./pages/Home.jsx')
    }
  }, [appState])

  const finishIntro = useCallback(() => {
    try { sessionStorage.setItem(INTRO_SEEN_KEY, '1') } catch { /* noop */ }
    setAppState('PROFILE_SELECTION') // profile selection is never skipped
  }, [])

  const selectProfile = useCallback((id) => {
    sound.playOnce('select')
    setProfile(id)                 // 1. save (drives personalization + navbar avatar)
    setAppState('PROFILE_LOADING') // 2. short loading transition
    window.setTimeout(() => {
      navigate('/browse', { replace: true }) // 3. route into the portfolio
      setAppState('BROWSE')                   // 4. mount BROWSE (+ navigation)
    }, 550)
  }, [navigate, setProfile, sound])

  const replayIntro = useCallback(() => {
    try { sessionStorage.removeItem(INTRO_SEEN_KEY) } catch { /* noop */ }
    clearProfile()
    setAppState('INTRO')
  }, [clearProfile])

  const switchProfile = useCallback(() => {
    clearProfile()
    setAppState('PROFILE_SELECTION')
  }, [clearProfile])

  // --- Startup states: render ONLY the state, nothing underneath ---
  if (appState === 'INTRO') return <Intro onDone={finishIntro} />
  if (appState === 'PROFILE_SELECTION') return <ProfileSelect onSelect={selectProfile} onReplay={replayIntro} />
  if (appState === 'PROFILE_LOADING') return <RouteLoading />

  // --- BROWSE: the real application. Navigation exists only here. ---
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <ScrollToTop />
      <Navbar onSwitchProfile={switchProfile} />
      <ActionBar />

      <Suspense fallback={<RouteLoading />}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/browse" replace />} />
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
            <Route path="/who" element={<Navigate to="/browse" replace />} />
            <Route path="/about" element={<Navigate to="/professional" replace />} />
            <Route path="/contact" element={<Navigate to="/hire-me" replace />} />
            <Route path="*" element={<Navigate to="/browse" replace />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </>
  )
}

function LegacyTitle() {
  const { pathname } = useLocation()
  return <Navigate to={pathname.replace('/title/', '/projects/')} replace />
}
