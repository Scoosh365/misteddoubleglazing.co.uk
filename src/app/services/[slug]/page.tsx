import type { Metadata } from "next";
import Link from "next/link";
import { getServiceBySlug, services, type ServiceSlug } from "@/data/services";
import { Logo } from "@/components/Logo";

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
      <div className="min-h-screen bg-slate-950 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-semibold">Service not found</h1>
          <p className="mt-3 text-sm text-sky-100/80">
            The service you&apos;re looking for doesn&apos;t exist.{" "}
            <Link href="/services" className="text-sky-300 underline">
              View all services
            </Link>
            .
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-6 flex items-center justify-between">
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

        <nav className="mb-4 text-xs text-sky-100/70">
          <Link href="/" className="hover:text-sky-200">
            Home
          </Link>{" "}
          /{" "}
          <Link href="/services" className="hover:text-sky-200">
            Services
          </Link>{" "}
          / <span className="text-sky-200">{service.name}</span>
        </nav>

        <header className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80">
            {service.shortHeading}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {service.name}
          </h1>
          <p className="max-w-2xl text-sm text-sky-100/80 sm:text-base">
            {service.description}
          </p>
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/15 bg-slate-950/40 p-5 backdrop-blur-xl">
              <h2 className="text-sm font-semibold text-sky-100">
                What&apos;s included
              </h2>
              <ul className="mt-3 space-y-2 text-sm text-sky-100/80">
                {service.benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-emerald-400" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-sky-200/15 bg-sky-900/20 p-5 backdrop-blur-xl">
              <h2 className="text-sm font-semibold text-sky-100">
                Typical situations we help with
              </h2>
              <p className="mt-2 text-sm text-sky-100/80">
                We regularly help homeowners, landlords and agents with foggy or
                failed units, draughts and leaks, and hardware that no longer
                closes, locks or seals properly.
              </p>
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-4 text-slate-950 shadow-xl shadow-sky-900/40 backdrop-blur-xl">
              <h2 className="text-sm font-semibold text-slate-950">
                Ready for a quote?
              </h2>
              <p className="mt-2 text-xs text-slate-900/80">
                Tell us about the windows or doors you need help with and we&apos;ll
                match your enquiry to a local technician.
              </p>
              <Link
                href="/#enquiry"
                className="mt-3 inline-flex rounded-full bg-sky-500 px-4 py-2 text-xs font-semibold text-slate-950 transition hover:bg-sky-400"
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

