'use client'

import dynamic from 'next/dynamic'

export default function MdxLoader({ experience }: { experience: string }) {
  const ExperienceMdx = dynamic(() => import(`./${experience}.mdx`), {
    ssr: false,
  })
  return <ExperienceMdx />
}
