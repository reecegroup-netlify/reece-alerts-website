import { request } from '@/lib/api/datocms'
import { SiteManifestIconDocument } from '@/lib/api/generated'
import { config } from '@/lib/config'
import getSiteUrl from '@/lib/utils/getSiteUrl'
import { MetadataRoute } from 'next'

const { siteNameWithReece, siteNameWithoutReece, description } = config.site

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { site } = await request(SiteManifestIconDocument)
  const { mimeType, responsiveImage } = site.manifestIcon

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
    start_url: getSiteUrl(),
    theme_color: '#003057',
  }
}
