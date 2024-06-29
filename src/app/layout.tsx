import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import PlausibleProvider from 'next-plausible'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lumo",
  description: "Simple, versatile, nostalgic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <PlausibleProvider domain="shotwithlumo.com" />
      </head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}
