import Link from "next/link";
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import { ArrowsUpDownIcon } from '@heroicons/react/24/solid'


export default function Header() {
  return (
    <div class="sticky top-0 z-40 w-full backdrop-blur flex-none transition-colors duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.06] bg-white/95 supports-backdrop-blur:bg-white/60 dark:bg-transparent">
      <div class="max-w-8xl mx-auto">
        <div class="py-5 border-b border-slate-900/10 lg:border-0 dark:border-slate-300/10 flow-root">
          <div class="relative flex items-center h-12 -mx-6">

            {/* header - logo */}
            <a class="flex-none overflow-hidden px-6" href="/">
              <span class="sr-only">Reece</span>
              <svg
                width="110"
                height="41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#a)">
                  <mask
                    id="b"
                    style={{ maskType: "luminance" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="110"
                    height="41"
                  >
                    <path d="M110 .012H0v40.334h110V.011Z" fill="#fff" />
                  </mask>
                  <g mask="url(#b)">
                    <path
                      d="M54.994 0A284.917 284.917 0 0 0 3.677 4.558s-3.64.57-3.64 3.952v23.131c0 3.2 3.64 3.819 3.64 3.819a267.106 267.106 0 0 0 51.317 4.85 267.08 267.08 0 0 0 51.317-4.85s3.64-.618 3.64-3.819V8.45c0-3.383-3.64-3.952-3.64-3.952A284.868 284.868 0 0 0 54.994 0Z"
                      fill="#003057"
                    />
                    <path
                      d="M18.602 15.566h.061a5.52 5.52 0 0 1 5.133-2.813h1.08v5.407a4.567 4.567 0 0 0-2.427-.521c-3.13 0-3.895 2.073-3.895 4.85v6.315h-5.582V12.96h5.63v2.606ZM43.745 21.834H31.89A3.148 3.148 0 0 0 34 25.218c.456.156.942.205 1.42.143a2.817 2.817 0 0 0 2.695-1.406h5.412c-.898 3.746-4.454 5.443-8.07 5.443-5.254 0-9.186-2.97-9.186-8.486 0-5.285 3.64-8.486 8.786-8.486 5.509 0 8.688 3.407 8.688 8.814v.594Zm-5.23-3.25a3.37 3.37 0 0 0-3.264-2.519 3.376 3.376 0 0 0-3.264 2.52h6.528ZM63.112 21.834H51.257a3.15 3.15 0 0 0 2.11 3.384c.456.156.942.205 1.42.143a2.818 2.818 0 0 0 2.682-1.406h5.425c-.898 3.746-4.454 5.443-8.07 5.443-5.254 0-9.186-2.97-9.186-8.486 0-5.285 3.64-8.486 8.786-8.486 5.509 0 8.688 3.407 8.688 8.814v.594Zm-5.23-3.25a3.37 3.37 0 0 0-3.264-2.519 3.376 3.376 0 0 0-3.264 2.52h6.528ZM97.392 21.834H85.55a3.149 3.149 0 0 0 2.11 3.384c.457.156.943.205 1.421.143a2.818 2.818 0 0 0 2.682-1.406h5.412c-.898 3.746-4.454 5.443-8.07 5.443-5.254 0-9.186-2.97-9.186-8.486 0-5.285 3.64-8.486 8.786-8.486 5.509 0 8.688 3.407 8.688 8.814v.594Zm-5.254-3.25a3.37 3.37 0 0 0-3.264-2.519 3.376 3.376 0 0 0-3.264 2.52h6.528ZM77.516 18.124a4.978 4.978 0 0 0-2.913-1.115 3.813 3.813 0 0 0-3.593 2.377c-.191.473-.286.98-.278 1.49a3.767 3.767 0 0 0 2.436 3.652c.488.185 1.01.267 1.532.24a4.322 4.322 0 0 0 2.816-1.08l1.432 3.965a9.252 9.252 0 0 1-5.4 1.697 8.38 8.38 0 0 1-7.957-5.05 8.357 8.357 0 0 1-.683-3.242 8.481 8.481 0 0 1 5.478-8.088 8.5 8.5 0 0 1 3.404-.544 9.227 9.227 0 0 1 5.194 1.83l-1.468 3.868Z"
                      fill="#fff"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h110v40.333H0z" />
                  </clipPath>
                </defs>
              </svg>
            </a>

            <div className="border-r border-[#D9D9D9] h-full"></div>

            <div className="px-6">
              <span className="color-[#575756] text-xl font-medium leading-7 tracking-wide">Incident & Alert Communications</span>
            </div>

            <div class="relative hidden lg:flex items-center ml-auto">
              <nav class="text-sm leading-snug text-slate-700 dark:text-slate-200">
                <ul class="flex space-x-8">
                  <li>
                    <a
                      class="border rounded-lg px-4 py-2 hover:text-sky-500 dark:hover:text-sky-400 flex items-center space-x-2"
                      href="/docs/installation"
                    >
                      <ArrowLeftIcon className="w-4 h-4" />
                      <span>Back</span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://tailwindui.com/?ref=top"
                      class="border rounded-lg px-4 py-2 hover:text-sky-500 dark:hover:text-sky-400 flex items-center space-x-2"
                    >
                      <span>Sort</span>
                      <ArrowsUpDownIcon className="w-4 h-4" />
                    </a>
                  </li>
                </ul>
              </nav>
              <div class="flex items-center border-l border-slate-200 ml-6 pl-6 dark:border-slate-800">
                <label
                  class="sr-only"
                  for="headlessui-listbox-button-:r5:"
                  id="headlessui-label-:r4:"
                  data-headlessui-state=""
                >
                  Theme
                </label>
                <button
                  type="button"
                  id="headlessui-listbox-button-:r5:"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state=""
                  aria-labelledby="headlessui-label-:r4: headlessui-listbox-button-:r5:"
                >
                  <span class="dark:hidden">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      class="w-6 h-6"
                    >
                      <path
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        class="stroke-slate-400 dark:stroke-slate-500"
                      ></path>
                      <path
                        d="M12 4v1M17.66 6.344l-.828.828M20.005 12.004h-1M17.66 17.664l-.828-.828M12 20.01V19M6.34 17.664l.835-.836M3.995 12.004h1.01M6 6l.835.836"
                        class="stroke-slate-400 dark:stroke-slate-500"
                      ></path>
                    </svg>
                  </span>
                  <span class="hidden dark:inline">
                    <svg viewBox="0 0 24 24" fill="none" class="w-6 h-6">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17.715 15.15A6.5 6.5 0 0 1 9 6.035C6.106 6.922 4 9.645 4 12.867c0 3.94 3.153 7.136 7.042 7.136 3.101 0 5.734-2.032 6.673-4.853Z"
                        class="fill-transparent"
                      ></path>
                      <path
                        d="m17.715 15.15.95.316a1 1 0 0 0-1.445-1.185l.495.869ZM9 6.035l.846.534a1 1 0 0 0-1.14-1.49L9 6.035Zm8.221 8.246a5.47 5.47 0 0 1-2.72.718v2a7.47 7.47 0 0 0 3.71-.98l-.99-1.738Zm-2.72.718A5.5 5.5 0 0 1 9 9.5H7a7.5 7.5 0 0 0 7.5 7.5v-2ZM9 9.5c0-1.079.31-2.082.845-2.93L8.153 5.5A7.47 7.47 0 0 0 7 9.5h2Zm-4 3.368C5 10.089 6.815 7.75 9.292 6.99L8.706 5.08C5.397 6.094 3 9.201 3 12.867h2Zm6.042 6.136C7.718 19.003 5 16.268 5 12.867H3c0 4.48 3.588 8.136 8.042 8.136v-2Zm5.725-4.17c-.81 2.433-3.074 4.17-5.725 4.17v2c3.552 0 6.553-2.327 7.622-5.537l-1.897-.632Z"
                        class="fill-slate-400 dark:fill-slate-500"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M17 3a1 1 0 0 1 1 1 2 2 0 0 0 2 2 1 1 0 1 1 0 2 2 2 0 0 0-2 2 1 1 0 1 1-2 0 2 2 0 0 0-2-2 1 1 0 1 1 0-2 2 2 0 0 0 2-2 1 1 0 0 1 1-1Z"
                        class="fill-slate-400 dark:fill-slate-500"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <button
              type="button"
              class="ml-auto text-slate-500 w-8 h-8 -my-1 flex items-center justify-center hover:text-slate-600 lg:hidden dark:text-slate-400 dark:hover:text-slate-300"
            >
              <span class="sr-only">Search</span>
              <svg
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="m19 19-3.5-3.5"></path>
                <circle cx="11" cy="11" r="6"></circle>
              </svg>
            </button>
            <div class="ml-2 -my-1 lg:hidden">
              <button
                type="button"
                class="text-slate-500 w-8 h-8 flex items-center justify-center hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300"
              >
                <span class="sr-only">Navigation</span>
                <svg width="24" height="24" fill="none" aria-hidden="true">
                  <path
                    d="M12 6v.01M12 12v.01M12 18v.01M12 7a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm0 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
              <div
                hidden=""
                style={{
                  position: "fixed",
                  top: "1px",
                  left: "1px",
                  width: "1px",
                  height: "0px",
                  padding: "0px",
                  margin: "-1px",
                  overflow: "hidden",
                  clip: "rect(0px, 0px, 0px, 0px)",
                  whiteSpace: "nowrap",
                  borderWidth: "0px",
                  display: "none",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
