import Link from 'next/link'
import { PageParams } from '../layout'
import styles from '../page.module.css'

export default async function NotFound({
  params,
}: {
  params: { params: PageParams }
}) {
  return (
    <main className={styles.main}>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </main>
  )
}
