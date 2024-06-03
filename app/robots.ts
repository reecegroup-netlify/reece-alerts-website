import getDeployContext from '@/lib/utils/getDeployContext'
import getSiteUrl from '@/lib/utils/getSiteUrl'
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      ...(getDeployContext() === 'production' ? { allow: '/' } : { disallow: '/' }),
    },
    sitemap: `${getSiteUrl}/sitemap.xml`,
  }
}
