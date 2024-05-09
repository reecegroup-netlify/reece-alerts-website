import Avatar from "./avatar";
import DateTime from "./date-time";
import CoverImage from "./cover-image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

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
    <article className="relative group min-h-[192px]">
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
          stroke-width="2"
        ></circle>
      </svg>
      <div className="relative">
        <h3 className="text-base font-medium tracking-tight text-[#003057] pt-8 lg:pt-0">
          {title}
        </h3>
        <div className="mt-5 mb-4 prose prose-slate prose-a:relative prose-a:z-10 dark:prose-dark line-clamp-2">
          <p>{excerpt}</p>
        </div>
        <dl className="absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
          {posted && (
            <>
              <dt className="text-xs tracking-wide mb-2 uppercase">Posted</dt>
              <dd className="whitespace-nowrap text-sm mb-5">
                <DateTime dateTimeString={posted} />
              </dd>
            </>
          )}
          {updated && (
            <>
              <dt className="text-xs tracking-wide mb-2 uppercase">Updated</dt>
              <dd className="whitespace-nowrap text-sm mb-5">
                <DateTime dateTimeString={updated} />
              </dd>
            </>
          )}
          <dt className="text-xs tracking-wide mb-2 uppercase">Status</dt>
          <dd className="whitespace-nowrap text-sm mb-5">Status</dd>
        </dl>
      </div>
      <Link
        className="flex items-center text-sm text-[#003057]"
        href={`/posts/${slug}`}
      >
        <span className="absolute -inset-y-2.5 -inset-x-4 md:-inset-y-4 md:-inset-x-6 sm:rounded-2xl"></span>
        <span className="relative">
          Read more<span className="sr-only">, {title}</span>
        </span>
        <ChevronRightIcon className="size-4 h-4 w-4 relative overflow-visible mt-px ml-1" />
      </Link>
    </article>
  );
}
