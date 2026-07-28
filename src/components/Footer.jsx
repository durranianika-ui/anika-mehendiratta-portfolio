import { Link } from 'react-router-dom'
import { profile } from '../data/content.js'
import Wordmark from './Wordmark.jsx'
import './Footer.css'

export default function Footer() {
  const year = 2026 // static to avoid layout-shift; update as you like
  const socials = Object.entries(profile.socials).filter(([, v]) => v)

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <Wordmark className="footer__mark" />
        </div>

        <nav className="footer__links" aria-label="Footer">
          <Link to="/browse">Home</Link>
          <Link to="/professional">Professional</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/resume">Résumé</Link>
          <Link to="/hire-me">Hire Me</Link>
        </nav>

        <div className="footer__socials">
          {socials.map(([k, v]) => (
            <a key={k} href={v} target="_blank" rel="noreferrer noopener">{k}</a>
          ))}
        </div>
      </div>
      <p className="footer__fine container">
        © {year} {profile.firstName} {profile.lastName}. An original portfolio — cinematic by design, not affiliated with any streaming service.
      </p>
    </footer>
  )
}
