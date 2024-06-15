import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Survey } from '@/components/survey/survey'
import styles from './page.module.css'
import { cookies } from 'next/headers'

export default async function Contact({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'survey')
  const cookieStore = cookies()
  const isSurveyDone = cookieStore.get('survey')

  return (
    <main className={styles.main}>
      {!isSurveyDone ? (
        <>
          <h1 className={styles.title}>{t('title')}</h1>
          <Survey lang={params.lang} />
        </>
      ) : (
        <div>{t('done')}</div>
      )}
    </main>
  )
}
