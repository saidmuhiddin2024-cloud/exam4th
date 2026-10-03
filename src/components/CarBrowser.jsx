import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import useFetch from '../hooks/useFetch'
import Container from './Container'
import CarGrid from './CarGrid'
import Button from './Button'
import SectionTitle from './SectionTitle'

const PAGE = 6

export default function CarBrowser({ type, title }) {
  const { t } = useTranslation()
  const [params, setParams] = useSearchParams()
  const [visible, setVisible] = useState(PAGE)
  const { data: cars, loading, error } = useFetch(`/cars?type=${type}`)
  const { data: brands } = useFetch('/brands')

  const q = params.get('q') || ''
  const brand = params.get('brand') || ''
  const max = Number(params.get('max')) || 0
  const top = useMemo(() => Math.max(0, ...cars.map((c) => c.price)), [cars])

  const filtered = useMemo(
    () =>
      cars.filter(
        (c) =>
          (!brand || c.brand === brand) &&
          (!max || c.price <= max) &&
          (!q || `${c.name} ${c.engine}`.toLowerCase().includes(q.toLowerCase()))
      ),
    [cars, q, brand, max]
  )

  const update = (key, value) => {
    const next = new URLSearchParams(params)
    value ? next.set(key, value) : next.delete(key)
    setParams(next)
    setVisible(PAGE)
  }

  return (
    <Container className="py-8">
      <SectionTitle as="h1" className="md:text-5xl">
        {title}
      </SectionTitle>
      <div className="mb-8 grid gap-4 rounded-2xl bg-soft p-5 md:grid-cols-[1fr_auto]">
        <div className="flex flex-wrap gap-2">
          {brands.map((b) => (
            <button
              key={b}
              onClick={() => update('brand', b === brand ? '' : b)}
              className={`rounded-md px-3 py-1.5 text-sm ${b === brand ? 'bg-brand text-white' : 'bg-white hover:text-brand'}`}
            >
              {b}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-3 md:w-72">
          <input
            value={q}
            onChange={(e) => update('q', e.target.value)}
            placeholder={t('browser.search')}
            className="rounded-md bg-white px-4 py-2 outline-none"
          />
          {type !== 'taxi' && (
            <label className="text-sm">
              {t('browser.priceTo')}: <b>{max ? max.toLocaleString('ru-RU') : top.toLocaleString('ru-RU')} ₽</b>
              <input
                type="range"
                min="0"
                max={top}
                step="50000"
                value={max || top}
                onChange={(e) => update('max', Number(e.target.value) >= top ? '' : e.target.value)}
                className="w-full accent-brand"
              />
            </label>
          )}
          <Button onClick={() => setParams({})} variant="dark">
            {t('browser.reset')} ({filtered.length})
          </Button>
        </div>
      </div>
      <CarGrid cars={filtered.slice(0, visible)} loading={loading} error={error} />
      {visible < filtered.length && (
        <div className="mt-8 text-center">
          <Button onClick={() => setVisible(visible + PAGE)}>{t('browser.showMore')}</Button>
        </div>
      )}
    </Container>
  )
}
