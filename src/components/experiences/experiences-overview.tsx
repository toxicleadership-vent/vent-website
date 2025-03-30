import Link from 'next/link'
import { Stack, Row, Col } from '@/components/bootstrap/bootstrap'
import copy from '@/localization/experiences/en.json'
import { getTranslation } from '@/localization/i18n'
import styles from './experiences.module.css'
import { ExperienceSelection } from './experiences_selection'
import rootStyles from '@/app/[lang]/rootStyles.module.css'
import { FaYoutube } from 'react-icons/fa6'

export const ExperienceOverview = async ({ lang }: { lang: string }) => {
  const { t } = await getTranslation(lang, 'experiences')

  return (
    <section className={`${rootStyles.section}`}>
      <div
        className={` ${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack className={``}>
          <h1>{t('title')}</h1>
          <p className={'sectionIntro'}>{t('abstract')}</p>
        </Stack>
        <Stack>
          <div className={` ${styles.banner}`}>
            <div className={styles.bannerImageWraper}>
              <img
                src={'/images/experiences/experiences_youtube.svg'}
                alt={'Youtube Video: Toxic Boss Interviews'}
                className={styles.bannerImageWidth}
              />
            </div>
            <div className={styles.text}>
              <h2 style={{ textAlign: 'left' }}>{t('banner.title')}</h2>
              <p>{t('banner.text')}</p>
              <Link
                className={styles.link}
                target="_blank"
                href={t('banner.link.href')}
              >
                <FaYoutube /> {t('banner.link.name')}
              </Link>
            </div>
          </div>
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
            <button className={rootStyles.button}>{t('button.text')}</button>
          </Link>
        </Stack>
      </div>
    </section>
  )
}
