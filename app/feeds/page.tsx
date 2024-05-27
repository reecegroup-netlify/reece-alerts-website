
import { PageLayout } from '@/layouts/PageLayout'
import { config } from '@/lib/config'
import Link from 'next/link'

export default async function Page() {

  return (<PageLayout>
    <h1 className="mb-4 text-2xl font-medium tracking-tight text-[#003057] lg:mb-5">
      Web feeds
    </h1>

    <div
      className="prose prose-slate mb-5 prose-a:relative prose-a:z-10"
      id="main-content"
    >
      <p>Subscribe to {config.SITE_TITLE} syndicated web feeds</p>
      <h2>Formats:</h2>
      <ul><li><Link href={'/feed.rss'}><abbr title='Really Simple Syndication'>RSS</abbr></Link></li><li><Link href={'/feed.atom'}>Atom</Link></li><li><Link href={'/feed.json'}><abbr title='JavaScript Object Notation'>JSON</abbr> Feed</Link></li></ul>
    </div>

  </PageLayout>)
}
