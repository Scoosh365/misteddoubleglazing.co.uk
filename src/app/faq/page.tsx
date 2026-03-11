import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "FAQs | Misted Double Glazing",
  description:
    "Frequently asked questions about misted and blown double glazing repairs, pricing, timescales and what to expect from a visit.",
};

const faqItems = [
  {
    question: "What is misted or blown double glazing?",
    answer:
      "Misted or blown double glazing is when moisture gets between the two panes of glass because the perimeter seal has failed. It often looks foggy, streaked or permanently wet inside the unit, even when the inner surfaces feel dry.",
  },
  {
    question: "Do I need to replace the whole window frame?",
    answer:
      "In most cases, no. We usually only need to replace the failed sealed glass unit inside your existing frame. This keeps costs down and avoids disturbing surrounding finishes, trims and decorations where possible.",
  },
  {
    question: "How much does misted double glazing repair typically cost?",
    answer:
      "Costs depend on the size, type and number of units that need attention. Smaller units can often be repaired for much less than full frame replacement, and larger bays or doors are still usually cheaper than new windows. We will always confirm pricing before you commit to any work.",
  },
  {
    question: "How long does the repair process take?",
    answer:
      "Once your new sealed units are ready from the glass supplier, fitting is usually completed in a single visit. Most homes only need a few hours on site, but we will give you a clearer idea of timings when we have your sizes and photos.",
  },
  {
    question: "Will repairing my misted units improve energy efficiency?",
    answer:
      "Replacing failed units removes trapped moisture and restores the insulating air or gas layer between the panes. This can reduce draughts and cold spots near the window, and in some cases we can quote for upgraded glass to further improve performance.",
  },
  {
    question: "Can you work in rented properties?",
    answer:
      "Yes. We work with homeowners, landlords and agents. If you are a tenant, we can still offer guidance and, with permission, arrange to speak directly with your landlord or managing agent about the repair.",
  },
  {
    question: "Do you guarantee the repairs?",
    answer:
      "Guarantee terms can vary depending on the specific glass and hardware used, but we will always explain what is covered and for how long before you go ahead. Your quotation or booking confirmation will set this out in writing.",
  },
  {
    question: "What information should I provide when requesting a quote?",
    answer:
      "Useful details include rough sizes of the affected units, the number of windows, the floor level, access or parking notes, and a few clear photos. The more you can share up front, the more accurate and helpful our initial quote will be.",
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-slate-50 to-slate-100 text-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Header />

        <main className="pb-12 pt-4">
          <header className="mb-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-600">
              FAQs
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Frequently asked questions
            </h1>
            <p className="max-w-2xl text-sm text-slate-700 sm:text-base">
              Answers to some of the most common questions about misted and blown
              double glazing repairs, how quoting works and what to expect on
              the day of your visit.
            </p>
          </header>

          <section className="space-y-4 text-sm text-slate-700 sm:text-base">
            {faqItems.map((item) => (
              <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-4">
                <h2 className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.question}
                </h2>
                <p className="mt-2 text-sm text-slate-700 sm:text-base">
                  {item.answer}
                </p>
              </div>
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

