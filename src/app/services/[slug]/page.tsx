import type { Metadata } from "next";
import Link from "next/link";
import { getServiceBySlug, services, type ServiceSlug } from "@/data/services";
import { Header } from "@/components/Header";

type Params = {
  slug: ServiceSlug;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service not found | Misted Double Glazing",
    };
  }

  const title = `${service.name} | Misted Double Glazing`;
  const description = `${service.description} Book a quote today and repair your double glazing without unnecessary full frame replacement.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `/services/${service.slug}`,
      type: "article",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold">Service not found</h1>
          <p className="mt-3 text-sm text-slate-700">
            The service you&apos;re looking for doesn&apos;t exist.{" "}
            <Link href="/services" className="text-sky-700 underline">
              View all services
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Header />

        <nav className="mb-4 text-xs text-slate-600">
          <Link href="/" className="hover:text-sky-700">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/services" className="hover:text-sky-700">
            Services
          </Link>{" "}
          / <span className="text-sky-700">{service.name}</span>
        </nav>

        <header className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
            {service.shortHeading}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
            {service.name}
          </h1>
          <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
            {service.description}
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                What&apos;s included
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-500" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-sky-50 p-5">
              <h2 className="text-sm font-semibold text-slate-900">
                Typical situations we help with
              </h2>
              <p className="mt-2 text-sm text-slate-700">
                We regularly help homeowners, landlords and agents with foggy or
                failed units, draughts and leaks, and hardware that no longer
                closes, locks or seals properly.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-950 shadow-sm">
              <h2 className="text-sm font-semibold text-slate-900">
                Ready for a quote?
              </h2>
              <p className="mt-2 text-xs text-slate-700">
                Tell us about the windows or doors you need help with and we&apos;ll
                match your enquiry to a local technician.
              </p>
              <Link
                href="/#enquiry"
                className="mt-3 inline-flex rounded-full bg-sky-600 px-4 py-2 text-xs font-semibold text-white transition hover:bg-sky-700"
              >
                Request a repair quote
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}

