import { render } from 'datocms-structured-text-to-plain-text'

export default function postContentToPlainText(content) {
  const options = {
    renderBlock({ record }) {
      if (record.__typename === 'HtmlBlockRecord') {
        return `\n ${record.html}`
      }

      if (record.__typename === 'ImageExternalBlockRecord') {
        const { alt, src, title } = record
        return `Image of ${alt} ${title ? `[${title}]` : ''}(${src})\n`
      }

      if (record.__typename === 'ImageInternalBlockRecord') {
        const { alt, src, title } = record.image.responsiveImage
        return `Image of ${alt} ${title ? `[${title}]` : ''}(${src})\n`
      }

      if (record.__typename === 'VideoEmbeddedBlockRecord') {
        const { url, title } = record.videoUrl
        return `Video ${title ? `[${title}]` : ''}(${url})\n`
      }

      if (record.__typename === 'VideoInternalBlockRecord') {
        const { title, url } = record.video
        return `Video ${title ? `[${title}]` : ''}(${url})\n`
      }

      return `Don't know how to render a block!`
    },
  }

  return render(content, options)
}
