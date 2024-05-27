import generateFeed from '@/lib/utils/generateFeed'

export async function GET() {
  const feed = await generateFeed()
  return new Response(feed.rss2(), {
    headers: { 'Content-Type': 'application/rss+xml' },
  })
}
