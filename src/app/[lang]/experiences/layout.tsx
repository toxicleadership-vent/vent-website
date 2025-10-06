import { Header } from '@/components/header/header'
import { PageParams } from '../layout'
import styles from './page.module.css'
import { ResolvingMetadata, Metadata } from 'next'
import meta from '@/components/survey/question.stories'

export async function generateMetadata(
  { params }: { params: PageParams },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = params
  const metadataCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/experience?locale=${lang}&populate[metadata][populate]=*`)
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
      url: 'https://www.toxicleadershipvent.com/experiences',
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

export default function ExperienceLayout({
  children, // will be a page or nested layout
  params,
}: {
  children: React.ReactNode
  params: PageParams
}) {
  return (
    <>
      <Header language={params.lang} color="#3aa99c" lightColor="#a2e4dd" />
      <section className={styles.page}>{children}</section>
    </>
  )
}
