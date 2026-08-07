import { motion } from 'framer-motion'
import { commercialSystem } from '../data/content.js'
import { fadeUp, stagger } from '../lib/motion.js'
import './CommercialSystem.css'

// Step-8 visual: the connected commercial system, readable by non-technical
// recruiters. A vertical chain (demand → revenue → retention loop) with two
// parallel lanes (distribution, measurement) alongside.
export default function CommercialSystem() {
  const { eyebrow, title, lead, chain, lanes } = commercialSystem

  return (
    <section className="csys container" aria-label="How the commercial system connects">
      <motion.div className="genres__head" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.6 }}>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        <p className="csys__lead">{lead}</p>
      </motion.div>

      <div className="csys__grid">
        <motion.ol className="csys__chain" variants={stagger(0.07)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.15 }}>
          {chain.map((c, i) => (
            <motion.li key={c.step} className="csys__node" variants={fadeUp}>
              <span className="csys__no" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{c.step}</h3>
                <p>{c.desc}</p>
              </div>
              {i < chain.length - 1 && <span className="csys__arrow" aria-hidden="true">↓</span>}
            </motion.li>
          ))}
        </motion.ol>

        <div className="csys__lanes">
          {lanes.map((l) => (
            <motion.aside key={l.name} className="csys__lane" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
              <span className="csys__lane-label">Running alongside</span>
              <h3>{l.name}</h3>
              <p>{l.desc}</p>
            </motion.aside>
          ))}
        </div>
      </div>
    </section>
  )
}
