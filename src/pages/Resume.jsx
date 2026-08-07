import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { profile, summary, seasons, highlights, education, certifications, skillCollections } from '../data/content.js'
import { pageTransition } from '../lib/motion.js'
import Footer from '../components/Footer.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './Resume.css'

const ordered = [...seasons].sort((a, b) => b.season - a.season)

export default function Resume() {
  const [copied, setCopied] = useState(false)
  const sound = useSound()

  const download = () => {
    sound.play('click')
    if (profile.resumeFile) { window.open(profile.resumeFile, '_blank'); return }
    window.print() // browser "Save as PDF"
  }
  const copyLinkedIn = async () => {
    sound.play('click')
    try { await navigator.clipboard.writeText(profile.socials.LinkedIn); setCopied(true); setTimeout(() => setCopied(false), 1800) } catch { /* noop */ }
  }

  return (
    <motion.main {...pageTransition} className="page container resume">
      <header className="page-head resume__head">
        <div>
          <span className="eyebrow">Résumé</span>
          <h1>{profile.firstName} {profile.lastName}</h1>
          <p className="page-lead">{profile.title} · {profile.location}</p>
        </div>
        <div className="resume__actions">
          <button className="btn btn--accent" onClick={download}>Download PDF</button>
          <button className="btn btn--ghost" onClick={copyLinkedIn}>{copied ? 'Copied ✓' : 'Copy LinkedIn'}</button>
          <a className="btn btn--ghost" href={`mailto:${profile.email}`} onClick={() => sound.play('click')}>Email</a>
        </div>
      </header>

      <div className="resume__sheet">
        <section className="rsec">
          <h2>Summary</h2>
          <p>{summary}</p>
        </section>

        <section className="rsec">
          <h2>Career Snapshot</h2>
          <ul className="rsnapshot">
            {ordered.map((s) => (
              <li key={s.season}>
                <span className="rsnapshot__role">{s.title}</span>
                <span className="rsnapshot__org">{s.org}</span>
                <span className="rsnapshot__period">{s.period}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="rsec">
          <h2>Key Achievements</h2>
          <ul className="rwins">
            {highlights.map((h) => (
              <li key={h.rank}><strong>{h.stat}</strong> {h.headline} — {h.detail}</li>
            ))}
          </ul>
        </section>

        <section className="rsec">
          <h2>Core Skills</h2>
          <div className="rskills">
            {skillCollections.map((c) => (
              <div key={c.name}><h3>{c.name}</h3><p>{c.items.join(' · ')}</p></div>
            ))}
          </div>
        </section>

        <div className="rsec-row">
          <section className="rsec">
            <h2>Education</h2>
            <p><strong>{education.diploma.degree}</strong><br />{education.diploma.school}<br />{education.diploma.period}</p>
            <p><strong>{education.degree}</strong><br />{education.school}<br />{education.period}</p>
            <p className="rlang">{education.languages.map((l) => `${l.name} (${l.level})`).join(' · ')}<br />{education.extra}</p>
          </section>
          <section className="rsec">
            <h2>Certifications</h2>
            <ul className="rcerts">
              {certifications.filter((c) => c.provider !== 'In Progress').map((c) => (
                <li key={c.provider}><strong>{c.provider}:</strong> {c.items.join(', ')}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <div className="resume__foot no-print">
        <Link to="/professional" className="btn btn--ghost">Full timeline</Link>
        <Link to="/hire-me" className="btn btn--accent">Hire me</Link>
      </div>

      <Footer />
    </motion.main>
  )
}
