import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { seasons, summary, projects } from '../data/content.js'
import { pageTransition, fadeUp, stagger } from '../lib/motion.js'
import Footer from '../components/Footer.jsx'
import './Professional.css'

// newest role first for recruiter scanning
const ordered = [...seasons].sort((a, b) => b.season - a.season)
const relatedFor = (org) => projects.filter((p) => p.role?.includes(org)).slice(0, 3)

export default function Professional() {
  return (
    <motion.main {...pageTransition} className="page container prof">
      <header className="page-head">
        <span className="eyebrow">The career</span>
        <h1>Professional Experience</h1>
        <p className="page-lead">{summary}</p>
      </header>

      <ol className="timeline">
        {ordered.map((s) => {
          const related = relatedFor(s.org)
          return (
            <motion.li
              id={`season-${s.season}`}
              key={s.season}
              className="trole"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              <div className="trole__rail" aria-hidden="true"><span className="trole__dot" /></div>
              <div className="trole__card">
                <div className="trole__top">
                  <div>
                    <h2 className="trole__title">{s.title}</h2>
                    <p className="trole__org">{s.org}</p>
                  </div>
                  <div className="trole__when">
                    <span className="trole__period">{s.period}</span>
                    <span className="trole__place">{s.place}</span>
                  </div>
                </div>
                <p className="trole__logline">{s.logline}</p>

                <motion.ul className="trole__bullets" variants={stagger(0.05)}>
                  {s.episodes.map((ep) => (
                    <motion.li key={ep.n} variants={fadeUp}>
                      <strong>{ep.title}.</strong> {ep.desc}
                    </motion.li>
                  ))}
                </motion.ul>

                {related.length > 0 && (
                  <div className="trole__related">
                    <span className="trole__related-label">Related work</span>
                    {related.map((p) => (
                      <Link key={p.id} to={`/projects/${p.id}`} className="trole__chip">{p.title}</Link>
                    ))}
                  </div>
                )}
              </div>
            </motion.li>
          )
        })}
      </ol>

      <div className="prof__cta">
        <Link to="/achievements" className="btn btn--accent">See top achievements</Link>
        <Link to="/resume" className="btn btn--ghost">View résumé</Link>
      </div>

      <Footer />
    </motion.main>
  )
}
