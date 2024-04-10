import type { Metadata } from "next";
import "./globals.css";
import "./normalize.css";
import { Header } from "app/components/shared/Header";
import { playfair, raleway } from "./fonts/fonts";


export const metadata: Metadata = {
  title: "Commerce",
  description: "The best place to buy stuff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${playfair.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
