"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "@/components/Logo";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between pb-8">
      <Link
        href="/"
        aria-label="Misted Double Glazing"
        className="flex items-center"
        onClick={() => setOpen(false)}
      >
        <Logo />
      </Link>

      {/* Desktop nav */}
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

      {/* Mobile hamburger */}
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sky-300/40 bg-sky-300/10 text-sky-100 hover:bg-sky-300/20 sm:hidden"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span
          className={`block h-0.5 w-4 rounded-full bg-sky-100 transition-transform ${
            open ? "translate-y-0.5 rotate-45" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`block h-0.5 w-4 rounded-full bg-sky-100 transition-opacity ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-4 rounded-full bg-sky-100 transition-transform ${
            open ? "-translate-y-0.5 -rotate-45" : "translate-y-0.5"
          }`}
        />
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute right-0 top-12 z-20 w-56 rounded-2xl border border-sky-300/40 bg-slate-950/95 p-3 text-xs text-sky-100 shadow-lg shadow-slate-950/60 sm:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 hover:bg-slate-900/80"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="rounded-lg px-3 py-2 hover:bg-slate-900/80"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/locations"
              className="rounded-lg px-3 py-2 hover:bg-slate-900/80"
              onClick={() => setOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/#enquiry"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-400 px-3 py-2 text-xs font-semibold text-slate-950 hover:bg-sky-300"
              onClick={() => setOpen(false)}
            >
              Get a repair quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

