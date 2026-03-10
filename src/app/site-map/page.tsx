import Link from "next/link";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export const metadata = {
  title: "HTML sitemap | Misted Double Glazing",
  description:
    "Browse all key pages, services and locations for misteddoubleglazing.co.uk.",
};

export default function HtmlSitemapPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            HTML sitemap
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-sky-100/80 sm:text-base">
            Quick overview of the main pages on misteddoubleglazing.co.uk.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/80">
              Core pages
            </h2>
            <ul className="space-y-1 text-sm text-sky-100/80">
              <li>
                <Link href="/" className="hover:text-sky-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-200">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-sky-200">
                  Locations
                </Link>
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/80">
              Services
            </h2>
            <ul className="space-y-1 text-sm text-sky-100/80">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-sky-200"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-300/80">
              Locations
            </h2>
            <ul className="space-y-1 text-sm text-sky-100/80">
              {locations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="hover:text-sky-200"
                  >
                    {location.city}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}

