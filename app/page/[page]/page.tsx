import { draftMode } from 'next/headers'
import { request } from '@/lib/api/datocms'
import { PostListLayout } from 'layouts/PostListLayout'
import { config } from '@/lib/config'
import { Metadata } from 'next'
import {
  PostModelOrderBy,
  PostsAllCountDocument,
  PostsPaginatedDocument,
} from '@/lib/api/generated'

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
  params: { page: number }
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
      canonical: `/page/${currentPage}`,
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
  const { isEnabled: includeDrafts } = draftMode()

  // the current pagination page
  const { page: currentPage } = params

  // amount to retrieve
  const first = POSTS_PER_PAGE

  // sort direction from searchParams
  const { order } = searchParams
  const orderBy: PostModelOrderBy | PostModelOrderBy[] =
    order && order === 'ASC'
      ? PostModelOrderBy._FirstPublishedAtAsc
      : PostModelOrderBy._FirstPublishedAtDesc

  // skip
  const skip = (currentPage - 1) * POSTS_PER_PAGE

  // get the data
  const result = await request(PostsPaginatedDocument, { first, orderBy, skip }, includeDrafts)

  return <PostListLayout {...result} currentPage={currentPage} />
}
