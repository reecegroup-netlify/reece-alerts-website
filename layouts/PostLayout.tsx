import Container from "../components/container";
import Panel from "../components/panel";
import { Post } from "@/components/Post";

export function PostLayout({ post}) {
  return (
    <Container>
      <Panel><Post post={post} /></Panel>
    </Container>
  );
}
