import { useTranslation } from 'react-i18next'
import images from '../assets'
import useFetch from '../hooks/useFetch'
import Container from './Container'

export default function Blog() {
  const { t } = useTranslation()
  const { data } = useFetch('/blog')

  return (
    <Container className="py-8">
      <div className="mb-6 flex items-center gap-4">
        <h2 className="text-2xl font-bold md:text-3xl">{t('blog.title')}</h2>
        <span className="rounded bg-brand px-3 py-1 text-xs text-white">{t('blog.all')}</span>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((post) => (
          <article key={post.id}>
            <img src={images.blog} alt="" className="h-40 w-full rounded-2xl object-cover" />
            <p className="mt-2 text-[11px] text-neutral-400">
              {post.day} {t(`months.${post.month}`)}
            </p>
            <h3 className="text-xs font-bold">{t('blog.post')}</h3>
          </article>
        ))}
      </div>
    </Container>
  )
}
