import Link from 'next/link'
import { Stack, Row, Col } from '@/components/bootstrap/bootstrap'
import styles from './experiences.module.css'
import { ExperienceSelection } from './experiences_selection'
import rootStyles from '@/app/[lang]/rootStyles.module.css'
import { FaYoutube } from 'react-icons/fa6'

export const ExperienceOverview = async ({ lang }: { lang: string }) => {
  const res = await fetch(
    `https://typical-dogs-185f9ff416.strapiapp.com/api/experience?locale=${lang}&populate[categories][populate][articles][populate]=*&populate[banner][populate]=*&populate[button][populate]=*`
  )
  const { data: experience } = await res.json()

  return (
    <section className={`${rootStyles.section}`}>
      <div className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}>
        <Stack>
          <h1>{experience.title}</h1>
          <p className={'sectionIntro'}>{experience.abstract}</p>
        </Stack>
        <Stack>
          <div className={styles.banner}>
            <div className={styles.bannerImageWraper}>
              <img
                src={'/images/experiences/experiences_youtube.svg'}
                alt={'Youtube Video: Toxic Boss Interviews'}
                className={styles.bannerImageWidth}
              />
            </div>
            <div className={styles.text}>
              <h2 style={{ textAlign: 'left' }}>{experience.banner?.title}</h2>
              <p>{experience.banner?.text}</p>
              <Link
                className={styles.link}
                target="_blank"
                href={experience.banner?.link?.href}
              >
                <FaYoutube /> {experience.banner?.link?.title}
              </Link>
            </div>
          </div>
        </Stack>
        <Row className="align-items-start">
          {experience.categories?.map((category: any, categoryIndex: number) => (
            <Col
              className={styles.experienceSelection}
              key={category.id ?? categoryIndex}
              md={4}
            >
              <ExperienceSelection
                lang={lang}
                categoryIndex={categoryIndex}
                articleIndex={categoryIndex === 0 ? 0 : 1}
              />
            </Col>
          ))}
        </Row>
        <Stack gap={5} className={styles.buttonWrapper}>
          <Link href={experience.button?.href}>
            <button className={rootStyles.button}>{experience.button?.text}</button>
          </Link>
        </Stack>
      </div>
    </section>
  )
}
