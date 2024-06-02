import { draftMode } from 'next/headers'
import { toNextMetadata } from 'react-datocms'
import { request } from '@/lib/api/datocms'
import { PostLayout } from '@/layouts/PostLayout'
import { Metadata } from 'next'
import { PostBySlugDocument, PostsAllDocument } from '@/lib/api/generated'

export async function generateStaticParams() {
  const { postsAll } = await request(PostsAllDocument)
  return postsAll.map(({ slug }) => slug)
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const { post } = await request(PostBySlugDocument, { slug: params.slug })
  const datoMetadata = toNextMetadata([...post.seo])

  const description = post.meta && post.meta.description ? post.meta.description : post.excerpt
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
  const result = await request(PostBySlugDocument, { slug }, isEnabled)

  return <PostLayout {...result} />
}
