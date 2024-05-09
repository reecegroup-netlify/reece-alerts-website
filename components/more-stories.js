import Container from "./container";
import Panel from "./panel";
import PostPreview from "./post-preview";

export default function MoreStories({ posts }) {
  return (
    <section>
      <Container>
        <Panel>
          <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
            {/* More Stories */}
          </h2>

          {/* <div className="relative sm:pb-12 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
            <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div> */}

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
