import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { seasons, seriesMeta, profile } from '../data/content.js'
import { pageTransition, fadeUp, stagger } from '../lib/motion.js'
import { useSound } from '../context/SoundContext.jsx'
import Footer from '../components/Footer.jsx'
import './CareerSeries.css'

export default function CareerSeries() {
  const sound = useSound()
  const [active, setActive] = useState(seasons.length - 1) // open on the latest chapter
  const s = seasons[active]

  const pick = (i) => { setActive(i); sound.play('click') }

  return (
    <motion.main className="career" {...pageTransition}>
      {/* Series hero */}
      <header className="career__hero">
        <div className="container">
          <motion.p className="career__eyebrow" variants={fadeUp} initial="hidden" animate="show">Original Series · Career</motion.p>
          <motion.h1 className="career__title" variants={fadeUp} initial="hidden" animate="show">{seriesMeta.title}</motion.h1>
          <motion.p className="career__tagline" variants={fadeUp} initial="hidden" animate="show">{seriesMeta.tagline}</motion.p>
          <motion.div className="career__meta" variants={fadeUp} initial="hidden" animate="show">
            <span className="career__chip">{seriesMeta.seasonsLabel}</span>
            <span className="career__chip">{seriesMeta.spanLabel}</span>
            <span className="career__chip career__chip--gold">AED 1.4M+ revenue impact</span>
          </motion.div>
          <motion.div className="career__actions" variants={fadeUp} initial="hidden" animate="show">
            <a href={profile.resumeFile} download className="btn btn--light" onMouseEnter={() => sound.play('hover')}>Download CV</a>
            <Link to="/hire-me" className="btn btn--accent" onMouseEnter={() => sound.play('hover')} onClick={() => sound.play('play')}>Book interview</Link>
          </motion.div>
        </div>
      </header>

      {/* Season selector */}
      <div className="career__body container">
        <nav className="career__seasons" aria-label="Chapters">
          {seasons.map((se, i) => (
            <button
              key={se.season}
              className={`career__seasonbtn ${i === active ? 'is-active' : ''}`}
              onClick={() => pick(i)}
              onMouseEnter={() => sound.play('hover')}
            >
              <span className="career__seasonn">Chapter {se.season}</span>
              <span className="career__seasontheme">{se.theme}</span>
            </button>
          ))}
        </nav>

        {/* Active season */}
        <motion.section className="career__season" key={s.season} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}>
          <div className="career__seasonhead">
            <h2>{s.title}</h2>
            <p className="career__seasonorg">{s.org} · {s.place}</p>
            <p className="career__seasonperiod">{s.period}</p>
            <p className="career__seasonlog">{s.logline}</p>
          </div>

          <motion.ol className="career__eps" variants={stagger(0.05)} initial="hidden" animate="show">
            {s.episodes.map((ep) => {
              const Inner = (
                <>
                  <div className="ep__num">{String(ep.n).padStart(2, '0')}</div>
                  <div className="ep__body">
                    <div className="ep__top">
                      <h3 className="ep__title">{ep.title}</h3>
                      {ep.stat && <span className="ep__stat">{ep.stat}</span>}
                    </div>
                    <p className="ep__desc">{ep.desc}</p>
                    {ep.to && <span className="ep__watch">Watch the case study ›</span>}
                  </div>
                </>
              )
              return (
                <motion.li key={ep.n} className={`ep ${ep.to ? 'ep--link' : ''}`} variants={fadeUp}>
                  {ep.to
                    ? <Link to={ep.to} className="ep__hit" onMouseEnter={() => sound.play('hover')} onClick={() => sound.play('play')}>{Inner}</Link>
                    : <div className="ep__hit">{Inner}</div>}
                </motion.li>
              )
            })}
          </motion.ol>
        </motion.section>
      </div>

      <Footer />
    </motion.main>
  )
}
