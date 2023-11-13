import dynamic from 'next/dynamic'

import styles from './page.module.css'

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
    <main className={styles.main}>
      <ExperienceMdx />
    </main>
  )
}

export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }]
}
