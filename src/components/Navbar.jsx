import { useEffect, useState } from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import ALogo from './ALogo.jsx'
import './Navbar.css'

const links = [
  { to: '/browse', label: 'Home' },
  { to: '/professional', label: 'Professional' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/achievements', label: 'Awards' },
  { to: '/hire-me', label: 'Hire Me' },
  { to: '/ask-anika', label: 'Ask Me' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="nav__inner container">
        <Link to="/browse" className="nav__brand" aria-label="Home">
          <ALogo size={34} className="nav__logo" />
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/browse'} className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}>
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="nav__profile"
          aria-label="Switch profile"
          onClick={() => navigate('/who')}
        >
          <ALogo size={30} alt="" />
        </button>

        <button className={`nav__burger ${open ? 'is-open' : ''}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span /><span /><span />
        </button>
      </div>

      <div className={`nav__drawer ${open ? 'is-open' : ''}`}>
        {links.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.to === '/browse'} className={({ isActive }) => `nav__drawerlink ${isActive ? 'is-active' : ''}`} onClick={() => setOpen(false)}>
            {l.label}
          </NavLink>
        ))}
        <button className="btn btn--ghost nav__drawerswitch" onClick={() => { setOpen(false); navigate('/who') }}>Switch profile</button>
      </div>
    </header>
  )
}
