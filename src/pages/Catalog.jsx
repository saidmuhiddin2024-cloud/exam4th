import { useTranslation } from 'react-i18next'
import CarBrowser from '../components/CarBrowser'
import Banner from '../components/Banner'
import SeoText from '../components/SeoText'

export default function Catalog() {
  const { t } = useTranslation()

  return (
    <>
      <CarBrowser type="new" title={t('pages.catalog')} />
      <Banner />
      <SeoText />
    </>
  )
}
