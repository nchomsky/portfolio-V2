import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/fonts";

export const metadata: Metadata = {
  title: "Noah Chomsky",
  description: "Portfolio of Noah Chomsky",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.className} antialiased`}>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
