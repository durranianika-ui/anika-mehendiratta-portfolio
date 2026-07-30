import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView, animate } from 'framer-motion'
import { Link } from 'react-router-dom'
import { projects, rows, certifications, topTen, trustedWith, capabilityRows } from '../data/content.js'
import { pageTransition, stagger, fadeUp } from '../lib/motion.js'
import { useProfile } from '../context/ProfileContext.jsx'
import Hero from '../components/Hero.jsx'
import Row from '../components/Row.jsx'
import TopTen from '../components/TopTen.jsx'
import SeasonsRow from '../components/SeasonsRow.jsx'
import CapabilityRow from '../components/CapabilityRow.jsx'
import Footer from '../components/Footer.jsx'
import './Home.css'

const byId = (id) => projects.find((p) => p.id === id)
const continueRow = rows[0]
const currentlyBuilding = rows.find((r) => r.label === 'Currently Building')

function Counter({ value, prefix = '', suffix = '', decimals = 0 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!inView) return
    const c = animate(0, value, { duration: 1.7, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setN(v) })
    return () => c.stop()
  }, [inView, value])
  return <span ref={ref}>{prefix}{n.toFixed(decimals)}{suffix}</span>
}

export default function Home() {
  const { profile } = useProfile()

  // Personalise: bring the selected persona's focus rails to the front.
  const orderedCaps = useMemo(() => {
    const emph = profile?.emphasis || []
    if (!emph.length) return capabilityRows
    const front = emph.map((l) => capabilityRows.find((r) => r.label === l)).filter(Boolean)
    const rest = capabilityRows.filter((r) => !emph.includes(r.label))
    return [...front, ...rest]
  }, [profile])

  return (
    <motion.main {...pageTransition}>
      <Hero />

      {profile && (
        <p className="home__foryou container">
          <span className="home__foryou-dot" /> Recommended for {profile.name.toLowerCase() === 'stalker' ? 'the curious' : `the ${profile.name}`}
        </p>
      )}

      <div className="home__rows">
        {/* Project & career rails */}
        <Row label={continueRow.label} kind={continueRow.kind} items={projects.filter(continueRow.filter)} />
        <TopTen label="Top Career Wins" items={topTen.map(byId).filter(Boolean)} />
        <SeasonsRow />

        {/* Middle section — capability rails, personalised order */}
        {orderedCaps.map((r) => (
          <CapabilityRow key={r.label} label={r.label} cards={r.cards} />
        ))}

        {/* Latest project work */}
        {currentlyBuilding && (
          <Row label={currentlyBuilding.label} kind={currentlyBuilding.kind} items={projects.filter(currentlyBuilding.filter)} />
        )}
      </div>

      {/* Trusted With — animated executive counters */}
      <section className="trusted container" aria-label="Trusted with">
        <motion.div className="genres__head" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
          <p className="eyebrow">The numbers I’ve owned</p>
          <h2>Trusted with</h2>
        </motion.div>
        <motion.div className="trusted__grid" variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
          {trustedWith.map((t) => (
            <motion.div key={t.label} className="trusted__item" variants={fadeUp}>
              <span className="trusted__v"><Counter value={t.value} prefix={t.prefix} suffix={t.suffix} decimals={t.decimals || 0} /></span>
              <span className="trusted__l">{t.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="certs container" aria-label="Certifications">
        <motion.div className="genres__head" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
          <p className="eyebrow">Always in training</p>
          <h2>Certifications</h2>
        </motion.div>
        <motion.div className="certs__grid" variants={stagger(0.06)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          {certifications.map((c) => (
            <motion.div key={c.provider} className={`cert ${c.provider === 'In Progress' ? 'cert--progress' : ''}`} variants={fadeUp}>
              <h3 className="cert__provider">{c.provider}</h3>
              <ul className="cert__items">
                {c.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Season 2 — closing pitch */}
      <section className="season2">
        <div className="container season2__inner">
          <motion.p className="eyebrow" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>Season 2 starts here</motion.p>
          <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
            Looking for someone who combines commercial strategy, marketing, analytics and AI automation?
          </motion.h2>
          <motion.div className="season2__actions" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
            <Link to="/hire-me" className="btn btn--accent">▶ Hire me</Link>
            <Link to="/ask-anika" className="btn btn--ghost">Ask Anika</Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.main>
  )
}
