import { Header } from '@/components/header/header'
import { PageParams } from '../layout'
import styles from './page.module.css'

export default function ExperienceLayout({
  children, // will be a page or nested layout
  params,
}: {
  children: React.ReactNode
  params: PageParams
}) {
  return (
    <>
      <Header language={params.lang} color="#3aa99c" lightColor='#a2e4dd'/>
      <section className={styles.page}>
        {/* Include shared UI here e.g. a header or sidebar */}
        {children}
      </section>
    </>
  )
}
