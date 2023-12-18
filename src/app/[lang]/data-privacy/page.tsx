import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Stack } from '@/components/bootstrap/bootstrap'
import styles from './page.module.css'
import PrivacyMdx from './data-privacty.mdx'

export default async function Imprint({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'general')

  return (
    <main className={styles.main}>
      <Stack className={styles.text}>
        <PrivacyMdx></PrivacyMdx>
      </Stack>
    </main>
  )
}
