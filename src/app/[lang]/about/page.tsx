import { PageProps } from '../layout'
import styles from './page.module.css'
import MdxText from './about.mdx'
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
import { Trans } from 'react-i18next/TransWithoutContext'
import { PageParams } from '../layout'

export default async function About({ params }: { params: PageParams }) {

  const aboutCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/about?locale=${params.lang}&populate[team][populate][members][populate]=image&populate[media][populate]=video&populate[metadata][populate]=*&populate[contactButton][populate]=*`
  )
  const {data : about} = await aboutCopy.json();

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <div className={styles.wrapper}>
          <h1>{about.title}</h1>
          <div className={styles.midWrapper}>
            <div className={styles.mdx}>
              <MdxText />
            </div>
          </div>
          <Container>
            <h1>{about.media.title}</h1>
          </Container>
          <Row>
            <Col xs={12} sm={6} md={4} className={styles.column}>
              <Media
                iframeProps={{
                  src: about.media?.video?.[0]?.src,
                  title: about.media?.video?.[0]?.title,
                }}
                top={about.media?.video?.[0]?.show}
                middle={about.media?.video?.[0]?.episode}
                bottom={about.media?.video?.[0]?.bottom}
              />
            </Col>
            <Col xs={12} sm={6} md={4} className={styles.column}>
              <Media
                iframeProps={{
                  src: about.media?.video?.[2].src,
                  title: about.media?.video?.[2].title,
                }}
                top={about.media?.video?.[2].show}
                middle={about.media?.video?.[2].episode}
                bottom={about.media?.video?.[2].bottom}
              />
            </Col>
            <Col xs={12} sm={6} md={4} className={styles.column}>
              <Media
                iframeProps={{
                  src: about.media?.video?.[1].src,
                  title: about.media?.video?.[1].title,
                }}
                top={about.media?.video?.[1].show}
                middle={about.media?.video?.[1].episode}
                bottom={about.media?.video?.[1].bottom}
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
         

          <Container className={styles.container}>
            <h1>{about.team.title}</h1>
            <Row>
              {about.team?.members.map((teamMember, index) => {
                // @ts-ignore
                return (
                  <Col md={6} key={index}>
                    <Card bsPrefix="myCard" className={styles.myCard}>
                      <CardImg
                        className={styles.cardImg}
                        variant="top"
                        src={about.team?.members?.[index].image.formats.large.url}
                      />
                      <CardHeader>
                        <h4>{about.team?.members?.[index].name}</h4>
                        <h4>{about.team?.members?.[index].position}</h4>
                      </CardHeader>
                      <CardBody>
                        {/** @ts-ignore next-line*/}
                        <Trans components={{ Link: <Link></Link> }}>
                          <p>{about.team?.members?.[index].cv}</p>
                        </Trans>
                      </CardBody>
                    </Card>
                  </Col>
                )
              })}
            </Row>
{/*             <Row>
              {copy.about.team?.members.slice(2, 5).map((teamMember, index) => {
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
                      <CardBody>
                        <p>{t(`team.members.${index}.cv`)}</p>
                      </CardBody>
                    </Card>
                  </Col>
                )
              })}
            </Row> */}
          </Container>
        </div>
      </div>
    </main>
  )
}
