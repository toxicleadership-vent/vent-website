import { Header } from '@/components/header/header'
import { PageParams } from '../layout'
import rootStyles from '../page.module.css'
import styles from './page.module.css'

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
