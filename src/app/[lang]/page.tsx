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
import GettingInformedOverview from '@/components/getting-informed-overview/getting-informed-overview'
import { ExperienceOverview } from '@/components/experiences/experiences-overview'
import { PollsContainer } from '@/components/polls/polls'

export default async function Home({ params: { lang } }: PageProps) {
  const { t } = await getTranslation(lang, 'home', { keyPrefix: 'home' })

  return (
    <main className={styles.main}>
      <Header language={lang} color="#408CFF" lightColor="#98C1FF" />
      <Stack>
        <Container fluid>
          <Row className={`align-items-center ${styles.hero}`}>
            <Col sm={6} md={6}>
              <h1 className={styles.heroText}>{t('title')}</h1>
            </Col>
            <Col sm={6} md={6}>
              <BootstrapImage
                src="/images/home/hero.svg"
                fluid
                alt="hero image"
              />
            </Col>
          </Row>
        </Container>
        <Container fluid className={styles.section}>
          <h1 className={styles.heading1}> {t('what_we_do.title')}</h1>
          <div className={styles.subsection}>
            <p className={styles.paragraph}>{t('what_we_do.text')}</p>
          </div>
        </Container>
        <Container
          fluid
          className={`${styles.section} ${styles.sectionOrange}`}
        >
          <h1 className={styles.heading1}> {t('polls.title')}</h1>
          <Stack className={styles.poll}>
            <PollsContainer lang={lang} />
          </Stack>
        </Container>
        <Container fluid className={styles.section}>
          <h1 className={styles.heading1}> {t('what_guides_us.title')}</h1>
          <div className={styles.subsection}>
            <Row>
              {copy.home.what_guides_us.sections.map((_section, index) => (
                <Col sm={12} md={4} key={index}>
                  <div className={styles.principleImage}>
                    <BootstrapImage
                      src={t(`what_guides_us.sections.${index}.image`)}
                      alt={t(`what_guides_us.sections.${index}.title`)}
                      height="80%"
                      width="80%"
                    />
                  </div>
                  <h3 className={styles.heading3}>
                    {t(`what_guides_us.sections.${index}.title`)}
                  </h3>
                  <p className={styles.paragraph}>
                    {t(`what_guides_us.sections.${index}.text`)}
                  </p>
                </Col>
              ))}
            </Row>
          </div>
          <button className={styles.button}>
            {t('what_guides_us.button.text')}
          </button>
        </Container>
        <GettingInformedOverview lang={lang} />
        <ExperienceOverview lang={lang} />
      </Stack>
    </main>
  )
}
