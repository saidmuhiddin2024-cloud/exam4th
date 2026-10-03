import { useTranslation } from 'react-i18next'
import images from '../assets'
import useFetch from '../hooks/useFetch'
import Container from './Container'
import Button from './Button'
import SectionTitle from './SectionTitle'

export default function Programs({ title, limit }) {
  const { t } = useTranslation()
  const { data } = useFetch('/programs')

  return (
    <Container className="py-8">
      <SectionTitle>{title || t('programs.title')}</SectionTitle>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {data.slice(0, limit).map((item) => (
          <article key={item.id} className="relative overflow-hidden rounded-2xl bg-soft p-5">
            <img src={images[item.image]} alt="" className="absolute inset-y-0 right-0 h-full w-1/2 object-cover" />
            <div className="relative">
              <h3 className="font-bold">{t(`programs.items.${item.key}.title`)}</h3>
              <p className="mb-6 text-xs text-neutral-500">{t(`programs.items.${item.key}.text`)}</p>
              <Button variant="light" className="bg-neutral-300 py-2">
                {t('programs.more')}
              </Button>
            </div>
          </article>
        ))}
      </div>
    </Container>
  )
}
