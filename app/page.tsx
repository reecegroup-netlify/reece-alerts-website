import { draftMode } from 'next/headers'
import { request } from '@/lib/api/datocms'
import { PostListLayout } from 'layouts/PostListLayout'
import { PostModelOrderBy, PostsPaginatedDocument } from '@/lib/api/generated'
import { config } from '@/lib/config'

const { POSTS_PER_PAGE } = config

export default async function Page({ searchParams }) {
  const { isEnabled: includeDrafts } = draftMode()

  // current pagination page
  const currentPage = 1

  // amount to retrieve
  const first = POSTS_PER_PAGE

  // sort direction from searchParams
  const { sort } = searchParams
  const orderBy: PostModelOrderBy | PostModelOrderBy[] =
    sort && sort === 'ASC'
      ? PostModelOrderBy._FirstPublishedAtAsc
      : PostModelOrderBy._FirstPublishedAtDesc

  // skip
  const skip = (currentPage - 1) * POSTS_PER_PAGE

  // get the data
  const result = await request(PostsPaginatedDocument, { first, orderBy, skip }, includeDrafts)

  return <PostListLayout {...result} />
}
