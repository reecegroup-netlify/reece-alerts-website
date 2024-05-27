import Container from './Container'
import IconRSS from 'media/icon-rss@2x.png'
import Image from 'next/image'
import Link from 'next/link'
import Logo from './Logo'
import BarBrand from './BarBrand'

export default function Footer() {
  return (
    <footer className="bg-white">
      {/* footer - top */}
      <div className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-4 sm:gap-6">
            {/* footer - top - logo */}
            <h3>
              <Link href="/" className="inline-block">
                <Logo className="h-auto w-[82px]" />
              </Link>
            </h3>

            <div className="grid grid-cols-1 gap-4 sm:auto-cols-auto sm:grid-flow-col sm:grid-cols-none sm:gap-6">
              {/* footer - top - site description */}
              <div className="sm:col-span-2 md:col-auto">
                <div className="max-w-[344px]">
                  <p className="text-sm leading-normal">
                    Incident & Alert Communications is efficitur ornare euismod. In at viverra
                    turpis. Morbi cursus sapien nisi. Sed vitae rutrum massa, vitae semper est. Nunc
                    suscipit, magna sed luctus tempus.
                  </p>
                </div>
              </div>

              {/* footer - top - links */}
              <div className="flow-root md:col-auto">
                <div className="-m-1 flex max-w-[344px] flex-col items-start">
                  <Link
                    href="https://www.datocms.com/docs/next-js"
                    className="p-1 text-sm font-medium text-[#003057] hover:underline"
                  >
                    Reece Workplace
                  </Link>
                  <Link
                    href="https://github.com/datocms/nextjs-demo"
                    className="p-1 text-sm font-medium text-[#003057] hover:underline"
                  >
                    Reece Information Centre
                  </Link>
                  <Link
                    href="https://github.com/datocms/nextjs-demo"
                    className="p-1 text-sm font-medium text-[#003057] hover:underline"
                  >
                    Contact People Service
                  </Link>
                </div>
              </div>

              {/* footer - top - buttons */}
              <div className="sm:row-start-2 sm:justify-self-end md:row-auto">
                <Link
                  href="/feeds"
                  className="inline-flex items-center space-x-2 rounded-full border border-[#D9D9D9] p-1.5 pr-4 text-sm font-medium tracking-wide sm:space-x-2.5 sm:p-2 sm:pr-5"
                >
                  <Image
                    src={IconRSS}
                    alt="RSS icon"
                    className="size-[28px] md:size-[30px] lg:size-[32px]"
                  />
                  <span>Subscribe to web feed</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* footer -  bottom */}
      <div className="border-t border-[#D9D9D9] py-5 sm:py-6">
        <Container>
          <div className="flex flex-row justify-between">
            <div className="text-xs">Copyright &copy; 2024, Reece Ltd.</div>

            <div className="flow-root">
              <div className="-m-1 flex flex-row space-x-1.5">
                <Link
                  href="//www.reece.com.au/privacy"
                  className="p-1 text-xs hover:underline"
                  target="_blank"
                  title="Reece Privacy Policy (opens in new tab)"
                >
                  Privacy
                </Link>
                <Link
                  href="//help.reece.com.au"
                  className="p-1 text-xs hover:underline"
                  target="_blank"
                  title="Reece Help Centre (opens in new tab)"
                >
                  Help
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* footer - brand bar */}
      <BarBrand />
    </footer>
  )
}
