import { useTranslation } from 'react-i18next'
import images from '../assets'
import CarBrowser from '../components/CarBrowser'
import Hero from '../components/Hero'
import Calculator from '../components/Calculator'

export default function Taxi() {
  const { t } = useTranslation()

  return (
    <>
      <Hero
        title={t('pages.taxiHeroTitle')}
        subtitle={t('pages.taxiHeroSubtitle')}
        image={images.taxi}
        tone="bg-[#fcc800]"
        source="taxi-hero"
      />
      <CarBrowser type="taxi" title={t('pages.taxi')} />
      <Calculator price={1100000} />
    </>
  )
}
