import "./globals.css";
import { Inter } from "next/font/google";
import Web3Provider from "@/providers/Web3Provider";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BlueCut Scanner",
  description: "Lightweight Base ecosystem helper — by Ayaz",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-gray-50 dark:bg-[#0d0d0f]`}>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
