import { Header } from '@/components/header/header'
import { PageParams } from '../layout'
import rootStyles from '../page.module.css'
import styles from './page.module.css'
import { ResolvingMetadata, Metadata } from 'next'
import meta from '@/components/survey/question.stories'

export async function generateMetadata(
  { params }: { params: PageParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = params
  const metadataCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/contact?locale=${lang}&populate[metadata][populate]=*`)
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

export default function ContactLayout({
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
