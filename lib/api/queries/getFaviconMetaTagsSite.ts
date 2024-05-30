import { metaTagsFragment } from '../fragments/metaTagsFragment'

const QUERY = `
  query SiteMetatags {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
  }

  ${metaTagsFragment}
`

export function getFaviconMetaTagsSite(includeDrafts: boolean = false) {
  return {
    query: QUERY,
    includeDrafts: includeDrafts,
  }
}
