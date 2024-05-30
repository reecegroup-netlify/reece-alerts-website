import { metaTagsFragment } from '../fragments/metaTagsFragment'

const QUERY = `
  query PostBySlug($slug: String) {
    post(filter: {slug: {eq: $slug}}) {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
      excerpt
      seoSettings {
        description
      }
      slug
      updated: _publishedAt
      posted: _firstPublishedAt
      category {
        name
      }
    }
  }

  ${metaTagsFragment}
`

export function getMetaTagsPostBySlug(includeDrafts: boolean = false, slug: string) {
  return {
    query: QUERY,
    includeDrafts: includeDrafts,
    variables: {
      slug: slug,
    },
  }
}
