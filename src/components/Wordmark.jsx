import { profile } from '../data/content.js'

// The Anika wordmark — red, condensed, uppercase. Used in the intro, navbar and footer.
export default function Wordmark({ className = '', style }) {
  return (
    <span className={`wordmark ${className}`} style={style}>
      {profile.firstName} {profile.lastName}
    </span>
  )
}
