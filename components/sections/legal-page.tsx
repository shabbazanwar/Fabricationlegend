import type { ReactNode } from "react";
import { LEGAL } from "@/lib/constants";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-surface">
        <div className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
            {eyebrow}
          </p>
          <h1 className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-brand-black uppercase sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-brand-muted">
            {intro}
          </p>
          <p className="mt-6 text-sm text-brand-muted">
            Effective {LEGAL.effectiveDate}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-14 sm:py-20">
        <div className="space-y-8 leading-relaxed text-brand-muted [&_a]:text-brand-red [&_a]:underline [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-bold [&_h2]:tracking-tight [&_h2]:text-brand-black [&_h2]:uppercase [&_li]:mt-2 [&_p]:mt-3 [&_strong]:text-brand-black [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-5">
          {children}
        </div>
      </section>
    </>
  );
}
