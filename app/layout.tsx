import './globals.css'

import Alert from '@/components/alert'
import { config } from '@/lib/config'
import { draftMode } from 'next/headers'
import Footer from '@/components/Footer'
import getSiteUrl from '@/lib/utils/getSiteUrl'
import { GoogleTagManager } from '@next/third-parties/google'
import Header from '@/components/Header'
import { Metadata } from 'next'




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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode()

  return (
    <html lang="en">
      <GoogleTagManager gtmId={config.gtmId} />
      <body className="text-[#575756] bg-[#F4F5F6]">
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
