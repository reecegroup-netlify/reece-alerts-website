"use client"

import { usePathname } from "next/navigation";
import Container from "./container";
import Link from "next/link";
import Panel from "./panel";
import DateTime from "./date-time";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

export interface PaginationProps {
  totalPosts: number
  postsPerPage: number
  currentPage: number
}

interface PostListProps {
  posts: any[];
  pagination: PaginationProps;
}

function Pagination({ totalPosts, postsPerPage, currentPage }: PaginationProps) {
  const pathname = usePathname();
  const basePath = pathname.split('/')[1]
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  const shownPostsStart = (currentPage * postsPerPage) - postsPerPage + 1;
  const shownPostsEnd = totalPosts > currentPage * postsPerPage ? currentPage * postsPerPage : totalPosts;
  const prevPage = currentPage > 1;
  const nextPage = currentPage <= totalPages
  const pageArray = Array.from({length: totalPages}, (_, i) => i + 1) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="mt-10 text-sm">
      <div className="grid gap-4 sm:grid-flow-col sm:auto-cols-max sm:place-content-between">
        <div className="sm:place-self-center">Showing <strong>{shownPostsStart}</strong> to <strong>{shownPostsEnd}</strong>{totalPages > 1 && <> of <strong>{totalPosts}</strong> results</>}</div>
        
        {totalPages > 1 && (
          <div className="sm:justify-self-end">
            <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
              {!prevPage && (
                <button className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300" disabled={!prevPage}>
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="w-5 h5" aria-hidden="true"/>
                </button>
              )}
              {prevPage && (
                <Link href={currentPage === 2 ? `/` : `/page/${currentPage - 1}`} className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" rel="prev">
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="w-5 h5" aria-hidden="true"/>
                </Link>
              )}

              {pageArray.map((pageNumber) => (
                pageNumber == currentPage ? 
                  (<button aria-current="page" className="relative z-10 inline-flex items-center bg-[#003057] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled>{pageNumber}</button>)
                : (<Link href={`/${basePath}/${pageNumber}`} className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">{pageNumber}</Link>)            
              ))}

              {!nextPage && (
                <button className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" disabled={!nextPage}>
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="w-5 h5" aria-hidden="true"/>
                </button>
              )}
              {nextPage && (
                <Link href={`/page/${(++currentPage)}`} className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0" rel="next">
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="w-5 h5" aria-hidden="true"/>
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

export default function PostList({ posts, pagination }: PostListProps) {
  return (
    <section>
      <Container>
        <Panel>
          <div className="py-10 px-4 md:px-6">
          
            <div className="relative py-2.5 md:py-4 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">

              {/* timeline line */}
              <div className="hidden absolute top-3 bottom-0 right-full mr-7 md:mr-[3.25rem] w-px bg-slate-200 dark:bg-slate-800 sm:block"></div>

              {posts.map((post) => (
                <article className="relative group mb-24" key={post.slug}>
                  <div className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50"></div>
                  
                  {/* timeline circle */}
                  <svg viewBox="0 0 9 9" className="hidden absolute right-full mr-6 top-2 text-slate-200 dark:text-slate-600 md:mr-12 w-[calc(0.5rem+1px)] h-[calc(0.5rem+1px)] overflow-visible sm:block"><circle cx="4.5" cy="4.5" r="4.5" stroke="currentColor" className="fill-white dark:fill-slate-900" strokeWidth="2"></circle></svg>

                  <div className="relative">

                    {/* title */}
                    <h3 className="text-base font-medium tracking-tight text-[#003057] mb-4 lg:mb-5">
                      {post.title}
                    </h3>

                    {/* meta */}
                    <dl className="lg:absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)] mb-4 lg:mb-5">
                      {post.posted && (
                        <>
                          <dt className="text-xs tracking-wide uppercase mb-2 lg:mb-2.5">Posted</dt>
                          <dd className="whitespace-nowrap text-sm mb-5 lg:mb-6">
                            <DateTime dateTimeString={post.posted} />
                          </dd>
                        </>
                      )}
                      {post.updated && (
                        <>
                          <dt className="text-xs tracking-wide uppercase mb-2 lg:mb-2.5">Updated</dt>
                          <dd className="whitespace-nowrap text-sm mb-5 lg:mb-6">
                            <DateTime dateTimeString={post.updated} />
                          </dd>
                        </>
                      )}
                      <dt className="text-xs tracking-wide uppercase mb-2 lg:mb-2.5">Status</dt>
                      <dd className="whitespace-nowrap text-sm mb-5 lg:mb-6">Status</dd>
                    </dl>

                    {/* excerpt */}
                    <div className="prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark mb-5 line-clamp-5 sm:line-clamp-4 md:line-clamp-3">
                      <p>{post.excerpt} {post.excerpt} {post.excerpt} {post.excerpt}</p>
                    </div>
                  </div>
                  <Link
                      className="flex items-center text-sm text-[#003057]"
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
            </div>
            <Pagination {...pagination} />    
          </div>
        </Panel>
      </Container>
    </section>
  );
}
