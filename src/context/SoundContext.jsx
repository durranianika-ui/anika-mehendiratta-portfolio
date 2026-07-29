import { createContext, useContext, useEffect, useMemo, useRef, useState, useCallback } from 'react'

/* ------------------------------------------------------------------
   Original, license-free sound layer built on the Web Audio API.
   Nothing is sampled or copyrighted — every cue is synthesised.
   Muted until the user enables it; preference persisted; tab-aware.
------------------------------------------------------------------ */

const SoundCtx = createContext(null)

function makeEngine() {
  let ctx = null
  let master = null
  let ambient = null

  const ensure = () => {
    if (ctx) return ctx
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    ctx = new AC()
    master = ctx.createGain()
    master.gain.value = 0.9
    master.connect(ctx.destination)
    return ctx
  }

  const now = () => ctx.currentTime

  const tone = ({ freq = 440, type = 'sine', dur = 0.12, vol = 0.04, glideTo = null, delay = 0 }) => {
    if (!ctx) return
    const t = now() + delay
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t)
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t + dur)
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(vol, t + 0.012)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    osc.connect(g).connect(master)
    osc.start(t)
    osc.stop(t + dur + 0.02)
  }

  const noiseSwoosh = ({ dur = 0.5, vol = 0.05, from = 300, to = 2400 }) => {
    if (!ctx) return
    const t = now()
    const buffer = ctx.createBuffer(1, ctx.sampleRate * dur, ctx.sampleRate)
    const data = buffer.getChannelData(0)
    for (let i = 0; i < data.length; i++) data[i] = Math.random() * 2 - 1
    const src = ctx.createBufferSource()
    src.buffer = buffer
    const bp = ctx.createBiquadFilter()
    bp.type = 'bandpass'
    bp.Q.value = 0.8
    bp.frequency.setValueAtTime(from, t)
    bp.frequency.exponentialRampToValueAtTime(to, t + dur)
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(vol, t + dur * 0.3)
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur)
    src.connect(bp).connect(g).connect(master)
    src.start(t)
    src.stop(t + dur)
  }

  const cues = {
    hover: () => tone({ freq: 720, type: 'sine', dur: 0.07, vol: 0.025, glideTo: 900 }),
    click: () => { tone({ freq: 520, type: 'triangle', dur: 0.06, vol: 0.04 }); tone({ freq: 320, type: 'sine', dur: 0.09, vol: 0.03, delay: 0.02 }) },
    select: () => { [523, 659, 784, 1046].forEach((f, i) => tone({ freq: f, type: 'sine', dur: 0.16, vol: 0.045, delay: i * 0.07 })) },
    transition: () => noiseSwoosh({ dur: 0.45, vol: 0.04, from: 400, to: 2600 }),
    play: () => { tone({ freq: 180, type: 'sine', dur: 0.18, vol: 0.05, glideTo: 320 }); tone({ freq: 540, type: 'triangle', dur: 0.12, vol: 0.02, delay: 0.03 }) },
    modalOpen: () => tone({ freq: 300, type: 'sine', dur: 0.2, vol: 0.04, glideTo: 620 }),
    modalClose: () => tone({ freq: 620, type: 'sine', dur: 0.18, vol: 0.035, glideTo: 260 }),
    ident: () => {
      // Cinematic startup ident: deep sub, low impact, rising bloom, wide shimmer chord.
      tone({ freq: 42, type: 'sine', dur: 1.8, vol: 0.09, glideTo: 58 })          // sub bass
      tone({ freq: 84, type: 'sine', dur: 1.6, vol: 0.05, glideTo: 112 })         // low body
      noiseSwoosh({ dur: 0.5, vol: 0.06, from: 60, to: 900 })                     // impact whoosh
      noiseSwoosh({ dur: 1.2, vol: 0.045, from: 300, to: 3400 })                  // rising air
      tone({ freq: 220, type: 'triangle', dur: 0.9, vol: 0.03, glideTo: 330, delay: 0.15 })
      // shimmer chord (A major-ish) blooming in
      ;[440, 554, 659, 880, 1319].forEach((f, i) => tone({ freq: f, type: 'sine', dur: 0.7, vol: 0.028, delay: 0.85 + i * 0.05 }))
    },
  }

  const startAmbient = () => {
    if (!ctx || ambient) return
    const t = now()
    const g = ctx.createGain()
    g.gain.setValueAtTime(0.0001, t)
    g.gain.exponentialRampToValueAtTime(0.02, t + 3)
    const lp = ctx.createBiquadFilter()
    lp.type = 'lowpass'
    lp.frequency.value = 520
    // slow LFO on gain for a breathing pad
    const lfo = ctx.createOscillator()
    const lfoGain = ctx.createGain()
    lfo.frequency.value = 0.06
    lfoGain.gain.value = 0.01
    lfo.connect(lfoGain).connect(g.gain)
    const voices = [55, 82.5, 110, 164.8].map((f, i) => {
      const o = ctx.createOscillator()
      o.type = i % 2 ? 'sine' : 'triangle'
      o.frequency.value = f
      o.detune.value = (i - 1.5) * 6
      o.connect(lp)
      o.start(t)
      return o
    })
    lp.connect(g).connect(master)
    lfo.start(t)
    ambient = { g, voices, lfo, lp }
  }

  const stopAmbient = () => {
    if (!ctx || !ambient) return
    const t = now()
    ambient.g.gain.cancelScheduledValues(t)
    ambient.g.gain.setValueAtTime(ambient.g.gain.value, t)
    ambient.g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2)
    const a = ambient
    ambient = null
    setTimeout(() => { try { a.voices.forEach((o) => o.stop()); a.lfo.stop() } catch { /* noop */ } }, 1400)
  }

  return {
    resume: () => { const c = ensure(); if (c && c.state === 'suspended') c.resume(); return !!c },
    suspend: () => { if (ctx && ctx.state === 'running') ctx.suspend() },
    play: (name) => { try { ensure(); if (ctx && ctx.state !== 'running') ctx.resume(); cues[name]?.() } catch { /* noop */ } },
    startAmbient,
    stopAmbient,
    get raw() { return ctx },
  }
}

