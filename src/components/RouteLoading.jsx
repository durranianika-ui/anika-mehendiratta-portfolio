import Wordmark from './Wordmark.jsx'

// Route-level loading state — a subtle pulse of the wordmark.
export default function RouteLoading() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#0d0d0f' }} aria-live="polite" aria-busy="true">
      <div style={{ animation: 'routePulse 1.1s ease-in-out infinite' }}>
        <Wordmark style={{ fontSize: '1.4rem', letterSpacing: '0.1em' }} />
      </div>
      <style>{`@keyframes routePulse{0%,100%{opacity:.45}50%{opacity:1}}`}</style>
    </div>
  )
}
