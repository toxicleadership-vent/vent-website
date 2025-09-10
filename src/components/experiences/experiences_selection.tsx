import copy from '@/localization/experiences/en.json'
import { getTranslation } from '@/localization/i18n'
import styles from './experiences.module.css'
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Image as BootstrapImage,
} from '../bootstrap/bootstrap'
import Link from 'next/link'

export const ExperienceSelection = async ({
  lang,
  categoryIndex,
  articleIndex,
}: {
  lang: string
  categoryIndex: number
  articleIndex: number
}) => {
  const { t } = await getTranslation(lang, 'experiences')
  return (
    <>
      <BootstrapImage
        src={t(
          `categories.${categoryIndex}.articles.${articleIndex}.image.href`
        )}
        alt={t(`categories.${categoryIndex}.image.alt`)}
        rounded
        fluid
        style={{ marginBottom: '1rem' }}
      />
      <h3>{t(`categories.${categoryIndex}.articles.${articleIndex}.title`)}</h3>
      <div className={styles.tags}>
        <span className="smallBold">
          {t(`categories.${categoryIndex}.articles.${articleIndex}.tag_title`)}
        </span>
        <ListGroup bsPrefix="list" className={`small`}>
          {copy.categories[categoryIndex].articles[articleIndex].tags.map(
            (tag, index) => {
              return (
                <ListGroupItem key={`tag-${index}`}>
                  {t(
                    `categories.${categoryIndex}.articles.${articleIndex}.tags.${index}`
                  )}
                </ListGroupItem>
              )
            }
          )}
        </ListGroup>
      </div>
      <p>
        {t(`categories.${categoryIndex}.articles.${articleIndex}.abstract`)}
      </p>
      {t(`categories.${categoryIndex}.articles.${articleIndex}.link.state`) ===
      'coming soon' ? (
        <p className={styles.link}>Coming soon</p>
      ) : (
        <Link
          className={styles.link}
          href={t(
            `categories.${categoryIndex}.articles.${articleIndex}.link.href`
          )}
        >
          {t(`categories.${categoryIndex}.articles.${articleIndex}.link.title`)}
        </Link>
      )}
    </>
  )
}
