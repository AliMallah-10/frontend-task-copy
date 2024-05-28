import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { getLangDir } from "rtl-detect";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "1001 - الرئيسية",
  description:
    "1001 is the home for your favourite series, documentaries and TV shows from Iraq and around the world, featuring thousands of hours of original and exclusive video content.",
};
interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locales: string;
  };
}
export default async function RootLayout({
  children,
  params: { locales },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();
  const locale = await getLocale();
  const direction = getLangDir(locale);

  return (
    <html lang={locales} dir={direction}  >
      <body
        className={`${inter.className} bg-[#010028] text-[#f2f2f2] text-lg  overflow-x-hidden`}
      >
        {" "}
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
