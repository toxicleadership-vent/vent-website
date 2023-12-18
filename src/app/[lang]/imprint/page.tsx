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
        <p>{t('imprint.contact')}</p>
      </Stack>
    </main>
  )
}
