import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Stack } from '@/components/bootstrap/bootstrap'
import styles from './page.module.css'
import PrivacyMdx from './data-privacty.mdx'
import rootStyles from '../rootStyles.module.css'

export default async function Imprint({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'general')

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack className={styles.text}>
          <PrivacyMdx></PrivacyMdx>
        </Stack>
      </div>
    </main>
  )
}
