import { Header } from '@/components/header/header'
import rootStyles from '../page.module.css'
import styles from './page.module.css'
import GettingInformedOverview from '@/components/getting-informed-overview/getting-informed-overview'

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
      <Header language={params.lang} color={'#FF9472'} lightColor={'#f7b7a3'} />
      <section className={`${rootStyles.page} ${styles.page}`}>
        {children}
      </section>
      <GettingInformedOverview lang={params.lang} />
    </>
  )
}
