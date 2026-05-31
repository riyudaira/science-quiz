import type { Metadata } from "next";
import { Hachi_Maru_Pop } from "next/font/google";
import "./globals.css";

const hachiMaruPop = Hachi_Maru_Pop({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-hachi-maru",
});

export const metadata: Metadata = {
  title: "科学法則 ✖️ 日常クイズ",
  description: "科学を身近に感じるクイズアプリ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${hachiMaruPop.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
