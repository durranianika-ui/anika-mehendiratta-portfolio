import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useSound } from '../context/SoundContext.jsx'
import './Intro.css'

const SRC = `${import.meta.env.BASE_URL}intro.mp4`

/**
 * Full-screen intro video. Black until the video can play, covers the viewport,
 * no scroll, no UI. Fades to profile selection when it ends. Drop any clip at
 * /public/intro.mp4 to replace it.
 */
export default function Intro({ onDone }) {
  const videoRef = useRef(null)
  const [ready, setReady] = useState(false)
  const sound = useSound()

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    sound.playOnce('ident')
    // Safety net: if the video stalls or is missing, continue anyway.
    const fallback = setTimeout(onDone, reduce ? 600 : 6000)
    return () => { clearTimeout(fallback); document.body.style.overflow = '' }
  }, [onDone, sound])

  return (
    <motion.div className="intro" initial={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.55 }}>
      <video
        ref={videoRef}
        className={`intro__video ${ready ? 'is-ready' : ''}`}
        src={SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        onCanPlay={() => { setReady(true); videoRef.current?.play?.().catch(() => {}) }}
        onEnded={onDone}
        onError={onDone}
      />
    </motion.div>
  )
}
