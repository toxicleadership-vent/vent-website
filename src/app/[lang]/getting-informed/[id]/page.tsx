import dynamic from 'next/dynamic'
import styles from './page.module.css'
import rootStyles from '../../rootStyles.module.css'

export default function GettingInformedArticle({
  params,
}: {
  params: { id: string; lang: string }
}) {
  const ExperienceMdx = dynamic(
    () => {
      return import(`./getting-informed-${params.id}.mdx`)
    },
    {
      suspense: true,
    }
  )
  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={` ${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <ExperienceMdx />
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]
}
