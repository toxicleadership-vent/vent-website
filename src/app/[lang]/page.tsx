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
//import copy from '@/localization/home/en.json'
import GettingInformedOverview from '@/components/getting-informed-overview/getting-informed-overview'
import Donate from '@/components/donate/donate'
import { ExperienceOverview } from '@/components/experiences/experiences-overview'
import { PollsContainer } from '@/components/polls/polls'
import Link from 'next/link'
import { Survey } from '@/components/survey/survey'

export default async function Home({ params: { lang } }: PageProps) {

  const homeCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/home?locale=${lang}&populate[whatWeDo][populate]=*&populate[whatGuidesUs][populate][button][populate]=*&populate[polls][populate]=*&populate[metadata][populate]=*&populate[whatGuidesUs][populate][sections][populate]=*`
  )
  const {data : home} = await homeCopy.json();
  
  return (
    <main className={styles.main}>
      <Header language={lang} color="#408CFF" lightColor="#98C1FF" />
      <Stack>
        <div className={`${styles.sectionBlue} ${rootStyles.section}`}>
          <div className={styles.heroBanner}>
            <div className={styles.heroText}>
              <h1 style={{ textAlign: 'left' }}>{home.title}</h1>
            </div>
          </div>
        </div>
        <Container
          fluid
          className={`${styles.sectionLightBlue} ${rootStyles.section}`}
        >
          <div className={`${rootStyles.sectionContainer}`}>
            <h1> {home.whatWeDo.title}</h1>
            <p className={`sectionIntro`}>{home.whatWeDo.text}</p>
          </div>
        </Container>
        <Container
          fluid
          className={`${styles.sectionOrange} ${rootStyles.section}`}
        >
          <div className={rootStyles.sectionContainer}>
            <h1> {home.polls.title}</h1>
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
            <h1> {home.whatGuidesUs.title}</h1>
            <div>
              <Row>
                {home.whatGuidesUs?.sections?.map((section: any, index: number) => {
                  return (
                  <Col xs={12} sm={4} key={index}>
                    <div className={styles.principleImage}>
                      <BootstrapImage
                        src={section.image.href}
                        alt={section.alt}
                        height="80%"
                        width="80%"
                      />
                    </div>
                    <h3>{section.title}</h3>
                    <p>{section.text}</p>
                  </Col>
                  )
                })} 
              </Row>
            </div>
          </div>
          <Link href={home?.whatGuidesUs?.button?.href}>
            <button className={rootStyles.button}>
              {home?.whatGuidesUs?.button?.text}
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
