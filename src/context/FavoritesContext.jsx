import { createContext, useContext, useEffect, useState } from 'react'

const FavoritesContext = createContext(null)

export const FavoritesProvider = ({ children }) => {
  const [ids, setIds] = useState(() => JSON.parse(localStorage.getItem('favorites') || '[]'))

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(ids))
  }, [ids])

  const toggle = (id) => setIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  const has = (id) => ids.includes(id)

  return <FavoritesContext.Provider value={{ ids, toggle, has }}>{children}</FavoritesContext.Provider>
}

export const useFavorites = () => useContext(FavoritesContext)
