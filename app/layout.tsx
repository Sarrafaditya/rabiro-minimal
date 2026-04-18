import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/layout/CustomCursor";
import GrainOverlay from "@/components/layout/GrainOverlay";
import { Geist, Geist_Mono } from "next/font/google";

export const metadata: Metadata = {
  title: "Rabiro — Digital Marketing & Web Development Agency",
  description:
    "Rabiro is a data-driven digital marketing and web development agency based in Motihari, Bihar. We specialize in SEO, PPC, social media, video editing, graphic design, and high-performance web development.",
};
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-syne",       // keeps all existing class names working
  display: "swap",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono", // keeps all existing mono class names working
  display: "swap",
});
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" className={`${geist.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <body>
        <CustomCursor />
        <GrainOverlay />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
