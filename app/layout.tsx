import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ECOTECASIA — Global Consumer Electronics Lifecycle Platform",
  description:
    "Engineering-driven refurbishment, surface restoration, and lifecycle management — at scale. Powered by EDI Philippines in the PEZA Economic Zone.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900">{children}</body>
    </html>
  );
}
