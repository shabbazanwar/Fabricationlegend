import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CONTACT } from "@/lib/constants";
import { telHref } from "@/lib/utils";

export function CtaBanner({
  heading = "Have a project in mind?",
  body = "Send us the drawings or just the dimensions, and we'll come back with a quote and a realistic timeline.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="bg-brand-red">
      <div className="mx-auto flex max-w-6xl flex-col gap-7 px-5 py-12 sm:py-16 md:flex-row md:items-center md:justify-between">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl font-bold tracking-tight text-white uppercase sm:text-3xl lg:text-4xl">
            {heading}
          </h2>
          <p className="mt-3 leading-relaxed text-white/80">{body}</p>
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-white px-7 py-3.5 text-sm font-semibold text-brand-black transition-colors hover:bg-brand-black hover:text-white"
          >
            Request a Quote
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <a
            href={telHref(CONTACT.phones[0])}
            className="inline-flex items-center justify-center gap-2 border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="size-4" aria-hidden />
            {CONTACT.phones[0]}
          </a>
        </div>
      </div>
    </section>
  );
}
