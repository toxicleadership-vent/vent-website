import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { ContactForm } from '@/components/contact-form/contact-form'
import {Stack} from '@/components/bootstrap/bootstrap'
import styles from './page.module.css'

export default async function Contact({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'contact')
  return (
      <main className={styles.main}>
        <Stack className={styles.text}>
        <h1 className={styles.title}>{t('contact.title')}</h1>
        <p>{t('contact.description')}</p>
        </Stack>
        <ContactForm lang={params.lang} />
      </main>
  )
}
