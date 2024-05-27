import React from 'react'
import ReactPlayer from 'react-player';

interface VideoEmbeddedProps {
    height: number;
    provider: string;
    title: string;
    url: string;
    width: number;
}

export default function VideoEmbedded({ height, url, width }: VideoEmbeddedProps) {
    return (
        <figure className="relative" style={{ paddingTop: `${100 / (width / height)}%` }}>
            <ReactPlayer
                className="absolute top-0 left-0"
                url={url}
                width={'100%'}
                height={'100%'}
                config={{
                    facebook: {
                        // appId: '12345' @todo
                    },
                    vimeo: {
                        playerOptions: {
                            autopause: true,
                            byline: true,
                            controls: true,
                            playsinline: true,
                            portrait: true,
                            title: true,
                        }
                    },
                    youtube: {
                        playerVars: {
                            autoplay: 0,
                            controls: 1,
                            rel: 0
                        }
                    },
                }}
            /></figure>)



}
