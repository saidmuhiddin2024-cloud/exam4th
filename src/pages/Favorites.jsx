import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import useFetch from '../hooks/useFetch'
import { useFavorites } from '../context/FavoritesContext'
import Container from '../components/Container'
import CarGrid from '../components/CarGrid'
import FavTabs from '../components/FavTabs'
import SectionTitle from '../components/SectionTitle'

const TYPES = ['new', 'used', 'taxi']

export default function Favorites() {
  const { t } = useTranslation()
  const { ids } = useFavorites()
  const { data, loading, error } = useFetch('/cars')
  const [tab, setTab] = useState('new')

  const mine = useMemo(() => data.filter((car) => ids.includes(car.id)), [data, ids])
  const tabs = TYPES.map((key) => ({ key, label: t(`favorites.${key}`), count: mine.filter((c) => c.type === key).length }))

  return (
    <Container className="py-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 border-b border-soft pb-4">
        <div className="flex flex-wrap items-center gap-4">
          <SectionTitle as="h1" className="mb-0 md:text-5xl">
            {t('favorites.title')}
          </SectionTitle>
          <FavTabs tabs={tabs} active={tab} onChange={setTab} />
        </div>
        <p className="text-xs text-neutral-500">{t('favorites.count', { count: mine.length })}</p>
      </div>
      <SectionTitle>{t(`favorites.${tab}`)}</SectionTitle>
      <CarGrid cars={mine.filter((c) => c.type === tab)} loading={loading} error={error} />
    </Container>
  )
}
