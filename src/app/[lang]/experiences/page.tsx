import styles from './page.module.css'
import { Stack } from '@/components/bootstrap/bootstrap'
import { PageParams } from '../layout'
import { ExperienceLarge } from '@/components/experiences/experiences-large'
import rootStyles from '../rootStyles.module.css'

export default async function Articles({ params }: { params: PageParams }) {
  const ArticlesCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/experience?locale=${params.lang}`);
  
  const articles = await ArticlesCopy.json();

  return (
    <main className={`${rootStyles.section} ${styles.main}`}>
      <div
        className={`${rootStyles.sectionContainer} ${rootStyles.sectionContainerBottom}`}
      >
        <Stack>
          <h1>{articles.data.title}</h1>
          <p className="sectionIntro">{articles.data.abstract}</p>
        </Stack>
        <ExperienceLarge lang={params.lang} categories={[0, 1, 2]} />
      </div>
    </main>
  )
}
