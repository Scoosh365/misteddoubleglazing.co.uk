import type { Metadata } from "next";
import Link from "next/link";
import {
  getLocationBySlug,
  locations,
  type LocationSlug,
} from "@/data/locations";
import { Header } from "@/components/Header";

type Params = {
  slug: LocationSlug;
};

export function generateStaticParams() {
  return locations.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location not found | Misted Double Glazing",
    };
  }

  const { city, weatherContext, subAreas, postcodeAreas, region } = location;
  const humanSubAreas = subAreas.join(" & ");
  const humanPostcodes = postcodeAreas.join(", ");

  const title = `Misted double glazing repairs in ${city} | Misted Double Glazing`;
  const description = `Misted window repairs in ${city}. ${weatherContext} Fast local service in ${humanSubAreas} and ${humanPostcodes} postcodes.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/locations/${location.slug}`,
      type: "article",
    },
  };
}

export default async function LocationPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);

  if (!location) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold">Location not found</h1>
          <p className="mt-3 text-sm text-slate-700">
            The location you&apos;re looking for doesn&apos;t exist.{" "}
            <Link href="/locations" className="text-sky-700 underline">
              View all locations
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }

  const {
    city,
    region,
    weatherContext,
    subAreas,
    postcodeAreas,
    toneSnippet,
    intro,
    neighbourhoodsBlurb,
    faqs,
  } = location;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Misted double glazing repairs in ${city}`,
    areaServed: {
      "@type": "City",
      name: city,
      address: {
        "@type": "PostalAddress",
        addressRegion: region,
      },
    },
    serviceType: "Double glazing repair",
    description: `${weatherContext} Fast local misted double glazing repairs in ${city} and surrounding areas.`,
    url: `https://misteddoubleglazing.co.uk/locations/${location.slug}`,
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <Header />

        <nav className="mb-4 text-xs text-slate-600">
          <Link href="/" className="hover:text-sky-700">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/locations" className="hover:text-sky-700">
            Locations
          </Link>{" "}
          /{" "}
          <span className="text-sky-700">Misted double glazing in {city}</span>
        </nav>

        <header className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
            {region}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Misted double glazing repairs in {city}
          </h1>
          <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
            {weatherContext} {toneSnippet}
          </p>
          <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
            {intro}
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Homes and areas we work in
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                {neighbourhoodsBlurb}
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Local areas we cover
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                We regularly work in:
              </p>
              <ul className="mt-2 flex flex-wrap gap-2 text-xs text-slate-700">
                {subAreas.map((area) => (
                  <li
                    key={area}
                    className="rounded-full border border-sky-200 bg-sky-50 px-3 py-1"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-slate-600">
                Typical postcode areas: {postcodeAreas.join(", ")}.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-sky-50 p-5">
              <h2 className="text-sm font-semibold text-slate-900">
                What we can help with
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                  <span>Misted, foggy or blown double glazed units</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                  <span>Leaks, draughts or failed seals around the glass</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                  <span>Stiff, dropped or difficult-to-close windows</span>
                </li>
              </ul>
            </div>

            {faqs && faqs.length > 0 && (
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <h2 className="text-sm font-semibold text-slate-900">
                  Common questions in {city}
                </h2>
                <dl className="mt-3 space-y-3 text-sm text-slate-700">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <dt className="font-semibold">{faq.question}</dt>
                      <dd className="mt-1 text-slate-700">{faq.answer}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            )}
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-950 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Get a local repair quote
              </h2>
              <p className="mt-2 text-xs text-slate-700">
                Tell us about the windows you need help with in {city} and we&apos;ll
                connect you with a trusted local technician.
              </p>
              <Link
                href="/#enquiry"
                className="mt-3 inline-flex rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-700"
              >
                Request a quote in {city}
              </Link>
            </div>

            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
              <div className="border-b border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-600">
                Service area map for {city}
              </div>
              <iframe
                title={`Service area map for ${city}`}
                src={`https://www.google.com/maps?q=${encodeURIComponent(
                  `${city} UK`,
                )}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full border-0"
              />
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

