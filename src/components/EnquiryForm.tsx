"use client";

import { FormEvent, useState } from "react";

type StatusState =
  | { state: "idle" }
  | { state: "submitting" }
  | { state: "success" }
  | { state: "error"; message: string };

export function EnquiryForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [postcode, setPostcode] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<StatusState>({ state: "idle" });

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!name || !phone || !postcode || !message) {
      setStatus({
        state: "error",
        message: "Please fill in all fields before sending your enquiry.",
      });
      return;
    }

    setStatus({ state: "submitting" });

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, postcode, message }),
      });

      const data = (await response.json()) as { ok: boolean; error?: string };

      if (!response.ok || !data.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus({ state: "success" });
      setName("");
      setPhone("");
      setPostcode("");
      setMessage("");
    } catch (error) {
      setStatus({
        state: "error",
        message:
          error instanceof Error
            ? error.message
            : "There was a problem sending your enquiry. Please try again.",
      });
    }
  }

  const isSubmitting = status.state === "submitting";

  return (
    <form
      id="enquiry"
      className="grid gap-3 sm:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <div className="sm:col-span-1">
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wide text-slate-700">
          Name
        </label>
        <input
          type="text"
          placeholder="Jane Smith"
          className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 outline-none transition focus:border-sky-400"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
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
          value={phone}
          onChange={(event) => setPhone(event.target.value)}
          required
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
          value={postcode}
          onChange={(event) => setPostcode(event.target.value)}
          required
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
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />
      </div>
      <button
        type="submit"
        className="mt-1 inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:opacity-70 sm:col-span-2"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending your enquiry..." : "Request my repair quote"}
      </button>
      {status.state === "success" && (
        <p className="sm:col-span-2 text-xs font-medium text-emerald-700">
          Thanks for your enquiry. We&apos;ll be in touch shortly.
        </p>
      )}
      {status.state === "error" && (
        <p className="sm:col-span-2 text-xs font-medium text-red-600">
          {status.message}
        </p>
      )}
    </form>
  );
}

