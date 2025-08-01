import type { Metadata } from "next";
import "./globals.css";

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
      <body className={`antialiased bg-white text-brown text-body`}>{children}</body>
    </html>
  );
}
