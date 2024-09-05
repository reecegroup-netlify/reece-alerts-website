import { request } from '@/lib/api/datocms'
import { config } from '@/lib/config'
import { Metadata } from 'next'
import { PostModelOrderBy, PostsAllCountDocument } from '@/lib/api/generated'
import { PostsPaginated } from '@/components/server/PostsPaginated'

const { POSTS_PER_PAGE } = config
const { siteNameWithReece: siteName, siteNameWithoutReece, description, locale } = config.site

export const generateStaticParams = async () => {
  const { postsAll } = await request(PostsAllCountDocument)
  const totalPages = Math.ceil(postsAll.count / POSTS_PER_PAGE)
  return Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))
}

export async function generateMetadata({
  params,
}: {
  params: { page: string }
}): Promise<Metadata> {
  // the current pagination page
  const { page: currentPage } = params
  const title = `${siteNameWithoutReece} - Page ${currentPage}`

  return {
    title: { absolute: `${title} | Reece` },
    openGraph: {
      title,
      description,
      locale,
      type: 'website',
      siteName,
      // publishedTime: posted,
      // modifiedTime: updated,
      // tags: [category.name],
    },
    twitter: {
      title,
      description,
      card: 'summary',
    },
    description,
    alternates: {
      canonical: currentPage === '1' ? '/' : `/page/${currentPage}`,
      types: {
        'application/rss+xml': `/feed.rss`,
        'application/atom+xml': `/feed.atom`,
        'application/json': `/feed.json`,
      },
    },
  }
}

export default async function Page({
  params,
  searchParams,
}: {
  params: { page: number }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // the current pagination page
  const { page: currentPage } = params

  // sort direction from searchParams
  const { order } = searchParams

  // skip
  const skip = (currentPage - 1) * POSTS_PER_PAGE

  const variables = {
    ...(order && order === 'ASC' && { orderBy: PostModelOrderBy._FirstPublishedAtAsc }),
    ...(skip && { skip: skip }),
  }

  if (variables) {
    return <PostsPaginated {...variables} currentPage={currentPage} />
  }

  return <PostsPaginated />
}
