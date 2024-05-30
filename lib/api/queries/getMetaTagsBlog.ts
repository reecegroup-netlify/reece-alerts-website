import { metaTagsFragment } from '../fragments/metaTagsFragment'

const QUERY = `
  query BlogMetatags {
    blog {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }
  }

  ${metaTagsFragment}
`

export function getMetaTagsBlog(includeDrafts: boolean = false) {
  return {
    query: QUERY,
    includeDrafts: includeDrafts,
  }
}
