import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'

import { performRequest } from '@/lib/api/datocms'

import { DraftPostList } from '@/components/DraftPostList'
import { PostListLayout } from 'layouts/PostListLayout'
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

  const pageRequest = getPostsPaginated(includeDrafts, currentPage, sortDirection)
  const data = await performRequest(pageRequest)

  if (includeDrafts) {
    return (
      <DraftPostList
        subscription={{
          ...pageRequest,
          initialData: data,
          token: process.env.NEXT_DATOCMS_API_TOKEN,
          environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
        }}
        currentPage={currentPage}
      />
    );
  }

  return <PostListLayout data={data} currentPage={currentPage} />
}
