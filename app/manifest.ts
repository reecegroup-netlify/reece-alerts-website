import { request } from '@/lib/api/datocms'
import { SiteFaviconDocument } from '@/lib/api/generated'
import { config } from '@/lib/config'
import { MetadataRoute } from 'next'

const { siteNameWithReece, siteNameWithoutReece, description } = config.site

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const result = await request(SiteFaviconDocument)

  const { responsiveImage, mimeType } = result.site.favicon

  return {
    background_color: '#F4F5F6',
    description: description,
    display: 'standalone',
    icons: [
      {
        src: responsiveImage.src,
        sizes: `${responsiveImage.width}x${responsiveImage.height}`,
        type: mimeType,
        purpose: 'any',
      },
      {
        src: responsiveImage.src,
        sizes: `${responsiveImage.width}x${responsiveImage.height}`,
        type: mimeType,
        purpose: 'maskable',
      },
    ],
    name: siteNameWithReece,
    orientation: 'portrait',
    short_name: siteNameWithoutReece,
    start_url: '/',
    theme_color: '#003057',
  }
}
