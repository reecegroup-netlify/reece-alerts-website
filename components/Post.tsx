import { StructuredText, VideoPlayer as DatocmsVideoPlayer, Image as DatocmsImage } from 'react-datocms'
import MetaList from './MetaList'
import Image from 'next/image'

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: any
}

export function Post({ post, ...props }: PostProps) {
  return (
    <article {...props}>
      <div className="relative py-2.5 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] md:py-4 lg:ml-[max(calc(16.5rem+1px),calc(100%-48rem))]">
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
            <MetaList {...post} />

            {/* content */}
            <div
              className="dark:prose-dark prose prose-slate mb-5 prose-a:relative prose-a:z-10"
              id="main-content"
            >
              <StructuredText
                data={post.content}
                renderBlock={({ record }) => {
                  if (record.__typename === 'HtmlBlockRecord') {
                    return <div id={record.id} dangerouslySetInnerHTML={{ __html: record.html }} />
                  }

                  if (record.__typename === 'ImageExternalBlockRecord') {
                    return <Image src={record.url} alt={record.altText} title={record.titleCaption} />
                  }

                  if (record.__typename === 'ImageInternalBlockRecord') {
                    return <DatocmsImage data={record.image.responsiveImage} />
                  }

                  // @todo
                  // if (record.__typename === 'VideoEmbeddedBlockRecord') {
                  //   return <DatocmsImage data={record.image.responsiveImage} />
                  // }

                  if (record.__typename === 'VideoInternalBlockRecord') {
                    return <><DatocmsVideoPlayer data={record.video.responsiveVideo} /></>
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
    </article>
  )
}
