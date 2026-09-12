import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CONTACT, SITE } from "@/lib/constants";
import { FAQS } from "@/lib/faqs";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Aluminium & Fabrication FAQs",
  description:
    "Types of aluminium used for windows and doors in Uganda, powder coating versus anodising, how to choose a fabricator, and how to get a quote for aluminium work in Kampala.",
  keywords: [
    "types of aluminium",
    "types of aluminium for windows uganda",
    "aluminium works in uganda",
    "quote for aluminium work uganda",
    "aluminium company uganda",
    "powder coated vs anodised aluminium",
    "how to choose aluminium fabricator uganda",
    "aluminium fabrication cost uganda",
  ],
  alternates: { canonical: `${SITE.url}/faq` },
};

// FAQPage markup is what makes these answers eligible for rich results.
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section className="border-b border-brand-line bg-brand-surface">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
          <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.22em] text-brand-red uppercase">
            <span className="h-px w-8 bg-brand-red" aria-hidden />
            Questions
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-brand-black uppercase sm:text-4xl lg:text-5xl">
            Aluminium & Fabrication FAQs
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">
            Straight answers to what people ask us before commissioning work:
            what the material actually is, what separates a good fabricator from
            a cheap quote, and how pricing is arrived at.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
        <div className="divide-y divide-brand-line border-y border-brand-line">
          {FAQS.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex cursor-pointer items-start justify-between gap-6 font-display text-lg font-semibold tracking-tight text-brand-black uppercase marker:content-['']">
                {faq.question}
                <span
                  aria-hidden
                  className="mt-1 inline-flex size-6 shrink-0 items-center justify-center border border-brand-line text-brand-red transition-transform group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="mt-4 leading-relaxed text-brand-muted">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-brand-red px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
          >
            Ask Us Directly
            <ArrowRight className="size-4" aria-hidden />
          </Link>
          <a
            href={telHref(CONTACT.phones[0])}
            className="inline-flex items-center justify-center gap-2 border border-brand-line px-7 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-red hover:text-brand-red"
          >
            <Phone className="size-4" aria-hidden />
            {CONTACT.phones[0]}
          </a>
        </div>
      </section>

      <CtaBanner
        heading="Still deciding?"
        body="Send us the opening sizes or the drawings and we'll come back with a firm price and a realistic timeline."
      />
    </>
  );
}
