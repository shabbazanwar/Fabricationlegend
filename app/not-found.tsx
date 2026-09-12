import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT, NAV_LINKS } from "@/lib/constants";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Page Not Found",
  // A 404 should never be indexed, whatever the layout default says.
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-black">
      <div
        aria-hidden
        className="absolute -top-40 -left-32 size-[34rem] rounded-full bg-brand-red/20 blur-[130px]"
      />
      <div className="relative mx-auto flex min-h-[28rem] max-w-6xl flex-col justify-center px-5 py-20 sm:py-24 lg:min-h-[32rem]">
        <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-brand-red uppercase">
          <span className="h-px w-8 bg-brand-red" aria-hidden />
          Error 404
        </p>
        <h1 className="mt-5 max-w-2xl font-display text-3xl leading-[1.08] font-bold tracking-tight text-white uppercase sm:text-5xl lg:text-6xl">
          This Page <span className="text-brand-red">Doesn&apos;t Exist</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
          The link may be out of date or mistyped. Everything we fabricate is
          still here, so try one of these instead.
        </p>

        <nav aria-label="Site pages" className="mt-10 flex flex-wrap gap-3">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-2 border border-white/25 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Request a Quote
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <a
            href={telHref(CONTACT.phones[0])}
            className="inline-flex items-center justify-center gap-2 border border-white/25 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black"
          >
            <Phone className="size-4" aria-hidden />
            {CONTACT.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
