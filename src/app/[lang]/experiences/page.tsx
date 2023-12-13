import styles from './page.module.css'
import { Stack } from '@/components/bootstrap/bootstrap'
import { PageParams } from '../layout'
import { getTranslation } from '@/localization/i18n'
import { ExperienceLarge } from '@/components/experiences/experiences-large'

export default async function Articles({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'experiences')

  return (
    <main className={styles.main}>
      <Stack className={styles.text}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p>{t('abstract')}</p>
        <small>{t('note')}</small>
      </Stack>
      <ExperienceLarge lang={params.lang} categories={[0, 1, 2]} />
    </main>
  )
}
