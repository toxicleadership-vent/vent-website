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

const GettingInformedReadMore = async ({
  lang,
  id,
}: {
  lang: string
  id: string
}) => {
  const { t } = await getTranslation(lang, 'getting-informed', {
    keyPrefix: 'getting-informed',
  })

  const filterArticle = (_section: object, index: number) => {
    return index + 1 !== parseInt(id)
  }

  return (
    <Container fluid className={styles.sectionOrange}>
      <div className={styles.text}>
        <h1 className={styles.heading1}> {t('title')}</h1>
        <p className={'sectionIntro'}>{t('description')}</p>
      </div>
      <div className={styles.subsection}>
        <Row className={`row-gap-4 gx-1 gy-1`} xs={1} md={2}>
          {copyInformed['getting-informed'].sections
            .map((_section, index) => (
              <Container key={index}>
                <Link
                  className={styles.myCardTitle}
                  href={t(`sections.${index}.link.href`)}
                >
                  <Card bsPrefix="myCard" className={styles.myCard}>
                    <img
                      style={{ marginBottom: 30 }}
                      src={t(`sections.${index}.image.src`)}
                      alt={t(`sections.${index}.image.alt`)}
                      width={'173px'}
                    />
                    <CardBody>
                      <CardTitle>
                        <h3>{t(`sections.${index}.title`)}</h3>
                      </CardTitle>
                    </CardBody>
                  </Card>
                </Link>
              </Container>
            ))
            .filter(filterArticle)}
        </Row>
      </div>
      <Link href={t('button.href')}>
        <button className={styles.button}>{t('button.text')}</button>
      </Link>
    </Container>
  )
}

export default GettingInformedReadMore
