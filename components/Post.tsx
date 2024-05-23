'use client'

import { StructuredText, VideoPlayer as DatocmsVideoPlayer, Image as DatocmsImage } from 'react-datocms'
import MetaList from './MetaList'
import Image from 'next/image'
import ReactPlayer from 'react-player'
import { usePathname } from 'next/navigation'

interface PostProps extends React.HTMLAttributes<HTMLDivElement> {
  post: any
}

export function Post({ post, ...props }: PostProps) {
  const pathname = usePathname()

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
                    return <Image src={record.src} alt={record.alt} title={record.title} width={record.width} height={record.height} />
                  }

                  if (record.__typename === 'ImageInternalBlockRecord') {
                    return <DatocmsImage data={record.image.responsiveImage} />
                  }

                  // @todo
                  // if (record.__typename === 'VideoEmbeddedBlockRecord') {

                  //   const { height, provider, providerUid, title, url, width } = record.videoUrl

                  //   return (
                  //     <div id={record.id} className="relative" style={{ paddingTop: `${100 / (width / height)}%` }}>
                  //       <ReactPlayer
                  //         className="absolute t-0 l-0"
                  //         url={url}
                  //         title={title}
                  //         width={'100%'}
                  //         height={'100%'}
                  //         config={{
                  //           facebook: {
                  //             // appId: '12345' @todo
                  //           },
                  //           vimeo: {
                  //           },
                  //           youtube: {
                  //             playerVars: { rel: 0 }
                  //           },
                  //         }}
                  //       /></div>)

                  //   if (provider === 'youtube') {
                  //     return <>
                  //       <iframe width={width} height={height} src={`https://www.youtube.com/embed/${providerUid}`} title={title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                  //       <pre>{JSON.stringify(record, null, 2)}</pre>
                  //     </>
                  //   }

                  //   if (provider === 'vimeo') {
                  //     return <>
                  //       <iframe src={`https://player.vimeo.com/video/${206175533}?h=0191652744`} width={width} height={height} frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                  //       <pre>{JSON.stringify(record, null, 2)}</pre>
                  //     </>
                  //   }

                  //   return null;
                  // }

                  if (record.__typename === 'VideoInternalBlockRecord') {
                    return <DatocmsVideoPlayer data={record.video.responsiveVideo} accentColor='#003057' />
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
