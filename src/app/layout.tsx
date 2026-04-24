import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import content from "@/content/app-content.json";

const syne = Syne({ subsets: ["latin"], weight: ["400", "700", "800"], variable: "--font-syne", display: "swap" });
const dmSans = DM_Sans({ subsets: ["latin"], weight: ["300", "400", "500"], style: ["normal", "italic"], variable: "--font-dm-sans", display: "swap" });

export const metadata: Metadata = {
  title: content.metadata.title,
  description: content.metadata.description,
  openGraph: {
    title: content.metadata.openGraph.title,
    description: content.metadata.openGraph.description,
    url: content.metadata.openGraph.url,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
