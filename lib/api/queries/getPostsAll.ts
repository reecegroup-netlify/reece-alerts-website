import { config } from '@/lib/config'
import { metaTagsFragment } from '../fragments/metaTagsFragment'
import { postFragment } from '../fragments/postFragment'

const { POSTS_SORT_BY } = config

const QUERY = `
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
      ...postFragment
    }
  }

  ${metaTagsFragment}
  ${postFragment}
`

export function getPostsAll(
  includeDrafts: boolean = false,
  orderDirection: 'ASC' | 'DESC' = 'DESC'
) {
  return {
    query: QUERY,
    includeDrafts: includeDrafts,
    variables: {
      orderBy: `_${POSTS_SORT_BY}_${orderDirection}`,
    },
  }
}
