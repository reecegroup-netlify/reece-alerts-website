import Header from "./header";
import HeroPost from "./hero-post";
import Intro from "./intro";
import MoreStories from "./more-stories";

export function PostIndex({ data }) {
  const { allPosts } = data;

  return (
    <>
      <Header />
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
    </>
  );
}
