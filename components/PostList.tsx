"use client"

import { usePathname } from "next/navigation";
import Container from "./container";
import Link from "next/link";
import Panel from "./panel";
import PostPreview from "./post-preview";
import DateTime from "./date-time";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

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

  console.log(pathname, basePath)

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
          <Link href={`${basePath}/page/${currentPage + 1}`} rel="next">Next</Link>
        )}
      </nav>
    </div>
  )
}

export default function PostList({ posts, initialDisplayPosts, pagination }: PostListProps) {
  
  // If initialDisplayPosts exist, display it if no searchValue is specified
  const displayPosts =
    initialDisplayPosts.length > 0 ? initialDisplayPosts : posts

  return (
    <section>
      <Container>
        <Panel>
          <ul className="space-y-16">
            {displayPosts.map((post) => (
              <article className="relative group min-h-[192px]" key={post.slug}>
                <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
                <svg
                  viewBox="0 0 9 9"
                  className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"
                >
                  <circle
                    cx="4.5"
                    cy="4.5"
                    r="4.5"
                    stroke="currentColor"
                    className="fill-white dark:fill-slate-900"
                    strokeWidth="2"
                  ></circle>
                </svg>
                <div className="relative grid">
                  <h3 className="text-base font-medium tracking-tight text-[#003057] pt-4 lg:pt-0">
                    {post.title}
                  </h3>
                  <div className="mt-4 sm:mt-5 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-3">
                    <p>{post.excerpt}</p>
                  </div>
                  <dl className="mt-4 sm:mt-5 grid grid-cols-[max-content_auto] grid-rows-3 row-start-2 gap-x-4 gap-y-2 items-center sm:absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
                    {post.posted && (
                      <>
                        <dt className="text-xs tracking-wide sm:mb-2 uppercase">Posted</dt>
                        <dd className="whitespace-nowrap text-sm sm:mb-5">
                          <DateTime dateTimeString={post.posted} />
                        </dd>
                      </>
                    )}
                    {post.updated && (
                      <>
                        <dt className="text-xs tracking-wide sm:mb-2 uppercase">Updated</dt>
                        <dd className="whitespace-nowrap text-sm sm:mb-5">
                          <DateTime dateTimeString={post.updated} />
                        </dd>
                      </>
                    )}
                    <dt className="text-xs tracking-wide sm:mb-2 uppercase">Status</dt>
                    <dd className="whitespace-nowrap text-sm sm:mb-5">Status</dd>
                  </dl>
                </div>
                <Link
                  className="flex items-center text-sm text-[#003057] mt-3 sm:mt-4"
                  href={`/posts/${post.slug}`}
                >
                  <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
                  <span className="relative">
                    Read more<span className="sr-only">, {post.title}</span>
                  </span>
                  <ChevronRightIcon className="size-4 relative overflow-visible mt-px ml-1" />
                </Link>
              </article>
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
