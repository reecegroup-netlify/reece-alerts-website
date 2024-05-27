import { Feed, FeedOptions } from 'feed'

const SITE_TITLE = 'Reece Incident & Alert Communications'
const SITE_URL = 'emergency.reece.com.au'
const SITE_DESCRIPTION =
  'Incident & Alert Communications is efficitur ornare euismod. In at viverra turpis. Morbi cursus sapien nisi. Sed vitae rutrum massa, vitae semper est. Nunc suscipit, magna sed luctus tempus.'
const SITE_COPYRIGHT = `Copyright ${new Date().getFullYear().toString()}, Reece Ltd.`
const SITE_LANGUAGE = 'en-AU'

const feedOptions: FeedOptions = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  id: SITE_URL,
  link: SITE_URL,
  language: SITE_LANGUAGE, // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
  // image: 'http://example.com/image.png', // @todo
  // favicon: 'http://example.com/favicon.ico', // @todo
  copyright: SITE_COPYRIGHT,
  updated: new Date(), // optional, default = now
  // generator: 'Feed for Node.js', // optional, default = 'Feed for Node.js'
  feedLinks: {
    atom: `${SITE_URL}/feeds/atom.xml`,
    json: `${SITE_URL}/feeds/feed.json`,
    rss: `${SITE_URL}/feeds/rss.xml`,
  },
  // author: {
  //   name: 'John Doe',
  //   email: 'johndoe@example.com',
  //   link: 'https://example.com/johndoe',
  // },
}

export const config = {
  feedOptions: feedOptions,

  RSS_TITLE: SITE_TITLE,
  RSS_LINK: SITE_URL,
  RSS_DESCRIPTION: SITE_DESCRIPTION,
  RSS_COPYRIGHT: SITE_COPYRIGHT,

  POSTS_PER_PAGE: 10,
  POSTS_SORT_BY: 'firstPublishedAt',
}
