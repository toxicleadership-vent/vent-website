import styles from '../page.module.css'

import dynamic from 'next/dynamic'

export default function Experience({
  params,
}: {
  params: { experience: string; lang: string }
}) {
  const ExperienceMdx = dynamic(
    () => {
      return import(`./${params.experience}.mdx`)
    },
    {
      suspense: true,
    }
  )
  return (
    <main className={styles.main}>
      <div>{params.experience}</div>
      <ExperienceMdx />
    </main>
  )
}

export async function generateStaticParams() {
  return [{ id: 'experience_01' }, { id: 'experience_01' }]
}
