import { StructuredText, Image as DatocmsImage } from 'react-datocms'
import DateTime from './date-time'
import Container from './Container'
import Panel from './Panel'

export function Post({ post }) {
  return (
    <article>
      <Container>
        <Panel>
          <div className="px-4 py-10 md:px-6">
            <div className="relative py-2.5 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] md:py-4 lg:ml-[max(calc(14.5rem+1px),calc(100%-48rem))]">
              {/* timeline line */}
              <div className="absolute bottom-0 right-full top-3 mr-7 hidden w-px bg-slate-200 sm:block md:mr-[3.25rem] dark:bg-slate-800"></div>

              <div className="group relative mb-24" key={post.slug}>
                {/* timeline circle */}
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

                <div className="relative">
                  {/* title */}
                  <h1 className="mb-4 text-2xl font-medium tracking-tight text-[#003057] lg:mb-5">
                    {post.title}
                  </h1>

                  {/* meta */}
                  <dl className="left-0 top-0 mb-4 lg:absolute lg:left-auto lg:right-full lg:mb-5 lg:mr-[calc(6.5rem+1px)]">
                    {post.posted && (
                      <>
                        <dt className="mb-2 text-xs uppercase tracking-wide lg:mb-2.5">Posted</dt>
                        <dd className="mb-5 whitespace-nowrap text-sm lg:mb-6">
                          <DateTime dateTimeString={post.posted} />
                        </dd>
                      </>
                    )}
                    {post.updated && (
                      <>
                        <dt className="mb-2 text-xs uppercase tracking-wide lg:mb-2.5">Updated</dt>
                        <dd className="mb-5 whitespace-nowrap text-sm lg:mb-6">
                          <DateTime dateTimeString={post.updated} />
                        </dd>
                      </>
                    )}
                    <dt className="mb-2 text-xs uppercase tracking-wide lg:mb-2.5">Status</dt>
                    <dd className="mb-5 whitespace-nowrap text-sm lg:mb-6">Status</dd>
                  </dl>

                  {/* content */}
                  <div
                    className="dark:prose-dark prose prose-slate mb-5 prose-a:relative prose-a:z-10"
                    id="main-content"
                  >
                    <StructuredText
                      data={post.content}
                      renderBlock={({ record }) => {
                        if (record.__typename === 'ImageBlockRecord') {
                          return <DatocmsImage data={record.image.responsiveImage} />
                        }

                        return (
                          <>
                            <p>Don&apos;t know how to render a block!</p>
                            <pre>{JSON.stringify(record, null, 2)}</pre>
                          </>
                        )
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </Container>
    </article>
  )
}
