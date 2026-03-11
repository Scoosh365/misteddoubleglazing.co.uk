import Link from "next/link";
import { services } from "@/data/services";
import { locations } from "@/data/locations";

export const metadata = {
  title: "Sitemap | Misted Double Glazing",
  description:
    "Browse all key pages, services and locations for misteddoubleglazing.co.uk.",
};

export default function HtmlSitemapPage() {
  const sortedServices = [...services].sort((a, b) =>
    a.name.localeCompare(b.name),
  );

  const sortedLocations = [...locations].sort((a, b) =>
    a.city.localeCompare(b.city),
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Sitemap
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
            Quick overview of the main pages on misteddoubleglazing.co.uk.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-3">
          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Core pages
            </h2>
            <ul className="space-y-1 text-sm text-slate-700">
              <li>
                <Link
                  href="/window-repairs-near-me"
                  className="hover:text-sky-700"
                >
                  Window repairs near me
                </Link>
              </li>
              <li>
                <Link
                  href="/why-does-double-glazing-mist-or-steam-up"
                  className="hover:text-sky-700"
                >
                  Why does double glazing mist or steam up?
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-sky-700">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-sky-700">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-sky-700">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-sky-700">
                  Locations
                </Link>
              </li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Services
            </h2>
            <ul className="space-y-1 text-sm text-slate-700">
            {sortedServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-sky-700"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-700">
              Locations
            </h2>
            <ul className="space-y-1 text-sm text-slate-700">
              {sortedLocations.map((location) => (
                <li key={location.slug}>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="hover:text-sky-700"
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

