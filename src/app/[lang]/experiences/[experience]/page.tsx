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
      <ExperienceMdx />
    </main>
  )
}

export async function generateStaticParams() {
  return [
    { id: 'experience_1' },
    { id: 'experience_2' },
    { id: 'experience_3' },
    // { id: 'experience_4' },
    { id: 'experience_5' },
    // { id: 'experience_6' },
  ]
}
