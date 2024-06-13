import React from 'react'
import ReactPlayer from 'react-player'

interface VideoEmbeddedProps {
  height: number
  url: string
  width: number
}

export default function VideoEmbedded({ height, url, width }: VideoEmbeddedProps) {
  return (
    <figure className="relative" style={{ paddingTop: `${100 / (width / height)}%` }}>
      <ReactPlayer
        className="absolute left-0 top-0"
        url={url}
        width={'100%'}
        height={'100%'}
        config={{
          vimeo: {
            playerOptions: {
              autopause: true,
              byline: true,
              controls: true,
              playsinline: true,
              portrait: true,
              title: true,
            },
          },
          youtube: {
            playerVars: {
              autoplay: 0,
              controls: 1,
              rel: 0,
            },
          },
        }}
      />
    </figure>
  )
}
