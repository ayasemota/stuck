import type { Metadata } from "next";
import { Play } from "next/font/google";
import "./globals.css";

const play = Play({
  weight: ["400", "700"],
  variable: "--font-play",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stuck | Traffic AI Chat Bot",
  description: "WeThink Traffic | eden + play",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${play.variable} antialiased bg-white text-black`}
      >
        {children}
      </body>
    </html>
  );
}