import { draftMode } from "next/headers";
import { toNextMetadata } from "react-datocms";

import { performRequest } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";

import { DraftPostIndex } from "@/components/draft-post-index";
import { PostListLayout } from "layouts/PostListLayout";
import { PaginationProps } from "@/components/PostList";

const POSTS_PER_PAGE = 2

const PAGE_QUERY = `
  query PostListPaginated($first: IntType, $orderBy: [PostModelOrderBy], $skip: IntType) {
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

    posts: allPosts(orderBy: $orderBy, first: $first, skip: $skip ) {
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

    allPosts(orderBy: $orderBy ) {
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
`;

function getPageRequest(currentPage: number = 1, orderDirection = 'ASC') {
  const { isEnabled } = draftMode();

  return { 
    query: PAGE_QUERY, 
    includeDrafts: isEnabled, 
    variables: { 
      first: POSTS_PER_PAGE,
      orderBy: `_firstPublishedAt_${orderDirection}`,
      skip: (currentPage - 1) * POSTS_PER_PAGE
    } 
  };
}

// export async function generateMetadata() {
//   const data = await performRequest(getPageRequest());

//   return toNextMetadata([...site.favicon, ...blog.seo]);
// }

export default async function Page() {
  const { isEnabled } = draftMode();

  const pageRequest = getPageRequest();
  const { posts, allPosts } = await performRequest(pageRequest);

  console.log(posts)

  const pagination: PaginationProps = {
    totalPosts: allPosts.length,
    postsPerPage: POSTS_PER_PAGE,
    currentPage: 1
  }

  // if (isEnabled) {
  //   return (
  //     <DraftPostIndex
  //       subscription={{
  //         ...pageRequest,
  //         initialData: data,
  //         token: process.env.NEXT_DATOCMS_API_TOKEN,
  //         environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
  //       }}
  //     />
  //   );
  // }

  return <PostListLayout posts={posts} pagination={pagination} />;
}
