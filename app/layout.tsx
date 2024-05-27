import './globals.css'

import Alert from '@/components/alert'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import getSiteUrl from '@/lib/utils/getSiteUrl'
import { Metadata } from 'next'

import { draftMode } from 'next/headers'

export const metadata: Metadata = {
  alternates: {
    canonical: getSiteUrl(),
    types: {
      'application/rss+xml': `${getSiteUrl()}/feed.rss`,
      "application/atom+xml": `${getSiteUrl()}/feed.atom`,
      "application/json": `${getSiteUrl()}/feed.json`,
    },
  }
}

export default function RootLayout({ children }) {
  const { isEnabled } = draftMode()

  return (
    <html lang="en">
      <body className="color-[#575756] bg-[#F4F5F6]">
        <div className="min-h-screen">
          <Alert preview={isEnabled} />
          <Header />
          <main className="my-8 sm:my-9 md:my-10">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
