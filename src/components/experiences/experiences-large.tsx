import { Stack, Container, Row, Col } from '@/components/bootstrap/bootstrap'
import copy from '@/localization/experiences/en.json'
import { getTranslation } from '@/localization/i18n'
import styles from './experiences.module.css'
import rootStyles from '../../app/[lang]/rootStyles.module.css'
import { ExperienceSelection } from './experiences_selection'

export const ExperienceCategory = async ({
  lang,
  categoryIndex,
}: {
  lang: string
  categoryIndex: number
}) => {
  const { t } = await getTranslation(lang, 'experiences')

  return (
    <div key={categoryIndex} className={styles.section}>
      <h2>{t(`categories.${categoryIndex}.title`)}</h2>
      <p className="textIntro">
        {t(`categories.${categoryIndex}.description`)}
      </p>
      <div key={categoryIndex}>
        <Row>
          {copy.categories[categoryIndex].articles?.map(
            (article, articleIndex) => (
              <Col key={articleIndex} md={6} className={styles.bottom}>
                <ExperienceSelection
                  key={`${categoryIndex}-${articleIndex}`}
                  lang={lang}
                  categoryIndex={categoryIndex}
                  articleIndex={articleIndex}
                />
              </Col>
            )
          )}
        </Row>
      </div>
    </div>
  )
}

export const ExperienceLarge = async ({
  lang,
  categories,
}: {
  lang: string
  categories: number[]
}) => {
  const { t } = await getTranslation(lang, 'experiences')

  return (
    <Stack gap={5}>
      {categories.map((category, categoryIndex) => {
        return (
          <ExperienceCategory
            key={categoryIndex}
            lang={lang}
            categoryIndex={categoryIndex}
          />
        )
      })}
    </Stack>
  )
}

export const ExperienceOverviewArticle = async ({
  lang,
  categories,
}: {
  lang: string
  categories: number[]
}) => {
  const { t } = await getTranslation(lang, 'experiences')
  return (
    <section className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack>
          <h1>{t('alternativeTitle')}</h1>
          <Stack gap={5}>
            {categories.map((category, categoryIndex) => {
              return (
                <ExperienceCategory
                  key={categoryIndex}
                  lang={lang}
                  categoryIndex={category}
                />
              )
            })}
          </Stack>
        </Stack>
      </div>
    </section>
  )
}
