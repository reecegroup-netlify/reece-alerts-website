"use client"

import { usePathname } from "next/navigation";
import Container from "./container";
import Link from "next/link";
import Panel from "./panel";
import PostPreview from "./post-preview";

export interface PaginationProps {
  totalPages: number
  currentPage: number
}

interface PostListProps {
  posts: any[];
  initialDisplayPosts?: any[];
  pagination?: PaginationProps;
}

function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split('/')[1]
  const prevPage = currentPage - 1 > 0;
  const nextPage = currentPage + 1 <= totalPages

  return (
    <div>
      <nav>
        {!prevPage && (
          <button disabled={!prevPage}>Prev</button>
        )}
        {prevPage && (
          <Link href={currentPage -1 === 1 ? `/${basePath}` : `/${basePath}/page/${currentPage - 1}`} rel="prev">Prev</Link>
        )}
        <span>{currentPage} of {totalPages}</span>
        {!nextPage && (
          <button disabled={!nextPage}>Next</button>
        )}
        {nextPage && (
          <Link href={`/${basePath}/page/${currentPage + 1}`} rel="next">Next</Link>
        )}
      </nav>
    </div>
  )
}

export default function PostList({ posts, initialDisplayPosts, pagination }: PostListProps) {
  
  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 && initialDisplayPosts


  return (
    <section>
      <Container>
        <Panel>
          <ul className="space-y-16">
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
          </ul>
          {pagination && pagination.totalPages > 1 && (
        <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
      )}
        </Panel>
      </Container>
    </section>
  );
}