export function SoundProvider({ children }) {
  const engineRef = useRef(null)
  if (!engineRef.current && typeof window !== 'undefined') engineRef.current = makeEngine()

  const [enabled, setEnabled] = useState(() => {
    try { return localStorage.getItem('soundEnabled') === '1' } catch { return false }
  })

  const play = useCallback((name) => {
    if (!enabled) return
    engineRef.current?.play(name)
  }, [enabled])

  const enable = useCallback(() => {
    const e = engineRef.current
    if (!e) return
    e.resume()
    e.startAmbient()
    setEnabled(true)
    try { localStorage.setItem('soundEnabled', '1') } catch { /* noop */ }
  }, [])

  const toggle = useCallback(() => {
    const e = engineRef.current
    if (!e) return
    if (enabled) {
      e.stopAmbient()
      setEnabled(false)
      try { localStorage.setItem('soundEnabled', '0') } catch { /* noop */ }
    } else {
      e.resume(); e.startAmbient(); e.play('click')
      setEnabled(true)
      try { localStorage.setItem('soundEnabled', '1') } catch { /* noop */ }
    }
  }, [enabled])

  // Re-arm ambient if the user had it enabled from a previous session (needs a gesture to actually sound)
  useEffect(() => {
    if (!enabled) return
    const arm = () => { engineRef.current?.resume(); engineRef.current?.startAmbient() }
    window.addEventListener('pointerdown', arm, { once: true })
    window.addEventListener('keydown', arm, { once: true })
    return () => { window.removeEventListener('pointerdown', arm); window.removeEventListener('keydown', arm) }
  }, [enabled])

  // Pause ambient when tab hidden
  useEffect(() => {
    const onVis = () => {
      const e = engineRef.current
      if (!e) return
      if (document.hidden) e.suspend()
      else if (enabled) e.resume()
    }
    document.addEventListener('visibilitychange', onVis)
    return () => document.removeEventListener('visibilitychange', onVis)
  }, [enabled])

  // One-shot cue that always plays on a user gesture (no global toggle, no ambient)
  const playOnce = useCallback((name) => { engineRef.current?.play(name) }, [])

  const value = useMemo(() => ({ enabled, play, playOnce, enable, toggle }), [enabled, play, playOnce, enable, toggle])
  return <SoundCtx.Provider value={value}>{children}</SoundCtx.Provider>
}

export function useSound() {
  return useContext(SoundCtx) || { enabled: false, play: () => {}, playOnce: () => {}, enable: () => {}, toggle: () => {} }
}
