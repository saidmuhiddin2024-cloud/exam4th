import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import images from '../assets'
import { money } from '../utils'
import { useFavorites } from '../context/FavoritesContext'
import Button from './Button'

const usedSpecs = ['power', 'engine', 'drive', 'body', 'gearbox', 'mileage']

export default function CarCard({ car }) {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const { has, toggle } = useFavorites()
  const isTaxi = car.type === 'taxi'
  const isUsed = car.type === 'used'

  const specValue = {
    power: `${car.power} ${t('card.hp')}`,
    engine: `${car.engine} ${t('card.liter')}`,
    drive: t(`values.${car.drive}`),
    body: t(`values.${car.body}`),
    gearbox: t(`values.${car.gearbox}`),
    mileage: `${car.mileage} ${t('card.km')}`
  }

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white p-4 shadow-[0_4px_24px_rgba(0,0,0,0.1)]">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-base font-bold leading-tight">
          {car.name}
          {!isUsed && !isTaxi && <span className="block">{car.engine}</span>}
        </h3>
        <button onClick={() => toggle(car.id)} aria-label={t('card.favorite')} className={`text-xl ${has(car.id) ? 'text-brand' : ''}`}>
          {has(car.id) ? '♥' : '♡'}
        </button>
      </div>
      <img src={images[car.image]} alt={car.name} className="my-3 h-40 w-full object-contain" />
      {isUsed ? (
        <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-neutral-500">
          {usedSpecs.map((key) => (
            <div key={key}>
              {t(`card.${key}`)}: <b className="text-ink">{specValue[key]}</b>
            </div>
          ))}
        </dl>
      ) : (
        <ul className="space-y-1 text-xs">
          {car.perks.map((perk) => (
            <li key={perk}>
              <span className="text-brand">●</span> {t(`perks.${perk}`)}
            </li>
          ))}
        </ul>
      )}
      <p className="mt-4 text-xl font-bold">
        {t('card.from')} {isTaxi ? `${car.price} ₽${t('card.perDay')}` : money(car.price)}
        {!isTaxi && (
          <span className="ml-2 text-xs font-normal text-neutral-500">
            {t('card.from')} {money(car.credit)}
            {t('card.perMonth')}
          </span>
        )}
      </p>
      {open && <p className="mt-2 text-xs text-neutral-500">{t('card.inStock')}</p>}
      <div className="mt-auto grid grid-cols-2 gap-2 pt-4">
        <Button variant="light" onClick={() => setOpen(!open)}>
          {t('card.details')}
        </Button>
        <Button>{isTaxi ? t('card.request') : t('card.reserve')}</Button>
      </div>
    </article>
  )
}
