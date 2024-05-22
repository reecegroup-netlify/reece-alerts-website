import PostList from '@/components/PostList'
import Container from '../components/Container'
import Panel from '../components/Panel'

export function PostListLayout({ posts, pagination }) {
  return (
    <Container>
      <Panel>
        <PostList posts={posts} pagination={pagination} />
      </Panel>
    </Container>
  )
}
