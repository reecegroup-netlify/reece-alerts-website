import getSiteUrl from '@/lib/utils/getSiteUrl'
import { MetadataRoute } from 'next'

import agents from '../agents.json' with { type: 'json' }

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: agents, // all pages on this site should be hidden from known bots
        disallow: ['/'],
      },
      {
        userAgent: '*',
        disallow: '/', // all pages on this site should be hidden from search engines
      },
    ],
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  }
}
