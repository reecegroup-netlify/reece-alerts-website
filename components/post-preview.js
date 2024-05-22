import Avatar from './avatar'
import DateTime from './date-time'
import CoverImage from './cover-image'
import Link from 'next/link'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

export default function PostPreview({
  title,
  // coverImage,
  posted,
  updated,
  excerpt,
  // author,
  slug,
}) {
  return (
    <article className="group relative min-h-[192px]">
      <div className="absolute -inset-x-4 -inset-y-2.5 group-hover:bg-slate-50/70 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4 dark:group-hover:bg-slate-800/50"></div>
      <svg
        viewBox="0 0 9 9"
        className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 sm:block md:mr-12 dark:text-slate-600"
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
        <h3 className="pt-4 text-base font-medium tracking-tight text-[#003057] lg:pt-0">
          {title}
        </h3>
        <div className="dark:prose-dark prose prose-slate mt-4 line-clamp-3 prose-a:relative prose-a:z-10 sm:mt-5">
          <p>{excerpt}</p>
        </div>
        <dl className="left-0 top-0 row-start-2 mt-4 grid grid-cols-[max-content_auto] grid-rows-3 items-center gap-x-4 gap-y-2 sm:absolute sm:mt-5 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
          {posted && (
            <>
              <dt className="text-xs uppercase tracking-wide sm:mb-2">Posted</dt>
              <dd className="whitespace-nowrap text-sm sm:mb-5">
                <DateTime dateTimeString={posted} />
              </dd>
            </>
          )}
          {updated && (
            <>
              <dt className="text-xs uppercase tracking-wide sm:mb-2">Updated</dt>
              <dd className="whitespace-nowrap text-sm sm:mb-5">
                <DateTime dateTimeString={updated} />
              </dd>
            </>
          )}
          <dt className="text-xs uppercase tracking-wide sm:mb-2">Status</dt>
          <dd className="whitespace-nowrap text-sm sm:mb-5">Status</dd>
        </dl>
      </div>
      <Link
        className="mt-3 flex items-center text-sm text-[#003057] sm:mt-4"
        href={`/posts/${slug}`}
      >
        <span className="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4"></span>
        <span className="relative">
          Read more<span className="sr-only">, {title}</span>
        </span>
        <ChevronRightIcon className="relative ml-1 mt-px size-4 overflow-visible" />
      </Link>
    </article>
  )
}
