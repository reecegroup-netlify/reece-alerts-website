"use client";

import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

const defaultFallback = "/"; // Default fallback path if no history is present

export default function ButtonBack({ fallback = defaultFallback }) {
  const router = useRouter();

  function handleBack() {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(fallback | "/");
    }
  }

  return (
    <button
      type="button"
      className="border rounded-lg px-4 py-2 hover:text-sky-500 dark:hover:text-sky-400 flex items-center space-x-2"
      onClick={handleBack}
    >
      <ArrowLeftIcon className="w-4 h-4" />
      <span>Back</span>
    </button>
  );
}
