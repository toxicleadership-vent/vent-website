import Link from 'next/link'
import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Stack } from '@/components/bootstrap/bootstrap'
import styles from '../page.module.css'
import rootStyles from '../rootStyles.module.css'
import {
  fetchImprintPage,
  generateLanguageStaticParams,
} from '@/utils/wordpress'

export async function generateStaticParams() {
  // Use the utility function for consistent language handling
  return generateLanguageStaticParams()
}

export default async function Imprint({ params }: { params: PageParams }) {
  // Fetch WordPress data using the utility function
  console.log('params', params)
  const imprint = await fetchImprintPage(params.lang)

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
            <Link
              className={styles.hrefWrapper}
              href={imprint.webdesign.link.url}
              target={imprint.webdesign.link.target}
            >
              {imprint.webdesign.link.title}
            </Link>
          </p>
          <h4>{imprint.photos.title}</h4>
          <p>{imprint.photos.text}</p>
        </Stack>
      </div>
    </main>
  )
}
