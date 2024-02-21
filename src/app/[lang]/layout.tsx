import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

import { Analytics } from '@vercel/analytics/react'
import type { Metadata, ResolvingMetadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/footer'
import { getTranslation } from '@/localization/i18n'
import styles from './page.module.css'
import Image from 'next/image'
import logo2 from '../../../public/images/home/eu_logo.jpeg'
import logo4 from '../../../public/images/home/berlin_logo.png'
import logo1 from '../../../public/images/home/hwr_sib_logo_1.jpg'
import logo3 from '../../../public/images/home/esf_logo_land_berlin.png'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '600'],
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
  const { t } = await getTranslation(lang, 'home', {
    keyPrefix: 'home.metadata',
  })

  return {
    metadataBase: new URL('https://www.toxicleadershipvent.com'),
    alternates: {
      canonical: '/',
      languages: {
        en: '/en',
      },
    },
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
      images: t('image'),
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
        <div className={styles.logo}>
          <Image src={logo1} height={100} width={120} alt="logo SIB" />
          <Image src={logo2} height={100} width={120} alt="logo EU" />
          <Image src={logo3} height={100} width={120} alt="logo ESF Berlin" />
          <Image src={logo4} height={100} width={120} alt="logo Berlin" />
        </div>
        <Analytics />
      </body>
    </html>
  )
}

export async function generateStaticParams(): Promise<PageParams[]> {
  return [{ lang: 'en' }]
}
