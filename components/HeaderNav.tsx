'use client'

import { usePathname } from 'next/navigation'
import ButtonBack from './ButtonBack'
import ButtonSort from './ButtonSort'
import { Suspense } from 'react'
import { PostsAllCountDocument } from '@/lib/api/generated'
import { request } from '@/lib/api/datocms'

export default async function HeaderNav() {
  const pathname = usePathname()

  const { postsAll } = await request(PostsAllCountDocument)

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
        {postsAll.count > 0 && (pathname === '/' || pathname.startsWith('/page')) && (
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
