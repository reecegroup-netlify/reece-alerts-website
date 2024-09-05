import { config } from '@/lib/config'
import { MetadataRoute } from 'next'

const { siteNameWithReece, siteNameWithoutReece, description } = config.site

export default function manifest(): MetadataRoute.Manifest {
  return {
    background_color: '#F4F5F6',
    description: description,
    display: 'standalone',
    icons: [
      {
        src: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?h=512&w=512',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: 'https://www.datocms-assets.com/132344/1717408725-android-chrome-384x384.png?h=512&w=512',
        sizes: '512x512',
        type: 'image/png',
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
