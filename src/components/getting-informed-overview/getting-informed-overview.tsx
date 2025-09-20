'use server'

import Link from 'next/link'
import {
  CardBody,
  CardTitle,
  Container,
  Row,
  Card,
  CardImg,
} from '../bootstrap/bootstrap'
import styles from './page.module.css'
import rootStyles from '../../app/[lang]/rootStyles.module.css'

const GettingInformedOverview = async ({ lang }: { lang: string }) => {

const GettingInformedOverviewCopy = await fetch
  (`https://typical-dogs-185f9ff416.strapiapp.com/api/getting-informed?locale=en&populate[sections][populate]=*&populate[button][populate]=*`)

const {data: gettingInformedOverview} = await GettingInformedOverviewCopy.json();

  return (
    <section className={`${rootStyles.section}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <div>
          <h1>{gettingInformedOverview?.title}</h1>
          <p className={'sectionIntro'}>{gettingInformedOverview?.description}</p>
        </div>
        <div className={styles.subsection}>
          <Row className={`g-4`} xs={1} sm={2} md={3}>
            {gettingInformedOverview?.sections?.map(
              (section: any, index: number) => (
                <div key={index}>
                  <Link
                    className={styles.myCardTitle}
                    href={section?.link.href}
                  >
                    <Card bsPrefix="myCard" className={styles.myCard}>
                      <img
                        style={{ marginBottom: 30 }}
                        src={section?.image.href}
                        alt={section?.image.alt}
                        width={'173px'}
                      />
                      <CardBody>
                        <CardTitle className={styles.myCardTitle}>
                          <h3 style={{ textAlign: 'center' }}>
                            {section?.title}
                          </h3>
                        </CardTitle>
                      </CardBody>
                    </Card>
                  </Link>
                </div>
              )
            )}
          </Row>
        </div>
        <Link href={gettingInformedOverview?.button.href}>
          <button className={rootStyles.button}>{gettingInformedOverview?.button.text}</button>
        </Link>
      </div>
    </section>
  )
}

export default GettingInformedOverview
