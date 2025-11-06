import Link from 'next/link'
import { PageParams } from '../layout'
import { Stack } from '@/components/bootstrap/bootstrap'
import styles from '../page.module.css'
import rootStyles from '../rootStyles.module.css'

export default async function Imprint({ params }: { params: PageParams }) {
  const imprintCopy = await fetch(
    `https://typical-dogs-185f9ff416.strapiapp.com/api/impressum?locale=${params.lang}&populate=*`
  )
  const { data: imprint } = await imprintCopy.json()

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack className={styles.text}>
          <h1>{imprint.title}</h1>

          <h4>{imprint.contact.title}</h4>
          <p>{imprint.contact.text}</p>
          <h4>{imprint.webdesign.title}</h4>
          <p>
            {imprint.webdesign.text} <br></br>
            <Link className={styles.hrefWrapper} href={imprint.webdesign.link}>
              {imprint.webdesign.href}
            </Link>
          </p>
          <h4>{imprint.photos.title}</h4>
          <p>{imprint.photos.text}</p>
        </Stack>
      </div>
    </main>
  )
}
