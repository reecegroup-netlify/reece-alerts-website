import { draftMode } from 'next/headers'
import { request } from '@/lib/api/datocms'
import { PostLayout } from '@/layouts/PostLayout'
import { Metadata } from 'next'
import { PostBySlugDocument, PostsAllDocument } from '@/lib/api/generated'
import { config } from '@/lib/config'

const { locale, siteNameWithReece: siteName } = config.site

export async function generateStaticParams() {
  const { postsAll } = await request(PostsAllDocument)
  return postsAll.map(({ slug }) => slug)
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const { post } = await request(PostBySlugDocument, { slug: params.slug })
  const { category, excerpt: description, posted, slug, title, updated } = post

  return {
    title,
    openGraph: {
      title,
      description,
      locale,
      type: 'article',
      siteName,
      publishedTime: posted,
      modifiedTime: updated,
      tags: [category.name],
    },
    twitter: {
      title,
      description,
      card: 'summary',
    },
    description,
    alternates: {
      canonical: `/posts/${slug}`,
      types: {
        'application/rss+xml': `/feed.rss`,
        'application/atom+xml': `/feed.atom`,
        'application/json': `/feed.json`,
      },
    },
  }
}

export default async function Page({ params }: { params: { slug: string } }) {
  const { isEnabled } = draftMode()

  // slug from params
  const { slug } = params

  // query posts eq slug
  const result = await request(PostBySlugDocument, { slug }, isEnabled)

  return <PostLayout {...result} />
}
