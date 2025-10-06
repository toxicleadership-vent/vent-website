import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata, ResolvingMetadata } from 'next'
import { Poppins } from 'next/font/google'
import { Work_Sans } from 'next/font/google'
import Footer from '@/components/footer/footer'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '600', '700'],
})

const worksans = Work_Sans({
  subsets: ['latin'],
  variable: '--font-workSans',
  display: 'swap',
  weight: ['400', '600', '700'],
})

export type PageParams = {
  lang: string
}

export type PageProps = {
  params: PageParams
}

export async function generateMetadata(
  { params }: { params: { lang: string } },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { lang } = params
  const metadataCopy = await fetch(`https://typical-dogs-185f9ff416.strapiapp.com/api/home?locale=${lang}&populate[metadata][populate]=*`)
  
  const {data : metadata} = await metadataCopy.json();

  return {
    metadataBase: new URL('https://www.toxicleadershipvent.com'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
      },
    },
    title: metadata.title,
    description: metadata.description,
    robots: 'index, follow',
    icons: {
      icon: ['/images/favicon/favicon.ico'],
      apple: ['/images/favicon/apple-touch-icon.png?v=4'],
      shortcut: ['/images/favicons/apple-touch-icon.png'],
    },
    openGraph: {
      type: 'website',
      url: 'https://www.toxicleadershipvent.com',
      description: metadata.description,
      siteName: metadata.title,
      images: metadata.image,
    },
    twitter: {
      card: 'summary_large_image',
      site: '@evandyou',
      images: { url: metadata.image, alt: metadata.title},
      title: metadata.title,
      description: metadata.description,
    },
    keywords: [
      'workplace',
      'abuse',
      'toxic',
      'leadership',
      'solution',
      'mental',
      'health',
      'depression',
      'struggle',
      'HR',
      'wellbeing',
      'work',
      'psychological',
      'safety',
      'psychopath',
      'dark',
      'triad',
      'traits',
      'tetrad',
      'research',
      'collaboration',
      'sociopath',
      'personality',
      'disorder',
      'new work',
      'therapy',
      'coaching',
      'employment',
      'hierarchy',
      'unemployment',
      'benefits',
      'disability',
      'change',
      'support',
      'workshops',
      'training',
      'stories',
      'survivors',
      'witness',
      'bystander',
      'victim',
    ],
  }
}
//     'workplace',
//     'abuse',
//     'toxic',
//     'leadership',
//     'solution',
//     'mental',
//     'health',
//     'depression',
//     'struggle',
//     'HR',
//     'wellbeing',
//     'work',
//     'psychological',
//     'safety',
//     'psychopath',
//     'dark',
//     'triad',
//     'traits',
//     'tetrad',
//     'research',
//     'collaboration',
//     'sociopath',
//     'personality',
//     'disorder',
//     'new work',
//     'therapy',
//     'coaching',
//     'employment',
//     'hierarchy',
//     'unemployment',
//     'benefits',
//     'disability',
//     'change',
//     'support',
//     'workshops',
//     'training',
//     'stories',
//     'survivors',
//     'witness',
//     'bystander',
//     'victim',

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: string }
}) {
  return (
    <html lang={params.lang}>
      <body className={`${poppins.variable} ${worksans.variable}`}>
        {children}
        <Footer lang={params.lang} />
        <Analytics />
      </body>
    </html>
  )
}

export async function generateStaticParams(): Promise<PageParams[]> {
  return [{ lang: 'en' }]
}
