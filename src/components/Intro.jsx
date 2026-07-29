import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Intro.css'

const BASE = import.meta.env.BASE_URL
const DESKTOP_MP4 = `${BASE}intro.mp4`
const MOBILE_MP4 = `${BASE}intro-mobile.mp4`   // trimmed 2s vertical H.264
const MOBILE_WEBM = `${BASE}intro-mobile.webm` // trimmed 2s vertical VP9 fallback

const isMobileViewport = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

/**
 * INTRO state — plays ONLY the intro video, full-viewport, no controls.
 *
 * iOS Safari inline muted autoplay is fragile: React's `muted` prop sets the
 * PROPERTY but not the ATTRIBUTE, so Safari treats the video as unmuted, blocks
 * autoplay, and shows a big play button. We force `muted`/`playsinline` at the
 * attribute level via a callback ref (before the browser's autoplay attempt).
 *
 * Flow: wait for canplay/loadeddata → play(); start the outro timer ONLY once
 * playback has actually begun (play() resolves / 'playing'); on the clip's own
 * duration, fade to black (~300ms) → profile screen. If autoplay is blocked, we
 * never show controls — we skip: black for ~300ms → profile.
 */
export default function Intro({ onDone }) {
  const videoRef = useRef(null)
  const doneRef = useRef(false)
  const startedRef = useRef(false)
  const [fading, setFading] = useState(false)
  const [isMobile] = useState(isMobileViewport)

  // Force muted/inline at the attribute level as soon as the node exists.
  const setVideoRef = useCallback((node) => {
    videoRef.current = node
    if (node) {
      node.defaultMuted = true
      node.muted = true
      node.setAttribute('muted', '')
      node.setAttribute('playsinline', '')
      node.setAttribute('webkit-playsinline', '')
    }
  }, [])

  const finish = useCallback(() => {
    if (doneRef.current) return
    doneRef.current = true
    onDone()
  }, [onDone])

  const startOutro = useCallback(() => {
    setFading(true)
    window.setTimeout(finish, 320) // ~300ms fade to black, then profile
  }, [finish])

  // Autoplay blocked / video unavailable → skip: black ~300ms → profile.
  const skip = useCallback(() => {
    setFading(true)
    window.setTimeout(finish, 300)
  }, [finish])

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    document.body.style.overflow = 'hidden'
    let outroTimer

    const beginOutroTimer = () => {
      if (startedRef.current) return
      startedRef.current = true
      const d = Number.isFinite(v.duration) && v.duration > 0 ? v.duration : (isMobile ? 2 : 4)
      outroTimer = window.setTimeout(startOutro, d * 1000) // starts only after playback began
    }

    const attemptPlay = () => {
      v.muted = true
      const p = v.play()
      if (p && typeof p.then === 'function') {
        p.then(beginOutroTimer).catch(() => skip())
      }
    }
    const onReady = () => attemptPlay()
    const onPlaying = () => beginOutroTimer()
    const onVisible = () => { if (!document.hidden) attemptPlay() }

    v.addEventListener('loadeddata', onReady)
    v.addEventListener('canplay', onReady)
    v.addEventListener('playing', onPlaying)
    document.addEventListener('visibilitychange', onVisible)
    if (v.readyState >= 2) attemptPlay()

    // Ultimate safety net so the profile screen always appears.
    const cap = window.setTimeout(startOutro, 9000)

    return () => {
      window.clearTimeout(outroTimer)
      window.clearTimeout(cap)
      v.removeEventListener('loadeddata', onReady)
      v.removeEventListener('canplay', onReady)
      v.removeEventListener('playing', onPlaying)
      document.removeEventListener('visibilitychange', onVisible)
      document.body.style.overflow = ''
    }
  }, [isMobile, startOutro, skip])

  return (
    <div className="introv">
      <video
        ref={setVideoRef}
        className="introv__video"
        autoPlay
        muted
        playsInline
        preload="auto"
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        onEnded={startOutro}
        onError={skip}
      >
        {isMobile ? (
          <>
            <source src={MOBILE_WEBM} type="video/webm" />
            <source src={MOBILE_MP4} type="video/mp4" />
          </>
        ) : (
          <source src={DESKTOP_MP4} type="video/mp4" />
        )}
      </video>
      <motion.div
        className="introv__fade"
        initial={{ opacity: 0 }}
        animate={{ opacity: fading ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </div>
  )
}
