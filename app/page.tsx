import { draftMode } from 'next/headers'
import { performRequest } from '@/lib/api/datocms'
import { DraftPostList } from '@/components/DraftPostList'
import { PostListLayout } from 'layouts/PostListLayout'
import { getPostsPaginated } from '@/lib/api/queries/getPostsPaginated'

export default async function Page({ searchParams }) {
  const { isEnabled: includeDrafts } = draftMode()

  // the current pagination page
  const currentPage = 1

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
      />
    )
  }

  return <PostListLayout data={data} />
}
