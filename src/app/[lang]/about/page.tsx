import { getTranslation } from '@/localization/i18n'
import { PageProps } from '../layout'
import styles from './page.module.css'
import MdxText from './about.mdx'
import copy from '@/localization/about/en.json'
import {
  Card,
  CardBody,
  CardHeader,
  CardImg,
  Col,
  Container,
  Row,
} from '@/components/bootstrap/bootstrap'
import Link from 'next/link'
import { Media } from '@/components/media/media'
import rootStyles from '../rootStyles.module.css'
export default async function About({ params: { lang } }: PageProps) {
  const { t } = await getTranslation(lang, 'about', { keyPrefix: 'about' })

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <div className={styles.topWrapper}>
          <h1 className={styles.title}>{t('title')}</h1>
          <p className={styles.paragraph}>{t('description')}</p>
          <div className={styles.midWrapper}>
            <div className={styles.mdx}>
              <MdxText />
            </div>
            <Container className={styles.container}>
              <h3 style={{ textAlign: 'center', marginBottom: 50 }}>
                {t('team.title')}
              </h3>
              <Row>
                {copy.about.team?.members
                  .slice(0, 2)
                  .map((teamMember, index) => {
                    return (
                      <Col md={6} key={index}>
                        <Card bsPrefix="myCard" className={styles.myCard}>
                          <CardImg
                            className={styles.cardImg}
                            variant="top"
                            src={t(`team.members.${index}.image`)}
                          />
                          <CardHeader>
                            <h4>{t(`team.members.${index}.name`)}</h4>
                            <h4>{t(`team.members.${index}.position`)}</h4>
                          </CardHeader>
                          <CardBody>{t(`team.members.${index}.cv`)}</CardBody>
                        </Card>
                      </Col>
                    )
                  })}
              </Row>
              <Row>
                {copy.about.team?.members
                  .slice(2, 5)
                  .map((teamMember, index) => {
                    index = index + 2
                    return (
                      <Col md={4} key={index}>
                        <Card bsPrefix="myCard" className={styles.myCard}>
                          <CardImg
                            className={styles.cardImg}
                            variant="top"
                            src={t(`team.members.${index}.image`)}
                          />
                          <CardHeader>
                            <h4>{t(`team.members.${index}.name`)}</h4>
                            <h4>{t(`team.members.${index}.position`)}</h4>
                          </CardHeader>
                          <CardBody>{t(`team.members.${index}.cv`)}</CardBody>
                        </Card>
                      </Col>
                    )
                  })}
              </Row>
            </Container>
            <Container className={styles.container}>
              <h3 style={{ textAlign: 'center', marginBottom: 50 }}>
                {t('collaborators.title')}
              </h3>
              <Row>
                {copy.about.collaborators?.members.map((teamMember, index) => {
                  return (
                    <Col md={6} key={index}>
                      <Card bsPrefix="myCard" className={styles.myCard}>
                        <CardImg
                          className={styles.cardImg}
                          variant="top"
                          src={t(`collaborators.members.${index}.image`)}
                        />
                        <CardHeader>
                          <h4>{t(`collaborators.members.${index}.name`)}</h4>
                        </CardHeader>
                        <CardBody>
                          <p>{t(`collaborators.members.${index}.cv`)}</p>

                          <Link
                            className={styles.link}
                            href={t(
                              `collaborators.members.${index}.linkedin.href`
                            )}
                          >
                            {t(`collaborators.members.${index}.linkedin.title`)}
                          </Link>
                        </CardBody>
                      </Card>
                    </Col>
                  )
                })}
              </Row>
            </Container>
          </div>
        </div>
        <Container className={styles.container}>
          <h3 style={{ textAlign: 'center', marginBottom: 50 }}>
            {t('media.title')}
          </h3>
        </Container>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <Media
              iframeProps={{
                src: t('media.video.0.src'),
                title: t('media.video.0.title'),
              }}
              top={t('media.video.0.show')}
              middle={t('media.video.0.episode')}
              bottom={t('media.video.0.bottom')}
            />
          </Col>
          <Col className={styles.col}>
            <Media
              iframeProps={{
                src: t('media.video.2.src'),
                title: t('media.video.2.title'),
              }}
              top={t('media.video.2.show')}
              middle={t('media.video.2.episode')}
              bottom={t('media.video.2.bottom')}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col className={styles.col}>
            <Media
              iframeProps={{
                src: t('media.video.1.src'),
                title: t('media.video.1.title'),
              }}
              top={t('media.video.1.show')}
              middle={t('media.video.1.episode')}
              bottom={t('media.video.1.bottom')}
            />
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <iframe
              style={{ borderRadius: 12 }}
              src="https://widget.spreaker.com/player?episode_id=56631452&amp;theme=light&amp;playlist=false&amp;playlist-continuous=false&amp;playlist-loop=false&amp;playlist-autoupdate=true&amp;chapters-image=true&amp;episode_image_position=right&amp;hide-likes=true&amp;hide-comments=true&amp;hide-sharing=false&amp;hide-logo=true&amp;hide-download=false&amp;hide-episode-description=false&amp;hide-playlist-images=false&amp;hide-playlist-descriptions=false"
              width="100%"
              height="200px"
              frameBorder="0"
              className="spreaker-player"
              id="spreaker-player-670167"
            ></iframe>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <iframe
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/episode/4z4pO13UWHszxn9QPvaKTT/video?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
        <Row className={styles.row}>
          <Col>
            <iframe
              style={{ borderRadius: 12 }}
              src="https://open.spotify.com/embed/episode/1LkHLMOU4gVbmDA6g3fIH0?utm_source=generator"
              width="100%"
              height="152"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </Col>
        </Row>
        <Container className={styles.contactWrapper}>
          <h3 style={{ marginBottom: 50 }}>{t('contact')}</h3>
          <Link href={t('contactButton.href')}>
            <button className={styles.button}>{t('contactButton.text')}</button>
          </Link>
        </Container>
      </div>
    </main>
  )
}
