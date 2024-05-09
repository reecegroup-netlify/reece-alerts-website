"use client";

import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";
import { usePathname } from "next/navigation";
import ButtonBack from "./button-back";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="text-sm leading-snug dark:text-slate-200">
      <ul className="flex space-x-4">
        {pathname !== "/" && (
          <li>
            <ButtonBack />
          </li>
        )}
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
  );
}
