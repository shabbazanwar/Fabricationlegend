"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Phone, RotateCw } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { telHref } from "@/lib/utils";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Report to the console only. The visitor never sees the stack or message,
    // which could otherwise leak file paths or query details.
    console.error("Unhandled application error", error);
  }, [error]);

  return (
    <section className="relative isolate overflow-hidden bg-brand-black">
      <div
        aria-hidden
        className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-brand-red/20 blur-[130px]"
      />
      <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-center px-5 py-20 sm:py-24 lg:min-h-[32rem]">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-brand-red uppercase">
          <span className="h-px w-8 bg-brand-red" aria-hidden />
          Something Went Wrong
        </p>
        <h1 className="mt-5 max-w-2xl font-display text-3xl leading-[1.08] font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
          We Hit A <span className="text-brand-red">Snag</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          This is on us, not you. Try again in a moment, and if it keeps
          happening please call and we&apos;ll deal with your enquiry directly.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            <RotateCw className="size-4" aria-hidden />
            Try Again
          </button>
          <a
            href={telHref(CONTACT.phones[0])}
            className="inline-flex items-center justify-center gap-2 border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black"
          >
            <Phone className="size-4" aria-hidden />
            {CONTACT.phones[0]}
          </a>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            Back to Home
          </Link>
        </div>

        {/* Opaque hash only, safe to show and useful when reporting a fault. */}
        {error.digest && (
          <p className="mt-8 font-mono text-xs text-white/35">
            Reference: {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}
