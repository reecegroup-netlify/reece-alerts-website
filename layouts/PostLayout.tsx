import Container from '../components/Container'
import Panel from '../components/Panel'
import { Post } from '@/components/Post'

export function PostLayout({ data }) {
  /// post from queried data
  const { post } = data

  return (
    <Container>
      <Panel>
        <Post post={post} />
      </Panel>
    </Container>
  )
}
