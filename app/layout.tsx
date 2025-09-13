import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export const metadata: Metadata = {
  icons: {
    icon: "/Images/logo.png"
  },
  title: "Expanthree",
  description: "Expanthree adalah identitas kebersamaan dari kelas 10.3 SMAN 1 Rejang Lebong tahun ajaran 2025/2026.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="md:p-10">
        <Navbar />
        <h1 className="my-0 py-0 md:text-xl text-center"><Link href="https://www.instagram.com/expanthree._smansa/">@expanthree._smansa</Link></h1>
        {children}
      </body>
    </html>
  );
}
