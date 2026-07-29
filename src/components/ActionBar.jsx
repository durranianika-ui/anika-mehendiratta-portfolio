import { Link } from 'react-router-dom'
import { profile } from '../data/content.js'
import { useSound } from '../context/SoundContext.jsx'
import './ActionBar.css'

/**
 * Persistent recruiter shortcuts. The ask is always one tap away:
 * bottom-pinned on mobile, a quiet floating cluster on desktop.
 */
export default function ActionBar() {
  const sound = useSound()
  const hover = () => sound.play('hover')

  return (
    <nav className="actionbar" aria-label="Quick actions">
      <Link to="/hire-me" className="actionbar__btn actionbar__btn--primary" onMouseEnter={hover} onClick={() => sound.play('play')}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        <span>Book</span>
      </Link>
      <a href={profile.resumeFile} download className="actionbar__btn" onMouseEnter={hover}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <span>CV</span>
      </a>
      <a href={profile.socials.LinkedIn} target="_blank" rel="noreferrer noopener" className="actionbar__btn" onMouseEnter={hover}>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM10 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.3c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21h-4z" /></svg>
        <span>LinkedIn</span>
      </a>
      <a href={profile.socials.Email} className="actionbar__btn actionbar__btn--email" onMouseEnter={hover} aria-label="Email">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M4 7l8 6 8-6" /></svg>
        <span>Email</span>
      </a>
    </nav>
  )
}
