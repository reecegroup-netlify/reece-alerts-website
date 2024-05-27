import MetaCategory, { Category } from './MetaCategory'
import MetaDateTime from './MetaDateTime'

interface MetaListProps extends React.HTMLAttributes<HTMLDListElement> {
  category: Category
  posted?: string
  updated?: string
}

export default function MetaList({
  category,
  posted,
  updated,
  children,
  className,
  ...props
}: MetaListProps) {
  const classNameDefault =
    'left-0 top-0 mb-4 lg:absolute lg:left-auto lg:right-full lg:mb-5 lg:mr-[calc(6.5rem+1px)] font-medium'

  return (
    <dl className={className ? `${classNameDefault} ${className}` : classNameDefault} {...props}>
      {posted && (
        <>
          <dt className="mb-2 subheading-xs text-[#7C7575] lg:mb-2.5">Posted</dt>
          <dd className="mb-5 whitespace-nowrap text-sm lg:mb-6">
            <MetaDateTime dateTime={posted} />
          </dd>
        </>
      )}
      {updated && (
        <>
          <dt className="mb-2 subheading-xs uppercase tracking-wide text-[#7C7575] lg:mb-2.5">Updated</dt>
          <dd className="mb-5 whitespace-nowrap text-sm lg:mb-6">
            <MetaDateTime dateTime={updated} />
          </dd>
        </>
      )}
      <dt className="mb-2 subheading-xs uppercase tracking-wide text-[#7C7575] lg:mb-2.5">Status</dt>
      <dd className="mb-5 whitespace-nowrap text-sm lg:mb-6">
        <MetaCategory {...category} />
      </dd>
    </dl>
  )
}
