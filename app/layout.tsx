import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import MySideBar from "./components/SideBar/MySideBar";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BounaderMedRafik <3",
  description:
    "Official portfolio of Bounader Med Rafik!, feel free to discover the potentials that i am able to make",
  icons: {
    icon: ["/icons/favicon.ico?v-4"],
    apple: ["/icons/apple-touch-icon.png?v-4"],
    shortcut: ["/icons/apple-touch-icon.png"],
  },
  manifest: "/icons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="hidden md:block">
          <div className="relative z-20">
            <MySideBar />
          </div>
          <div className="ml-[20%]">
            {children}
            <SpeedInsights />
          </div>
        </div>
        <div className=" md:hidden h-screen w-full flex justify-center items-center">
          MobileSupport Unavailable <br /> Soon It WIll Be
        </div>
      </body>
    </html>
  );
}
