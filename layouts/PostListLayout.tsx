import PostList, { PaginationProps } from '@/components/PostList'
import Container from '@/components/Container'
import Panel from '@/components/Panel'
import { config } from '@/lib/config'
import { PostsPaginatedQuery } from '@/lib/api/generated'

const { POSTS_PER_PAGE } = config

interface PostListLayoutProps extends PostsPaginatedQuery {
  currentPage?: number
}

export function PostListLayout({ postsPaginated, postsAll, currentPage = 1 }: PostListLayoutProps) {
  // build the pagination object
  const pagination: PaginationProps = {
    totalPosts: postsAll.count,
    postsPerPage: POSTS_PER_PAGE,
    currentPage: currentPage,
  }

  return (
    <Container>
      <Panel>
        <PostList postsPaginated={postsPaginated} pagination={pagination} />
      </Panel>
    </Container>
  )
}
