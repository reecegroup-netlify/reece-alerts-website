'use client'

import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { PostListLayout } from '../layouts/PostListLayout'

export function DraftPostIndex({ subscription }) {
  const { data } = useQuerySubscription(subscription)

  return <PostListLayout data={data} />
}
