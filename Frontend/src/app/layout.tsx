"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

{
  /**export const metadata: Metadata = {
  title: "Homepage",
  description: "This is a homepage of codefox website",
}; */
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <RecoilRoot>{children}</RecoilRoot>
        </SessionProvider>
      </body>
    </html>
  );
}
