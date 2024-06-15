import Link from 'next/link'
import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Stack } from '@/components/bootstrap/bootstrap'
import styles from '../page.module.css'
import rootStyles from '../rootStyles.module.css'

export default async function Imprint({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'general')

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack className={styles.text}>
          <h1>{t('imprint.title')}</h1>

          <h4>{t('imprint.contact.title')}</h4>
          <p>{t('imprint.contact.text')}</p>
          <h4>{t('imprint.webdesign.title')}</h4>
          <p>
            {t('imprint.webdesign.text')} <br></br>
            <Link
              className={styles.hrefWrapper}
              href={t('imprint.webdesign.link')}
            >
              {t('imprint.webdesign.href')}
            </Link>
          </p>
          <h4>{t('imprint.photos.title')}</h4>
          <p>{t('imprint.photos.text')}</p>
        </Stack>
      </div>
    </main>
  )
}
