import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Intro.css'

const BASE = import.meta.env.BASE_URL
const DESKTOP_SRC = `${BASE}intro.mp4`
const MOBILE_SRC = `${BASE}intro-mobile.mp4` // trimmed 2s vertical cut; falls back to desktop if absent

const isMobileViewport = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

/**
 * INTRO state — plays ONLY the intro video, full-viewport, no controls, no
 * overlays. Mobile uses a vertical source (object-fit: cover); desktop uses the
 * horizontal source (object-fit: contain).
 *
 * Autoplay is muted and play() is called (promise handled) on canplay; native
 * controls are never shown. The advance to the profile screen is driven by a
 * timer sized to the clip's own duration — NOT solely by the 'ended' event —
 * so a blocked or auto-paused video can never dead-end on black. On the last
 * frame it fades to black (~300ms) then calls onDone().
 */
export default function Intro({ onDone }) {
  const videoRef = useRef(null)
  const doneRef = useRef(false)
  const [fading, setFading] = useState(false)

  const [sources] = useState(() => (isMobileViewport() ? [MOBILE_SRC, DESKTOP_SRC] : [DESKTOP_SRC]))
  const [srcIndex, setSrcIndex] = useState(0)

  const finish = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    onDone()
  }, [onDone])

  // Fade to black, then advance. The advance is a plain timer (not a framer
  // callback) so it is deterministic.
  const startOutro = useCallback(() => {
    setFading(true)
    window.setTimeout(finish, 320)
  }, [finish])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    document.body.style.overflow = 'hidden'
    let outroTimer
    let started = false

    const scheduleOutro = (ms) => {
      if (started) return
      started = true
      outroTimer = window.setTimeout(startOutro, Math.max(0, ms))
    }
    const onLoadedMeta = () => {
      const d = Number.isFinite(v.duration) && v.duration > 0 ? v.duration : 4
      scheduleOutro(d * 1000 + 150) // fade right as the clip ends
    }
    const tryPlay = () => {
      v.muted = true // MUST be muted before play() for mobile autoplay
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => { /* blocked: timer still advances */ })
    }
    const onVisible = () => { if (!document.hidden) tryPlay() }

    v.addEventListener('loadedmetadata', onLoadedMeta)
    v.addEventListener('canplay', tryPlay)
    v.addEventListener('loadeddata', tryPlay)
    document.addEventListener('visibilitychange', onVisible)
    if (v.readyState >= 1) onLoadedMeta()
    if (v.readyState >= 2) tryPlay()

    // Ultimate safety net.
    const cap = window.setTimeout(startOutro, 12000)

    return () => {
      window.clearTimeout(outroTimer)
      window.clearTimeout(cap)
      v.removeEventListener('loadedmetadata', onLoadedMeta)
      v.removeEventListener('canplay', tryPlay)
      v.removeEventListener('loadeddata', tryPlay)
      document.removeEventListener('visibilitychange', onVisible)
      document.body.style.overflow = ''
    }
  }, [srcIndex, startOutro])

  const handleError = () => {
    if (srcIndex < sources.length - 1) setSrcIndex((i) => i + 1)
    else startOutro()
  }

  return (
    <div className="introv">
      <video
        key={srcIndex}
        ref={videoRef}
        className="introv__video"
        src={sources[srcIndex]}
        autoPlay
        muted
        playsInline
        preload="auto"
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        onEnded={startOutro}
        onError={handleError}
      />
      <motion.div
        className="introv__fade"
        initial={{ opacity: 0 }}
        animate={{ opacity: fading ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </div>
  )
}
