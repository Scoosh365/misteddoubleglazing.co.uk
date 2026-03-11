import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Window repairs near me | Misted Double Glazing",
  description:
    "Looking for window repairs near you? We work UK-wide through a network of local double glazing technicians who repair misted and failed units in your area.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Window repairs near me",
  description:
    "Learn how our nationwide network of local double glazing technicians provides window repairs near you, wherever you are in the UK.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://misteddoubleglazing.co.uk/window-repairs-near-me",
  },
};

export default function WindowRepairsNearMePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />

        <Header />

        <main className="pb-12 pt-4 space-y-8">
          <header className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
              Guides
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-800 sm:text-4xl">
              Window repairs near me
            </h1>
            <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
              We repair misted and failed double glazed units across the UK through
              a network of local technicians. Here&apos;s how our coverage works and
              what to expect wherever you&apos;re based.
            </p>
          </header>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              Nationwide coverage, local technicians
            </h2>
            <p>
              Although this website covers the whole of the UK, the work itself is
              carried out by local double glazing technicians in your area. We match
              your enquiry to someone who regularly works in your town or city and
              is familiar with local housing types and access.
            </p>
            <p>
              That means you get the convenience of a UK-wide service with the
              reliability and flexibility of a local specialist who isn&apos;t
              travelling from the other end of the country for a small job.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              How we handle &quot;near me&quot; enquiries
            </h2>
            <p>
              When you request a quote, we use your postcode and location details to
              route your enquiry to a nearby technician. They will normally contact
              you directly to confirm sizes, access, timescales and pricing before
              any work goes ahead.
            </p>
            <p>
              You don&apos;t need to search for lots of different local companies.
              Simply share a few details about your windows and we&apos;ll do the
              matching behind the scenes.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              What we can help with
            </h2>
            <p>
              Most &quot;window repairs near me&quot; enquiries are about misted or
              blown double glazing, but we can also help with a range of common
              issues:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Misted, foggy or streaked double glazed units</li>
              <li>Broken or cracked double glazed panes</li>
              <li>Stiff, dropped or difficult-to-close windows and doors</li>
              <li>Faulty locks, handles and hinges on uPVC and aluminium frames</li>
            </ul>
            <p>
              Wherever possible, we focus on repairing or replacing the failed
              glass and hardware rather than fitting completely new frames.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              Areas we cover
            </h2>
            <p>
              We&apos;re building a network of trusted partners across key UK
              cities and regions, including locations like Edinburgh, Glasgow,
              Manchester, Birmingham, London and many more. New areas are added
              regularly as we grow our coverage.
            </p>
            <p>
              You can browse some of the main areas we already cover on our{" "}
              <a
                href="/locations"
                className="font-semibold text-sky-700 hover:text-sky-800"
              >
                locations page
              </a>
              , or simply send an enquiry and we&apos;ll let you know if we have a
              technician near you.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              How to request a local window repair
            </h2>
            <p>
              The quickest way to get started is to share a few details about your
              windows and where you&apos;re based:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>Your name and the best phone number to reach you on</li>
              <li>Your postcode and rough area</li>
              <li>
                A short description of the issues (for example, &quot;misted bedroom
                window&quot; or &quot;stiff patio door&quot;)
              </li>
              <li>
                Optional photos of the affected units, if you have them ready
              </li>
            </ul>
            <p className="mt-2">
              You can send these details using the enquiry form on our{" "}
              <a
                href="/#enquiry"
                className="font-semibold text-sky-700 hover:text-sky-800"
              >
                homepage
              </a>
              . We&apos;ll then match your enquiry to a suitable local technician and
              arrange the next steps.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

