import Header from "./header";
import PostList from "./PostList";
import PostBody from "./post-body";
import PostHeader from "./post-header";
import SectionSeparator from "./section-separator";

export function PostPage({ data }) {
  const { post, posts } = data;

  return (
    <>
      <article>
        <PostHeader
          title={post.title}
          // coverImage={post.coverImage}
          updated={post.updated}
          posted={post.posted}
          // author={post.author}
        />
        <PostBody content={post.content} />
      </article>
      <SectionSeparator />
      {posts.length > 0 && <PostList posts={posts} />}
    </>
  );
}