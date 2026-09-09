import Link from "next/link";
import { ArrowRight, Building2, Globe2, Ruler } from "lucide-react";
import { HeroCarousel } from "@/components/sections/hero-carousel";
import { ServicesGrid } from "@/components/sections/services-grid";
import { CtaBanner } from "@/components/sections/cta-banner";

export const metadata = {
  // Root-segment titles don't inherit the layout's template, so name the brand explicitly.
  title: "Fabrication Legend | Aluminium & Steel Fabrication in Uganda",
  description:
    "Fabrication Legend Aluminium Works Uganda: aluminium doors and windows, curtain walling, steel fabrication, ceilings and interior fit-out for contractors and manufacturers.",
};

const PILLARS = [
  {
    icon: Ruler,
    title: "Built to Standard",
    body: "We hold to international specification on materials, tolerances and finish. The difference shows up years later, not on handover day.",
  },
  {
    icon: Building2,
    title: "Contractor Ready",
    body: "We work the way construction firms and manufacturers need us to: to drawing, to programme, and without holding up the trades behind us.",
  },
  {
    icon: Globe2,
    title: "Ugandan & Global",
    body: "Serving clients across Uganda and beyond, with the same quality of work whether it's a single shopfront or a full façade package.",
  },
];

export default function HomePage() {
  return (
    <>
      <HeroCarousel />

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-10 md:grid-cols-3">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div key={pillar.title}>
                <Icon className="size-7 text-brand-red" aria-hidden />
                <h2 className="mt-4 font-display text-lg font-semibold tracking-tight text-brand-black uppercase">
                  {pillar.title}
                </h2>
                <p className="mt-2.5 text-sm leading-relaxed text-brand-muted">
                  {pillar.body}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-y border-brand-line bg-brand-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-bold tracking-tight text-brand-black uppercase sm:text-3xl lg:text-4xl">
                What We Fabricate
              </h2>
              <p className="mt-3 leading-relaxed text-brand-muted">
                From a single window to a full interior package. One supplier,
                one point of accountability.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-brand-red hover:underline"
            >
              All services
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div className="mt-10">
            <ServicesGrid limit={6} />
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
