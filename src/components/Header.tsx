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
      <nav className="hidden items-center gap-5 text-xs font-medium text-slate-700 sm:flex">
        <Link href="/" aria-label="Home" className="hover:text-sky-700">
          Home
        </Link>
        <Link href="/services" className="hover:text-sky-700">
          Services
        </Link>
        <Link href="/locations" className="hover:text-sky-700">
          Locations
        </Link>
        <Link
          href="/#enquiry"
          className="rounded-full bg-sky-500 px-5 py-2 text-xs font-semibold text-white transition hover:bg-sky-600"
        >
          Get a repair quote
        </Link>
      </nav>

      {/* Mobile hamburger */}
      <button
        type="button"
        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100 sm:hidden"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-expanded={open}
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Toggle navigation</span>
        <span
          className={`block h-0.5 w-4 rounded-full bg-sky-700 transition-transform ${
            open ? "translate-y-0.5 rotate-45" : "-translate-y-0.5"
          }`}
        />
        <span
          className={`block h-0.5 w-4 rounded-full bg-sky-700 transition-opacity ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block h-0.5 w-4 rounded-full bg-sky-700 transition-transform ${
            open ? "-translate-y-0.5 -rotate-45" : "translate-y-0.5"
          }`}
        />
      </button>

      {/* Mobile menu panel */}
      {open && (
        <div className="absolute right-0 top-12 z-20 w-56 rounded-2xl border border-slate-200 bg-white p-3 text-xs text-slate-800 shadow-lg shadow-slate-200/80 sm:hidden">
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="rounded-lg px-3 py-2 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="rounded-lg px-3 py-2 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/locations"
              className="rounded-lg px-3 py-2 hover:bg-slate-100"
              onClick={() => setOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/#enquiry"
              className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-500 px-3 py-2 text-xs font-semibold text-white hover:bg-sky-600"
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

