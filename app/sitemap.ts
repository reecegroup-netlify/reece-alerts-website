import { request } from '@/lib/api/datocms'
import { PostsAllDocument } from '@/lib/api/generated'
import { config } from '@/lib/config'
import getSiteUrl from '@/lib/utils/getSiteUrl'
import { MetadataRoute } from 'next'

const { POSTS_PER_PAGE } = config

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Google's limit is 50,000 URLs per sitemap, assuming this site will never reach
  // that, if it does we'll need to split up sitemaps by paging the graphql response

  const { postsAll } = await request(PostsAllDocument)

  const totalPages = Math.ceil(postsAll.length / POSTS_PER_PAGE)

  return [
    {
      url: getSiteUrl(),
      changeFrequency: 'hourly',
      priority: 1,
    },
    ...Array.from({ length: totalPages }, (_, i) => ({
      url: `${getSiteUrl()}/page/${(i + 1).toString()}`,
      priority: 0.5,
    })),
    ...postsAll.map((post) => ({
      url: `${getSiteUrl()}/posts/${post.slug}`,
      priority: 0.8,
      lastModified: new Date(post.updated),
    })),
    {
      url: `${getSiteUrl()}/feeds`,
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${getSiteUrl()}/feed.atom`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${getSiteUrl()}/feed.json`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
    {
      url: `${getSiteUrl()}/feed.rss`,
      changeFrequency: 'monthly',
      priority: 0.3,
    },
  ]
}
