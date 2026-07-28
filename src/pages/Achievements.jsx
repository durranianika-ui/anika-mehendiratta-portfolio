import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { highlights } from '../data/content.js'
import { pageTransition, fadeUp } from '../lib/motion.js'
import Footer from '../components/Footer.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './Achievements.css'

const linkFor = {
  1: '/projects/direct-revenue-4x',
  2: '/projects/occupancy-engine',
  3: '/projects/acquisition-efficiency',
  4: '/projects/direct-revenue-4x',
  5: '/projects/ai-reporting-automation',
  6: '/professional',
}

export default function Achievements() {
  const trackRef = useRef(null)
  const navigate = useNavigate()
  const sound = useSound()
  const scrollBy = (dir) => { const el = trackRef.current; if (el) el.scrollBy({ left: dir * el.clientWidth * 0.75, behavior: 'smooth' }) }

  return (
    <motion.main {...pageTransition} className="page ach">
      <header className="page-head container">
        <span className="eyebrow">The highlight reel</span>
        <h1>Top Career Wins</h1>
        <p className="page-lead">The numbers that matter — every claim drawn directly from the CV. Scroll or drag the rail.</p>
      </header>

      <div className="ach__viewport">
        <button className="ach__arrow ach__arrow--left" aria-label="Scroll left" onClick={() => { scrollBy(-1); sound.play('click') }}>‹</button>
        <ol className="ach__track" ref={trackRef} tabIndex={0} aria-label="Top career wins, ranked">
          {highlights.map((h) => (
            <motion.li
              key={h.rank}
              className="ach__item"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (h.rank % 6) * 0.05 }}
            >
              <span className="ach__num" aria-hidden="true">{h.rank}</span>
              <button
                className="ach__poster"
                onMouseEnter={() => sound.play('hover')}
                onClick={() => { sound.play('play'); navigate(linkFor[h.rank] || '/professional') }}
                aria-label={`#${h.rank}: ${h.stat} ${h.headline}`}
              >
                <span className="ach__stat">{h.stat}</span>
                <span className="ach__headline">{h.headline}</span>
                <span className="ach__detail">{h.detail}</span>
                <span className="ach__cta">View evidence ›</span>
              </button>
            </motion.li>
          ))}
        </ol>
        <button className="ach__arrow ach__arrow--right" aria-label="Scroll right" onClick={() => { scrollBy(1); sound.play('click') }}>›</button>
      </div>

      <section className="ach__note container">
        <motion.p variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
          Every figure here is taken verbatim from Anika’s CV — no rounded-up claims, no invented metrics.
        </motion.p>
      </section>

      <Footer />
    </motion.main>
  )
}
