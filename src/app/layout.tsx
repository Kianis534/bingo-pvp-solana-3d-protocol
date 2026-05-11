import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SoundToggle } from "@/components/ui/SoundToggle";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bingo PVP — Cyber Sci-Fi Competitive Web3 Bingo Arena",
  description: "Bingo PVP is a futuristic mobile-first competitive Bingo game with online PVP, AI practice, social trading, BPT token economy, Solana smart contract security, and hybrid ledger integration.",
  keywords: ["Bingo", "PVP", "Web3", "Solana", "Gaming", "Cyberpunk", "Tokenomics", "Mobile Game"],
  openGraph: {
    title: "Bingo PVP — Cyber Sci-Fi Competitive Web3 Bingo Arena",
    description: "Enter the Cyber Bingo Arena. Competitive Web3 gaming at its finest.",
    type: "website",
    url: "https://bingopvp.game",
    siteName: "Bingo PVP",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bingo PVP — Cyber Sci-Fi Competitive Web3 Bingo Arena",
    description: "Competitive Web3 Bingo Arena. Built on Solana.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body 
        className={`${inter.className} bg-background text-foreground antialiased overflow-x-hidden`}
        style={{ backgroundColor: '#050505', color: '#ffffff' }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
