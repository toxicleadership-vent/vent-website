import { Col, Row } from '../bootstrap/bootstrap'
import styles from './media.module.css'

export const Media = ({
  iframeProps,
  top,
  middle,
  bottom,
}: {
  iframeProps: any
  top: string
  middle: string
  bottom: string
}) => {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.top}>
          <div className={styles.overlay}></div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/igXIN0lZMcE?si=lG9yRZJPOyzOLLqj?fs=0&modestbranding=1&playsinline=1&rel=0&controls=0"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            {...iframeProps}
          ></iframe>
        </div>
        <div className={styles.text}>
          <Row>
            <Col>
              <Row>
                <Col>{top}</Col>
              </Row>
              <Row>
                <Col>
                  <strong>{middle}</strong>
                </Col>
              </Row>
              <Row>
                <Col>{bottom}</Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}
