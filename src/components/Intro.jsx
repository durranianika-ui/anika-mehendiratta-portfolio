import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Intro.css'

const BASE = import.meta.env.BASE_URL
const DESKTOP_MP4 = `${BASE}intro.mp4`
const MOBILE_MP4 = `${BASE}intro-mobile.mp4` // iOS-safe H.264 (Main, yuv420p, faststart)

const isMobileViewport = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

/**
 * INTRO state — plays ONLY the intro video, full-viewport, no controls.
 *
 * The <video> is created imperatively so `muted`/`playsinline` are guaranteed
 * present on the element BEFORE it enters the DOM — the only reliable way to get
 * iOS Safari to honor inline muted autoplay (JSX sets `muted` as a property too
 * late, so iOS blocks it and shows a play button). H.264 MP4 only — iOS WebM/VP9
 * support is unreliable and can fail to fall back.
 *
 * A black cover sits over the video until it is actually playing, so a play
 * button / first frame is never visible. Reveal on 'playing'; fade back to black
 * on end/duration → profile. If playback never starts, stay black then continue.
 */
export default function Intro({ onDone }) {
  const hostRef = useRef(null)
  const doneRef = useRef(false)
  const startedRef = useRef(false)
  // 'cover' = black over video · 'reveal' = video visible · 'out' = back to black
  const [stage, setStage] = useState('cover')

  useEffect(() => {
    const host = hostRef.current
    if (!host) return
    document.body.style.overflow = 'hidden'
    const isMobile = isMobileViewport()

    const v = document.createElement('video')
    v.className = 'introv__video'
    v.muted = true
    v.defaultMuted = true
    v.setAttribute('muted', '')
    v.setAttribute('playsinline', '')
    v.setAttribute('webkit-playsinline', '')
    v.setAttribute('preload', 'auto')
    v.setAttribute('autoplay', '') // safe now — muted is already set on the element
    v.controls = false
    v.disablePictureInPicture = true
    v.src = isMobile ? MOBILE_MP4 : DESKTOP_MP4

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
      const d = Number.isFinite(v.duration) && v.duration > 0 ? v.duration : (isMobile ? 3 : 4)
      outroTimer = window.setTimeout(beginOutro, d * 1000)
    }
    const tryPlay = () => {
      v.muted = true
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => { /* retry on later events / fallback */ })
    }
    const onVisible = () => { if (!document.hidden) tryPlay() }
    // Reveal as soon as the video is actually advancing, even if 'playing' is missed.
    const onProgress = () => { if (v.currentTime > 0.05) onPlaying() }

    v.addEventListener('loadeddata', tryPlay)
    v.addEventListener('canplay', tryPlay)
    v.addEventListener('playing', onPlaying)
    v.addEventListener('timeupdate', onProgress)
    v.addEventListener('ended', beginOutro)
    v.addEventListener('error', finish)
    document.addEventListener('visibilitychange', onVisible)

    host.appendChild(v)
    v.load()
    tryPlay()

    // If playback never actually starts, don't sit on black forever.
    fallbackTimer = window.setTimeout(() => { if (!startedRef.current) finish() }, 3000)
    capTimer = window.setTimeout(finish, 9000)

    return () => {
      window.clearTimeout(outroTimer)
      window.clearTimeout(fallbackTimer)
      window.clearTimeout(capTimer)
      document.removeEventListener('visibilitychange', onVisible)
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
