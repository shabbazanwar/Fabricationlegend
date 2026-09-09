import type { Metadata } from "next";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Aluminium doors and windows, curtain walling, steel and stainless fabrication, gypsum and suspended ceilings, office partitions, roller shutters, burglar proofing, pergolas and carport shades across Uganda.",
  keywords: [
    "aluminium doors and windows kampala",
    "curtain wall installation uganda",
    "stainless steel fabrication kampala",
    "gypsum ceiling kampala",
    "suspended ceiling uganda",
    "office partitioning kampala",
    "roller shutter doors uganda",
    "retractable burglar bars uganda",
    "cnc plate cutting uganda",
    "pergola shades uganda",
    "carport shades kampala",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
            Services
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight font-bold tracking-tight text-brand-black uppercase sm:text-4xl lg:text-5xl">
            Fabrication & Interior Systems
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-muted">
            Everything below is fabricated and installed by us. Combining
            packages under one supplier keeps sequencing simple and puts
            responsibility for the finish in one place.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <ServicesGrid />
      </section>

      <section className="border-t border-brand-line bg-brand-surface">
        <div className="mx-auto max-w-6xl px-5 py-16">
          <h2 className="font-display text-2xl font-bold tracking-tight text-brand-black uppercase">
            Not Listed?
          </h2>
          <p className="mt-3 max-w-2xl leading-relaxed text-brand-muted">
            Fabrication is rarely off-the-shelf. If your job sits somewhere
            between these categories, or spans several of them, send the
            drawings across and we&apos;ll tell you honestly whether it&apos;s
            work we should be doing.
          </p>
        </div>
      </section>

      <CtaBanner
        heading="Get a quote on any of these"
        body="Share dimensions, drawings or just a photo of the opening. We'll come back with pricing and a timeline."
      />
    </>
  );
}
