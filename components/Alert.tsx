import Container from './Container'
import cn from 'classnames'

export default function Alert({ preview }) {
  return (
    <div
      className={cn('border-b', {
        'bg-[#6FB1C8] text-white': preview,
        'bg-[#E6EAEE]': !preview,
      })}
    >
      <Container>
        <div className="py-2 text-center text-sm">
          {preview ? (
            <>
              This is page is showing draft content.{' '}
              <a href="/api/exit-draft" className="underline transition-colors duration-200">
                Click here to exit preview mode.
              </a>
            </>
          ) : (
            <>
              This is page is showing published content.{' '}
              <a
                href={`/api/draft?secret=${process.env.NEXT_DATOCMS_PREVIEW_SECRET}`}
                className="underline transition-colors duration-200"
              >
                Click here to enter preview mode!
              </a>
            </>
          )}
        </div>
      </Container>
    </div>
  )
}
