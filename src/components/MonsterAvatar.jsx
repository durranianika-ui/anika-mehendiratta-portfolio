/**
 * Original furry-square profile character — solid colour tile with a fuzzy
 * (fur-like) edge/texture, black eyes with glint, sparkle dots and a smile.
 * Pure SVG: crisp at any size, no photo, no letters, no human face.
 */
function darken(hex, amt = 0.75) {
  const n = parseInt(hex.replace('#', ''), 16)
  const r = Math.max(0, Math.round(((n >> 16) & 255) * amt))
  const g = Math.max(0, Math.round(((n >> 8) & 255) * amt))
  const b = Math.max(0, Math.round((n & 255) * amt))
  return `rgb(${r},${g},${b})`
}
function lighten(hex, amt = 1.18) {
  const n = parseInt(hex.replace('#', ''), 16)
  const c = (v) => Math.min(255, Math.round(v * amt))
  return `rgb(${c((n >> 16) & 255)},${c((n >> 8) & 255)},${c(n & 255)})`
}

export default function MonsterAvatar({ color = '#29b6d8', size = 100, radius = 12, seed = 3, className = '', title = '' }) {
  const uid = `m${seed}${color.replace('#', '')}`
  const dark = darken(color, 0.72)
  const light = lighten(color, 1.16)
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 120 120"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id={`${uid}-clip`}>
          <rect x="8" y="8" width="104" height="104" rx={radius} />
        </clipPath>
        {/* fuzzy fur edges + texture */}
        <filter id={`${uid}-fur`} x="-15%" y="-15%" width="130%" height="130%">
          <feTurbulence type="fractalNoise" baseFrequency="0.045 0.12" numOctaves="2" seed={seed} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="11" xChannelSelector="R" yChannelSelector="G" />
        </filter>
        <filter id={`${uid}-tex`}>
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" seed={seed + 5} result="t" />
          <feColorMatrix in="t" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.5 0" />
        </filter>
      </defs>

      {/* furry body */}
      <g filter={`url(#${uid}-fur)`}>
        <rect x="10" y="10" width="100" height="100" rx={radius} fill={color} />
        {/* fur strands: light + dark streaks for texture */}
        <g stroke={light} strokeWidth="2.4" strokeLinecap="round" opacity="0.5">
          <path d="M24 24 l4 10 M40 20 l3 12 M58 22 l2 11 M76 20 l4 12 M92 26 l3 10 M28 92 l4 -11 M50 96 l2 -12 M72 94 l3 -11 M90 90 l4 -10" />
        </g>
        <g stroke={dark} strokeWidth="2.4" strokeLinecap="round" opacity="0.5">
          <path d="M32 28 l3 10 M48 24 l2 11 M66 26 l3 10 M84 24 l3 11 M20 60 l11 3 M100 58 l-11 3 M36 88 l3 -10 M60 92 l2 -11 M82 90 l3 -10" />
        </g>
      </g>

      {/* face (crisp, on top) */}
      <g clipPath={`url(#${uid}-clip)`}>
        {/* eyes */}
        <ellipse cx="47" cy="56" rx="11" ry="12" fill="#111" />
        <ellipse cx="73" cy="56" rx="11" ry="12" fill="#111" />
        <circle cx="43.5" cy="51.5" r="3.4" fill="#fff" />
        <circle cx="69.5" cy="51.5" r="3.4" fill="#fff" />
        {/* sparkle / tear dots */}
        <circle cx="34" cy="66" r="2.1" fill="#fff" opacity="0.9" />
        <circle cx="30" cy="72" r="1.4" fill="#fff" opacity="0.8" />
        <circle cx="86" cy="66" r="2.1" fill="#fff" opacity="0.9" />
        <circle cx="90" cy="72" r="1.4" fill="#fff" opacity="0.8" />
        {/* smile */}
        <path d="M42 78 Q60 96 78 78" fill="none" stroke="#111" strokeWidth="6" strokeLinecap="round" />
      </g>
    </svg>
  )
}
