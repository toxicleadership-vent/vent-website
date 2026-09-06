import styles from './page.module.css'
import rootStyles from '../../rootStyles.module.css'
import GettingInformed1Content from './getting-informed-1-content'
import GettingInformed2Content from './getting-informed-2-content'
import GettingInformed3Content from './getting-informed-3-content'
import GettingInformed4Content from './getting-informed-4-content'
import GettingInformed5Content from './getting-informed-5-content'

const gettingInformedContent: Record<string, React.ComponentType> = {
  '1': GettingInformed1Content,
  '2': GettingInformed2Content,
  '3': GettingInformed3Content,
  '4': GettingInformed4Content,
  '5': GettingInformed5Content,
}

export default async function GettingInformedArticle(
  props: {
    params: Promise<{ id: string; lang: string }>
  }
) {
  const params = await props.params;
  const ArticleContent = gettingInformedContent[params.id]
  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={` ${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        {ArticleContent ? <ArticleContent /> : null}
      </div>
    </main>
  )
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }, { id: '5' }]
}
