import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import images from '../assets'
import Hero from '../components/Hero'
import Programs from '../components/Programs'
import Calculator from '../components/Calculator'
import Banner from '../components/Banner'
import Reviews from '../components/Reviews'
import Container from '../components/Container'
import SectionTitle from '../components/SectionTitle'
import LeadForm from '../components/LeadForm'

const TABS = [
  { key: 'credit', label: 'pages.tabCredit' },
  { key: 'trade-in', label: 'pages.tabTradeIn' }
]

export default function Credit() {
  const { t } = useTranslation()
  const [tab, setTab] = useState('credit')

  return (
    <>
      <Hero title={t('pages.creditHeroTitle')} subtitle={t('pages.creditHeroSubtitle')} image={images.hero} source="credit-hero" />
      <Programs title={t('pages.creditPrograms')} />
      <Calculator price={1800000} />
      <Container className="py-8">
        <SectionTitle>{t('pages.creditApplication')}</SectionTitle>
        <div className="mb-4 flex gap-2">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`rounded-full px-4 py-1 text-xs font-bold ${tab === key ? 'bg-brand text-white' : 'bg-soft'}`}
            >
              {t(label)}
            </button>
          ))}
        </div>
        <div className="rounded-2xl bg-soft p-5">
          <LeadForm source={`credit-${tab}`} label={t('form.getBest')} />
        </div>
      </Container>
      <Banner />
      <Reviews />
    </>
  )
}
