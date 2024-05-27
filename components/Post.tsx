'use client'

import {
  StructuredText,
  VideoPlayer as DatocmsVideoPlayer,
  Image as DatocmsImage,
} from 'react-datocms'
import MetaList from './MetaList'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import dynamic from 'next/dynamic'

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: any
}

const VideoEmbedded = dynamic(() => import('./VideoEmbedded'), { ssr: false })

export function Post({ post, ...props }: PostProps) {
  const pathname = usePathname()

  return (
    <article {...props}>
      <div className="relative py-2.5 sm:ml-[calc(2rem+1px)] md:ml-[calc(3.5rem+1px)] md:py-4 lg:ml-[max(calc(16.5rem+1px),calc(100%-48rem))]">
        {/* timeline line */}
        <div className="absolute bottom-0 right-full top-3 mr-7 hidden w-px bg-slate-200 sm:block md:mr-[3.25rem]"></div>

        <div className="group relative mb-24" key={post.slug}>
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
            <h1 className="heading-2xl mb-[0.8888889em] text-[#003057]">
              {post.title}
            </h1>

            {/* meta */}
            <MetaList {...post} />

            {/* content */}
            <div
              className="prose mb-5 prose-a:relative prose-a:z-10"
              id="main-content"
            >
              <StructuredText
                data={post.content}
                renderBlock={({ record }) => {
                  if (record.__typename === 'HtmlBlockRecord') {
                    return <figure dangerouslySetInnerHTML={{ __html: record.html }} />
                  }

                  if (record.__typename === 'ImageExternalBlockRecord') {
                    const { alt, height, src, title, width } = record;

                    return (
                      <figure><Image
                        src={src}
                        alt={alt}
                        title={title}
                        width={width}
                        height={height}
                      />
                      </figure>
                    )
                  }

                  if (record.__typename === 'ImageInternalBlockRecord') {
                    return <figure><DatocmsImage data={record.image.responsiveImage} /></figure>
                  }

                  if (record.__typename === 'VideoEmbeddedBlockRecord') {
                    const { height, url, width } = record.videoUrl
                    return (
                      <VideoEmbedded height={height} url={url} width={width} />
                    )
                  }

                  if (record.__typename === 'VideoInternalBlockRecord') {
                    return (
                      <figure><DatocmsVideoPlayer
                        data={record.video.responsiveVideo}
                        accentColor="#003057"
                      /></figure>
                    )
                  }

                  return (
                    <>
                      <p>Don&apos;t know how to render a block!</p>
                      <pre>{JSON.stringify(record, null, 2)}</pre>
                    </>
                  )
                }
                }
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
