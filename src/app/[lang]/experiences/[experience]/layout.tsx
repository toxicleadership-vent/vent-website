import { Header } from '@/components/header/header'
import styles from './page.module.css'

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
  return (
    <>
      <Header
        language={params.lang}
        color={!params?.experience ? '#3aa99c' : '#a2e4dd'}
        lightColor={!params?.experience ? '#a2e4dd' : '#3aa99c'}
      />
      <section className={`${styles.page}`}>{children}</section>
    </>
  )
}
