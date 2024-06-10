import Link from 'next/link'
import {
  CardBody,
  CardTitle,
  Container,
  Row,
  Card,
  CardImg,
} from '../bootstrap/bootstrap'
import styles from './card.module.css'

export const MyCard = ({
  title,
  href,
  src,
  alt,
}: {
  title: string
  href: string
  src: string
  alt: string
}) => {
  return (
    <Container>
      <Link className={styles.myCardTitle} href={href}>
        <Card bsPrefix="myCard" className={styles.myCard}>
          <CardImg variant="top" src={src} alt={alt} width={100} />
          <CardBody>
            <CardTitle className={styles.myCardTitle}>{title}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    </Container>
  )
}
