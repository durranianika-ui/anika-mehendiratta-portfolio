import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Intro.css'

const BASE = import.meta.env.BASE_URL
const DESKTOP_MP4 = `${BASE}intro.mp4`
const MOBILE_WEBP = `${BASE}intro-mobile.webp` // animated image — no autoplay policy on iOS

const isMobileViewport = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

const MOBILE_HOLD_MS = 3100 // ~clip duration

/**
 * INTRO state.
 *
 * Mobile: iOS repeatedly blocks inline video autoplay (Low Power Mode, data
 * saver, policy) — so we render the intro as an ANIMATED IMAGE (<img>), which
 * the browser plays automatically with zero autoplay restrictions. It always
 * shows. Desktop keeps the real video (autoplay works there).
 *
 * A black cover sits on top until the media is ready, then reveals it; at the
 * end it fades back to black → profile. Nothing ever dead-ends.
 */
export default function Intro({ onDone }) {
  const [isMobile] = useState(isMobileViewport)
  return isMobile ? <ImageIntro onDone={onDone} /> : <VideoIntro onDone={onDone} />
}

function ImageIntro({ onDone }) {
  const doneRef = useRef(false)
  const holdRef = useRef(0)
  const [stage, setStage] = useState('cover')

  const finish = useCallback(() => { if (doneRef.current) return; doneRef.current = true; onDone() }, [onDone])

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const fallback = window.setTimeout(finish, 5000) // if the image never loads
    return () => { window.clearTimeout(fallback); window.clearTimeout(holdRef.current); document.body.style.overflow = '' }
  }, [finish])

  const onLoaded = () => {
    setStage('reveal')
    holdRef.current = window.setTimeout(() => {
      setStage('out')
      window.setTimeout(finish, 320)
    }, MOBILE_HOLD_MS)
  }

  return (
    <div className="introv">
      <div className="introv__host">
        <img className="introv__video" src={MOBILE_WEBP} alt="" onLoad={onLoaded} onError={finish} draggable="false" />
      </div>
      <motion.div
        className="introv__fade"
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === 'reveal' ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </div>
  )
}

function VideoIntro({ onDone }) {
  const hostRef = useRef(null)
  const doneRef = useRef(false)
  const startedRef = useRef(false)
  const [stage, setStage] = useState('cover')

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    document.body.style.overflow = 'hidden'

    const v = document.createElement('video')
    v.className = 'introv__video'
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '')
    v.setAttribute('playsinline', '')
    v.setAttribute('preload', 'auto')
    v.setAttribute('autoplay', '')
    v.controls = false
    v.src = DESKTOP_MP4

    let outroTimer
    let fallbackTimer
    let capTimer

    const finish = () => { if (doneRef.current) return; doneRef.current = true; onDone() }
    const beginOutro = () => { setStage('out'); outroTimer = window.setTimeout(finish, 320) }
    const onPlaying = () => {
      if (startedRef.current) return
      startedRef.current = true
      window.clearTimeout(fallbackTimer)
      setStage('reveal')
      const d = Number.isFinite(v.duration) && v.duration > 0 ? v.duration : 4
      outroTimer = window.setTimeout(beginOutro, d * 1000)
    }
    const tryPlay = () => { v.muted = true; const p = v.play(); if (p && p.catch) p.catch(() => {}) }
    const onProgress = () => { if (v.currentTime > 0.05) onPlaying() }

    v.addEventListener('loadeddata', tryPlay)
    v.addEventListener('canplay', tryPlay)
    v.addEventListener('playing', onPlaying)
    v.addEventListener('timeupdate', onProgress)
    v.addEventListener('ended', beginOutro)
    v.addEventListener('error', finish)

    host.appendChild(v)
    v.load()
    tryPlay()

    fallbackTimer = window.setTimeout(() => { if (!startedRef.current) finish() }, 3000)
    capTimer = window.setTimeout(finish, 9000)

    return () => {
      window.clearTimeout(outroTimer)
      window.clearTimeout(fallbackTimer)
      window.clearTimeout(capTimer)
      try { v.pause() } catch { /* noop */ }
      v.removeAttribute('src')
      if (v.parentNode) v.parentNode.removeChild(v)
      document.body.style.overflow = ''
    }
  }, [onDone])

  return (
    <div className="introv">
      <div className="introv__host" ref={hostRef} />
      <motion.div
        className="introv__fade"
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === 'reveal' ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </div>
  )
}
