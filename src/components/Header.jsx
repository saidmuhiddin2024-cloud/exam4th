import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import images from '../assets'
import { NAV } from '../utils'
import { useFavorites } from '../context/FavoritesContext'
import Container from './Container'
import Button from './Button'
import LanguageSwitcher from './LanguageSwitcher'

export default function Header() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [searching, setSearching] = useState(false)
  const { ids } = useFavorites()
  const navigate = useNavigate()

  const submit = (event) => {
    event.preventDefault()
    navigate(`/catalog?q=${encodeURIComponent(query.trim())}`)
    setSearching(false)
    setOpen(false)
  }

  const linkClass = ({ isActive }) => `text-xs font-bold uppercase ${isActive ? 'text-brand' : 'hover:text-brand'}`

  return (
    <header className="sticky top-0 z-30 bg-white shadow-sm">
      <Container className="flex items-center justify-between gap-4 py-3">
        <button className="text-2xl lg:hidden" onClick={() => setOpen(!open)} aria-label={t('header.menu')}>
          ☰
        </button>
        <Link to="/">
          <img src={images.logo} alt="ABC AUTO" className="h-10" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3 md:gap-4">
          <LanguageSwitcher />
          <div className="hidden text-right text-sm font-bold xl:block">
            <span className="text-brand">☎</span> +7 (800) 551-94-31
          </div>
          <Link to="/favorites" className="relative text-xl" aria-label={t('header.favorites')}>
            ♡
            {ids.length > 0 && (
              <span className="absolute -right-3 -top-2 rounded-full bg-brand px-1.5 text-[10px] text-white">{ids.length}</span>
            )}
          </Link>
          <button onClick={() => setSearching(!searching)} aria-label={t('header.search')} className="text-xl">
            ⌕
          </button>
          <Button className="hidden md:block">{t('header.callback')}</Button>
        </div>
      </Container>
      {searching && (
        <form onSubmit={submit} className="border-t border-soft py-3">
          <Container className="flex gap-2">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={t('header.searchPlaceholder')}
              className="flex-1 rounded-md bg-soft px-4 py-2 outline-none"
            />
            <Button>{t('header.find')}</Button>
          </Container>
        </form>
      )}
      {open && (
        <nav className="flex flex-col gap-4 border-t border-soft p-4 lg:hidden">
          {NAV.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass} onClick={() => setOpen(false)}>
              {t(`nav.${item.key}`)}
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  )
}
