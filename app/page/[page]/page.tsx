import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'
import { request } from '@/lib/api/datocms'
import { PostListLayout } from 'layouts/PostListLayout'
import { config } from '@/lib/config'
import { Metadata } from 'next'
import {
  PostModelOrderBy,
  PostsAllCountDocument,
  PostsPaginatedDocument,
  SiteMetaTagsDocument,
} from '@/lib/api/generated'

const { POSTS_PER_PAGE } = config

export const generateStaticParams = async () => {
  const { postsAll } = await request(PostsAllCountDocument)

  const totalPages = Math.ceil(postsAll.count / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export async function generateMetadata({ params }: { params: { page: number } }) {
  const { site, blog } = await request(SiteMetaTagsDocument)
  const datoMetadata = toNextMetadata([...site.favicon, ...blog.seo])

  // the current pagination page
  const { page: currentPage } = params

  return {
    ...datoMetadata,
    title: {
      absolute: datoMetadata.title + ` — page ${currentPage}`,
    },
    openGraph: {
      ...datoMetadata.openGraph,
      title: datoMetadata.openGraph.title + ` — page ${currentPage}`,
    },
    twitter: {
      ...datoMetadata.twitter,
      title: datoMetadata.twitter.title + ` — page ${currentPage}`,
    },
    alternates: {
      canonical: `/posts/${currentPage}`,
    },
  } as Metadata
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
