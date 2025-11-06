import { Stack, Container, Row, Col } from '@/components/bootstrap/bootstrap'
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
  const res = await fetch(
    `https://typical-dogs-185f9ff416.strapiapp.com/api/experience?locale=${lang}&populate[categories][populate][articles][populate]=*`
  )
  const { data: experience } = await res.json()
  const category = experience.categories?.[categoryIndex]

  return (
    <div key={categoryIndex} className={styles.section}>
      <h2>{category?.title}</h2>
      <p className="textIntro">{category?.description}</p>
      <div>
        <Row>
          {category?.articles?.map((article: any, articleIndex: number) => (
            <Col key={articleIndex} md={6} className={styles.bottom}>
              <ExperienceSelection
                key={`${categoryIndex}-${articleIndex}`}
                lang={lang}
                categoryIndex={categoryIndex}
                articleIndex={articleIndex}
              />
            </Col>
          ))}
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
  const res = await fetch(
    `https://typical-dogs-185f9ff416.strapiapp.com/api/experience?locale=${lang}&populate[categories][populate][articles][populate]=*`
  )
  const { data: experience } = await res.json()

  return (
    <Stack gap={5}>
      {categories.map((categoryIndex) => (
        <ExperienceCategory
          key={categoryIndex}
          lang={lang}
          categoryIndex={categoryIndex}
        />
      ))}
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
  const res = await fetch(
    `https://typical-dogs-185f9ff416.strapiapp.com/api/experience?locale=${lang}&populate[categories][populate][articles][populate]=*`
  )
  const { data: experience } = await res.json()

  return (
    <section className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack>
          <h1>{experience.alternativeTitle}</h1>
          <Stack gap={5}>
            {categories.map((categoryIndex) => (
              <ExperienceCategory
                key={categoryIndex}
                lang={lang}
                categoryIndex={categoryIndex}
              />
            ))}
          </Stack>
        </Stack>
      </div>
    </section>
  )
}
