import { useTranslation } from 'react-i18next'
import Container from './Container'

const lorem =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut dictum vitae. Sed ac mauris est. Nulla in feugiat ligula, sit volutpat lacus. Praesent mattis tortor nec arcu pellentesque.'

export default function SeoText() {
  const { t } = useTranslation()

  return (
    <Container className="py-8 text-xs text-neutral-500">
      <h2 className="mb-3 text-2xl font-bold text-ink">{t('seo.title')}</h2>
      <p>{lorem}</p>
      {[1, 2].map((n) => (
        <div key={n}>
          <h3 className="mb-2 mt-5 text-base font-bold text-ink">{t('seo.subtitle')}</h3>
          <p>{lorem}</p>
        </div>
      ))}
    </Container>
  )
}
