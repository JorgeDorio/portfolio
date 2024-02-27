"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function Header() {
  const path = usePathname();

  const linkClass = (url: string) =>
    clsx({
      "text-gray-400 hover:text-white": !path.includes(url),
      "text-white": path.includes(url),
    });

  return (
    <header className="p-6 space-x-8">
      <Link
        href="/"
        className="bg-white text-black p-2 rounded font-bold text-xl"
      >
        DORIO
      </Link>
      <Link href="/portfolio" className={linkClass("portfolio")}>
        Portfolio
      </Link>
      <Link href="/experience" className={linkClass("experience")}>
        Experience
      </Link>
      <Link href="/about-me" className={linkClass("about-me")}>
        About Me
      </Link>
    </header>
  );
}
