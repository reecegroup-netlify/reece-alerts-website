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

  // sort direction from searchParams
  const order = searchParams.get('order')

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
            aria-selected={order !== 'ASC'}
            href={
              // <pathname>
              pathname
            }
            className="block px-3 py-1 pr-10 text-sm text-[#003057] data-[focus]:bg-[#D5D5D5] aria-selected:bg-[#D5D5D5]"
          >
            Newest to oldest
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            aria-selected={order === 'ASC'}
            href={
              // <pathname>?order=ASC
              pathname + '?' + createQueryString('order', 'ASC')
            }
            className="block px-3 py-1 pr-10 text-sm text-[#003057] data-[focus]:bg-[#D5D5D5] aria-selected:bg-[#D5D5D5]"
          >
            Oldest to newest
          </Link>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
