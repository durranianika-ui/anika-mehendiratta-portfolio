import { useState, useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { askAnika, profile } from '../data/content.js'
import { pageTransition } from '../lib/motion.js'
import Footer from '../components/Footer.jsx'
import { useSound } from '../context/SoundContext.jsx'
import './AskAnika.css'

function answerFor(query) {
  const q = query.toLowerCase()
  let best = null
  let bestScore = 0
  for (const intent of askAnika.intents) {
    const score = intent.match.reduce((n, kw) => (q.includes(kw) ? n + 1 : n), 0)
    if (score > bestScore) { bestScore = score; best = intent }
  }
  if (best && bestScore > 0) return { text: best.answer, cite: best.cite, route: best.route }
  return { text: askAnika.fallback, cite: null, route: null }
}

export default function AskAnika() {
  const [messages, setMessages] = useState([
    { from: 'anika', text: askAnika.intro },
  ])
  const [input, setInput] = useState('')
  const endRef = useRef(null)
  const sound = useSound()

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' }) }, [messages])

  const ask = (query) => {
    const text = (query ?? input).trim()
    if (!text) return
    sound.play('click')
    const a = answerFor(text)
    setMessages((m) => [...m, { from: 'user', text }, { from: 'anika', ...a }])
    setInput('')
  }

  return (
    <motion.main {...pageTransition} className="page container ask">
      <header className="page-head">
        <span className="eyebrow">Portfolio assistant</span>
        <h1>Ask Anika</h1>
        <p className="page-lead">Answers come only from Anika’s CV — grounded, cited, never invented.</p>
      </header>

      <div className="ask__panel">
        <div className="ask__thread" role="log" aria-live="polite">
          {messages.map((m, i) => (
            <div key={i} className={`ask__msg ask__msg--${m.from}`}>
              {m.from === 'anika' && <span className="ask__avatar">A</span>}
              <div className="ask__bubble">
                <p>{m.text}</p>
                {m.route && (
                  <Link to={m.route} className="ask__cite" onClick={() => sound.play('click')}>
                    Source: {m.cite} ›
                  </Link>
                )}
              </div>
            </div>
          ))}
          <div ref={endRef} />
        </div>

        <div className="ask__suggests">
          {askAnika.suggestions.map((s) => (
            <button key={s} onClick={() => ask(s)} onMouseEnter={() => sound.play('hover')}>{s}</button>
          ))}
        </div>

        <form className="ask__form" onSubmit={(e) => { e.preventDefault(); ask() }}>
          <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about revenue, industries, tools, leadership…" aria-label="Ask a question" />
          <button type="submit" className="btn btn--accent">Ask</button>
        </form>
        <p className="ask__disclaimer">This assistant is a deterministic lookup over structured CV data — no external AI, no invented claims. For anything beyond the CV, <a href={`mailto:${profile.email}`}>email Anika</a>.</p>
      </div>

      <Footer />
    </motion.main>
  )
}
