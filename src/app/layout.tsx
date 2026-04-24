import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-syne", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  title: "App Dev · Kolawoles",
  description: "Full-Stack Engineering — Next.js, NestJS, React, Node. Adefemi Kolawole.",
  openGraph: {
    title: "App Dev · Kolawoles",
    description: "Full-Stack Engineering portfolio.",
    url: "https://appdev.kolawoles.com",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
