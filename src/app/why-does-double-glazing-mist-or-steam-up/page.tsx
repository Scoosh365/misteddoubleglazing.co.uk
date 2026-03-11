import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title:
    "Why does double glazing mist or steam up? | Misted Double Glazing",
  description:
    "Understand why double glazed windows mist or steam up in summer and winter, what failed sealed units are, and how replacing the unit fixes the problem long term.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Why does double glazing mist or steam up?",
  description:
    "Explanation of why double glazed units mist in summer and winter, what failed sealed units are, and how to fix them.",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://misteddoubleglazing.co.uk/why-does-double-glazing-mist-or-steam-up",
  },
};

export default function WhyMistingPage() {
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
              Why does double glazing mist or steam up?
            </h1>
            <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
              An overview of why double or triple glazed units mist, what failed
              sealed units are, and how to fix the problem in summer and winter.
            </p>
          </header>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              Summer and winter: failed sealed units
            </h2>
            <p>
              Misted double glazed failed units are double or triple glazed
              sealed window units that have excess moisture trapped in the cavity
              between the panes of glass. This happens when there is a breach in
              the hermetic (airtight) seal around the edge of the unit, allowing
              moist air to enter the cavity over days, weeks or months.
            </p>
            <p>
              When the temperature rises, the moist air trapped within the unit
              condenses and, over time, gives a white cloudy effect that is
              irritating and unsightly to look at.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              Why south-facing windows mist more often
            </h2>
            <p>
              Over 90% of failed double glazing sealed units are south-east to
              south-west facing. As the sun rises in the east and sets in the
              west, these elevations see the greatest daily temperature change.
              That expansion and contraction creates the most movement in the
              window or door frame and puts extra stress on any weak points in
              the sealed unit.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              Failings in double glazed windows
            </h2>
            <p>
              If there were any weaknesses or faults in the original
              manufacturing process of the sealed unit, continual expansion and
              contraction of the frame will eventually cause the unit to fail at
              the weakest point.
            </p>
            <p>
              In our experience, the only long term solution is to fully replace
              the failed unit with a new one. We can repair timber, uPVC and
              aluminium frames of almost any age and typically offer a five-year
              warranty on replacement units.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              Winter months: internal condensation
            </h2>
            <p>
              In winter, when the outside temperature drops significantly, you
              may see condensation on the internal surface of the glass. The
              glass surface can be much colder than the room temperature, so
              warm moist air inside the room condenses on the colder pane.
            </p>
            <p>
              A simple test is to place the palm of your hand on the frame,
              count to ten, then place your hand on the glass. You&apos;ll
              usually feel that the glass is much colder.
            </p>
            <p>
              To reduce this type of condensation, the glass temperature needs
              to be raised. This can often be improved by fitting more energy
              efficient units using warm edge spacer bar technology, low-emission
              glass and argon gas between the panes.
            </p>
          </section>

          <section className="space-y-3 text-sm text-slate-700 sm:text-base">
            <h2 className="text-lg font-semibold text-slate-800">
              Other double glazing repairs we can help with
            </h2>
            <ul className="list-disc space-y-1 pl-5">
              <li>Repairs to double glazed windows and window glass</li>
              <li>Repairs to double glazed window hinges and handles</li>
              <li>Repairs to double glazed door locks and handles</li>
              <li>Repairs to double glazed doors and frames</li>
            </ul>
            <p className="mt-2 text-sm text-slate-700">
              If you&apos;re seeing misted units or hardware issues, you can{" "}
              <a
                href="/#enquiry"
                className="font-semibold text-sky-700 hover:text-sky-800"
              >
                request a free repair quote
              </a>{" "}
              and we&apos;ll match your enquiry to a local technician.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
}

