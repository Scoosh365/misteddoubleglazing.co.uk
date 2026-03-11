import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

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
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        ) : null}
        {children}
        <footer className="border-t border-slate-200 bg-slate-50 px-4 py-4 text-center text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>© {new Date().getFullYear()} misteddoubleglazing.co.uk</span>
            <a href="/terms" className="text-sky-300 hover:text-sky-200">
              Terms &amp; conditions
            </a>
            <a href="/site-map" className="text-sky-300 hover:text-sky-200">
              HTML sitemap
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
