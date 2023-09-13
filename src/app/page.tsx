import Image from 'next/image'
import styles from './page.module.css'
import { Col, Container, Row, Image as BootstrapImage } from '@/components/bootstrap/bootstrap'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>src/app/page.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>

      </div>
              <Container>
          <Row style={{border:  '1px solid red'}}>
            <Col style={{border:  '1px solid red'}} >
              <BootstrapImage src="/next.svg" alt="" fluid/>
            </Col>
            <Col style={{border:  '1px solid red'}}>
              <h2>Title</h2>
              <p>text text text</p>
            </Col>
        </Row>
         <Row style={{border:  '1px solid red'}}>
        <Col xs={12} md={8} style={{border:  '1px solid red'}}>
          xs=12 md=8
        </Col>
        <Col xs={6} md={4}  style={{border:  '1px solid red'}}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row style={{border:  '1px solid red'}}>
        <Col xs={6} md={4} style={{border:  '1px solid red'}}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4} style={{border:  '1px solid red'}}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4} style={{border:  '1px solid red'}}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row style={{border:  '1px solid red'}}>
        <Col xs={6} style={{border:  '1px solid red'}}>xs=6</Col>
        <Col xs={6} style={{border:  '1px solid red'}}>xs=6</Col>
      </Row>
        </Container>
    </main>
  )
}
