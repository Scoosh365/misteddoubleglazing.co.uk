import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Areas we cover | Misted Double Glazing",
  description:
    "See our key coverage areas for misted double glazing repairs, including Edinburgh, Glasgow, Manchester, Birmingham and London.",
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Header />

        <section className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
            Locations
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            Areas we cover
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-700 sm:text-base">
            We&apos;re building a UK-wide network of trusted double glazing
            repair technicians. These are some of the key cities and regions we
            currently focus on.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          {locations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-sky-200 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-slate-900 group-hover:text-sky-700">
                Misted double glazing repairs in {location.city}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-sky-700">
                {location.region}
              </p>
              <p className="mt-2 text-sm text-slate-700">
                {location.weatherContext} {location.toneSnippet}
              </p>
              <p className="mt-3 text-xs text-slate-600">
                Key areas: {location.subAreas.join(", ")} · Postcodes:{" "}
                {location.postcodeAreas.join(", ")}
              </p>
              <span className="mt-4 inline-flex text-xs font-semibold text-sky-700 group-hover:text-sky-800">
                View local page →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

