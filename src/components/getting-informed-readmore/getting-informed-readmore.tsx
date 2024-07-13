'use server'

import Link from 'next/link'
import {
  Row,
  Stack,
} from '../bootstrap/bootstrap'
import { getTranslation } from '@/localization/i18n'
import styles from './page.module.css'
import parentStyles from '../../app/[lang]/getting-informed/page.module.css'
import rootStyles from '../../app/[lang]/rootStyles.module.css'
import copy from '@/localization/getting-informed/en.json'
import { Col, Image } from '@/components/bootstrap/bootstrap'

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
    <section className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <div className={styles.text}>
          <h1>{t('titleMore')}</h1>
          <p className={'sectionIntro'}>{t('description')}</p>
        </div>
        <Stack gap={5}>
          {copy['getting-informed'].sections
            .map((_section, index) => (
              <Row key={index} className={`${parentStyles.gettingInformed}`}>
                <Col md={5} lg={4}>
                  <Link href={t(`sections.${index}.link.href`)}>
                    <Image
                      className={parentStyles.cardImage}
                      alt={t(`sections.${index}.image.alt`)}
                      src={t(`sections.${index}.image.src`)}
                    />
                  </Link>
                </Col>
                <Col md={7} lg={8} className={parentStyles.cardText}>
                  <h2>{t(`sections.${index}.title`)}</h2>
                  <p>
                    {t(`sections.${index}.description`, {
                      defaultValue: '',
                    })}
                  </p>
                  <p>
                    <Link
                      className={parentStyles.link}
                      href={t(`sections.${index}.link.href`)}
                    >
                      {t(`sections.${index}.link.text`)}
                    </Link>
                  </p>
                </Col>
              </Row>
            ))
            .filter(filterArticle)}
        </Stack>
        <Link href={t('button.href')}>
          <button className={rootStyles.button}>{t('button.text')}</button>
        </Link>
      </div>
    </section>
  )
}

export default GettingInformedReadMore
