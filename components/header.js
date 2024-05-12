import BarBrand from "./bar-brand";
import Container from "./container";
import HeaderNav from "./HeaderNav.tsx";
import Link from "next/link";
import Logo from "./logo";

export default function Header() {
  return (
    <>
      {/* header - brand bar */}
      <BarBrand />

      {/* header */}
      <div className="sm:sticky top-0 z-40 w-full border-b border-[#F4F5F6] backdrop-blur flex-none transition-colors duration-500 lg:z-40 bg-white supports-backdrop-blur:bg-white/90">
        <Container>
          <div className="max-w-8xl mx-auto">
            <div className="py-4 sm:py-5 grid grid-flow-col auto-cols-auto gap-4 sm:gap-6 items-center">
              {/* header - logo */}
              <div className="relative flex items-center">
                <Link
                  className="flex-none overflow-hidden py-2 pr-3 sm:pr-6"
                  href="/"
                >
                  <Logo className="w-[66px] sm:w-[110px] h-auto" />
                </Link>

                {/* border divider added here as text has variable height when stacked */}
                <div className="py-1 sm:py-2.5 pl-3 sm:pl-6 border-l border-[#D9D9D9]">
                  <span className="text-base sm:text-lg md:text-xl font-medium leading-4 sm:leading-6 md:leading-7 tracking-wide">
                    Incident & Alert Communications
                  </span>
                </div>
              </div>

              {/* header - navigation */}
              <div className="justify-self-end">
                <div className="relative items-center ml-auto">
                  <HeaderNav />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
