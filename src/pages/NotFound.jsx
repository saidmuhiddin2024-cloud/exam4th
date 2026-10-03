import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '../components/Container'
import Button from '../components/Button'

export default function NotFound() {
  const { t } = useTranslation()

  return (
    <Container className="py-24 text-center">
      <h1 className="text-6xl font-bold text-brand">404</h1>
      <p className="my-4">{t('notFound.text')}</p>
      <Link to="/">
        <Button>{t('notFound.home')}</Button>
      </Link>
    </Container>
  )
}
