"use client";

import { usePathname } from "next/navigation";
import ButtonBack from "./button-back";
import ButtonSort from "./button-sort";

export default function HeaderNav() {
  const pathname = usePathname();

  return (
    <nav className="text-sm leading-snug dark:text-slate-200">
      <ul className="flex space-x-4">
        {pathname !== "/" && (
          <li>
            <ButtonBack />
          </li>
        )}
        {pathname === "/" && (
        <li>
          <ButtonSort />
        </li>
        )}
      </ul>
    </nav>
  );
}
