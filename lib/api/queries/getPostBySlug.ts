import { config } from '@/lib/config'
import { metaTagsFragment } from '../fragments/metaTagsFragment'
import { postFragment } from '../fragments/postFragment'

const POST_BY_SLUG_QUERY = `
  query PostBySlug($slug: String) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }
    
    post(filter: {slug: {eq: $slug}}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      ...postFragment
    }
  }

  ${metaTagsFragment}
  ${postFragment}
`

export function getPostsBySlug(includeDrafts: boolean = false, slug: string) {
  return {
    query: POST_BY_SLUG_QUERY,
    includeDrafts: includeDrafts,
    variables: {
      slug: slug,
    },
  }
}
