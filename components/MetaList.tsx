import clsx from 'clsx'
import MetaCategory, { Category } from './MetaCategory'
import MetaDateTime from './MetaDateTime'

function DescriptionTerm({ children }: React.HTMLAttributes<HTMLElement>) {
  return (
    <dt className="mb-1.5 text-[#7C7575] subheading-xs lg:mb-2">{children}</dt>
  )
}

function DescriptionDetails({ children }: React.HTMLAttributes<HTMLElement>) {
  return (
    <dd className="mb-4 whitespace-nowrap text-sm font-medium lg:mb-5">{children}</dd>
  )
}

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

  const initial = 'left-0 top-0 mb-4 lg:absolute lg:left-auto lg:right-full lg:mb-5 lg:mr-[calc(6.5rem+1px)]'
  const metaListClass = clsx(initial, className)

  return (
    <dl className={metaListClass} {...props}>
      {posted && (
        <>
          <DescriptionTerm>Posted</DescriptionTerm>
          <DescriptionDetails>
            <MetaDateTime dateTime={posted} />
          </DescriptionDetails>
        </>
      )}
      {updated && (
        <>
          <DescriptionTerm>
            Updated
          </DescriptionTerm>
          <DescriptionDetails>
            <MetaDateTime dateTime={updated} />
          </DescriptionDetails>
        </>
      )}
      <DescriptionTerm>
        Status
      </DescriptionTerm>
      <DescriptionDetails>
        <MetaCategory {...category} />
      </DescriptionDetails>
    </dl>
  )
}
