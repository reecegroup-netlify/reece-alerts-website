"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useCallback } from "react";

const defaultFallback = "/"; // Default fallback path if no history is present

export default function ButtonSort({ fallback = defaultFallback }) {
  const pathname = usePathname()
  const searchParams = useSearchParams()
 
  // Get a new searchParams string by merging the current
  // searchParams with a provided key/value pair
  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)
 
      return params.toString()
    },
    [searchParams]
  )
  
  return (
    <Menu>
      <MenuButton className="border border-[#D9D9D9] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-normal tracking-wide inline-flex items-center sm:space-x-2">
        <span className="sr-only sm:not-sr-only">Sort</span>
        <ArrowsUpDownIcon className="size-4" />
      </MenuButton>
      <MenuItems anchor="bottom end" className="border border-[#D9D9D9] rounded-lg bg-white mt-4 py-2 z-50">
        <MenuItem>
          <Link
            href={
              // <pathname>?sort=asc
              pathname + '?' + createQueryString('sort', 'asc')
            }
            className="block text-sm px-3 pr-10 py-1 data-[focus]:bg-blue-100"
          >
            Newest to oldest
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href={
              // <pathname>?sort=desc
              pathname + '?' + createQueryString('sort', 'desc')
            } 
            className="block text-sm px-3 pr-10 py-1 data-[focus]:bg-blue-100"
          >
            Oldest to newest
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}