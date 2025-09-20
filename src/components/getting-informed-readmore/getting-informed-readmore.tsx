'use server'

import Link from 'next/link'
import { Row, Stack } from '../bootstrap/bootstrap'
import styles from './page.module.css'
import parentStyles from '../../app/[lang]/getting-informed/page.module.css'
import rootStyles from '../../app/[lang]/rootStyles.module.css'
import { Col, Image } from '@/components/bootstrap/bootstrap'

const GettingInformedReadMore = async ({
  lang,
  id,
}: {
  lang: string
  id: string
}) => {
  const gettingInformedCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/getting-informed?locale=en&populate[sections][populate]=*&populate[button][populate]=*`)

  const {data: gettingInformed} = await gettingInformedCopy.json();

  const filterArticle = (_section: object, index: number) => {
    return index + 1 !== parseInt(id)
  }

  return (
    <section className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <div className={styles.text}>
          <h1>{gettingInformed.titleMore}</h1>
          <p className={'sectionIntro'}>{gettingInformed.description}</p>
        </div>
        <Stack gap={5}>
          {gettingInformed?.sections?.map((_section: any, index: number) => (
              <Row key={index} className={`${parentStyles.gettingInformed}`}>
                <Col md={5} lg={4}>
                  <Link href={_section.link.href}>
                    <Image
                      className={parentStyles.cardImage}
                      alt={_section.image.alt}
                      src={_section.image.href}
                    />
                  </Link>
                </Col>
                <Col md={7} lg={8} className={parentStyles.cardText}>
                  <h2>{_section.title}</h2>
                  <p>
                    {_section.description}
                  </p>
                  <p>
                    <Link
                      className={parentStyles.link}
                      href={_section.link.href}
                    >
                      {_section.link.text}
                    </Link>
                  </p>
                </Col>
              </Row>
            ))
            .filter(filterArticle)}
        </Stack>
        <Link href={gettingInformed.button.href}>
          <button className={rootStyles.button}>{gettingInformed.button.text}</button>
        </Link>
      </div>
    </section>
  )
}

export default GettingInformedReadMore
