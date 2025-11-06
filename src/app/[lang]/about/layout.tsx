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
  const metadataCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/about?&populate[metadata][populate]=*&locale=${lang}`)
  
  const {data : metadata} = await metadataCopy.json();

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
      url: 'https://www.toxicleadershipvent.com/getting-informed',
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

export default function AboutLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: PageParams
}) {
  return (
    <>
      <Header language={params.lang} color={'#98c1ff'} lightColor={'#408cff'} />
      <section className={`${rootStyles.page} ${styles.page}`}>
        {children}
      </section>
    </>
  )
}
