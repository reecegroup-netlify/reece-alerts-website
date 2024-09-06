'use client'

import { usePathname } from 'next/navigation'
import ButtonBack from './ButtonBack'
import ButtonSort from './ButtonSort'
import { Suspense } from 'react'

export default function HeaderNav() {
  const pathname = usePathname()
  return (
    <nav className="text-sm leading-snug">
      <ul className="flex space-x-4">
        {!(pathname === '/' || pathname.startsWith('/page')) && (
          <li>
            <Suspense>
              <ButtonBack />
            </Suspense>
          </li>
        )}
        {(pathname === '/' || pathname.startsWith('/page')) && (
          <li>
            <Suspense>
              <ButtonSort />
            </Suspense>
          </li>
        )}
      </ul>
    </nav>
  )
}
