import { Header } from '@/components/header/header'
import rootStyles from '../page.module.css'
import styles from './page.module.css'
import { Metadata, ResolvingMetadata } from 'next'
import { getTranslation } from '@/localization/i18n'

export type PageParams = {
  lang: string
  id?: string
}

export async function generateMetadata(
  { params }: { params: PageParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = params
  const { t } = await getTranslation(lang, 'getting-informed', {
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
      url: 'https://www.toxicleadershipvent.com/getting-informed',
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

export default function GettingInformedLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: PageParams
}) {
  return (
    <>
      <Header language={params.lang} color={'#FF9472'} lightColor={'#f7b7a3'} />
      <section className={`${rootStyles.page} ${styles.page}`}>
        {children}
      </section>
    </>
  )
}
