import { request } from '@/lib/api/datocms'
import { SiteFaviconsDocument } from '@/lib/api/generated'
import { config } from '@/lib/config'
import { MetadataRoute } from 'next'

const { siteNameWithReece, siteNameWithoutReece, description } = config.site

export default async function manifest(): Promise<MetadataRoute.Manifest> {
  const { site } = await request(SiteFaviconsDocument)
  const { appleTouchIcons } = site

  return {
    background_color: '#F4F5F6',
    description: description,
    display: 'standalone',
    icons: appleTouchIcons.map(({ attributes }, index) => {
      const { href: src, type, sizes } = attributes
      return {
        src,
        type,
        sizes,
        purpose: appleTouchIcons.length - 1 === index ? 'maskable' : 'any',
      }
    }),
    name: siteNameWithReece,
    orientation: 'portrait',
    short_name: siteNameWithoutReece,
    start_url: '/',
    theme_color: '#003057',
  }
}
