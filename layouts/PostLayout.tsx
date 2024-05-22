import Container from '../components/Container'
import Panel from '../components/Panel'
import { Post } from '@/components/Post'

export function PostLayout({ post }) {
  return (
    <Container>
      <Panel>
        <Post post={post} />
      </Panel>
    </Container>
  )
}
