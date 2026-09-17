import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { PageTransitionProvider } from "@/components/layout/PageTransition";
import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/ui/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DEMONZ | Creative Technologist & Entrepreneur",
  description: "I build digital products, visual identities, multimedia content, and real-world businesses by combining technology, creativity, and entrepreneurial thinking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en" 
      className={`${geistSans.variable} ${geistMono.variable} antialiased`} 
      suppressHydrationWarning
    >
      <body 
        className="bg-background text-foreground min-h-screen selection:bg-brand-purple/30 selection:text-white overflow-x-hidden"
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          <PageTransitionProvider>
            <CustomCursor />
            <Navigation />
            <main className="relative">{children}</main>
            <Footer />
          </PageTransitionProvider>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
