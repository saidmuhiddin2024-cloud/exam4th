import { useTranslation } from 'react-i18next'
import Container from './Container'
import LeadForm from './LeadForm'

export default function Hero({ title, subtitle, image, tone = 'bg-[#eeeeee]', source }) {
  const { t } = useTranslation()

  return (
    <Container className="pt-4">
      <section className={`relative overflow-hidden rounded-3xl ${tone}`}>
        <div className="grid items-center gap-4 p-6 md:grid-cols-2 md:p-12">
          <div>
            <h1 className="text-3xl font-bold leading-tight md:text-5xl">{title}</h1>
            <p className="mt-4 text-sm font-medium">{subtitle}</p>
          </div>
          <img src={image} alt={title} className="max-h-72 w-full object-contain" />
        </div>
        <div className="m-4 rounded-2xl bg-white p-5 shadow-md md:mx-12 md:mb-8">
          <p className="mb-3 font-bold">
            {t('hero.specialPrice')} <span className="ml-2 rounded-full bg-brand px-2 py-0.5 text-[10px] text-white">{t('hero.until')}</span>
          </p>
          <LeadForm source={source} />
        </div>
      </section>
    </Container>
  )
}
