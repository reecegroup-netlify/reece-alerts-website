import Container from "./container";
import Header from "./header";
import HeroPost from "./hero-post";
import Intro from "./intro";
import {MoreStories} from "./more-stories";
import Panel from "./panel";

const POSTS_PER_PAGE = 1

export function PostIndex({ data }) {
  const { posts } = data;
  const pageNumber = 1;
  const initialDisplayPosts = posts.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  )

  const pagination = {
    currentPage: pageNumber,
    totalPages: Math.ceil(posts.length / POSTS_PER_PAGE)
  }

  return (
    <Container>
      <Panel>{allPosts.length > 0 && <MoreStories posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} />}</Panel>
    </Container>
  );
}
