import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'

import { performRequest } from '@/lib/api/datocms'

import { DraftPostIndex } from '@/components/draft-post-index'
import { PostListLayout } from 'layouts/PostListLayout'
import { PaginationProps } from '@/components/PostList'
import { config } from '@/lib/config'
import { getPostsAll } from '@/lib/api/queries/getPostsAll'
import { getPostsPaginated } from '@/lib/api/queries/getPostsPaginated'
import { getFaviconMetaTagsSite } from '@/lib/api/queries/getFaviconMetaTagsSite'
import { getMetaTagsBlog } from '@/lib/api/queries/getMetaTagsBlog'
import { Metadata } from 'next'

const { POSTS_PER_PAGE } = config

export const generateStaticParams = async () => {
  const { postsAll } = await performRequest(getPostsAll())

  const totalPages = Math.ceil(postsAll.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

export async function generateMetadata({
  params,
}: {
  params: { page: number }
}) {
  const { site } = await performRequest(getFaviconMetaTagsSite())
  const { blog } = await performRequest(getMetaTagsBlog())
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
      canonical: `/posts/${currentPage}`
    }
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

  // sort direction from searchParams
  const { sort } = searchParams
  const sortDirection = sort && sort === 'ASC' ? 'ASC' : 'DESC'

  // query posts paginated  + posts all
  const { postsPaginated } = await performRequest(
    getPostsPaginated(includeDrafts, currentPage, sortDirection)
  )
  const { postsAll } = await performRequest(getPostsAll())

  // build the pagination object
  const pagination: PaginationProps = {
    totalPosts: postsAll.length,
    postsPerPage: POSTS_PER_PAGE,
    currentPage: currentPage,
  }

  // if (isEnabled) {
  //   return (
  //     <DraftPostIndex
  //       subscription={{
  //         ...pageRequest,
  //         initialDisplayPosts: initialDisplayPosts,
  //         token: process.env.NEXT_DATOCMS_API_TOKEN,
  //         environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
  //       }}
  //     />
  //   );
  // }

  return <PostListLayout posts={postsPaginated} pagination={pagination} />
}
