import { Header } from '@/components/header/header'
import { PageParams } from '../layout'
import styles from './page.module.css'
import { getTranslation } from '@/localization/i18n'
import { ResolvingMetadata, Metadata } from 'next'

export async function generateMetadata(props: { params: Promise<PageParams> }, parent: ResolvingMetadata): Promise<Metadata> {
  const params = await props.params;
  const { lang } = params
  const { t } = await getTranslation(lang, 'experiences', {
    keyPrefix: 'metadata',
  })

  const robots = (await parent).robots?.basic
  const icons = (await parent).icons
  const keywords = (await parent).keywords

  return {
    title: t('title'),
    description: t('description'),
    robots,
    icons,
    openGraph: {
      type: 'website',
      url: 'https://www.toxicleadershipvent.com/experiences',
      description: t('description'),
      siteName: t('siteName'),
      images: t('image'),
    },
    twitter: {
      card: 'summary_large_image',
      site: '@evandyou',
      images: { url: t('image'), alt: t('siteName') },
      title: t('siteName'),
      description: t('description'),
    },
    keywords,
  }
}

export default async function ExperienceLayout(
  props: {
    children: React.ReactNode
    params: Promise<PageParams>
  }
) {
  const params = await props.params;

  const {
    // will be a page or nested layout
    children
  } = props;

  return (
    <>
      <Header language={params.lang} color="#3aa99c" lightColor="#a2e4dd" />
      <section className={styles.page}>{children}</section>
    </>
  )
}
