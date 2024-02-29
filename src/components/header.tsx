"use client";

import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export function Header() {
  const path = usePathname();

  const linkClass = (url: string) =>
    clsx({
      "text-gray-400 hover:text-white": !path.includes(url),
      "text-white underline": path.includes(url),
    });

  return (
    <header className="sm:p-6 p-6 sm:flex items-center fixed top-0 w-screen bg-black">
      <Link
        href="/"
        className="bg-white text-black px-2 py-1 rounded font-bold text-xl hidden sm:inline absolute"
      >
        DORIO
      </Link>
      <nav className="sm:gap-8 flex justify-between items-center max-w-[600px] m-auto">
        <Link href="/" className="sm:hidden bg-white text-black rounded font-bold px-1 py-0.5">
          DORIO
        </Link>
        <Link href="/portfolio" className={linkClass("portfolio")}>
          Portfolio
        </Link>
        <Link href="/about-me" className={linkClass("about-me")}>
          About Me
        </Link>
        <Link href="/contact" className={linkClass("contact")}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
