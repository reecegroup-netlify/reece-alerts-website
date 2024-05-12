"use client";

import { usePathname } from "next/navigation";
import ButtonBack from "./button-back.js";
import ButtonSort from "./ButtonSort";

export default function HeaderNav() {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <nav className="text-sm leading-snug">
      <ul className="flex space-x-4">
        {pathname !== "/" && (
          <li>
            <ButtonBack />
          </li>
        )}
        {(pathname === "/" || pathname.startsWith('/page')) && (
          <li>
            <ButtonSort />
          </li>
        )}
      </ul>
    </nav>
  );
}
