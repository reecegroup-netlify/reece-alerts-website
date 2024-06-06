import { render } from 'datocms-structured-text-to-html-string'

export default function postContentToHtmlString(content) {
  const options = {
    renderBlock({ record, adapter: { renderNode } }) {
      if (record.__typename === 'HtmlBlockRecord') {
        return renderNode('div', {}, `${record.html}`)
      }

      if (record.__typename === 'ImageExternalBlockRecord') {
        const { alt, height, src, title, width } = record
        return renderNode('img', { src, alt, title, width, height })
      }

      if (record.__typename === 'ImageInternalBlockRecord') {
        const { alt, height, src, title, width } = record.image.responsiveImage
        return renderNode('img', { src, alt, title, width, height })
      }

      if (record.__typename === 'VideoEmbeddedBlockRecord') {
        const { height, url: src, title, width } = record.videoUrl
        return renderNode('iframe', { src, title, width, height })
      }

      if (record.__typename === 'VideoInternalBlockRecord') {
        const { title, width, height, url: src } = record.video
        console.log(record)
        return renderNode('video', { src, title, width, height })
      }

      return renderNode('span', {}, 'Do not know how to render a block!')
    },
  }

  return render(content, options)
}
