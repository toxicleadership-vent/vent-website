import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { ContactForm } from '@/components/contact-form/contact-form'
import { Stack } from '@/components/bootstrap/bootstrap'
import styles from './page.module.css'
import rootStyles from '../rootStyles.module.css'

export default async function Contact({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'contact')

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack>
          <h1>{t('contact.title')}</h1>
          <p className="sectionIntro">{t('contact.description')}</p>
        </Stack>
        <ContactForm lang={params.lang} />
      </div>
    </main>
  )
}
