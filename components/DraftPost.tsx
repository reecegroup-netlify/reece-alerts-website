'use client'

import { useQuerySubscription } from 'react-datocms/use-query-subscription'
import { PostLayout } from '@/layouts/PostLayout'

export function DraftPost({ subscription }) {
  const { data } = useQuerySubscription(subscription)

  return <PostLayout data={data} />
}
