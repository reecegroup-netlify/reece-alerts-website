import PostList, { PaginationProps } from '@/components/PostList'
import Container from '../components/Container'
import Panel from '../components/Panel'
import { config } from '@/lib/config'

const { POSTS_PER_PAGE } = config

export function PostListLayout({ data, currentPage = 1 }) {

  // query posts paginated  + posts all
  const { postsPaginated, postsAll } = data

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
