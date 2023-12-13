import { Header } from '@/components/header/header'
import styles from './page.module.css'
import { ExperienceOverviewArticle } from '@/components/experiences/experiences-large'
import { useMemo } from 'react'

export type PageParams = {
  lang: string
  experience?: string
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
      case 'fake_investigation':
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
