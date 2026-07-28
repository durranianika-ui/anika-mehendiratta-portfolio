import { useState } from 'react'

/**
 * Image that fades in once loaded and falls back to a branded gradient
 * if the source fails — so the UI never shows a broken image.
 */
export default function SmartImage({ src, alt = '', className = '', eager = false, ...rest }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(false)

  return (
    <span className={`smartimg ${loaded ? 'is-loaded' : ''} ${failed ? 'is-failed' : ''} ${className}`} aria-hidden={alt ? undefined : true}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          fetchpriority={eager ? 'high' : 'auto'}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
          {...rest}
        />
      )}
    </span>
  )
}
