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
import rootStyles from '../../app/[lang]/rootStyles.module.css'
import copyInformed from '@/localization/getting-informed/en.json'

const GettingInformedOverview = async ({ lang }: { lang: string }) => {
  const { t } = await getTranslation(lang, 'getting-informed', {
    keyPrefix: 'getting-informed',
  })

  return (
    <div
      className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
    >
      <div>
        <h1>{t('title')}</h1>
        <p className={'sectionIntro'}>{t('description')}</p>
      </div>
      <div className={styles.subsection}>
        <Row className={`g-4`} xs={1} sm={2} md={3}>
          {copyInformed['getting-informed'].sections.map((_section, index) => (
            <div key={index}>
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
                    <CardTitle className={styles.myCardTitle}>
                      <h3>{t(`sections.${index}.title`)}</h3>
                    </CardTitle>
                  </CardBody>
                </Card>
              </Link>
            </div>
          ))}
        </Row>
      </div>
      <Link href={t('button.href')}>
        <button className={rootStyles.button}>{t('button.text')}</button>
      </Link>
    </div>
  )
}

export default GettingInformedOverview
