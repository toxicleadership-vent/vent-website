'use client'

import dynamic from 'next/dynamic'

export default function MdxLoader({ id }: { id: string }) {
  const ExperienceMdx = dynamic(() => import(`./getting-informed-${id}.mdx`), {
    ssr: false,
  })
  return <ExperienceMdx />
}
