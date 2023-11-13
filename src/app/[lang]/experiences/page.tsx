// import Image from 'next/image'
import styles from './page.module.css'
import {
  Col,
  Row,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  CardLink,
  Stack,
  Container,
  Image,
} from '@/components/bootstrap/bootstrap'
import { PageParams } from '../layout'
import { getTranslation } from '@/localization/i18n'
import copy from '@/localization/experiences/en.json'

export default async function Articles({ params }: { params: PageParams }) {
  const { t } = await getTranslation(params.lang, 'experiences')

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>{t('title')}</h1>
      <p>{t('abstract')}</p>
      <hr />
      <Stack gap={5}>
        {copy.categories.map((category, index) => {
          return (
            <>
              <Stack key={index} className={styles.section}>
                <h2>{t(`categories.${index}.title`)}</h2>
                <p>{t(`categories.${index}.abstract`)}</p>
                <Stack gap={3}>
                  {category?.articles?.map((article, articleIndex) => {
                    return (
                      <Container key={articleIndex}>
                        <Row>
                          <Col md={6}>
                            <Image src="/next.svg" rounded alt="" />
                          </Col>
                          <Col>
                            <Card
                              as="div"
                              bg="transparent"
                              className="border-0"
                            >
                              <CardBody>
                                <CardTitle>
                                  {t(
                                    `categories.${index}.articles.${articleIndex}.title`
                                  )}
                                </CardTitle>
                                <CardText>
                                  {t(
                                    `categories.${index}.articles.${articleIndex}.abstract`
                                  )}
                                </CardText>
                                <CardLink href={article.link.href}>
                                  {t(
                                    `categories.${index}.articles.${articleIndex}.link.name`
                                  )}
                                </CardLink>
                              </CardBody>
                            </Card>
                          </Col>
                        </Row>
                      </Container>
                    )
                  })}
                </Stack>
              </Stack>
            </>
          )
        })}
      </Stack>
    </main>
  )
}
