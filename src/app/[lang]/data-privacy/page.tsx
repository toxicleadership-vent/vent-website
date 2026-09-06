import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Stack } from '@/components/bootstrap/bootstrap'
import styles from './page.module.css'
import DataPrivacyContent from './data-privacy-content'
import rootStyles from '../rootStyles.module.css'

export default async function Imprint(props: { params: Promise<PageParams> }) {
  const params = await props.params;
  const { t } = await getTranslation(params.lang, 'general')

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack className={styles.text}>
          <DataPrivacyContent />
        </Stack>
      </div>
    </main>
  )
}
