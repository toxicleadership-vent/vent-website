import styles from './page.module.css'
import rootStyles from '../../rootStyles.module.css'
import MdxLoader from './mdx-loader'

export default async function GettingInformedArticle(
  props: {
    params: Promise<{ id: string; lang: string }>
  }
) {
  const params = await props.params;
  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={` ${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <MdxLoader id={params.id} />
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]
}
