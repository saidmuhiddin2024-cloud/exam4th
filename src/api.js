export const API = import.meta.env.VITE_API_URL || 'http://localhost:3001'

export const request = async (path, options) => {
  const response = await fetch(API + path, options)
  if (!response.ok) throw new Error(response.status)
  return response.json()
}
