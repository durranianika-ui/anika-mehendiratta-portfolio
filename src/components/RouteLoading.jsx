import ALogo from './ALogo.jsx'

// Route-level loading state — a subtle pulse of the A mark.
export default function RouteLoading() {
  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: '#0d0d0f' }} aria-live="polite" aria-busy="true">
      <div style={{ animation: 'routePulse 1.1s ease-in-out infinite', lineHeight: 0 }}>
        <ALogo size={44} />
      </div>
      <style>{`@keyframes routePulse{0%,100%{opacity:.45}50%{opacity:1}}`}</style>
    </div>
  )
}
