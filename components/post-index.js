import Container from "./container";
import Header from "./header";
import HeroPost from "./hero-post";
import Intro from "./intro";
import MoreStories from "./more-stories";
import Panel from "./panel";

export function PostIndex({ data }) {
  const { allPosts } = data;

  return (
    <Container>
      <Panel>{allPosts.length > 0 && <MoreStories posts={allPosts} />}</Panel>
    </Container>
  );
}
