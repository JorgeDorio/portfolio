"use client";

import Terminal from "@/components/terminal";
import Image from "next/image";
import picture from "../../public/profile-picture.webp";

export default function Home() {
  return (
    <main className="space-y-4 flex flex-col items-center pt-[10%]">
      <Image alt="" src={picture} className="rounded-full size-72" />
      <Terminal fullText="Jorge Dorio" />
    </main>
  );
}
