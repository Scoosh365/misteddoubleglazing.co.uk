import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-900 via-slate-950 to-slate-900 text-white">
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-4 py-8 sm:px-6 lg:px-8">
        <header className="flex items-center justify-between pb-8">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-sky-400/80 shadow-lg shadow-sky-500/40" />
            <div className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-200">
              Misted Double Glazing
            </div>
          </div>
          <nav className="hidden items-center gap-5 text-xs font-medium text-sky-100/80 sm:flex">
            <Link href="/services" className="hover:text-sky-200">
              Services
            </Link>
            <Link href="/locations" className="hover:text-sky-200">
              Locations
            </Link>
            <a
              href="#enquiry"
              className="rounded-full bg-sky-400 px-5 py-2 text-xs font-semibold text-slate-950 shadow-lg shadow-sky-500/40 transition hover:bg-sky-300"
            >
              Get a repair quote
            </a>
          </nav>
        </header>

        <main className="grid flex-1 items-center gap-10 pb-10 pt-4 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <section className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium text-sky-100 ring-1 ring-sky-400/30 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              UK-wide misted double glazing repairs
            </div>

            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Clear views,{" "}
              <span className="text-sky-300">no replacement needed.</span>
            </h1>

            <p className="max-w-xl text-pretty text-base text-sky-100/80 sm:text-lg">
              Foggy, misted or blown double glazing? We repair failed units across the UK, saving you up to{" "}
              <span className="font-semibold text-sky-100">
                70% vs full window replacement
              </span>
              . Fast, friendly local technicians and tidy workmanship.
            </p>

            <div className="max-w-xl rounded-3xl border border-white/20 bg-white/10 p-5 shadow-xl shadow-sky-900/40 backdrop-blur-xl">
              <p className="mb-4 text-sm font-medium uppercase tracking-[0.22em] text-sky-100/80">
                Get your free repair quote
              </p>
              <form
                id="enquiry"
                className="grid gap-3 sm:grid-cols-2"
              >
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-sky-100/80">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className="w-full rounded-xl border border-white/20 bg-slate-950/40 px-3 py-2 text-sm text-sky-50 placeholder:text-slate-400 outline-none transition focus:border-sky-300/80"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-sky-100/80">
                    Postcode
                  </label>
                  <input
                    type="text"
                    placeholder="EH6 5AA"
                    className="w-full rounded-xl border border-white/20 bg-slate-950/40 px-3 py-2 text-sm text-sky-50 placeholder:text-slate-400 outline-none transition focus:border-sky-300/80"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-sky-100/80">
                    What&apos;s the issue?
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about the misted units, sizes, number of windows, floor level, etc."
                    className="w-full resize-none rounded-xl border border-white/20 bg-slate-950/40 px-3 py-2 text-sm text-sky-50 placeholder:text-slate-400 outline-none transition focus:border-sky-300/80"
                  />
                </div>
                <button
                  type="button"
                  className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-sky-500/50 transition hover:bg-sky-300 sm:col-span-2"
                >
                  Request my repair quote
                </button>
              </form>
              <p className="mt-3 text-[11px] text-sky-100/70">
                No spam. We only use your details to contact you about your repair.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 text-xs text-sky-100/80">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Nationwide coverage
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Local technicians, fast response
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Save vs full window replacement
              </div>
            </div>
          </section>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-sky-200/30 bg-sky-100/15 p-4 text-slate-950 shadow-xl shadow-sky-900/40 backdrop-blur-2xl">
              <p className="mb-1 text-xs font-semibold uppercase tracking-[0.22em] text-sky-900/80">
                Why repair?
              </p>
              <p className="text-sm text-sky-950/90">
                Misted units don&apos;t always need full frame replacement. We usually just replace the failed glass unit, keeping your existing frames and hardware.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/20 bg-white/8 p-3 text-xs text-sky-50 backdrop-blur-xl">
                <div className="mb-1 font-semibold">Misted &amp; blown units</div>
                <p className="text-[11px] text-sky-100/80">
                  Steamed up between the panes? We replace the sealed unit to restore a clear view.
                </p>
              </div>
              <div className="rounded-2xl border border-white/20 bg-white/8 p-3 text-xs text-sky-50 backdrop-blur-xl">
                <div className="mb-1 font-semibold">Locks, handles &amp; hinges</div>
                <p className="text-[11px] text-sky-100/80">
                  Stiff or failed hardware? We realign and replace where needed so windows open safely again.
                </p>
              </div>
            </div>
            <div className="rounded-2xl border border-emerald-300/40 bg-emerald-100/10 p-3 text-xs text-emerald-50 backdrop-blur-xl">
              <div className="mb-1 font-semibold">Nationwide coverage</div>
              <p className="text-[11px] text-emerald-50/80">
                Local partners across the UK. We match your enquiry to a vetted technician in your area.
              </p>
            </div>
          </aside>
        </main>
      </div>
    </div>
  );
}
