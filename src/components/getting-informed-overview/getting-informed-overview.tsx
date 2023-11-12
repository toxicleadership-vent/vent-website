'use server'

import Link from "next/link"
import { CardBody, CardTitle, Container, Row, Card, CardImg } from "../bootstrap/bootstrap"
import { getTranslation } from "@/localization/i18n"
import styles from './page.module.css'
import copyInformed from '@/localization/getting-informed/en.json'

const GettingInformedOverview = async ({lang}:{lang: string}) => {
  const { t: tInformed } = await getTranslation(lang, 'getting-informed', { keyPrefix: 'getting-informed' })

  return (
    <Container fluid className={styles.sectionOrange}>
    <h1 className={styles.heading1}> {tInformed('title')}</h1>
    <div className={styles.subsection}>
      <Row
        className={`g-1 row-gap-4`}
        xs={1}
        md={3}
      >
        {copyInformed['getting-informed'].sections.map((_section, index) => (
          <Container>
            <Link  className={styles.myCardTitle} href={tInformed(`sections.${index}.link.href`)}>
            <Card bsPrefix="myCard" className={styles.myCard}>
              <CardImg
                variant="top"
                src={tInformed(`sections.${index}.image`)}
                width={100}
              />
              <CardBody>
                <CardTitle className={styles.myCardTitle}>
                  {tInformed(`sections.${index}.title`)}
                </CardTitle>
              </CardBody>
            </Card>
            </Link>
          </Container>
        ))}
      </Row>
    </div>
    <Link href={tInformed('button.href')}>
    <button className={styles.button}>
      {tInformed('button.text')}
    </button>
    </Link>
  </Container>
  )
}

export default GettingInformedOverview