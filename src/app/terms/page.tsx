import type { Metadata } from "next";
import { Header } from "@/components/Header";

export const metadata: Metadata = {
  title: "Terms and conditions | Misted Double Glazing",
  description:
    "Website terms and conditions for misteddoubleglazing.co.uk, covering enquiries, quotations and use of this site.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-950 to-slate-900 text-white">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Header />

        <main className="pb-12 pt-4">
          <header className="mb-6 space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300/80">
              Terms
            </p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Terms and conditions
            </h1>
            <p className="max-w-2xl text-sm text-sky-100/80 sm:text-base">
              Please read these terms carefully before using this website or
              submitting an enquiry. By using the site you agree to these terms.
            </p>
          </header>

          <div className="space-y-6 text-sm text-sky-100/80 sm:text-base">
            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                1. About this website
              </h2>
              <p className="mt-2">
                This website is operated for the purpose of promoting misted and
                blown double glazing repair services across the UK. Information
                on this site is provided in good faith but is general in nature
                and may not apply to every property or situation.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                2. Enquiries and quotations
              </h2>
              <p className="mt-2">
                When you submit an enquiry through this website, you confirm that
                the contact details and information you provide are accurate to
                the best of your knowledge. We may use these details to contact
                you about your enquiry and, where relevant, to connect you with a
                suitable technician or partner.
              </p>
              <p className="mt-2">
                Any quotation provided based on photos, measurements or a remote
                description is an estimate only. Final pricing may change
                following an on-site inspection once access, exact sizes,
                condition and specification are confirmed.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                3. Repairs, guarantees and limitations
              </h2>
              <p className="mt-2">
                Repair methods, glass specifications and guarantees will be
                confirmed with you at the quotation stage. Guarantees, where
                offered, apply only to the work and components specified and do
                not cover unrelated issues, misuse, accidental damage or normal
                wear and tear.
              </p>
              <p className="mt-2">
                Some frames, hardware or existing installations may be in poor
                condition or may not be suitable for repair. In those cases we
                will explain the options available to you as clearly as possible
                before any work is carried out.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                4. Payments and cancellations
              </h2>
              <p className="mt-2">
                Payment terms, deposit requirements and cancellation policies may
                vary depending on the nature and size of the work. These will be
                explained in writing on your quotation or booking confirmation. In
                general, missed appointments or late cancellations may be subject
                to a call-out or cancellation charge to cover time and travel
                costs.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                5. Use of this site
              </h2>
              <p className="mt-2">
                You agree not to misuse this site, attempt to gain unauthorised
                access to our systems or submit malicious or automated form
                submissions. We may suspend or block access to the site if we
                reasonably believe it is being misused.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                6. Liability
              </h2>
              <p className="mt-2">
                Nothing in these terms limits any rights you have under
                applicable consumer law. To the fullest extent permitted by law,
                we are not liable for any indirect or consequential loss arising
                from use of this website or from relying solely on general
                guidance without obtaining a specific quotation or assessment of
                your property.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                7. Privacy
              </h2>
              <p className="mt-2">
                We only use the personal information you provide through this
                site to handle your enquiry, manage bookings and, where relevant,
                follow up on completed work. For more detail on how we handle
                your data, please refer to our privacy information or contact us
                directly.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                8. Changes to these terms
              </h2>
              <p className="mt-2">
                We may update these terms from time to time to reflect changes in
                our services, legal requirements or how the site is used. The
                most recent version will always be available on this page.
              </p>
            </section>

            <section>
              <h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/80">
                9. Contact
              </h2>
              <p className="mt-2">
                If you have any questions about these terms or how they apply to
                your enquiry, please contact us using the details on this site
                before booking work.
              </p>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}

