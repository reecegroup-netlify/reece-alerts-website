'use client'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ArrowsUpDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import { useCallback } from 'react'
import Button from './Button'

const defaultFallback = '/' // Default fallback path if no history is present

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
      <MenuButton>
        <Button as={'span'}>
          <span className="sr-only sm:not-sr-only">Sort</span>
          <ArrowsUpDownIcon className="size-4" />
        </Button>
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="z-50 mt-4 rounded-lg border border-[#D9D9D9] bg-white py-2"
      >
        <MenuItem>
          <Link
            href={
              // <pathname>?sort=ASC
              pathname + '?' + createQueryString('sort', 'ASC')
            }
            className="block px-3 py-1 pr-10 text-sm data-[focus]:bg-blue-100"
          >
            Newest to oldest
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            href={
              // <pathname>?sort=DESC
              pathname + '?' + createQueryString('sort', 'DESC')
            }
            className="block px-3 py-1 pr-10 text-sm data-[focus]:bg-blue-100"
          >
            Oldest to newest
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
