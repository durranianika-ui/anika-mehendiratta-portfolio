import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { skillCollections, tools, projects } from '../data/content.js'
import { pageTransition, fadeUp, stagger } from '../lib/motion.js'
import Footer from '../components/Footer.jsx'
import './Skills.css'

// map each capability to a proof project (evidence, not fake bars)
const proofFor = {
  'Commercial Growth': 'commercial-growth-engine',
  'Performance & Acquisition': 'acquisition-efficiency',
  'CRM & Lifecycle': 'direct-booking-growth',
  'Hospitality & Distribution': 'distribution-expansion',
  'AI & Marketing Automation': 'marketing-automation',
}
const proj = (id) => projects.find((p) => p.id === id)

export default function Skills() {
  return (
    <motion.main {...pageTransition} className="page container skills">
      <header className="page-head">
        <span className="eyebrow">Capabilities</span>
        <h1>Skills, backed by evidence</h1>
        <p className="page-lead">No vanity percentages. Every capability links to the role, result or project that proves it.</p>
      </header>

      <motion.div className="skills__grid" variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
        {skillCollections.map((c) => {
          const p = proj(proofFor[c.name])
          return (
            <motion.article key={c.name} className="skillcard" variants={fadeUp}>
              <div className="skillcard__glow" aria-hidden="true" />
              <h2>{c.name}</h2>
              <p className="skillcard__blurb">{c.blurb}</p>
              <ul className="skillcard__items">
                {c.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
              {p && (
                <Link to={`/projects/${p.id}`} className="skillcard__proof">
                  Proof: {p.title} <span>›</span>
                </Link>
              )}
            </motion.article>
          )
        })}
      </motion.div>

      <section className="skills__tools">
        <motion.h2 variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
          <span className="accent-bar" />Tools & Platforms
        </motion.h2>
        <motion.div className="tools__grid" variants={stagger(0.05)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }}>
          {tools.map((t) => (
            <motion.div key={t.group} className="toolgroup" variants={fadeUp}>
              <h3>{t.group}</h3>
              <ul>{t.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Footer />
    </motion.main>
  )
}
