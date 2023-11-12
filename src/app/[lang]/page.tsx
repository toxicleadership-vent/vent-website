import styles from './page.module.css'
import {
  Col,
  Container,
  Row,
  Image as BootstrapImage,
  Stack,
} from '@/components/bootstrap/bootstrap'
import { Header } from '@/components/header/header'
import { PageProps } from './layout'
import { getTranslation } from '@/localization/i18n'
import copy from '@/localization/home/en.json'
import  GettingInformedOverview  from '@/components/getting-informed-overview/getting-informed-overview'

export default async function Home({ params: { lang } }: PageProps) {
  const { t: tHome } = await getTranslation(lang, 'home', { keyPrefix: 'home' })

  return (
    <main className={styles.main}>
      <Header language={lang} color="#408CFF" lightColor="#98C1FF" />
      <Stack>
        <Container fluid>
          <Row className={`align-items-center ${styles.hero}`}>
            <Col>
              <h1 className={styles.heroText}>{tHome('title')}</h1>
            </Col>
            <Col>
              <BootstrapImage src="/images/hero.png" fluid />
            </Col>
          </Row>
        </Container>
        <Container fluid className={styles.section}>
          <h1 className={styles.heading1}> {tHome('what_we_do.title')}</h1>
          <div className={styles.subsection}>
            <h3 className={styles.heading3}>
              {tHome('what_we_do.sections.0.title')}
            </h3>
            <p className={styles.paragraph}>
              {tHome('what_we_do.sections.0.text')}
            </p>
          </div>
          <BootstrapImage
            src={tHome('what_we_do.image')}
            height={100}
            width={100}
          />
        </Container>
        <Container fluid className={styles.section}>
          <h1 className={styles.heading1}> {tHome('what_guides_us.title')}</h1>
          <div className={styles.subsection}>
            <Row>
              {copy.home.what_guides_us.sections.map((_section, index) => (
                <Col>
                  <div className={styles.principleImage}>
                    <BootstrapImage
                      src={tHome(`what_guides_us.sections.${index}.image`)}
                      height={100}
                      width={100}
                    />
                  </div>
                  <h3 className={styles.heading3}>
                    {tHome(`what_guides_us.sections.${index}.title`)}
                  </h3>
                  <p className={styles.paragraph}>
                    {tHome(`what_guides_us.sections.${index}.text`)}
                  </p>
                </Col>
              ))}
            </Row>
          </div>
          <button className={styles.button}>
            {tHome('what_guides_us.button.text')}
          </button>
        </Container>
        <GettingInformedOverview lang={lang} />
        {/* <Container fluid>
          <Row className={`${styles.principles} row grid-divider `}>
            <Col md="4">The Mission</Col>
            <Col> {t('mission')}</Col>
          </Row>
        </Container> */}
      </Stack>
    </main>
  )
}
