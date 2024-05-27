import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'

import { performRequest } from '@/lib/api/datocms'
import { metaTagsFragment } from '@/lib/api/fragments/metaTagsFragment'

import { PostLayout } from '@/layouts/PostLayout'
import { getPostsAll } from '@/lib/api/queries/getPostsAll'
import { getPostsBySlug } from '@/lib/api/queries/getPostBySlug'

export async function generateStaticParams() {
  const { postsAll } = await performRequest(getPostsAll())
  return postsAll.map(({ slug }) => slug)
}

// export async function generateMetadata({ params }) {
//   const { site, post } = await performRequest(getPostsBySlug(params.slug))

//   return toNextMetadata([...site.favicon, ...post.seo])
// }

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode()

  // slug from params
  const { slug } = params;

  // query posts eq slug
  const { post } = await performRequest(getPostsBySlug(isEnabled, slug))

  // if (isEnabled) {
  //   return (
  //     <DraftPostPage
  //       subscription={{
  //         ...pageRequest,
  //         initialData: data,
  //         token: process.env.NEXT_DATOCMS_API_TOKEN,
  //         environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
  //       }}
  //     />
  //   );
  // }

  return <PostLayout post={post} />
}
