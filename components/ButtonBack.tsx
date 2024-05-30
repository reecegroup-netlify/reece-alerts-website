'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'
import Button from './Button'

const defaultFallback = '/' // Default fallback path if no history is present

export default function ButtonBack({ fallback = defaultFallback }) {
  const router = useRouter()

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back()
    }
    router.push(fallback)
  }

  return (
    <Button onClick={handleBack}>
      <ArrowLeftIcon className="size-4" />
      <span className="sr-only sm:not-sr-only">Back</span>
    </Button>
  )
}
