
import { PageLayout } from '@/layouts/PageLayout'
import { config } from '@/lib/config'
import Link from 'next/link'

export default async function Page() {

  return (<PageLayout>


    <div
      className="prose mb-5 prose-a:relative prose-a:z-10"
      id="main-content"
    >
      <h1>
        Web feeds
      </h1>
      <p className='lead'>Subscribe to {config.SITE_TITLE} syndicated web feeds</p>
      <h2>Formats:</h2>
      <ul><li><Link href={'/feed.rss'}><abbr title='Really Simple Syndication'>RSS</abbr></Link></li><li><Link href={'/feed.atom'}>Atom</Link></li><li><Link href={'/feed.json'}><abbr title='JavaScript Object Notation'>JSON</abbr> Feed</Link></li></ul>
    </div>

  </PageLayout>)
}
