import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Intro.css'

const BASE = import.meta.env.BASE_URL
const DESKTOP_MP4 = `${BASE}intro.mp4`
const MOBILE_MP4 = `${BASE}intro-mobile.mp4`   // vertical H.264
const MOBILE_WEBM = `${BASE}intro-mobile.webm` // vertical VP9 fallback

const isMobileViewport = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches

/**
 * INTRO state — plays ONLY the intro video, full-viewport, no controls.
 *
 * iOS autoplay is fragile: with the `autoplay` attribute, Safari decides
 * eligibility at insertion time — and because React sets `muted` as a property
 * (not an attribute) the video can look unmuted at that instant, get blocked,
 * and show a big play button. So we do NOT use the autoplay attribute. Instead
 * we force muted/inline at the attribute level, then start playback via script
 * (muted script-play is permitted inline on iOS) once the media is ready.
 *
 * A black cover sits on top of the video until it is actually playing, so a
 * play button / first frame is never visible. When the clip's own duration
 * elapses (or it ends) we fade back to black (~300ms) → profile. If playback
 * never starts (e.g. Low Power Mode), we stay black briefly then continue —
 * never a play button, never a dead end.
 */
export default function Intro({ onDone }) {
  const videoRef = useRef(null)
  const doneRef = useRef(false)
  const startedRef = useRef(false)
  // 'cover' = black over video · 'reveal' = video visible · 'out' = back to black
  const [stage, setStage] = useState('cover')
  const [isMobile] = useState(isMobileViewport)

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

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    document.body.style.overflow = 'hidden'
    let outroTimer
    let fallbackTimer

    const beginOutro = () => {
      setStage('out')
      window.setTimeout(finish, 320)
    }

    const onPlaying = () => {
      if (startedRef.current) return
      startedRef.current = true
      window.clearTimeout(fallbackTimer)
      setStage('reveal') // uncover the now-playing video
      const d = Number.isFinite(v.duration) && v.duration > 0 ? v.duration : (isMobile ? 3 : 4)
      outroTimer = window.setTimeout(beginOutro, d * 1000)
    }

    const attemptPlay = () => {
      if (startedRef.current) return
      v.muted = true
      const p = v.play()
      if (p && typeof p.catch === 'function') p.catch(() => { /* retry on later events / fallback */ })
    }
    const onReady = () => attemptPlay()
    const onVisible = () => { if (!document.hidden) attemptPlay() }

    v.addEventListener('loadedmetadata', onReady)
    v.addEventListener('loadeddata', onReady)
    v.addEventListener('canplay', onReady)
    v.addEventListener('playing', onPlaying)
    document.addEventListener('visibilitychange', onVisible)
    if (v.readyState >= 2) attemptPlay()

    // If playback never actually starts, don't sit on black forever.
    fallbackTimer = window.setTimeout(() => { if (!startedRef.current) finish() }, 2600)
    // Ultimate safety net.
    const cap = window.setTimeout(finish, 9000)

    return () => {
      window.clearTimeout(outroTimer)
      window.clearTimeout(fallbackTimer)
      window.clearTimeout(cap)
      v.removeEventListener('loadedmetadata', onReady)
      v.removeEventListener('loadeddata', onReady)
      v.removeEventListener('canplay', onReady)
      v.removeEventListener('playing', onPlaying)
      document.removeEventListener('visibilitychange', onVisible)
      document.body.style.overflow = ''
    }
  }, [isMobile, finish])

  return (
    <div className="introv">
      <video
        ref={setVideoRef}
        className="introv__video"
        muted
        playsInline
        preload="auto"
        controlsList="nodownload noplaybackrate noremoteplayback"
        disablePictureInPicture
        disableRemotePlayback
        onEnded={() => { setStage('out'); window.setTimeout(finish, 320) }}
        onError={() => finish()}
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
        initial={{ opacity: 1 }}
        animate={{ opacity: stage === 'reveal' ? 0 : 1 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      />
    </div>
  )
}
