import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Soverign",
  description: "Soverign BX-Compatible Adventure Game",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="./normalize.css" />
        <link rel="stylesheet" href="./magick.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
