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
import { getTranslation } from '@/localization/i18n'
import styles from './page.module.css'
import copyInformed from '@/localization/getting-informed/en.json'

const GettingInformedOverview = async ({ lang }: { lang: string }) => {
  const { t } = await getTranslation(lang, 'getting-informed', {
    keyPrefix: 'getting-informed',
  })

  return (
    <Container fluid className={styles.sectionOrange}>
      <div className={styles.text}>
        <h1 className={styles.heading1}> {t('title')}</h1>
        <p className={styles.paragraph}>{t('description')}</p>
      </div>
      <div className={styles.subsection}>
        <Row className={`g-1 row-gap-4`} xs={1} sm={2} md={3}>
          {copyInformed['getting-informed'].sections.map((_section, index) => (
            <Container key={index}>
              <Link
                className={styles.myCardTitle}
                href={t(`sections.${index}.link.href`)}
              >
                <Card bsPrefix="myCard" className={styles.myCard}>
                  <CardImg
                    variant="top"
                    src={t(`sections.${index}.image.src`)}
                    alt={t(`sections.${index}.image.alt`)}
                    width={100}
                  />
                  <CardBody>
                    <CardTitle className={styles.myCardTitle}>
                      {t(`sections.${index}.title`)}
                    </CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </Container>
          ))}
        </Row>
      </div>
      <Link href={t('button.href')}>
        <button className={styles.button}>{t('button.text')}</button>
      </Link>
    </Container>
  )
}

export default GettingInformedOverview
