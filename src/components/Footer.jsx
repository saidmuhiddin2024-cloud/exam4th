import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { NAV } from '../utils'
import useFetch from '../hooks/useFetch'
import Container from './Container'

const CREDIT_LINKS = ['express', 'family', 'first', 'tradein']

export default function Footer() {
  const { t } = useTranslation()
  const { data: brands } = useFetch('/brands')

  return (
    <footer className="mt-16 rounded-t-3xl bg-[#252525] text-white">
      <Container className="py-10">
        <nav className="flex flex-wrap justify-between gap-4 border-b border-white/10 pb-6 text-xs font-bold uppercase">
          {NAV.map((item) => (
            <Link key={item.to} to={item.to}>
              {t(`nav.${item.key}`)}
            </Link>
          ))}
        </nav>
        <div className="grid gap-8 py-8 text-xs text-white/60 md:grid-cols-3">
          <div>
            <p className="mb-3 font-bold uppercase text-white">{t('footer.catalog')}</p>
            <ul className="grid grid-cols-3 gap-2">
              {brands.map((brand) => (
                <li key={brand}>
                  <Link to={`/catalog?brand=${brand}`} className="underline hover:text-white">
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-bold uppercase text-white">{t('footer.credit')}</p>
            <ul className="space-y-2">
              {CREDIT_LINKS.map((key) => (
                <li key={key}>{t(`footer.${key}`)}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-3 font-bold uppercase text-white">{t('footer.contacts')}</p>
            <p>+7 (800) 551-94-31</p>
            <p>{t('footer.hours')}</p>
            <p>{t('footer.address')}</p>
          </div>
        </div>
      </Container>
      <div className="bg-[#1c1c1c] py-6 text-xs text-white/70">
        <Container>{t('footer.copyright')}</Container>
      </div>
    </footer>
  )
}
