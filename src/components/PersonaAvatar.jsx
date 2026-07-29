/**
 * Netflix-style flat profile avatar — a friendly character face on a solid
 * colour tile, with a small accessory per persona. Original artwork, pure SVG.
 */
function darken(hex, amt = 0.6) {
  const n = parseInt(String(hex).replace('#', ''), 16)
  const c = (v) => Math.max(0, Math.round(v * amt))
  return `rgb(${c((n >> 16) & 255)},${c((n >> 8) & 255)},${c(n & 255)})`
}

export default function PersonaAvatar({ variant = 'recruiter', color = '#22b8dd', size = 100, radius = 14, className = '' }) {
  const uid = `pa-${variant}`
  const eye = '#20140f'
  const dark = darken(color, 0.62)
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" role="img" aria-label={variant} xmlns="http://www.w3.org/2000/svg">
      <defs>
        <clipPath id={`${uid}-c`}><rect width="100" height="100" rx={radius} /></clipPath>
        <linearGradient id={`${uid}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={dark} />
        </linearGradient>
      </defs>
      <g clipPath={`url(#${uid}-c)`}>
        <rect width="100" height="100" fill={`url(#${uid}-g)`} />
        <rect width="100" height="100" fill="#fff" opacity="0.06" />

        {/* eyes */}
        {variant === 'stalker' ? (
          <>
            <ellipse cx="38" cy="46" rx="9" ry="11" fill="#fff" />
            <ellipse cx="62" cy="46" rx="9" ry="11" fill="#fff" />
            <circle cx="41" cy="48" r="4.4" fill={eye} />
            <circle cx="65" cy="48" r="4.4" fill={eye} />
            {/* raised brows */}
            <path d="M30 30 q8 -5 16 -1" stroke={eye} strokeWidth="3" fill="none" strokeLinecap="round" />
            <path d="M54 29 q8 -4 16 1" stroke={eye} strokeWidth="3" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <ellipse cx="37" cy="45" rx="6.5" ry="8.5" fill={eye} />
            <ellipse cx="63" cy="45" rx="6.5" ry="8.5" fill={eye} />
            <circle cx="34.6" cy="41.6" r="2.2" fill="#fff" />
            <circle cx="60.6" cy="41.6" r="2.2" fill="#fff" />
          </>
        )}

        {/* smile */}
        <path d={variant === 'stalker' ? 'M40 66 q10 6 20 0' : 'M34 63 q16 15 32 0'} stroke={eye} strokeWidth="5" fill="none" strokeLinecap="round" />

        {/* per-persona accessory */}
        {variant === 'recruiter' && (
          <g>
            {/* collar + tie */}
            <path d="M40 84 l10 7 10 -7" stroke="#0e1c2e" strokeWidth="4" fill="none" strokeLinejoin="round" />
            <path d="M50 86 l-5 7 5 9 5 -9 z" fill="#0e1c2e" />
          </g>
        )}
        {variant === 'marketing-manager' && (
          <g stroke="#fff" strokeWidth="3.4" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
            {/* rising trend + arrow head, top-right */}
            <path d="M68 34 l6 -6 6 6" />
            <path d="M74 28 v16" />
            <path d="M64 44 l6 -6 4 4 8 -9" opacity="0.7" />
          </g>
        )}
        {variant === 'hiring-manager' && (
          <g stroke="#20140f" strokeWidth="3" fill="none">
            {/* glasses */}
            <rect x="24" y="38" width="20" height="15" rx="7" />
            <rect x="56" y="38" width="20" height="15" rx="7" />
            <path d="M44 45 h12" />
          </g>
        )}
      </g>
    </svg>
  )
}
