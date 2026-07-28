import { useRef, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { profile } from '../data/content.js'
import Particles from './Particles.jsx'
import SmartImage from './SmartImage.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './Hero.css'

export default function Hero() {
  const ref = useRef(null)
  const sound = useSound()
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14])

  const base = 0.15
  const videoRef = useRef(null)

  // Ensure the muted background loop actually plays (some engines ignore autoPlay).
  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    const tryPlay = () => v.play().catch(() => {})
    tryPlay()
    v.addEventListener('canplay', tryPlay, { once: true })
    return () => v.removeEventListener('canplay', tryPlay)
  }, [])

  return (
    <section className="hero" ref={ref} aria-label="Introduction">
      {/* Full-bleed background — GIF → video → ken-burns image */}
      <motion.div className="hero__bg" style={{ y, scale }}>
        {profile.heroGif ? (
          <img className="hero__gif" src={profile.heroGif} alt="" />
        ) : profile.heroVideo ? (
          <video ref={videoRef} src={profile.heroVideo} poster={profile.heroImage} autoPlay muted loop playsInline preload="auto" />
        ) : (
          <SmartImage className="hero__kenburns" src={profile.heroImage} alt="" eager />
        )}
      </motion.div>
      <div className="hero__scrim" />
      <div className="hero__scrim hero__scrim--bottom" />
      <div className="hero__bloom" aria-hidden="true" />
      <Particles className="hero__particles" />

      {/* Back to profile selection */}
      <motion.button
        className="hero__back"
        aria-label="Back to profiles"
        onClick={() => { sound.play('click'); navigate('/who') }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: base, duration: 0.6 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </motion.button>

      {/* Content panel (reference layout) */}
      <div className="hero__wrap container">
        <motion.div
          className="hero__panel"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: base + 0.15 }}
        >
          <h1 className="hero__title">
            <span>Growth &amp; Commercial</span>
            <span>Marketing Leader</span>
          </h1>
          <p className="hero__desc">{profile.valueProp}</p>

          <div className="hero__actions">
            <Link to="/resume" className="btn btn--primary" onClick={() => sound.play('play')} onMouseEnter={() => sound.play('hover')}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              Resume
            </Link>
            <a href={profile.socials.LinkedIn} target="_blank" rel="noreferrer noopener" className="btn btn--ghost" onMouseEnter={() => sound.play('hover')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="9" /><path d="M12 11v5M12 8h.01" strokeLinecap="round" /></svg>
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>

      <div className="hero__scrollhint" aria-hidden="true"><span>Scroll</span><i /></div>
    </section>
  )
}
