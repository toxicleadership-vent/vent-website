import styles from './page.module.css'
import { Stack } from '@/components/bootstrap/bootstrap'
import { PageParams } from '../layout'
import { getTranslation } from '@/localization/i18n'
import { ExperienceLarge } from '@/components/experiences/experiences-large'
import rootStyles from '../rootStyles.module.css'

export default async function Articles({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'experiences')

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack>
          <h1>{t('title')}</h1>
          <p className="sectionIntro">{t('abstract')}</p>
        </Stack>
        <ExperienceLarge lang={params.lang} categories={[0, 1, 2]} />
      </div>
    </main>
  )
}
