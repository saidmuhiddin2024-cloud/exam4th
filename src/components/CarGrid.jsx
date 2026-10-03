import { useTranslation } from 'react-i18next'
import CarCard from './CarCard'
import Loader from './Loader'

export default function CarGrid({ cars, loading, error }) {
  const { t } = useTranslation()

  if (loading) return <Loader />
  if (error) return <p className="py-10 text-center text-brand">{t('browser.loadError')}</p>
  if (!cars.length) return <p className="py-10 text-center text-neutral-500">{t('browser.empty')}</p>

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </div>
  )
}
