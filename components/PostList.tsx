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
  const shownPostsEnd = currentPage * postsPerPage;
  const prevPage = currentPage > 1;
  const nextPage = currentPage <= totalPages
  const pageArray = Array.from({length: totalPages}, (_, i) => i + 1) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="mt-10">
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
                  (<button aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" disabled>{pageNumber}</button>)
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
              
              {/* <!-- Current: "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" --> */}
              {/* <a href="#" aria-current="page" className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">1</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">2</a>
              <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">3</a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">...</span>
              <a href="#" className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex">8</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">9</a>
              <a href="#" className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">10</a>

              <a href="#" className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                <span className="sr-only">Next</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd"></path>
                </svg>
              </a> */}
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
          <div className="py-10">
            <ul className="space-y-16">
              {posts.map((post) => (
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
                    <dl className="mt-4 sm:mt-5 grid grid-cols-[max-content_auto] grid-rows-3 row-start-2 gap-x-4 gap-y-2 items-center lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
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
            <Pagination {...pagination} />    
          </div>  
        </Panel>
      </Container>
    </section>
  );
}
