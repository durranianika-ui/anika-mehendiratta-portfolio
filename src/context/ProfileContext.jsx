import { createContext, useContext, useState, useCallback, useMemo } from 'react'
import { audienceProfiles } from '../data/content.js'

const ProfileCtx = createContext(null)

// Persist selection in sessionStorage so a refresh keeps you in-portfolio for
// the same tab, but a new browser session replays the intro / re-asks.
const PROFILE_KEY = 'portfolioSelectedProfile'

export function ProfileProvider({ children }) {
  const [id, setId] = useState(() => {
    try { return sessionStorage.getItem(PROFILE_KEY) || null } catch { return null }
  })

  const setProfile = useCallback((pid) => {
    setId(pid)
    try { sessionStorage.setItem(PROFILE_KEY, pid) } catch { /* noop */ }
  }, [])

  const clearProfile = useCallback(() => {
    setId(null)
    try { sessionStorage.removeItem(PROFILE_KEY) } catch { /* noop */ }
  }, [])

  const profile = useMemo(() => audienceProfiles.find((p) => p.id === id) || null, [id])

  const value = useMemo(() => ({ id, profile, setProfile, clearProfile }), [id, profile, setProfile, clearProfile])
  return <ProfileCtx.Provider value={value}>{children}</ProfileCtx.Provider>
}

export function useProfile() {
  return useContext(ProfileCtx) || { id: null, profile: null, setProfile: () => {}, clearProfile: () => {} }
}
