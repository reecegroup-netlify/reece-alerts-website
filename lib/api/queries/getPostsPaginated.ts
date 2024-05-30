import { config } from '@/lib/config'
import { metaTagsFragment } from '../fragments/metaTagsFragment'
import { postFragment } from '../fragments/postFragment'

const { POSTS_PER_PAGE, POSTS_SORT_BY } = config

const QUERY = `
  query PostsPaginated($first: IntType, $orderBy: [PostModelOrderBy], $skip: IntType) {
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

    postsPaginated: allPosts(orderBy: $orderBy, first: $first, skip: $skip ) {
      ...postFragment
    }
  }

  ${metaTagsFragment}
  ${postFragment}
`

export function getPostsPaginated(
  includeDrafts: boolean = false,
  currentPage: number = 1,
  orderDirection: 'ASC' | 'DESC' = 'DESC'
) {
  return {
    query: QUERY,
    includeDrafts: includeDrafts,
    variables: {
      first: POSTS_PER_PAGE,
      orderBy: `_${POSTS_SORT_BY}_${orderDirection}`,
      skip: (currentPage - 1) * POSTS_PER_PAGE,
    },
  }
}
