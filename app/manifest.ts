import { request } from '@/lib/api/datocms'
import { SiteFaviconDocument } from '@/lib/api/generated'
import { config } from '@/lib/config'
import { MetadataRoute } from 'next'

const { siteNameWithReece, siteNameWithoutReece, description } = config.site

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const result = await request(SiteFaviconDocument)

  const { maskable: maskableFavicon, default: defaultFavicon, mimeType } = result.site.favicon

  return {
    background_color: '#F4F5F6',
    description: description,
    display: 'standalone',
    icons: [
      {
        src: maskableFavicon.src,
        sizes: `${maskableFavicon.width}x${maskableFavicon.height}`,
        type: mimeType,
        purpose: 'any',
      },
      {
        src: maskableFavicon.src,
        sizes: `${maskableFavicon.width}x${maskableFavicon.height}`,
        type: mimeType,
        purpose: 'maskable',
      },
      {
        src: defaultFavicon.src,
        sizes: `${defaultFavicon.width}x${defaultFavicon.height}`,
        type: mimeType,
      },
    ],
    name: siteNameWithReece,
    orientation: 'portrait',
    short_name: siteNameWithoutReece,
    start_url: '/',
    theme_color: '#003057',
  }
}
