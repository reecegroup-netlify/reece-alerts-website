import Container from "./Container";
import IconRSS from "media/icon-rss@2x.png";
import Image from "next/image";
import Link from "next/link";
import Logo from "./logo";
import BarBrand from "./bar-brand";

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
                <Logo className="w-[82px] h-auto" />
              </Link>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-none sm:grid-flow-col sm:auto-cols-auto gap-4 sm:gap-6">
              {/* footer - top - site description */}
              <div className="sm:col-span-2 md:col-auto">
                <div className="max-w-[344px]">
                  <p className="text-sm leading-normal">
                    Incident & Alert Communications is efficitur ornare euismod.
                    In at viverra turpis. Morbi cursus sapien nisi. Sed vitae
                    rutrum massa, vitae semper est. Nunc suscipit, magna sed
                    luctus tempus.
                  </p>
                </div>
              </div>

              {/* footer - top - links */}
              <div className="md:col-auto flow-root">
                <div className="max-w-[344px] -m-1 flex flex-col items-start">
                  <Link
                    href="https://www.datocms.com/docs/next-js"
                    className="text-sm text-[#003057] font-medium hover:underline p-1"
                  >
                    Reece Workplace
                  </Link>
                  <Link
                    href="https://github.com/datocms/nextjs-demo"
                    className="text-sm text-[#003057] font-medium hover:underline p-1"
                  >
                    Reece Information Centre
                  </Link>
                  <Link
                    href="https://github.com/datocms/nextjs-demo"
                    className="text-sm text-[#003057] font-medium hover:underline p-1"
                  >
                    Contact People Service
                  </Link>
                </div>
              </div>

              {/* footer - top - buttons */}
              <div className="sm:justify-self-end sm:row-start-2 md:row-auto">
                <Link
                  href="/"
                  className="border border-[#D9D9D9] rounded-full p-1.5 sm:p-2 pr-4 sm:pr-5 text-sm font-medium tracking-wide inline-flex items-center space-x-2 sm:space-x-2.5"
                >
                  <Image
                    src={IconRSS}
                    alt="RSS icon"
                    className="size-[28px] md:size-[30px] lg:size-[32px]"
                  />
                  <span>Subscribe to RSS</span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* footer -  bottom */}
      <div className="py-5 sm:py-6 border-t border-[#D9D9D9]">
        <Container>
          <div className="flex flex-row justify-between">
            <div className="text-xs">Copyright &copy; 2024, Reece Ltd.</div>

            <div className="flow-root">
              <div className="flex flex-row -m-1 space-x-1.5">
                <Link
                  href="//www.reece.com.au/privacy"
                  className="text-xs hover:underline p-1"
                  target="_blank"
                  title="Reece Privacy Policy (opens in new tab)"
                >
                  Privacy
                </Link>
                <Link
                  href="//help.reece.com.au"
                  className="text-xs hover:underline p-1"
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
  );
}
