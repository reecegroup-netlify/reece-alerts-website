import { draftMode } from "next/headers";
import { toNextMetadata } from "react-datocms";

import { performRequest } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";

import { DraftPostIndex } from "@/components/draft-post-index";
import { PostListLayout } from "layouts/PostListLayout";

const POSTS_PER_PAGE = 2

const POST_LIST_QUERY = `
  query PostList {
    allPosts(orderBy: _firstPublishedAt_DESC ) {
      slug
    }
  }
`

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

    initialDisplayPosts: allPosts(orderBy: $orderBy, first: $first, skip: $skip ) {
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

function getPostsRequest() {
  return { query: POST_LIST_QUERY, includeDrafts: false }
}

function getPageRequest(currentPage: number, orderDirection: 'ASC' | 'DESC' = 'DESC') {
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

export const generateStaticParams = async () => {
  const { allPosts } = await performRequest(getPostsRequest());

  const totalPages = Math.ceil(allPosts.length / POSTS_PER_PAGE)
  const paths = Array.from({ length: totalPages }, (_, i) => ({ page: (i + 1).toString() }))

  return paths
}

// export const generateMetadata = async () => {
//   const { site, blog } = await performRequest(getPageRequest());

//   return toNextMetadata([...site.favicon, ...blog.seo]);
// }

export default async function Page({params, searchParams}: {
  params: { page: number }
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const { isEnabled } = draftMode();
  const { page: currentPage } = params;
  
  const { sort } = searchParams;
  const sortDirection = sort && sort === 'asc' ? 'ASC' : 'DESC';

  const pageRequest = getPageRequest(currentPage, sortDirection);
  const data = await performRequest(pageRequest);
  const {allPosts, initialDisplayPosts} = data;

  const pagination = {
    currentPage: currentPage,
    totalPages: Math.ceil(allPosts.length / POSTS_PER_PAGE)
  }

  // const initialDisplayPosts = allPosts.slice(
  //   POSTS_PER_PAGE * (currentPage - 1),
  //   POSTS_PER_PAGE * currentPage
  // )

  // if (isEnabled) {
  //   return (
  //     <DraftPostIndex
  //       subscription={{
  //         ...pageRequest,
  //         initialDisplayPosts: initialDisplayPosts,
  //         token: process.env.NEXT_DATOCMS_API_TOKEN,
  //         environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
  //       }}
  //     />
  //   );
  // }

  return <PostListLayout posts={allPosts} initialDisplayPosts={initialDisplayPosts} pagination={pagination} />;
}
