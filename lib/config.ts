import { FeedOptions } from 'feed'
import getSiteUrl from './utils/getSiteUrl'

// @todo get config values from dato
const SITE_NAME_WITHOUT_REECE = 'Alerts'
const SITE_NAME_WITH_REECE = `Reece ${SITE_NAME_WITHOUT_REECE}`

const SITE_COPYRIGHT = `Copyright ${new Date().getFullYear().toString()}, Reece Ltd.`
const SITE_DESCRIPTION = `A business continuity communications platform. Keeping Reece team members in the know in case of systems outages or emergency situations.`
const SITE_LOCALE = 'en_AU'
const SITE_URL = getSiteUrl()

const feedOptions: FeedOptions = {
  title: SITE_NAME_WITH_REECE,
  description: SITE_DESCRIPTION,
  id: SITE_URL,
  link: SITE_URL,
  language: SITE_LOCALE, // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  // image: 'http://example.com/image.png',
  // favicon: 'http://example.com/favicon.ico',
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
  site: {
    siteNameWithReece: SITE_NAME_WITH_REECE,
    siteNameWithoutReece: SITE_NAME_WITHOUT_REECE,
    description: SITE_DESCRIPTION,
    locale: SITE_LOCALE,
  },
  gtmId: 'GTM-WJ9CGDWG', // digi marketing team manage this
  POSTS_PER_PAGE: 10,
}
