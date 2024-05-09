"use client";

import { useRouter } from "next/navigation";
import { ArrowsUpDownIcon } from "@heroicons/react/20/solid";

const defaultFallback = "/"; // Default fallback path if no history is present

export default function ButtonSort({ fallback = defaultFallback }) {
  const router = useRouter();

  function handleSort() {
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
    >
      <span>Sort</span>
      <ArrowsUpDownIcon className="w-4 h-4" />
    </button>

  );
}
