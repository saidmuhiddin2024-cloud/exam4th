import { useTranslation } from 'react-i18next'
import CarBrowser from '../components/CarBrowser'
import Calculator from '../components/Calculator'
import Blog from '../components/Blog'
import SeoText from '../components/SeoText'

export default function Used() {
  const { t } = useTranslation()

  return (
    <>
      <CarBrowser type="used" title={t('pages.used')} />
      <Calculator price={850000} />
      <Blog />
      <SeoText />
    </>
  )
}
