import { Header } from '@/components/header/header'
import styles from './page.module.css'
import GettingInformedOverview from '@/components/getting-informed-overview/getting-informed-overview'
import { getTranslation } from '@/localization/i18n'
import { ResolvingMetadata, Metadata } from 'next'

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
    keyPrefix: 'getting-informed.metadata',
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
      <Header
        language={params.lang}
        color={!params?.id ? '#FF9472' : '#98C1FF'}
        lightColor={!params?.id ? '#f7b7a3' : '#408CFF'}
      />
      <section className={`${styles.page}`}>{children}</section>
      <GettingInformedOverview lang={params.lang} />
    </>
  )
}
