import './globals.css'

import Alert from '@/components/Alert'
import { config } from '@/lib/config'
import { draftMode } from 'next/headers'
import Footer from '@/components/Footer'
import getSiteUrl from '@/lib/utils/getSiteUrl'
import { GoogleTagManager } from '@next/third-parties/google'
import Header from '@/components/Header'
import { toNextMetadata } from 'react-datocms/seo'
import { performRequest } from '@/lib/api/datocms'
import { getFaviconMetaTagsSite } from '@/lib/api/queries/getFaviconMetaTagsSite'
import { getMetaTagsBlog } from '@/lib/api/queries/getMetaTagsBlog'
import { Metadata } from 'next'

export async function generateMetadata() {
  const { site } = await performRequest(getFaviconMetaTagsSite())
  const { blog } = await performRequest(getMetaTagsBlog())
  const datoMetadata = toNextMetadata([...site.favicon, ...blog.seo])

  return {
    ...datoMetadata,
    title: {
      template: '%s | Reece Incident & Alert Communications',
      absolute: datoMetadata.title,
    },
    metadataBase: new URL(getSiteUrl()),
    alternates: {
      canonical: '/',
      types: {
        'application/rss+xml': `/feed.rss`,
        'application/atom+xml': `/feed.atom`,
        'application/json': `/feed.json`,
      },
    },
  } as Metadata
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode()

  return (
    <html lang="en">
      <GoogleTagManager gtmId={config.gtmId} />
      <body className="bg-[#F4F5F6] text-[#575756]">
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
