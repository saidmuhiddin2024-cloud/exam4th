import { useTranslation } from 'react-i18next'
import images from '../assets'
import Container from './Container'
import LeadForm from './LeadForm'

export default function Banner() {
  const { t } = useTranslation()

  return (
    <Container className="py-8">
      <section className="grid items-center gap-6 overflow-hidden rounded-3xl bg-[#252525] p-6 text-white md:grid-cols-[1fr_2fr] md:p-10">
        <img src={images.glove} alt="" className="mx-auto max-h-56 object-contain" />
        <div>
          <h2 className="text-2xl font-bold uppercase">{t('banner.title')}</h2>
          <p className="mb-4 mt-1 text-sm">
            {t('banner.pre')} <span className="text-brand">{t('banner.highlight')}</span> {t('banner.post')}
          </p>
          <LeadForm source="banner" withName={false} />
        </div>
      </section>
    </Container>
  )
}
