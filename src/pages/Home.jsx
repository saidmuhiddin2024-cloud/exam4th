import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import images from '../assets'
import useFetch from '../hooks/useFetch'
import Hero from '../components/Hero'
import Container from '../components/Container'
import CarGrid from '../components/CarGrid'
import SectionTitle from '../components/SectionTitle'
import Programs from '../components/Programs'
import Banner from '../components/Banner'
import Reviews from '../components/Reviews'
import Blog from '../components/Blog'
import SeoText from '../components/SeoText'
import Button from '../components/Button'

export default function Home() {
  const { t } = useTranslation()
  const { data, loading, error } = useFetch('/cars?type=new&_limit=6')

  return (
    <>
      <Hero title={t('home.title')} subtitle={t('home.subtitle')} image={images.hero} source="home-hero" />
      <Container className="py-8">
        <SectionTitle className="text-center">{t('home.inStock')}</SectionTitle>
        <CarGrid cars={data} loading={loading} error={error} />
        <div className="mt-8 text-center">
          <Link to="/catalog">
            <Button>{t('home.showMore')}</Button>
          </Link>
        </div>
      </Container>
      <Programs />
      <Banner />
      <Reviews />
      <Blog />
      <SeoText />
    </>
  )
}
