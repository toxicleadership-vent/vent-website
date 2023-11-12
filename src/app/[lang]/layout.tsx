import 'bootstrap/dist/css/bootstrap.min.css'
import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Footer } from '@/components/footer/footer'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
  weight: ['400', '600']
})


export type PageParams = {
  lang: string
}

export type PageProps = {
  params: PageParams
}

export const metadata: Metadata = {
  title: 'Vent',
  description: 'about the toxic boss',
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
      <body
        className={`${poppins.variable}`}
      >
        {children}
        <Footer language={params.lang}/>
      </body>
    </html>
  )
}

export async function generateStaticParams(): Promise<PageParams[]> {
  return [{ lang: 'en' }]
}
