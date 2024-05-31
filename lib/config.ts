import { FeedOptions } from 'feed'
import getSiteUrl from './utils/getSiteUrl'

const SITE_TITLE = 'Reece Incident & Alert Communications' // @todo get config values from dato
const SITE_URL = getSiteUrl()
const SITE_DESCRIPTION =
  'Incident & Alert Communications is efficitur ornare euismod. In at viverra turpis. Morbi cursus sapien nisi. Sed vitae rutrum massa, vitae semper est. Nunc suscipit, magna sed luctus tempus.' // @todo get config values from dato
const SITE_COPYRIGHT = `Copyright ${new Date().getFullYear().toString()}, Reece Ltd.`
const SITE_LANGUAGE = 'en-AU'

const feedOptions: FeedOptions = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  id: SITE_URL,
  link: SITE_URL,
  language: SITE_LANGUAGE, // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  // image: 'http://example.com/image.png', // @todo get config values from dato
  // favicon: 'http://example.com/favicon.ico', // @todo get config values from dato
  copyright: SITE_COPYRIGHT,
  updated: new Date(), // optional, default = now
  generator: '', // optional, default = 'Feed for Node.js'
  feedLinks: {
    atom: `${SITE_URL}/feeds/atom.xml`,
    json: `${SITE_URL}/feeds/feed.json`,
    rss: `${SITE_URL}/feeds/rss.xml`,
  },
}

export const config = {
  feedOptions: feedOptions,
  gtmId: '@todo', // @todo add GTM ID
  SITE_TITLE,
  POSTS_PER_PAGE: 1,
  POSTS_SORT_BY: 'firstPublishedAt',
}
