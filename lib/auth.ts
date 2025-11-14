export function getAuthData() {
  if (typeof window === 'undefined') return null
  const auth = localStorage.getItem('vestige_auth')
  return auth ? JSON.parse(auth) : null
}

export function getAuthToken() {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('vestige_token')
}

export function isAuthenticated() {
  if (typeof window === 'undefined') return false
  return !!localStorage.getItem('vestige_auth') && !!localStorage.getItem('vestige_token')
}

export function logout() {
  if (typeof window === 'undefined') return
  localStorage.removeItem('vestige_auth')
  localStorage.removeItem('vestige_token')
}
