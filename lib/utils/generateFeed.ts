import { Feed, FeedOptions, Item } from 'feed'
import getSiteUrl from './getSiteUrl'
import { getPostsAll } from '../api/queries/getPostsAll'
import { performRequest } from '../api/datocms'
import { config } from '../config'
import { Category } from 'feed/lib/typings'

export default async function generateFeed() {
  const { postsAll } = await performRequest(getPostsAll())

  const feed = new Feed(config.feedOptions)
  const siteURL = getSiteUrl()

  await Promise.all(
    postsAll.map(
      async ({ category, excerpt, posted, slug, title, updated }) =>
        new Promise<void>((resolve) => {
          const itemCategory: Category = { name: category.name }
          const itemUrl = `${siteURL}/posts/${slug}`

          const item: Item = {
            title: title,
            id: itemUrl,
            link: itemUrl,
            date: new Date(updated),
            description: excerpt, // @todo excerpt fallback
            // content?: string; // @todo
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
