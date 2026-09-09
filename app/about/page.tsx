import type { Metadata } from "next";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CONTACT, SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Fabrication Legend Aluminium Works Uganda Limited builds to international standard for construction companies and manufacturers across Uganda and beyond.",
  keywords: [
    "aluminium works uganda",
    "fabrication company uganda",
    "interior fit-out uganda",
    "fabrication legend uganda",
  ],
};

const VALUES = [
  {
    title: "International Standard",
    body: "As the fabrication industry has evolved, we've held our work to international specification rather than to whatever passes locally. Materials, tolerances, welds and finishes all get checked against that bar.",
  },
  {
    title: "Long-Term Partnerships",
    body: "Most of our work comes from construction companies and manufacturers who came back. That only happens when the last job went in clean and stayed that way.",
  },
  {
    title: "Continuous Upgrading",
    body: "Our track record has pushed us to keep raising the quality of our fabrication products, for Ugandan clients and for the global clientele we now serve.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
            About Us
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight font-bold tracking-tight text-brand-black uppercase sm:text-4xl lg:text-5xl">
            Your One Stop Interior Partner
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-muted">
            {SITE.legalName} fabricates and installs aluminium, steel and
            interior systems for the people who build Uganda: main contractors,
            developers, manufacturers and property owners who need the work done
            once, properly.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-14">
          <div>
            <h2 className="font-display text-2xl font-bold tracking-tight text-brand-black uppercase">
              Who We Are
            </h2>
            <div className="mt-6 space-y-5 leading-relaxed text-brand-muted">
              <p>
                As the fabrication industry has evolved over the years, we at
                Fabrication Legend and Aluminium Works focus on maintaining
                international standard requirements to achieve long-lasting
                partnerships with the most prominent construction companies and
                manufacturers.
              </p>
              <p>
                Our achievements over the years have pushed us to upgrade the
                quality of our fabrication products for Ugandan and the global
                clientele. That means better material sourcing, tighter
                workshop tolerances and installation crews who finish a job
                rather than leave it at ninety percent.
              </p>
              <p>
                We work across the whole interior envelope: aluminium doors and
                windows, curtain walling, stainless and structural steel,
                gypsum and suspended ceilings, partitions, cabinetry, shading
                and security systems. One supplier, one point of
                accountability, one schedule to manage.
              </p>
            </div>
          </div>

          <dl className="space-y-8 border-t border-brand-line pt-10 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Company
              </dt>
              <dd className="mt-2 font-medium text-brand-black">
                {SITE.legalName}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Area Served
              </dt>
              <dd className="mt-2 font-medium text-brand-black">
                {CONTACT.areaServed} &amp; international clientele
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Typical Clients
              </dt>
              <dd className="mt-2 font-medium text-brand-black">
                Construction companies, manufacturers, developers, property
                owners
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-muted">
                Speak To Us
              </dt>
              <dd className="mt-2 space-y-1">
                {CONTACT.phones.map((phone) => (
                  <p key={phone} className="font-medium text-brand-black">
                    {phone}
                  </p>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <h2 className="font-display text-2xl font-bold tracking-tight text-brand-black uppercase">
            How We Work
          </h2>
          <div className="mt-10 grid gap-px bg-brand-line sm:grid-cols-3">
            {VALUES.map((value) => (
              <div key={value.title} className="bg-white p-8">
                <h3 className="font-display text-lg font-semibold tracking-tight text-brand-black uppercase">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-brand-muted">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        heading="Work with us on your next project"
        body="Tell us what you're building and we'll tell you exactly what we can take off your plate."
      />
    </>
  );
}
