import { getTranslation } from '@/localization/i18n'
import { PageProps } from '../layout'
import styles from './page.module.css'
import AboutContent from './about-content'
import { Col, Container, Row } from '@/components/bootstrap/bootstrap'
import { Media } from '@/components/media/media'
import rootStyles from '../rootStyles.module.css'

export default async function About(props: PageProps) {
  const params = await props.params;

  const {
    lang
  } = params;

  const { t } = await getTranslation(lang, 'about', { keyPrefix: 'about' })

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <div className={styles.wrapper}>
          <h1>{t('title')}</h1>
          <div className={styles.midWrapper}>
            <div className={styles.mdx}>
              <AboutContent />
            </div>
          </div>
          <Container>
            <h1>{t('media.title')}</h1>
          </Container>
          <Row>
            <Col xs={12} sm={6} md={4} className={styles.column}>
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
            <Col xs={12} sm={6} md={4} className={styles.column}>
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
            <Col xs={12} sm={6} md={4} className={styles.column}>
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
          <Row>
            <Col md={12} className={styles.column}>
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
          <Row>
            <Col md={12} className={styles.column}>
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
          <Row>
            <Col md={12} className={styles.column}>
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
        </div>
      </div>
    </main>
  )
}
