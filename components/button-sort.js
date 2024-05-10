"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";

const defaultFallback = "/"; // Default fallback path if no history is present

export default function ButtonSort({ fallback = defaultFallback }) {
  return (
    <Menu>
      <MenuButton className="border border-[#D9D9D9] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-normal tracking-wide inline-flex items-center sm:space-x-2">
        <span className="sr-only sm:not-sr-only">Sort</span>
        <ArrowsUpDownIcon className="size-4" />
      </MenuButton>
      <MenuItems anchor="bottom end">
        <MenuItem>
          <a className="block font-sm data-[focus]:bg-blue-100" href="/asc">
            Newest to oldest
          </a>
        </MenuItem>
        <MenuItem>
          <a className="block font-sm data-[focus]:bg-blue-100" href="/desc">
          Oldest to newest
          </a>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}