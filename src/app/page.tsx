import { Header } from "@/components/Header";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-sky-100 to-slate-50 text-slate-900">
      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <Header />

        <main className="flex flex-1 flex-col gap-10 pb-10 pt-4">
          <section className="space-y-8 lg:max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-3 py-1 text-xs font-medium text-sky-900 ring-1 ring-sky-200">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              UK-wide misted double glazing repairs
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Clear views,{" "}
              <span className="text-sky-600">no replacement needed.</span>
            </h1>

            <p className="max-w-xl text-pretty text-base text-slate-700 sm:text-lg">
              Foggy, misted or blown double glazing? We repair failed units across the UK, saving you up to{" "}
              <span className="font-semibold text-slate-900">
                70% vs full window replacement
              </span>
              . Fast, friendly local technicians and tidy workmanship.
            </p>
          </section>

          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div className="space-y-6">
              <div className="max-w-xl rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
                <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-slate-600">
                  Get your free repair quote
                </p>
                <form
                  id="enquiry"
                  className="grid gap-3 sm:grid-cols-2"
                >
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700">
                      Phone
                    </label>
                    <input
                      type="tel"
                      placeholder="07123 456789"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400"
                    />
                  </div>
                  <div className="sm:col-span-1">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700">
                      Postcode
                    </label>
                    <input
                      type="text"
                      placeholder="EH6 5AA"
                      className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400"
                    />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700">
                      What&apos;s the issue?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about the misted units, sizes, number of windows, floor level, etc."
                      className="w-full resize-none rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400"
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 sm:col-span-2"
                  >
                    Request my repair quote
                  </button>
                </form>
                <p className="mt-3 text-[11px] text-slate-500">
                  No spam. We only use your details to contact you about your repair.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Nationwide coverage
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Local technicians, fast response
                </div>
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Save vs full window replacement
                </div>
              </div>
            </div>

            <aside className="relative space-y-4">
              <div className="pointer-events-none absolute -inset-x-6 top-0 -z-10 hidden h-[280px] rounded-3xl bg-sky-100/40 sm:block" />
              <div className="pointer-events-none absolute right-4 top-14 -z-10 hidden h-52 w-44 rounded-3xl bg-sky-50 sm:block" />
              <div className="rounded-3xl border border-slate-200 bg-white p-4 text-slate-950 shadow-sm">
                <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
                  Why repair?
                </p>
                <p className="text-sm text-slate-700">
                  Misted units don&apos;t always need full frame replacement. We usually just replace the failed glass unit, keeping your existing frames and hardware.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-200 bg-white p-3 text-xs text-slate-800">
                  <div className="mb-1 font-semibold">Misted &amp; blown units</div>
                  <p className="text-[11px] text-slate-600">
                    Steamed up between the panes? We replace the sealed unit to restore a clear view.
                  </p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-3 text-xs text-slate-800">
                  <div className="mb-1 font-semibold">Locks, handles &amp; hinges</div>
                  <p className="text-[11px] text-slate-600">
                    Stiff or failed hardware? We realign and replace where needed so windows open safely again.
                  </p>
                </div>
              </div>
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-3 text-xs text-emerald-900">
                <div className="mb-1 font-semibold">Nationwide coverage</div>
                <p className="text-[11px] text-emerald-700">
                  Local partners across the UK. We match your enquiry to a vetted technician in your area.
                </p>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
