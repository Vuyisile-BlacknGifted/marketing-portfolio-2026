import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vuyisile Phika | Growth marketer and content strategist",
  description:
    "Portfolio for Vuyisile Phika, growth marketer and content strategist focused on measurable social and campaign impact."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
