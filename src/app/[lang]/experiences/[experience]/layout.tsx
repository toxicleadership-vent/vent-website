import { Header } from '@/components/header/header'
import styles from './page.module.css'
import { ExperienceOverviewArticle } from '@/components/experiences/experiences-large'
import { useMemo } from 'react'
import { ResolvingMetadata, Metadata } from 'next'
import meta from '@/components/survey/question.stories'

export type PageParams = {
  lang: string
  experience?: string
}

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

export default function ExperiencesArticle({
  children,
  params,
}: {
  children: React.ReactNode
  params: PageParams
}) {
  const categories = useMemo(() => {
    switch (params?.experience) {
      case 'growth_over_culture':
      case 'friends_to_foes':
        return [0, 1]
      case 'squeezed_to_the_last_drop':
      case 'fake_investigation':
        return [0, 2]
      case 'just_move_him':
      case 'speak_up_become_the_next_target':
        return [1, 2]
    }
    return [0, 2]
  }, [params])

  return (
    <>
      <Header
        language={params.lang}
        color={!params?.experience ? '#3aa99c' : '#a2e4dd'}
        lightColor={!params?.experience ? '#a2e4dd' : '#3aa99c'}
      />
      <section className={`${styles.page}`}>{children}</section>
      <ExperienceOverviewArticle lang={params.lang} categories={categories} />
    </>
  )
}
