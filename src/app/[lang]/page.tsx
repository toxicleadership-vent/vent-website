import styles from './page.module.css'
import rootStyles from './rootStyles.module.css'
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
import Donate from '@/components/donate/donate'
import { ExperienceOverview } from '@/components/experiences/experiences-overview'
import { PollsContainer } from '@/components/polls/polls'
import Link from 'next/link'
import { Survey } from '@/components/survey/survey'

export default async function Home({ params: { lang } }: PageProps) {
  const { t } = await getTranslation(lang, 'home', { keyPrefix: 'home' })

  return (
    <main className={styles.main}>
      <Header language={lang} color="#408CFF" lightColor="#98C1FF" />
      <Stack>
        <div className={`${styles.sectionBlue} ${rootStyles.section}`}>
          <div className={styles.heroBanner}>
            <div className={styles.heroText}>
              <h1 style={{ textAlign: 'left' }}>{t('title')}</h1>
            </div>
          </div>
        </div>
        <Container
          fluid
          className={`${styles.sectionLightBlue} ${rootStyles.section}`}
        >
          <div className={`${rootStyles.sectionContainer}`}>
            <h1> {t('what_we_do.title')}</h1>
            <p className={`sectionIntro`}>{t('what_we_do.text')}</p>
          </div>
        </Container>
        <Container
          fluid
          className={`${styles.sectionOrange} ${rootStyles.section}`}
        >
          <div className={rootStyles.sectionContainer}>
            <h1> {t('polls.title')}</h1>
            <Stack className={styles.poll}>
              <PollsContainer lang={lang} />
            </Stack>
          </div>
        </Container>
        <Container
          fluid
          className={`${styles.sectionLightBlue} ${rootStyles.section}`}
        >
          <div className={rootStyles.sectionContainer}>
            <h1> {t('what_guides_us.title')}</h1>
            <div>
              <Row>
                {copy.home.what_guides_us.sections.map((_section, index) => (
                  <Col xs={12} sm={4} key={index}>
                    <div className={styles.principleImage}>
                      <BootstrapImage
                        src={t(`what_guides_us.sections.${index}.image`)}
                        alt={t(`what_guides_us.sections.${index}.title`)}
                        height="80%"
                        width="80%"
                      />
                    </div>
                    <h3>{t(`what_guides_us.sections.${index}.title`)}</h3>
                    <p>{t(`what_guides_us.sections.${index}.text`)}</p>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
          <Link href={t('what_guides_us.button.url')}>
            <button className={rootStyles.button}>
              {t('what_guides_us.button.title')}
            </button>
          </Link>
        </Container>
        <div className={`${styles.sectionOrange}`}>
          <GettingInformedOverview lang={lang} />
        </div>
        <div className={`${styles.sectionGreen}`}>
          <ExperienceOverview lang={lang} />
        </div>
        <div className={`${styles.sectionLightYellow}`}>
          <Donate lang={lang}  />
        </div>
      </Stack>
    </main>
  )
}
