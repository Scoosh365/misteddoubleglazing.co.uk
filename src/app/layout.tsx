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
  title: "Misted Double Glazing Repairs UK | Misted Double Glazing",
  description:
    "UK-wide misted and blown double glazing repairs. Clear your foggy windows without full replacement and save up to 70% vs new frames.",
  metadataBase: new URL("https://misteddoubleglazing.co.uk"),
  openGraph: {
    title: "Misted Double Glazing Repairs UK | Misted Double Glazing",
    description:
      "Fast, local repairs for misted and blown double glazing across the UK. Clear views, no replacement needed.",
    url: "/",
    siteName: "Misted Double Glazing",
    type: "website",
  },
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
        {children}
        <footer className="border-t border-white/10 bg-black/80 px-4 py-4 text-center text-xs text-zinc-400">
          <span>
            © {new Date().getFullYear()} misteddoubleglazing.co.uk
          </span>
        </footer>
      </body>
    </html>
  );
}
