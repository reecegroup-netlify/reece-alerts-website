import './globals.css'

import Alert from '@/components/Alert'
import { config } from '@/lib/config'
import { draftMode } from 'next/headers'
import Footer from '@/components/Footer'
import getSiteUrl from '@/lib/utils/getSiteUrl'
import { GoogleTagManager } from '@next/third-parties/google'
import Header from '@/components/Header'
import { Metadata, Viewport } from 'next'

const { description, locale, siteNameWithReece, siteNameWithoutReece } = config.site

export const viewport: Viewport = {
  themeColor: '#003057',
}

export function metadata(): Metadata {
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
      icon: [
        {
          sizes: '32x32',
          rel: 'icon', // @todo move these to the public directory
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=32&w=32'
        },
        {
          sizes: '96x96',
          rel: 'icon',
          type: 'image/png',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=96&w=96'
        },
        {

          sizes: '192x192',
          rel: 'icon',
          type: 'image/png',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=192&w=192'

        },
        {
          sizes: '16x16',
          rel: 'icon',
          type: 'image/png',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=16&w=16'
        },
        {
          sizes: '32x32',
          rel: 'icon',
          type: 'image/png',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=32&w=32'
        },
        {
          sizes: '96x96',
          rel: 'icon',
          type: 'image/png',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=96&w=96'
        },
        {

          sizes: '192x192',
          rel: 'icon',
          type: 'image/png',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=192&w=192'

        }
      ],
      shortcut: [
        'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=16&w=16'],
      apple: [
        {
          sizes: '57x57',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=57&w=57'
        },
        {
          sizes: '60x60',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=60&w=60'
        },
        {

          sizes: '72x72',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=72&w=72'

        },
        {

          sizes: '76x76',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=76&w=76'

        },
        {

          sizes: '114x114',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=114&w=114'

        },
        {

          sizes: '120x120',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=120&w=120'

        },
        {

          sizes: '144x144',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=144&w=144'

        },
        {

          sizes: '152x152',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=152&w=152'
        },
        {

          sizes: '180x180',
          url: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?auto=format&h=180&w=180'
        }],
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
          {isEnabled && <Alert preview={isEnabled} />}
          <Header />
          <main className="my-8 sm:my-9 md:my-10">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  )
}
