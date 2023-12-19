import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Stack } from '@/components/bootstrap/bootstrap'
import styles from '../page.module.css'

export default async function Imprint({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'general')

  return (
    <main className={styles.main}>
      <Stack className={styles.text}>
        <h1 className={styles.title}>{t('imprint.title')}</h1>

        <h4>{t('imprint.contact.title')}</h4>
        <p>{t('imprint.contact.text')}</p>
        <h4>{t('imprint.webdesign.title')}</h4>
        <p>{t('imprint.webdesign.text')}</p>
        <h4>{t('imprint.photos.title')}</h4>
        <p>{t('imprint.photos.text')}</p>
      </Stack>
    </main>
  )
}
