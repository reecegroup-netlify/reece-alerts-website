'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { ChevronLeftIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/20/solid'
import React from 'react'
import MetaList from './MetaList'
import Button from './Button'

export interface PaginationProps {
  totalPosts: number
  postsPerPage: number
  currentPage: number
}

function Pagination({ totalPosts, postsPerPage, currentPage }: PaginationProps) {
  const pathname = usePathname()
  const basePath = pathname.split('/')[1]
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  const shownPostsStart = currentPage * postsPerPage - postsPerPage + 1
  const shownPostsEnd =
    totalPosts > currentPage * postsPerPage ? currentPage * postsPerPage : totalPosts
  const prevPage = currentPage > 1
  const nextPage = currentPage < totalPages
  const pageArray = Array.from({ length: totalPages }, (_, i) => i + 1) //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div className="mt-10 text-sm">
      <div className="grid gap-4 sm:auto-cols-max sm:grid-flow-col sm:place-content-between">
        <div className="sm:place-self-center">
          Showing <strong>{shownPostsStart}</strong> to <strong>{shownPostsEnd}</strong>
          {totalPages > 1 && (
            <>
              {' '}
              of <strong>{totalPosts}</strong> results
            </>
          )}
        </div>

        {totalPages > 1 && (
          <div className="sm:justify-self-end">
            <nav
              className="isolate inline-flex -space-x-px rounded-md shadow-sm"
              aria-label="Pagination"
            >
              {!prevPage && (
                <button
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300"
                  disabled={!prevPage}
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h5 w-5" aria-hidden="true" />
                </button>
              )}
              {prevPage && (
                <Link
                  href={currentPage === 2 ? `/` : `/page/${currentPage - 1}`}
                  className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  rel="prev"
                >
                  <span className="sr-only">Previous</span>
                  <ChevronLeftIcon className="h5 w-5" aria-hidden="true" />
                </Link>
              )}

              {pageArray.map((pageNumber) =>
                pageNumber == currentPage ? (
                  <button
                    key={`/page/${pageNumber}`}
                    aria-current="page"
                    className="relative z-10 inline-flex items-center bg-[#003057] px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled
                  >
                    {pageNumber}
                  </button>
                ) : (
                  <Link
                    key={`/page/${pageNumber}`}
                    href={`/page/${pageNumber}`}
                    className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  >
                    {pageNumber}
                  </Link>
                )
              )}

              {!nextPage && (
                <button
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0"
                  disabled={!nextPage}
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h5 w-5" aria-hidden="true" />
                </button>
              )}
              {nextPage && (
                <Link
                  href={`/page/${++currentPage}`}
                  className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                  rel="next"
                >
                  <span className="sr-only">Next</span>
                  <ChevronRightIcon className="h5 w-5" aria-hidden="true" />
                </Link>
              )}
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

interface PostListProps extends React.HTMLAttributes<HTMLDivElement> {
  postsPaginated: any[]
  pagination: PaginationProps
}

export default function PostList({ postsPaginated, pagination, ...props }: PostListProps) {
  return (
    <section {...props}>
      <div className="relative py-2.5 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] md:py-4 lg:ml-[max(calc(16.5rem+1px),calc(100%-48rem))]">
        {/* timeline line */}
        <div className="absolute bottom-0 right-full top-3 mr-7 hidden w-px bg-slate-200 sm:block md:mr-[3.25rem]"></div>

        {postsPaginated.map((post) => (
          <article className="group relative mb-24" key={post.slug}>
            <div className="absolute -inset-x-4 -inset-y-2.5 group-hover:bg-[#E6EAEE] sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"></div>

            {/* timeline circle */}
            <svg
              viewBox="0 0 9 9"
              className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 sm:block md:mr-12"
            >
              <circle
                cx="4.5"
                cy="4.5"
                r="4.5"
                stroke="currentColor"
                className="fill-white"
                strokeWidth="2"
              ></circle>
            </svg>

            <div className="relative">
              {/* title */}
              <h3 className="mb-4 font-medium text-[#003057] heading-lg lg:mb-5">{post.title}</h3>

              {/* meta */}
              <MetaList {...post} />

              {/* excerpt */}
              <div className="prose mb-5 line-clamp-5 prose-a:relative prose-a:z-10 sm:line-clamp-4 md:line-clamp-3">
                <p className="">
                  {post.excerpt}
                </p>
              </div>
            </div>

            <Button href={`/posts/${post.slug}`} styleVariant='text' className='font-medium hover:no-underline'>
              <span className='relative'>
                Read more<span className="sr-only">, {post.title}</span>
              </span>
              <ChevronRightIcon className="relative mt-px size-4 overflow-visible" />
              <span className="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"></span>
            </Button>
          </article>
        ))}
      </div>
      <Pagination {...pagination} />
    </section>
  )
}
