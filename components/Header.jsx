"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  return (
    <header className="flex items-center justify-between py-3">
      <Link href="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
        BlueCut Scanner
      </Link>
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <a
          href="https://discord.gg/buildonbase"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
        >
          Discord
        </a>
      </div>
    </header>
  );
}