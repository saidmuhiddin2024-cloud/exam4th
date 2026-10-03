import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useFetch from '../hooks/useFetch'
import Container from './Container'
import SectionTitle from './SectionTitle'

function Review() {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)

  return (
    <article className="overflow-hidden rounded-2xl bg-soft">
      <div className="flex h-44 items-center justify-center bg-[#252525]">
        <span className="flex size-12 items-center justify-center rounded-full bg-brand text-white">▶</span>
      </div>
      <div className="p-5">
        <h3 className="mb-2 text-sm font-bold">{t('reviews.author')}</h3>
        <p className={`text-xs text-neutral-500 ${open ? '' : 'line-clamp-4'}`}>{t('reviews.text')}</p>
        <button onClick={() => setOpen(!open)} className="mt-3 rounded-full bg-neutral-200 px-3 py-1 text-[11px] font-bold">
          {open ? t('reviews.less') : t('reviews.more')}
        </button>
      </div>
    </article>
  )
}

export default function Reviews() {
  const { t } = useTranslation()
  const { data } = useFetch('/reviews')

  return (
    <Container className="py-8">
      <SectionTitle>{t('reviews.title')}</SectionTitle>
      <div className="grid gap-5 md:grid-cols-3">
        {data.map((item) => (
          <Review key={item.id} />
        ))}
      </div>
    </Container>
  )
}
