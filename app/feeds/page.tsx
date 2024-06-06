import { PageLayout } from '@/layouts/PageLayout'
import { config } from '@/lib/config'
import Link from 'next/link'
import { Metadata } from 'next'

const { locale, siteNameWithReece: siteName } = config.site

const title = 'Web Feed'
const description = `Subscribe to ${siteName} syndicated web feed`

export async function generateMetadata() {
  return {
    title,
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      siteName,
    },
    twitter: {
      title,
      description,
      card: 'summary',
    },
    description,
    alternates: {
      canonical: '/feeds',
      types: {
        'application/rss+xml': `/feed.rss`,
        'application/atom+xml': `/feed.atom`,
        'application/json': `/feed.json`,
      },
    },
  } as Metadata
}

export default async function Page() {
  return (
    <PageLayout>
      <div className="prose mb-5 prose-a:relative prose-a:z-10" id="main-content">
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        {/* <h2>Formats:</h2> */}
        <ul>
          <li>
            <Link href={'/feed.rss'}>
              <abbr title="Really Simple Syndication">RSS</abbr>
            </Link>
          </li>
          <li>
            <Link href={'/feed.atom'}>Atom</Link>
          </li>
          <li>
            <Link href={'/feed.json'}>
              <abbr title="JavaScript Object Notation">JSON</abbr> Feed
            </Link>
          </li>
        </ul>
      </div>
    </PageLayout>
  )
}
