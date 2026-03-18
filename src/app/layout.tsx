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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Misted Double Glazing",
    url: "https://misteddoubleglazing.co.uk",
    telephone: "+44 7712 677 697",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Alloa Business Centre, Whins Road",
      addressLocality: "Alloa",
      addressRegion: "Clackmannanshire",
      postalCode: "FK10 3SA",
      addressCountry: "GB",
    },
  };

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="lazyOnload"
            />
            <Script id="ga4-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
                // #region agent log
                fetch('http://127.0.0.1:7827/ingest/eba06004-ae65-438c-b59c-40b7c9722fa8',{method:'POST',headers:{'Content-Type':'application/json','X-Debug-Session-Id':'8af5dc'},body:JSON.stringify({sessionId:'8af5dc',runId:'pre-fix',hypothesisId:'H1',location:'src/app/layout.tsx:ga4-init',message:'GA4 init executed',data:{measurementId:'${GA_MEASUREMENT_ID}',path:window.location.pathname,readyState:document.readyState},timestamp:Date.now()})}).catch(()=>{});
                // #endregion
              `}
            </Script>
          </>
        ) : null}
        {children}
        <footer className="border-t border-slate-200 bg-slate-50 px-4 py-4 text-center text-xs text-slate-500">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span>© {new Date().getFullYear()} misteddoubleglazing.co.uk</span>
            <span>
              Alloa Business Centre, Whins Road, Alloa, Clackmannanshire FK10
              3SA
            </span>
            <a
              href="tel:+447712677697"
              className="text-slate-600 hover:text-sky-700"
            >
              <span className="hidden sm:inline">Call our team</span>
              <span className="inline sm:hidden">Call 07712 677 697</span>
            </a>
            <a href="/terms" className="text-sky-700 hover:text-sky-800">
              Terms &amp; conditions
            </a>
            <a href="/site-map" className="text-sky-700 hover:text-sky-800">
              Sitemap
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
