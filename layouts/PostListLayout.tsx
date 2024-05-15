import PostList from "@/components/PostList";
import Container from "../components/container";
import Panel from "../components/panel";

export function PostListLayout({ posts, pagination}) {
  return (
    <Container>
      <Panel><PostList posts={posts} pagination={pagination} /></Panel>
    </Container>
  );
}
