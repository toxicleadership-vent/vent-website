import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Survey } from '@/components/survey/survey'
import styles from './page.module.css'
import { cookies } from 'next/headers'
import rootStyles from '@/app/[lang]/rootStyles.module.css'

export default async function Contact({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'survey')
  const cookieStore = cookies()
  const isSurveyDone = cookieStore.get('survey')

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        {!isSurveyDone ? (
          <>
            <h1 className={styles.title}>{t('title')}</h1>
            <Survey lang={params.lang} />
          </>
        ) : (
          <div>{t('done')}</div>
        )}
      </div>
    </main>
  )
}
