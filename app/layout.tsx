import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Naija Cyber-Resilience Hub",
  description: "Human-Centred Security for Nigerian Adults - A PMT Research Project",
  openGraph: {
    title: "I just became a Certified Cyber-Commander! 🛡️",
    description: "I've mastered the defense against AI Voice Scams and SIM Swaps. Can you?",
    url: "https://your-live-website-domain.com/learning", 
    siteName: "Naija Cyber-Resilience Hub",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}