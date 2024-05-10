import PostList from "@/components/post-list";
import Container from "../components/container";
import Header from "../components/header";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import Panel from "../components/panel";

const POSTS_PER_PAGE = 1

export function PostListLayout({ data }) {
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

  console.log(posts, pagination, initialDisplayPosts)

  return (
    <Container>
      <Panel>{posts.length > 0 && <PostList posts={posts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} />}</Panel>
    </Container>
  );
}
