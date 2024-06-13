import { getTranslation } from '@/localization/i18n'
import styles from './page.module.css'
import dynamic from 'next/dynamic'
import copy from '@/localization/experiences/en.json'
import rootStyles from '../../rootStyles.module.css'

export default async function Experience({
  params,
}: {
  params: { experience: string; lang: string }
}) {
  const { lang } = params

  const { t } = await getTranslation(lang, 'experiences')

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
    () => {
      return import(`./${params.experience}.mdx`)
    },
    {
      suspense: true,
    }
  )
  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <div>
          <p className={styles.h1Breadcrumb}>{t('title')}</p>
          <h1 style={{ padding: 0 }}>
            {t(`categories.${categoryIndex}.articles.${articleIndex}.title`)}
          </h1>
          <span className="smallText">
            {t(`categories.${categoryIndex}.articles.${articleIndex}.length`)}
          </span>
          <div
            className={styles.articleImage}
            style={{
              backgroundImage: `url(${t(
                `categories.${categoryIndex}.articles.${articleIndex}.image.href`
              )})`,
            }}
          ></div>
          <div className={styles.container}>
            <p style={{ textTransform: 'uppercase' }} className="smallText">
              <strong>{t(`companyType`)}</strong>
              <br></br>
              <span style={{ textTransform: 'none' }}>
                {t(`categories.${categoryIndex}.title`)}
              </span>
              <br></br>
              <br></br>
              <strong>
                {t(
                  `categories.${categoryIndex}.articles.${articleIndex}.tag_title`
                )}
              </strong>
              <br></br>
              {copy.categories[categoryIndex].articles[articleIndex].tags.map(
                (tag, index) => (
                  <>
                    <span style={{ textTransform: 'none' }}>
                      {t(
                        `categories.${categoryIndex}.articles.${articleIndex}.tags.${index}`
                      )}
                    </span>
                    <br></br>
                  </>
                )
              )}
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
