'use client'

import { useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@heroicons/react/20/solid'

const defaultFallback = '/' // Default fallback path if no history is present

export default function ButtonBack({ fallback = defaultFallback }) {
  const router = useRouter()

  function handleBack() {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push(fallback)
    }
  }

  return (
    <button
      type="button"
      className="inline-flex items-center rounded-lg border border-[#D9D9D9] px-3 py-1.5 text-sm font-normal tracking-wide sm:space-x-2 sm:px-4 sm:py-2"
      onClick={handleBack}
    >
      <ArrowLeftIcon className="size-4" />
      <span className="sr-only sm:not-sr-only">Back</span>
    </button>
  )
}
