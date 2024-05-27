import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'

import { performRequest } from '@/lib/api/datocms'

import { DraftPostIndex } from '@/components/draft-post-index'
import { PostListLayout } from 'layouts/PostListLayout'
import { PaginationProps } from '@/components/PostList'
import { config } from '@/lib/config'
import { getPostsAll } from '@/lib/api/queries/getPostsAll'
import { getPostsPaginated } from '@/lib/api/queries/getPostsPaginated'

const { POSTS_PER_PAGE } = config

// export async function generateMetadata() {
//   const data = await performRequest(getPageRequest());

//   return toNextMetadata([...site.favicon, ...blog.seo]);
// }

export default async function Page({ searchParams }) {
  const { isEnabled: includeDrafts } = draftMode()

  // the current pagination page
  const currentPage = 1

  // sort direction from searchParams
  const { sort } = searchParams
  const sortDirection = sort && sort === 'ASC' ? 'ASC' : 'DESC'

  // query posts paginated  + posts all
  const { postsPaginated } = await performRequest(getPostsPaginated(includeDrafts, currentPage, sortDirection))
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
  //         initialData: data,
  //         token: process.env.NEXT_DATOCMS_API_TOKEN,
  //         environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
  //       }}
  //     />
  //   );
  // }

  return <PostListLayout posts={postsPaginated} pagination={pagination} />
}
