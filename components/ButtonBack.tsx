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
      className="inline-flex items-center rounded-lg border border-[#EDEDED] px-3 py-1.5 text-sm font-normal leading-[1.18125rem] tracking-wide text-[#003057] hover:bg-[#D5D5D5] hover:border-[#D5D5D5] sm:space-x-2 sm:px-4 sm:py-2"
      onClick={handleBack}
    >
      <ArrowLeftIcon className="size-4" />
      <span className="sr-only sm:not-sr-only">Back</span>
    </button>
  )
}
