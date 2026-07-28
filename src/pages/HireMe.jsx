import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { profile, hireMe } from '../data/content.js'
import { pageTransition, fadeUp, stagger } from '../lib/motion.js'
import Footer from '../components/Footer.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './HireMe.css'

export default function HireMe() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const sound = useSound()

  const mailto = () => {
    const subject = encodeURIComponent(`Opportunity for Anika — from ${form.name || 'a recruiter'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}${form.email ? ` (${form.email})` : ''}`)
    return `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <motion.main {...pageTransition} className="page container hire">
      <header className="page-head">
        <span className="eyebrow">Let’s work together</span>
        <h1>Hire Anika</h1>
        <p className="page-lead">{hireMe.valueProp}</p>
      </header>

      <div className="hire__grid">
        <div className="hire__left">
          <motion.section className="hire__block glass" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }}>
            <h2>Target roles</h2>
            <ul className="hire__roles">
              {hireMe.targetRoles.map((r) => <li key={r}>{r}</li>)}
            </ul>
          </motion.section>

          <motion.div className="hire__facts" variants={stagger(0.08)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <motion.div className="hire__fact glass" variants={fadeUp}><span>Location</span><strong>{hireMe.location}</strong></motion.div>
            <motion.div className="hire__fact glass" variants={fadeUp}><span>Work arrangement</span><strong>{hireMe.arrangement}</strong></motion.div>
            <motion.div className="hire__fact glass" variants={fadeUp}><span>Industries</span><strong>{hireMe.industries.join(' · ')}</strong></motion.div>
          </motion.div>

          <motion.section className="hire__block glass" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
            <h2>Why Anika</h2>
            <ul className="hire__strengths">
              {hireMe.strengths.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </motion.section>
        </div>

        <motion.form
          className="hire__form glass"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          onSubmit={(e) => { e.preventDefault(); sound.play('click'); window.location.href = mailto() }}
        >
          <h2>Start a conversation</h2>
          <label><span>Name</span><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Your name" /></label>
          <label><span>Email</span><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="you@company.com" /></label>
          <label><span>Message</span><textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} placeholder="The role, the team, the opportunity…" /></label>
          <button type="submit" className="btn btn--primary">Compose email</button>
          <p className="hire__hint">Opens your email app — nothing is sent from this site.</p>
          <div className="hire__links">
            <a className="btn btn--ghost" href={profile.socials.LinkedIn} target="_blank" rel="noreferrer noopener">LinkedIn</a>
            <Link className="btn btn--ghost" to="/resume">Résumé</Link>
          </div>
        </motion.form>
      </div>

      <Footer />
    </motion.main>
  )
}
