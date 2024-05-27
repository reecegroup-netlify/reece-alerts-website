export const postFragment = `
  fragment postFragment on PostRecord {
    title
    slug
    excerpt
    updated: _publishedAt
    posted: _firstPublishedAt
    category {
      iconName
      iconColour {
        hex
      }
      name
      slug
    }
    content {
      value
      blocks {
        __typename
        ... on HtmlBlockRecord {
          id
          html
        }
        ... on ImageExternalBlockRecord {
          id
          alt
          height
          src
          title
          width
        }
        ... on ImageInternalBlockRecord {
          id
          image {
            responsiveImage(imgixParams: {maxW: "600", auto: format}) {
              srcSet
              webpSrcSet
              sizes
              src
              width
              height
              aspectRatio
              alt
              title
              base64
            }
          }
        }
        ... on VideoEmbeddedBlockRecord {
          id
          videoUrl: url {
            height
            provider
            providerUid
            thumbnailUrl
            title
            url
            width
          }
        }
        ... on VideoInternalBlockRecord {
          id
          video {
            responsiveVideo: video {
              muxPlaybackId
              title
              width
              height
              blurUpThumb
            }
          }
        }
      }
    }
  }
`
