import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { money } from '../utils'
import Container from './Container'
import Button from './Button'

const Range = ({ label, value, min, max, step, unit, onChange }) => (
  <label className="block text-sm">
    <span className="flex justify-between">
      {label} <b>{unit(value)}</b>
    </span>
    <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} className="w-full accent-brand" />
  </label>
)

export default function Calculator({ price = 1500000 }) {
  const { t } = useTranslation()
  const [percent, setPercent] = useState(20)
  const [months, setMonths] = useState(24)
  const rate = 0.019 / 12
  const loan = price * (1 - percent / 100)
  const monthly = Math.round((loan * rate) / (1 - Math.pow(1 + rate, -months)))

  return (
    <Container className="py-8">
      <div className="grid items-center gap-6 rounded-2xl bg-[#252525] p-6 text-white md:grid-cols-[1fr_1fr_auto_auto]">
        <Range label={t('calc.deposit')} value={percent} min={0} max={80} step={5} unit={(v) => `${v}%`} onChange={setPercent} />
        <Range label={t('calc.term')} value={months} min={6} max={84} step={6} unit={(v) => `${v} ${t('calc.months')}`} onChange={setMonths} />
        <p className="text-xs">
          {t('calc.monthly')}
          <b className="block text-lg">
            {money(monthly)}
            {t('card.perMonth')}
          </b>
        </p>
        <Button>{t('calc.apply')}</Button>
      </div>
    </Container>
  )
}
