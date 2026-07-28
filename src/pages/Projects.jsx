import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { projects } from '../data/content.js'
import { pageTransition } from '../lib/motion.js'
import Card from '../components/Card.jsx'
import Footer from '../components/Footer.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './Projects.css'

const categories = ['All', ...Array.from(new Set(projects.map((p) => p.category)))]

export default function Projects() {
  const [filter, setFilter] = useState('All')
  const sound = useSound()
  const list = useMemo(() => (filter === 'All' ? projects : projects.filter((p) => p.category === filter)), [filter])

  return (
    <motion.main {...pageTransition} className="page container projects">
      <header className="page-head">
        <span className="eyebrow">The catalogue</span>
        <h1>Projects & Case Studies</h1>
        <p className="page-lead">Real work, real numbers. Each title opens a full case study — challenge, strategy, execution and measurable impact.</p>
      </header>

      <div className="projects__filters" role="tablist" aria-label="Filter projects">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={filter === c}
            className={`pfilter ${filter === c ? 'is-active' : ''}`}
            onClick={() => { setFilter(c); sound.play('click') }}
            onMouseEnter={() => sound.play('hover')}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="projects__grid">
        {list.map((p, i) => (
          <Card key={p.id} project={p} index={i} />
        ))}
      </motion.div>

      <Footer />
    </motion.main>
  )
}
