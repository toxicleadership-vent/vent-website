import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

import type { Metadata, ResolvingMetadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { getTranslation } from '@/localization/i18n'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '600'],
})

export type PageParams = {
  lang: string,
}

export type PageProps = {
  params: PageParams
}

export async function generateMetadata(
  { params }: { params: {lang: string} },
  parent: ResolvingMetadata
): Promise<Metadata> {

  const { lang } = params
  const { t } = await getTranslation(lang, 'home', {
    keyPrefix: 'home.metadata',
  })

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
  
  return {
    title: t('title'),
    description: t('description'),
    robots: 'index, follow',
    icons: {
      icon: ['/images/favicon/favicon.ico'],
      apple: ['/images/favicon/apple-touch-icon.png?v=4'],
      shortcut: ['/images/favicons/apple-touch-icon.png'],
    },
    openGraph: {
      type: 'website',
      url: 'https://www.toxicleadershipvent.com',
      description: t('description'),
      siteName: t('siteName'),
      images: [t('image')],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@evandyou',
      images: { url: t('image'), alt: t('siteName') },
      title: t('siteName'),
      description: t('description'),
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
      <body className={`${poppins.variable}`}>
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  )
}

export async function generateStaticParams(): Promise<PageParams[]> {
  return [{ lang: 'en' }]
}
