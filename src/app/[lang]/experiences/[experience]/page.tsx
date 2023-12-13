import { ExperienceCategory } from '@/components/experiences/experiences-large'
import styles from '../page.module.css'
import { Container } from '@/components/bootstrap/bootstrap'
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
    { id: 'failed_by_the_system' },
    { id: 'fake_investigation' },
    { id: 'friend_to_foes' },
    { id: 'growth_over_culture' },
    { id: 'just_move_him' },
    { id: 'squeezed_to_the_last_drop' },
  ]
}
