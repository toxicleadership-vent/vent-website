import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Stack, Row, Col, Image } from '@/components/bootstrap/bootstrap'
import styles from './page.module.css'
import copy from '@/localization/getting-informed/en.json'
import Link from 'next/link'

export default async function GettingInformed({
  params,
}: {
  params: PageParams
}) {
  const { t: tInformed } = await getTranslation(
    params.lang,
    'getting-informed',
    { keyPrefix: 'getting-informed' }
  )

  return (
    <main className={styles.main}>
      <Stack className={styles.text}>
        <h1 className={styles.title}>{tInformed('title')}</h1>
        <p>{tInformed('description')}</p>
      </Stack>
      <Stack gap={5}>
        {copy['getting-informed'].sections.map((_section, index) => (
          <Row key={index} className={`${styles.gettingInformed}`}>
            <Col md={3}>
              <Link href={tInformed(`sections.${index}.link.href`)}>
                <Image
                  alt={tInformed(`sections.${index}.image.alt`)}
                  src={tInformed(`sections.${index}.image.src`)}
                  width={100}
                />
              </Link>
            </Col>
            <Col md={9}>
              <h3>{tInformed(`sections.${index}.title`)}</h3>
              <p className={styles.sectionDescription}>
                {tInformed(`sections.${index}.description`, {
                  defaultValue: '',
                })}
              </p>
              <Link
                className={styles.link}
                href={tInformed(`sections.${index}.link.href`)}
              >
                {tInformed(`sections.${index}.link.text`)}
              </Link>
            </Col>
          </Row>
        ))}
      </Stack>
    </main>
  )
}
