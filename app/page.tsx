import { draftMode } from "next/headers";
import { toNextMetadata } from "react-datocms";

import { performRequest } from "@/lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "@/lib/fragments";

import { DraftPostIndex } from "@/components/draft-post-index";
import { PostListLayout } from "layouts/PostListLayout";
import { PaginationProps } from "@/components/PostList";
import { config } from "@/lib/config";
import { getPostsPaginated, getPostsAll } from "@/lib/queries";

const { POSTS_PER_PAGE } = config

// export async function generateMetadata() {
//   const data = await performRequest(getPageRequest());

//   return toNextMetadata([...site.favicon, ...blog.seo]);
// }

export default async function Page() {
  const { isEnabled: includeDrafts } = draftMode();

  const currentPage = 1;

  const { postsPaginated } = await performRequest(getPostsPaginated(includeDrafts, currentPage));
  const { postsAll } = await performRequest(getPostsAll());


  const pagination: PaginationProps = {
    totalPosts: postsAll.length,
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

  return <PostListLayout posts={postsPaginated} pagination={pagination} />;
}
