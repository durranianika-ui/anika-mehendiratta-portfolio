// The cinematic 3D "A" brand mark (provided asset). Reused across nav + profile.
const SRC = `${import.meta.env.BASE_URL}brand/a.png`

export default function ALogo({ size = 34, className = '', alt = 'Anika' }) {
  return <img className={`alogo ${className}`} src={SRC} alt={alt} width={size} height={size} draggable="false" />
}
