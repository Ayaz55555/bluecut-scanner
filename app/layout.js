import "./globals.css";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BlueCut Scanner",
  description: "Lightweight Base ecosystem helper — by Ayaz",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-50 dark:bg-[#0d0d0f]">
      <body className={inter.className}>{children}</body>
    </html>
  );
}