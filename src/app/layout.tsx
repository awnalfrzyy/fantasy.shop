import Info from "../components/ui/info";
import { NavigationMenuDemo } from '../components/ui/navbar';
import ButtomNav from "@/components/buttomNav";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fantasy.Shop",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <Info />
        <NavigationMenuDemo /> */}
        <div >
          {children}
        </div>
        {/* <ButtomNav /> */}
      </body>
    </html>
  );
}
