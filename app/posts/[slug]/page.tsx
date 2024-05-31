import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'
import { performRequest } from '@/lib/api/datocms'
import { PostLayout } from '@/layouts/PostLayout'
import { getPostsAll } from '@/lib/api/queries/getPostsAll'
import { getPostBySlug } from '@/lib/api/queries/getPostBySlug'
import { getMetaTagsPostBySlug } from '@/lib/api/queries/getMetaTagsPostBySlug'
import { Metadata } from 'next'
import { DraftPost } from '@/components/DraftPost'

export async function generateStaticParams() {
  const { postsAll } = await performRequest(getPostsAll())
  return postsAll.map(({ slug }) => slug)
}

export async function generateMetadata({ params }) {
  const { post } = await performRequest(getMetaTagsPostBySlug(false, params.slug))
  const datoMetadata = toNextMetadata([...post.seo])
  const description =
    post.seoSettings && post.seoSettings.description ? post.seoSettings.description : post.excerpt
  return {
    ...datoMetadata,
    title: {
      default: datoMetadata.title,
      template: '%s',
      absolute: datoMetadata.title,
    },
    description: description,
    openGraph: {
      ...datoMetadata.openGraph,
      description: description,
      publishedTime: post.posted,
      modifiedTime: post.updated,
      tags: [post.category.name],
    },
    twitter: {
      ...datoMetadata.twitter,
      description: description,
    },
    alternates: {
      canonical: `/${post.slug}`,
    },
  } as Metadata
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode()

  // slug from params
  const { slug } = params

  // query posts eq slug
  const pageRequest = getPostBySlug(isEnabled, slug)
  const data = await performRequest(pageRequest)

  if (isEnabled) {
    return (
      <DraftPost
        subscription={{
          ...pageRequest,
          initialData: data,
          token: process.env.NEXT_DATOCMS_API_TOKEN,
          environment: process.env.NEXT_DATOCMS_ENVIRONMENT || null,
        }}
      />
    )
  }

  return <PostLayout data={data} />
}
