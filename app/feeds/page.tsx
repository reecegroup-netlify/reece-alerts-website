import { PageLayout } from '@/layouts/PageLayout'
import { config } from '@/lib/config'
import Link from 'next/link'
import { Metadata } from 'next'
import { performRequest } from '@/lib/api/datocms'
import { getFaviconMetaTagsSite } from '@/lib/api/queries/getFaviconMetaTagsSite'
import { getMetaTagsBlog } from '@/lib/api/queries/getMetaTagsBlog'
import { toNextMetadata } from 'react-datocms/seo'

const PAGE_TITLE = 'Web Feed'
const PAGE_DESCRIPTION = `Subscribe to ${config.SITE_TITLE} syndicated web feed`

export async function generateMetadata() {
  const { site } = await performRequest(getFaviconMetaTagsSite())
  const { blog } = await performRequest(getMetaTagsBlog())
  const datoMetadata = toNextMetadata([...site.favicon, ...blog.seo])

  return {
    ...datoMetadata,
    description: PAGE_DESCRIPTION,
    title: {
      default: PAGE_TITLE,
      template: '%s | Reece Incident & Alert Communications',
    },
    openGraph: {
      ...datoMetadata.openGraph,
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
    },
    twitter: {
      ...datoMetadata.twitter,
      title: PAGE_TITLE,
      description: PAGE_DESCRIPTION,
    },
    alternates: {
      canonical: `/feeds`
    }
  } as Metadata
}

export default async function Page() {
  return (
    <PageLayout>
      <div className="prose mb-5 prose-a:relative prose-a:z-10" id="main-content">
        <h1>{PAGE_TITLE}</h1>
        <p className="lead">{PAGE_DESCRIPTION}</p>
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
