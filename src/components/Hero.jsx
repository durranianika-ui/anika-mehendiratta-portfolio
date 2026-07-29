import { useRef, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion, useScroll, useTransform, animate, useInView } from 'framer-motion'
import { profile, heroMetrics } from '../data/content.js'
import Particles from './Particles.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './Hero.css'

// Count-up that supports a starting value (e.g. occupancy 50 → 79).
function Metric({ from = 0, to, prefix = '', suffix = '', decimals = 0, delay = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [n, setN] = useState(from)
  useEffect(() => {
    if (!inView) return
    const controls = animate(from, to, {
      duration: 1.5, delay, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(v),
    })
    return () => controls.stop()
  }, [inView, from, to, delay])
  return <span ref={ref}>{prefix}{n.toFixed(decimals)}{suffix}</span>
}

export default function Hero() {
  const ref = useRef(null)
  const sound = useSound()
  const navigate = useNavigate()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '14%'])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.14])
  const videoRef = useRef(null)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    v.muted = true
    const tryPlay = () => v.play().catch(() => {})
    tryPlay()
    v.addEventListener('canplay', tryPlay, { once: true })
    return () => v.removeEventListener('canplay', tryPlay)
  }, [])

  const seeWork = () => {
    sound.play('click')
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const ease = [0.22, 1, 0.36, 1]
  const rise = { hidden: { opacity: 0, y: 22 }, show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.7, ease, delay: 0.15 + i * 0.08 } }) }

  return (
    <section className="hero" ref={ref} aria-label="Introduction">
      <motion.div className="hero__bg" style={{ y, scale }}>
        {profile.heroGif ? (
          <img className="hero__gif" src={profile.heroGif} alt="" />
        ) : profile.heroVideo ? (
          <video ref={videoRef} src={profile.heroVideo} poster={profile.heroImage} autoPlay muted loop playsInline preload="auto" />
        ) : null}
      </motion.div>
      <div className="hero__scrim" />
      <div className="hero__scrim hero__scrim--bottom" />
      <div className="hero__bloom" aria-hidden="true" />
      <Particles className="hero__particles" />

      <motion.button
        className="hero__back"
        aria-label="Back to profiles"
        onClick={() => { sound.play('click'); navigate('/who') }}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15, duration: 0.6 }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </motion.button>

      <div className="hero__wrap container">
        <motion.div className="hero__panel" initial="hidden" animate="show">
          <motion.p className="hero__kicker" variants={rise} custom={0}>
            Growth &amp; Commercial Marketing Leader · Dubai
          </motion.p>

          <motion.h1 className="hero__name" variants={rise} custom={1}>
            {profile.firstName} {profile.lastName}
          </motion.h1>

          <motion.p className="hero__verbs" variants={rise} custom={2}>
            Building revenue. Scaling businesses. Designing systems. Automating growth.
          </motion.p>

          <motion.ul className="hero__wall" variants={rise} custom={3} aria-label="Career impact">
            {heroMetrics.map((m, i) => (
              <li className="hero__mtile" key={m.label}>
                <span className="hero__mv"><Metric {...m} delay={0.5 + i * 0.12} /></span>
                <span className="hero__ml">{m.label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div className="hero__actions" variants={rise} custom={4}>
            <Link to="/hire-me" className="btn btn--accent hero__cta" onClick={() => sound.play('play')} onMouseEnter={() => sound.play('hover')}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
              Book interview
            </Link>
            <a href={profile.resumeFile} download className="btn btn--light" onMouseEnter={() => sound.play('hover')}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Download CV
            </a>
            <button type="button" className="btn btn--ghost" onClick={seeWork} onMouseEnter={() => sound.play('hover')}>
              See the work
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </button>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero__scrollhint" aria-hidden="true"><span>Scroll</span><i /></div>
    </section>
  )
}
