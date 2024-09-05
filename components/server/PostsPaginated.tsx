import { PostsPaginatedList, PaginationProps } from '@/components/PostsPaginatedList'
import Container from '@/components/Container'
import Panel from '@/components/Panel'
import {
  PostModelOrderBy,
  PostsPaginatedDocument,
  PostsPaginatedQueryVariables,
} from '@/lib/api/generated'
import { request } from '@/lib/api/datocms'
import { config } from '@/lib/config'
import { draftMode } from 'next/headers'

interface PostsPaginatedProps {
  currentPage?: number
  variables?: PostsPaginatedQueryVariables
}

const { POSTS_PER_PAGE } = config

const defaultVariables = {
  first: POSTS_PER_PAGE,
  orderBy: PostModelOrderBy._FirstPublishedAtDesc,
  skip: 0,
}

const PostsPaginated = async ({
  currentPage = 1,
  variables = defaultVariables,
}: PostsPaginatedProps) => {
  const { isEnabled: includeDrafts } = draftMode()

  // query the posts data
  const { postsAll, postsPaginated } = await request(
    PostsPaginatedDocument,
    variables,
    includeDrafts
  )

  // build the pagination object
  const pagination: PaginationProps = {
    totalPosts: postsAll.count,
    postsPerPage: POSTS_PER_PAGE,
    currentPage: currentPage,
  }

  return (
    <Container>
      <Panel>
        <PostsPaginatedList postsPaginated={postsPaginated} pagination={pagination} />
      </Panel>
    </Container>
  )
}

export { PostsPaginated }
