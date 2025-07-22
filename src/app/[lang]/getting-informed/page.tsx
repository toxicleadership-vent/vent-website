import { getTranslation } from '@/localization/i18n'
import { PageParams } from '../layout'
import { Stack, Row, Col, Image } from '@/components/bootstrap/bootstrap'
import styles from './page.module.css'
import rootStyles from '../rootStyles.module.css'
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
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={` ${rootStyles.sectionContainer} ${styles.sectionContainer}`}
      >
        <div>
          <h1>{tInformed('title')}</h1>
          <p className={'sectionIntro'}>{tInformed('description')}</p>
        </div>
        <Stack gap={5}>
          {copy['getting-informed'].sections.map((_section, index) => (
            <Row key={index} className={`${styles.gettingInformed}`}>
              <Col md={5} lg={4}>
                <Link href={tInformed(`sections.${index}.link.url`)}>
                  <Image
                    className={styles.cardImage}
                    alt={tInformed(`sections.${index}.image.alt`)}
                    src={tInformed(`sections.${index}.image.src`)}
                  />
                </Link>
              </Col>
              <Col md={7} lg={8} className={styles.cardText}>
                <h2>{tInformed(`sections.${index}.title`)}</h2>
                <p>
                  {tInformed(`sections.${index}.description`, {
                    defaultValue: '',
                  })}
                </p>
                <p>
                  <Link
                    className={styles.link}
                    href={tInformed(`sections.${index}.link.url`)}
                  >
                    {tInformed(`sections.${index}.link.title`)}
                  </Link>
                </p>
              </Col>
            </Row>
          ))}
        </Stack>
      </div>
    </main>
  )
}
