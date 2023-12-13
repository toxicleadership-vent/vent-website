import copy from '@/localization/experiences/en.json'
import { getTranslation } from '@/localization/i18n'
import styles from './experiences.module.css'
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Image,
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
      <Image
        src={t(
          `categories.${categoryIndex}.articles.${articleIndex}.image.href`
        )}
        alt={t(`categories.${categoryIndex}.image.alt`)}
        rounded
        fluid
        style={{ marginBottom: '1rem' }}
      />
      <h4>{t(`categories.${categoryIndex}.articles.${articleIndex}.title`)}</h4>
      <div className={styles.tags}>
        <h5>
          {t(`categories.${categoryIndex}.articles.${articleIndex}.tag_title`)}
        </h5>
        <ListGroup bsPrefix="list">
          {copy.categories[categoryIndex].articles[articleIndex].tags.map(
            (tag, index) => {
              return (
                <ListGroupItem key={`tag-${index}`}>
                  {t(
                    `categories.${index}.articles.${articleIndex}.tags.${index}`
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
      <Link
        className={styles.link}
        href={t(
          `categories.${categoryIndex}.articles.${articleIndex}.link.href`
        )}
      >
        {t(`categories.${categoryIndex}.articles.${articleIndex}.link.name`)}
      </Link>
    </>
  )
}
