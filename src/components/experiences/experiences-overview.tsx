import Link from 'next/link'
import { Stack, Row, Col } from '@/components/bootstrap/bootstrap'
import copy from '@/localization/experiences/en.json'
import { getTranslation } from '@/localization/i18n'
import styles from './experiences.module.css'
import { ExperienceSelection } from './experiences_selection'

export const ExperienceOverview = async ({ lang }: { lang: string }) => {
  const { t } = await getTranslation(lang, 'experiences')

  return (
    <Stack gap={5} className={styles.main}>
      <Stack className={styles.text}>
        <h1>{t('title')}</h1>
        <p className={'sectionIntro'}>{t('abstract')}</p>
        <p className={'sectionIntro'}>{t('note')}</p>
      </Stack>
      <Row className={`align-items-start`}>
        {copy.categories.map((category, categoryIndex) => {
          return (
            <Col
              className={styles.experienceSelection}
              key={categoryIndex}
              md={4}
            >
              <ExperienceSelection
                key={`${categoryIndex}-${1}`}
                lang={lang}
                categoryIndex={categoryIndex}
                articleIndex={categoryIndex === 0 ? 0 : 1}
              />
            </Col>
          )
        })}
      </Row>
      <Stack gap={5} className={styles.buttonWrapper}>
        <Link href={t('button.href')}>
          <button className={styles.button}>{t('button.text')}</button>
        </Link>
      </Stack>
    </Stack>
  )
}
