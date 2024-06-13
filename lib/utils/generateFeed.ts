import { Feed, Item } from 'feed'
import getSiteUrl from './getSiteUrl'
import { request } from '@/lib/api/datocms'
import { config } from '@/lib/config'
import { PostsAllDocument } from '@/lib/api/generated'
import postContentToHtmlString from './postContentToHtmlString'

export default async function generateFeed() {
  const { postsAll } = await request(PostsAllDocument)

  const feed = new Feed(config.feedOptions)
  const siteURL = getSiteUrl()

  await Promise.all(
    postsAll.map(
      async ({ category, content, excerpt, posted, slug, title, updated }) =>
        new Promise<void>((resolve) => {
          const itemCategory = { name: category.name }
          const itemUrl = `${siteURL}/posts/${slug}`

          const item: Item = {
            title: title,
            id: itemUrl,
            link: itemUrl,
            date: new Date(updated),
            description: excerpt,
            content: postContentToHtmlString(content),
            category: [itemCategory],
            published: new Date(posted),
          }

          feed.addItem(item)
          resolve()
        })
    )
  )
  return feed
}
