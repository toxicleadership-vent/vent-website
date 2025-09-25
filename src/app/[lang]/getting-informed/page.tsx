import { PageParams } from '../layout'
import { Stack, Row, Col, Image } from '@/components/bootstrap/bootstrap'
import styles from './page.module.css'
import rootStyles from '../rootStyles.module.css'
import Link from 'next/link'

export default async function GettingInformed({
  params,
}: {
  params: PageParams
}) {
  const GettingInformedCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/getting-informed?locale=${params.lang}&populate[sections][populate]=*&populate[button][populate]=*`);
  const {data : gettingInformed} = await GettingInformedCopy.json();

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={` ${rootStyles.sectionContainer} ${styles.sectionContainer}`}
      >
        <div>
          <h1>{gettingInformed.title}</h1>
          <p className={'sectionIntro'}>{gettingInformed.description}</p>
        </div>
        <Stack gap={5}>
          {gettingInformed.sections?.map((section: any, index: number) => (
            <Row key={section.id} className={styles.gettingInformed}>
              <Col md={5} lg={4}>
                <Link href={section.link.href}>
                  <Image
                    className={styles.cardImage}
                    alt={section.image.alt}
                    src={section.image.href}
                  />
                </Link>
              </Col>
              <Col md={7} lg={8} className={styles.cardText}>
                <h2>{section.title}</h2>
                <p>{section.description}</p>
                <p>
                  <Link className={styles.link} href={section.link.href}>
                    {section.link.text}
                  </Link>
                </p>
              </Col>
            </Row>
          ))}
        </Stack>
      </div>
    </main>
  )
}
