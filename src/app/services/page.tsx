import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/data/services";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Double glazing repair services | Misted Double Glazing",
  description:
    "Explore our misted double glazing repair services, including failed sealed unit replacement, locks, handles, hinges and emergency boarding across the UK.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-800 via-slate-900 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Header />

        <section className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80">
            Services
          </p>
          <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">
            Double glazing repair services
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-sky-100/80 sm:text-base">
            From misted units to stiff window hardware, we focus on{" "}
            <span className="font-semibold text-sky-100">
              repairing your existing double glazing
            </span>{" "}
            rather than replacing whole frames wherever possible.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group rounded-3xl border border-sky-200/15 bg-slate-950/40 p-5 shadow-lg shadow-slate-950/40 backdrop-blur-xl transition hover:border-sky-300/60 hover:bg-slate-900/60"
            >
              <h2 className="text-lg font-semibold text-sky-50 group-hover:text-sky-200">
                {service.shortHeading}
              </h2>
              <p className="mt-2 text-sm text-sky-100/80">
                {service.description}
              </p>
              <ul className="mt-3 space-y-1 text-xs text-sky-100/80">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
              <span className="mt-4 inline-flex text-xs font-semibold text-sky-300 group-hover:text-sky-200">
                Learn more about this service →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

