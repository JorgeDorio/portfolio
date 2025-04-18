import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Jorge Dorio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Big+Shoulders+Stencil:opsz,wght@10..72,100..900&family=Oswald:wght@200..700&display=swap"
        rel="stylesheet"
      /> */}
      <GoogleAnalytics gaId="G-17QZQ3SD4G" />
      <body className={inter.className + " bg-black text-white"}>
        <Header />
        <div className="mt-[72px]">{children}</div>
      </body>
    </html>
  );
}
