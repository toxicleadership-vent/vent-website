import styles from './page.module.css'
import dynamic from 'next/dynamic'
import rootStyles from '../../rootStyles.module.css'

export default async function Experience({
  params,
}: {
  params: { experience: string; lang: string }
}) {
  const { lang } = params

  const res = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/experience?locale=${lang}&populate[categories][populate][articles][populate]=image`)
  const { data: experienceData } = await res.json()

  let categoryIndex: number, articleIndex: number
  switch (params?.experience) {
    case 'growth_over_culture':
      categoryIndex = 2
      articleIndex = 0
      break
    case 'friends_to_foes':
      categoryIndex = 2
      articleIndex = 1
      break
    case 'squeezed_to_the_last_drop':
      categoryIndex = 1
      articleIndex = 0
      break
    case 'fake_investigation':
      categoryIndex = 1
      articleIndex = 1
      break
    case 'just_move_him':
      categoryIndex = 0
      articleIndex = 1
      break
    case 'speak_up_become_the_next_target':
      categoryIndex = 0
      articleIndex = 0
      break
    default:
      categoryIndex = 0
      articleIndex = 0
  }

  const ExperienceMdx = dynamic(
    () => import(`./${params.experience}.mdx`),
    { suspense: true }
  )

  // Hilfsvariablen für bessere Lesbarkeit
  const category = experienceData.categories?.[categoryIndex]
  const article = category?.articles?.[articleIndex]

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}>
        <div>
          <p className={styles.h1Breadcrumb}>{experienceData.title}</p>
          <h1 style={{ padding: 0 }}>
            {article?.title}
          </h1>
          <span className="smallText">
            {article?.length}
          </span>
          <div
            className={styles.articleImage}
            style={{
              backgroundImage: `url(${article?.image?.href})`,
            }}
          ></div>
          <div className={styles.container}>
            <p style={{ textTransform: 'uppercase' }} className="smallText">
              <strong>{experienceData.companyType}</strong>
              <br />
              <span style={{ textTransform: 'none' }}>
                {category?.title}
              </span>
              <br /><br />
              <strong>
                {article?.tag_title}
              </strong>
              <br />
              {article?.tags?.map((tag: string, index: number) => (
                <span key={index} style={{ textTransform: 'none' }}>
                  {tag}
                  <br />
                </span>
              ))}
            </p>
          </div>
        </div>
        <ExperienceMdx />
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return [
    { id: 'speak_up_become_the_next_target' },
    { id: 'fake_investigation' },
    { id: 'friend_to_foes' },
    { id: 'growth_over_culture' },
    { id: 'just_move_him' },
    { id: 'squeezed_to_the_last_drop' },
  ]
}
