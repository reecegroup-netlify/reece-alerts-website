import getSiteUrl from '@/lib/utils/getSiteUrl'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/', // all pages on this site should be hidden from search engines
    },
    sitemap: `${getSiteUrl()}/sitemap.xml`,
  }
}
