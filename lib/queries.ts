import { draftMode } from 'next/headers'
import { metaTagsFragment } from './fragments'
import { config } from './config'

const { POSTS_PER_PAGE, POSTS_SORT_BY } = config

const POSTS_PAGINATED_QUERY = `
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

export function getPostsPaginated(
  includeDrafts: boolean = false,
  currentPage: number,
  orderDirection: 'ASC' | 'DESC' = 'DESC'
) {
  return {
    query: POSTS_PAGINATED_QUERY,
    includeDrafts: includeDrafts,
    variables: {
      first: POSTS_PER_PAGE,
      orderBy: `_${POSTS_SORT_BY}_${orderDirection}`,
      skip: (currentPage - 1) * POSTS_PER_PAGE,
    },
  }
}

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
