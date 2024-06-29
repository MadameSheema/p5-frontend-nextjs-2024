import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Recipes",
  description: "Glo's Recipes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head></head>
      <body className="flex flex-col bg-neutral-100">
        <Header />
        <div className="flex flex-1">{children}</div> 
        <Footer />
      </body>
    </html>
  );
}
