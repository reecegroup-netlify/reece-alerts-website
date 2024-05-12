"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

const defaultFallback = "/"; // Default fallback path if no history is present

export default function ButtonBack(fallback: string = defaultFallback) {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback);
    }
  }

  return (
    <button
      type="button"
      className="border border-[#D9D9D9] rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-normal tracking-wide inline-flex items-center sm:space-x-2"
      onClick={handleBack}
    >
      <ArrowLeftIcon className="size-4" />
      <span className="sr-only sm:not-sr-only">Back</span>
    </button>
  );
}
