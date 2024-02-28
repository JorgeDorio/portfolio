"use client";

import Terminal from "@/components/terminal";
import Image from "next/image";
import picture from "../../public/profile-picture.webp";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center">
      <div className="space-y-4 mt-48 flex flex-col items-center">
        <Image alt="" src={picture} className="rounded-full size-72" />
        <Terminal fullText="Jorge Dorio" />
      </div>
    </main>
  );
}
