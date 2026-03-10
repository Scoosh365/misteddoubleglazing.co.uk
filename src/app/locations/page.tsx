import type { Metadata } from "next";
import Link from "next/link";
import { locations } from "@/data/locations";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Areas we cover | Misted Double Glazing",
  description:
    "See our key coverage areas for misted double glazing repairs, including Edinburgh, Glasgow, Manchester, Birmingham and London.",
};

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" aria-label="Misted Double Glazing" className="flex items-center">
              <Logo />
            </Link>
          </div>
          <nav className="hidden items-center gap-5 text-xs font-medium text-sky-100/80 sm:flex">
            <Link
              href="/"
              aria-label="Home"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-sky-300/40 bg-sky-300/10 text-sky-100 hover:bg-sky-300/20"
            >
              <span className="text-lg leading-none">⌂</span>
            </Link>
            <Link href="/services" className="hover:text-sky-200">
              Services
            </Link>
            <Link href="/locations" className="hover:text-sky-200">
              Locations
            </Link>
            <Link
              href="/#enquiry"
              className="rounded-full bg-sky-400 px-5 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-300"
            >
              Get a repair quote
            </Link>
          </nav>
        </header>

        <section className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80">
            Locations
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Areas we cover
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-sky-100/80 sm:text-base">
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
              className="group rounded-3xl border border-sky-200/15 bg-slate-950/40 p-5 shadow-lg shadow-slate-950/40 backdrop-blur-xl transition hover:border-sky-300/60 hover:bg-slate-900/60"
            >
              <h2 className="text-lg font-semibold text-sky-50 group-hover:text-sky-200">
                Misted double glazing repairs in {location.city}
              </h2>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-sky-300/80">
                {location.region}
              </p>
              <p className="mt-2 text-sm text-sky-100/80">
                {location.weatherContext} {location.toneSnippet}
              </p>
              <p className="mt-3 text-xs text-sky-100/80">
                Key areas: {location.subAreas.join(", ")} · Postcodes:{" "}
                {location.postcodeAreas.join(", ")}
              </p>
              <span className="mt-4 inline-flex text-xs font-semibold text-sky-300 group-hover:text-sky-200">
                View local page →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

