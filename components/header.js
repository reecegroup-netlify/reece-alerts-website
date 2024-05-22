import BarBrand from './bar-brand'
import Container from './Container'
import HeaderNav from './HeaderNav.tsx'
import Link from 'next/link'
import Logo from './logo'

export default function Header() {
  return (
    <>
      {/* header - brand bar */}
      <BarBrand />

      {/* header */}
      <div className="supports-backdrop-blur:bg-white/90 top-0 z-40 w-full flex-none border-b border-[#F4F5F6] bg-white backdrop-blur transition-colors duration-500 sm:sticky lg:z-40">
        <Container>
          <div className="max-w-8xl mx-auto">
            <div className="grid auto-cols-auto grid-flow-col items-center gap-4 py-4 sm:gap-6 sm:py-5">
              {/* header - logo */}
              <div className="relative flex items-center">
                <Link className="flex-none overflow-hidden py-2 pr-3 sm:pr-6" href="/">
                  <Logo className="h-auto w-[66px] sm:w-[110px]" />
                </Link>

                {/* border divider added here as text has variable height when stacked */}
                <div className="border-l border-[#D9D9D9] py-1 pl-3 sm:py-2.5 sm:pl-6">
                  <span className="text-base font-medium leading-4 tracking-wide sm:text-lg sm:leading-6 md:text-xl md:leading-7">
                    Incident & Alert Communications
                  </span>
                </div>
              </div>

              {/* header - navigation */}
              <div className="justify-self-end">
                <div className="relative ml-auto items-center">
                  <HeaderNav />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  )
}
