import './globals.css'

import Alert from '@/components/Alert'
import { config } from '@/lib/config'
import { draftMode } from 'next/headers'
import Footer from '@/components/Footer'
import getSiteUrl from '@/lib/utils/getSiteUrl'
import { GoogleTagManager } from '@next/third-parties/google'
import Header from '@/components/Header'
import { request } from '@/lib/api/datocms'
import { Metadata, Viewport } from 'next'
import getDeployContext from '@/lib/utils/getDeployContext'
import { SiteFaviconsDocument } from '@/lib/api/generated'

const { description, locale, siteNameWithReece, siteNameWithoutReece } = config.site

export const viewport: Viewport = {
  themeColor: '#003057',
}

export async function generateMetadata(): Promise<Metadata> {
  const { site } = await request(SiteFaviconsDocument)
  const title = `${siteNameWithoutReece} - Page 1`

  return {
    title: {
      template: `%s | ${siteNameWithoutReece}`,
      absolute: `${title} | Reece`,
    },
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      siteName: siteNameWithReece,
    },
    twitter: {
      title,
      description: description,
      card: 'summary',
    },
    description: description,
    metadataBase: new URL(getSiteUrl()),
    alternates: {
      canonical: '/',
      types: {
        'application/rss+xml': `/feed.rss`,
        'application/atom+xml': `/feed.atom`,
        'application/json': `/feed.json`,
      },
    },
    formatDetection: {
      telephone: false,
    },
    icons: {
      icon: site.icons.slice(1).map(({ attributes }) => ({
        url: attributes.href,
        type: attributes.type,
        sizes: attributes.sizes,
        rel: attributes.rel,
      })),
      shortcut: [site.icons[0].attributes.href],
      apple: site.appleTouchIcons.map(({ attributes }) => ({
        url: attributes.href,
        sizes: attributes.sizes,
      })),
    },
    // note robots are also set in netlify headers
    robots: {
      index: false, // instructs search engines not to index the page
      follow: true, // allows crawling all links on the page, and backlinks to them
      noarchive: true, // Prevents Google from showing a cached copy of the page in the SERP.
    },
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = draftMode()

  return (
    <html lang="en">
      <GoogleTagManager gtmId={config.gtmId} />
      <body className="bg-[#F4F5F6] text-[#575756]">
        <div className="min-h-screen">
          {getDeployContext() !== 'production' && <Alert preview={isEnabled} />}
          <Header />
          <main className="my-8 sm:my-9 md:my-10">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
