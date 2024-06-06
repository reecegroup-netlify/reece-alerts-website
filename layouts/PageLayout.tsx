import Container from '@/components/Container'
import Panel from '@/components/Panel'

export function PageLayout({ children }) {
  return (
    <Container>
      <Panel>{children}</Panel>
    </Container>
  )
}
