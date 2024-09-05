import { config } from '@/lib/config'
import { PageLayout } from '@/layouts/PageLayout'
import { Metadata } from 'next'
import Link from 'next/link'

const { locale, siteNameWithReece: siteName } = config.site

const title = '404'
const description = `This page could not be found.`

export function generateMetadata(): Metadata {
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
  }
}

export default function NotFound() {
  return (
    <PageLayout>
      <div className="prose mb-5 prose-a:relative prose-a:z-10" id="main-content">
        <h1>{title}</h1>
        <p className="lead">{description}</p>
        <ul>
          <li>
            <Link href={'/'}>Return to homepage</Link>
          </li>
        </ul>
      </div>
    </PageLayout>
  )
}
