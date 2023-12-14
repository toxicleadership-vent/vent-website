import { Stack, Container, Row, Col } from '@/components/bootstrap/bootstrap'
import copy from '@/localization/experiences/en.json'
import { getTranslation } from '@/localization/i18n'
import styles from './experiences.module.css'
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
    <Container key={categoryIndex} className={styles.section}>
      <h3>{t(`categories.${categoryIndex}.title`)}</h3>
      <p>{t(`categories.${categoryIndex}.description`)}</p>
      <div key={categoryIndex}>
        <Row className={'align-items-start'}>
          {copy.categories[categoryIndex].articles?.map(
            (article, articleIndex) => (
              <Col
                className={styles.experienceSelection}
                key={articleIndex}
                md={6}
              >
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
    </Container>
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
    <>
      <Stack gap={5} className={styles.main}>
        <h1 className={styles.title}>{t('alternativeTitle')}</h1>
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
      </Stack>
    </>
  )
}
