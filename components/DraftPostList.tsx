'use client'

import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { PostListLayout } from '../layouts/PostListLayout'

export function DraftPostList({ subscription, currentPage = 1 }) {
  const { data } = useQuerySubscription(subscription)

  return <PostListLayout data={data} currentPage={currentPage} />
}
