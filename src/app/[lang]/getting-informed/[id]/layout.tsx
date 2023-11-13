import { Header } from '@/components/header/header'
import styles from './page.module.css'
import GettingInformedOverview from '@/components/getting-informed-overview/getting-informed-overview'

export type PageParams = {
  lang: string
  id?: string
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
