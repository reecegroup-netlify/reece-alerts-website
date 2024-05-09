import Image from "next/image";
import Link from "next/link";
import { ArrowsUpDownIcon } from "@heroicons/react/24/solid";
import siteBrandBar from "media/site-brand-bar@2x.png";
import Container from "./container";
import Logo from "./logo";
import BackButton from "./back-button";

export default function Header() {
  return (
    <>
      {/* top bar - brand bar */}
      <div className="h-4 sm:h-5 md:h-6m lg:h-7 overflow-hidden">
        <Image
          src={siteBrandBar}
          width={3580}
          height={60}
          className="min-w-full max-w-none w-auto h-full"
          alt="Pattern of vertical stripes in navy blue and light grey"
        />
      </div>

      {/* header */}
      <div className="sticky top-0 z-40 w-full border-b border-[#F4F5F6] backdrop-blur flex-none transition-colors duration-500 lg:z-50 bg-white supports-backdrop-blur:bg-white/90 dark:bg-transparent">
        <Container>
          <div className="max-w-8xl mx-auto">
            <div className="py-4 sm:py-5 flow-root">
              <div className="relative flex items-center">
                {/* header - logo */}
                <Link
                  className="flex-none overflow-hidden py-2 pr-4 sm:pr-6"
                  href="/"
                >
                  <Logo className="w-[66px] sm:w-[110px] h-auto" />
                </Link>

                {/* header - site name */}
                {/* border divider added here as text has variable height when stacked */}
                <div className="py-1 md:py-2.5 px-4 sm:px-6 border-l border-[#D9D9D9]">
                  <span className="text-base sm:text-lg md:text-xl font-medium leading-4 sm:leading-6 md:leading-7 tracking-wide">
                    Incident & Alert Communications
                  </span>
                </div>

                {/* header - navigation */}
                <div className="relative hidden lg:flex items-center ml-auto">
                  <nav className="text-sm leading-snug dark:text-slate-200">
                    <ul className="flex space-x-4">
                      <li>
                        <BackButton />
                      </li>
                      <li>
                        <a
                          href="https://tailwindui.com/?ref=top"
                          className="border rounded-lg px-4 py-2 hover:text-sky-500 dark:hover:text-sky-400 flex items-center space-x-2"
                        >
                          <span>Sort</span>
                          <ArrowsUpDownIcon className="w-4 h-4" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
