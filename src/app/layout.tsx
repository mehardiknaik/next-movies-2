import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "./globals.css";
import "swiper/swiper-bundle.min.css";
import ThemeProviderNext from "@/components/ThemeProviderNext";
import { Inter } from "next/font/google";
import { Suspense } from "react";
//@ts-ignore
import clsx from "clsx";
const inter = Inter({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProviderNext>
      <html lang="en">
        <body
          className={clsx(
            inter.className,
            "scrollbar-thumb-slate-400 dark:scrollbar-thumb-slate-700 scrollbar-thin dark:bg-black dark:text-white"
          )}
        >
          <Header />
          <main className="container select-none">{children}</main>
          <Footer />
        </body>
      </html>
    </ThemeProviderNext>
  );
}
