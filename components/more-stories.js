import Container from "./container";
import Panel from "./panel";
import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <Container>
        <Panel>
          <div className="space-y-16">
            {posts.map((post) => (
              <PostPreview
                key={post.slug}
                title={post.title}
                // coverImage={post.coverImage}
                updated={post.updated}
                posted={post.posted}
                // author={post.author}
                slug={post.slug}
                excerpt={post.excerpt}
              />
            ))}
          </div>
          {/* </div> */}
        </Panel>
      </Container>
    </section>
  );
}
