import { config } from "@/lib/config"
import { metaTagsFragment } from "../fragments/metaTagsFragment"

const { POSTS_SORT_BY } = config

const POSTS_ALL_QUERY = `
  query PostsAll($orderBy: [PostModelOrderBy]) {
    site: _site {
      favicon: faviconMetaTags {
        ...metaTagsFragment
      }
    }

    blog {
      seo: _seoMetaTags {
        ...metaTagsFragment
      }
    }

    postsAll: allPosts(orderBy: $orderBy ) {
      title
      updated: _publishedAt
      posted: _firstPublishedAt
      slug
      excerpt
      category {
        iconName
        iconColour {
          hex
        }
        name
        slug
      }
    }
  }

  ${metaTagsFragment}
`

export function getPostsAll(
  includeDrafts: boolean = false,
  orderDirection: 'ASC' | 'DESC' = 'DESC'
) {
  return {
    query: POSTS_ALL_QUERY,
    includeDrafts: includeDrafts,
    variables: {
      orderBy: `_${POSTS_SORT_BY}_${orderDirection}`,
    },
  }
}
