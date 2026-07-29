import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import './Intro.css'

// The ONLY intro asset. Swap this file to change the intro — nothing else renders.
const SRC = `${import.meta.env.BASE_URL}intro.mp4`

/**
 * INTRO_VIDEO state.
 * Plays the supplied intro video full-screen with no overlays, no CSS logo,
 * no text. When the video reaches its last frame it fades to black (~300ms),
 * then — and only then — calls onDone() to advance to PROFILE_SELECTION.
 */
export default function Intro({ onDone }) {
  const [fading, setFading] = useState(false)
  const doneRef = useRef(false)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    // Safety net: if the video never fires 'ended' (stall/decode error),
    // start the fade after a hard cap so the user is never trapped.
    const cap = setTimeout(() => setFading(true), 8000)
    return () => { clearTimeout(cap); document.body.style.overflow = '' }
  }, [])

  const beginFade = () => setFading(true)

  const handleFadeComplete = () => {
    // Only advance once the fade-to-black has actually finished.
    if (fading && !doneRef.current) {
      doneRef.current = true
      onDone()
    }
  }

  return (
    <div className="introv">
      <video
        className="introv__video"
        src={SRC}
        autoPlay
        muted
        playsInline
        preload="auto"
        onEnded={beginFade}
        onError={beginFade}
      />
      <motion.div
        className="introv__fade"
        initial={{ opacity: 0 }}
        animate={{ opacity: fading ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        onAnimationComplete={handleFadeComplete}
      />
    </div>
  )
}
