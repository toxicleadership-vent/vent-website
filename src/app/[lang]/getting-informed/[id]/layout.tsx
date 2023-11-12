import { Header } from '@/components/header/header'
import styles from './page.module.css'

export type PageParams = {
  lang: string,
  id?: string,
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
      <Header language={params.lang} color={!params?.id ? '#FF9472' : '#98C1FF'} lightColor={'#f7b7a3'} />
      <section className={`${styles.page}`}>
        {children}
      </section>
    </>
  )
}
