import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import Footer from '@/components/footer/footer'

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

export const metadata: Metadata = {
  title: 'Vent',
  description:
    'VENT is a collaboration hub reducing the impact of toxic leadership on individuals, communities, businesses and the environment.',
  icons: {
    icon: ['/images/favicon/favicon.ico'],
    apple: ['/images/favicon/apple-touch-icon.png?v=4'],
    shortcut: ['/images/favicons/apple-touch-icon.png'],
  },
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://www.toxicleadershipvent.com',
    description:
      'VENT is a collaboration hub reducing the impact of toxic leadership on individuals, communities, businesses and the environment.',
    siteName: 'Vent about your boss',
    images: [
      {
        url: '/images/favicon/2.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@evandyou',
    images: { url: '/images/favicon/2.png', alt: 'vent - about the boss' },
    title: 'Vent - about the boss',
    description:
      'VENT is a collaboration hub reducing the impact of toxic leadership on individuals, communities, businesses and the environment.',
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
