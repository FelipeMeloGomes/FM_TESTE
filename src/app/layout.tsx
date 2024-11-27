import Header from "@/components/layout/header";
import AppCartProvider from "@/components/shop/app-cart-provider";
import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Oxygen } from "next/font/google";
import "./globals.css";

const oxygem = Oxygen({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FM MarketPlace",
  description: "MarketPlace",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(oxygem.className, "min-h-screen flex flex-col")}>
        <AppCartProvider>
          <Toaster />
          <Header />
          <main className="flex-grow">{children}</main>
        </AppCartProvider>
      </body>
    </html>
  );
}
