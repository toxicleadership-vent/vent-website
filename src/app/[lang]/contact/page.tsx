import { PageParams } from '../layout'
import { ContactForm } from '@/components/contact-form/contact-form'
import { Stack } from '@/components/bootstrap/bootstrap'
import styles from './page.module.css'
import rootStyles from '../rootStyles.module.css'

export default async function Contact({ params }: { params: PageParams }) {
  const ContactCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/contact?locale=${params.lang}&populate=*`);
  const {data : contact} = await ContactCopy.json();
  /* const { t } = await getTranslation(params.lang, 'contact') */

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack>
          <h1>{contact.title}</h1>
          <p className="sectionIntro">{contact.description}</p>
        </Stack>
        <ContactForm lang={params.lang} />
      </div>
    </main>
  )
}
