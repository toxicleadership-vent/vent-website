import { Header } from '@/components/header/header'
import { PageParams } from '../layout'
import rootStyles from '../page.module.css'
import styles from './page.module.css'
import { ResolvingMetadata, Metadata } from 'next'

export async function generateMetadata(
  { params }: { params: PageParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = params
  const res = await fetch(
    `https://typical-dogs-185f9ff416.strapiapp.com/api/support?locale=${lang}&populate=metadata`
  )
  const { data } = await res.json()
  const metadata = data.metadata

  const robots = (await parent).robots?.basic
  const icons = (await parent).icons
  const keywords = (await parent).keywords

  return {
    title: metadata.title,
    description: metadata.description,
    robots,
    icons,
    openGraph: {
      type: 'website',
      url: 'https://www.toxicleadershipvent.com/support',
      description: metadata.description,
      siteName: metadata.siteName,
      images: metadata.image,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@evandyou',
      images: { url: metadata.image, alt: metadata.siteName },
      title: metadata.siteName,
      description: metadata.description,
    },
    keywords,
  }
}

export default function SupportLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: PageParams
}) {
  return (
    <>
      <Header language={params.lang} color={'#e1eef9'} lightColor={'#98c1ff'} />
      <section className={`${rootStyles.page} ${styles.page}`}>
        {children}
      </section>
    </>
  )
}
