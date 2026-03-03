import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar"; // 1. Import the Navbar

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Project Guard | Cyber-Resilience Lab",
  description: "Human-Centred Security for Nigerian Adults - A PMT Research Project",
  openGraph: {
    title: "I just became a Certified Cyber-Commander! 🛡️",
    description: "I've mastered the defense against AI Voice Scams and SIM Swaps. Can you?",
    url: "https://your-live-website-domain.com/learning", 
    siteName: "Project Guard",
    images: [{ url: "/certificate-preview.png", width: 1200, height: 630 }],
    locale: "en_NG",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
        {/* 2. Place Navbar at the top level */}
        <Navbar />

        {/* 3. Wrap children in flex-grow and add top padding to clear the fixed Navbar */}
        <main className="flex-grow pt-20">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}