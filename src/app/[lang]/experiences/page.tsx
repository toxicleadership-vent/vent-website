import styles from './page.module.css'
import {
  Col,
  Row,
  Stack,
  Container,
  Image,
} from '@/components/bootstrap/bootstrap'
import { PageParams } from '../layout'
import { getTranslation } from '@/localization/i18n'
import copy from '@/localization/experiences/en.json'
import Link from 'next/link'

export default async function Articles({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'experiences')

  return (
    <main className={styles.main}>
      <Stack className={styles.text}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p>{t('abstract')}</p>
      </Stack>
      <Stack gap={5}>
        {copy.categories.map((category, index) => {
          return (
            <Container key={index} className={styles.section}>
              <h3 className={styles.category}>{t(`categories.${index}.title`)}</h3>
              <div key={index}>
                <Row className={'align-items-start'}>
                  {category?.articles?.map((article, articleIndex) => (
                    <Col  key={articleIndex} md={4}>
                      <h4>
                        {' '}
                        {t(
                          `categories.${index}.articles.${articleIndex}.title`
                        )}
                      </h4>

                      <p>
                        {t(
                          `categories.${index}.articles.${articleIndex}.abstract`
                        )}
                      </p>
                      <Link className={styles.link} href={article.link.href}>
                        {t(
                          `categories.${index}.articles.${articleIndex}.link.name`
                        )}
                      </Link>
                    </Col>
                  ))}
                  <Col md={4}>
                    <Image
                      src={t(`categories.${index}.image.href`)}
                      alt={t(`categories.${index}.image.alt`)}
                      rounded
                      fluid
                    />
                  </Col>
                </Row>
              </div>
            </Container>
          )
        })}
      </Stack>
    </main>
  )
}
