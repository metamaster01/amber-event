import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display, DM_Sans, Great_Vibes } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/components/lenisProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});
 
const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});
 
const greatVibes = Great_Vibes({
  subsets: ["latin"],
  variable: "--font-great-vibes",
  display: "swap",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Amber Events : Turning Celebrations Into Memories",
  description: "Amber Events specializes in creating unforgettable celebrations, offering expert event planning and management for weddings, parties, and corporate events.",
  keywords: ["Amber Events", "event planning", "wedding planner", "party organizer", "corporate events", "celebrations", "memorable events", "event management"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} ${greatVibes.variable} ${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 overflow-x-hidden`}
      >
        <LenisProvider> 

        {children}
        </LenisProvider>
      </body>
    </html>
  );
}
