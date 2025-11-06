import styles from './experiences.module.css'
import {
  Col,
  ListGroup,
  ListGroupItem,
  Row,
  Image as BootstrapImage,
} from '../bootstrap/bootstrap'
import Link from 'next/link'

export const ExperienceSelection = async ({
  lang,
  categoryIndex,
  articleIndex,
}: {
  lang: string
  categoryIndex: number
  articleIndex: number
}) => {
  const res = await fetch(
    `https://typical-dogs-185f9ff416.strapiapp.com/api/experience?locale=${lang}&populate[categories][populate][articles][populate]=*`
  )
  const { data: experience } = await res.json()

  const category = experience.categories?.[categoryIndex]
  const article = category?.articles?.[articleIndex]

  return (
    <>
      <BootstrapImage
        src={article?.image?.href}
        alt={category?.image?.alt}
        rounded
        fluid
        style={{ marginBottom: '1rem' }}
      />
      <h3>{article?.title}</h3>
      <div className={styles.tags}>
        <span className="smallBold">{article?.tag_title}</span>
        <ListGroup bsPrefix="list" className={`small`}>
          {article?.tags?.map((tag: any, index: number) => (
            <ListGroupItem key={`tag-${tag.id ?? index}`}>{tag.value}</ListGroupItem>
          ))}
        </ListGroup>
      </div>
      <p>{article?.abstract}</p>
      {article?.link?.state === 'coming soon' ? (
        <p className={styles.link}>Coming soon</p>
      ) : (
        <Link className={styles.link} href={article?.link?.href}>
          {article?.link?.title}
        </Link>
      )}
    </>
  )
}
