import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SocialLinks } from "@/components/social-links";
import { CONTACT, whatsappHref } from "@/lib/constants";
import { telHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Request a quote from Fabrication Legend Aluminium Works Uganda. Call +256 704 478114 or +256 780 875785, or send your project details online.",
  keywords: [
    "fabrication company uganda contact",
    "aluminium fabrication quote uganda",
    "metal fabrication kampala",
    "quote for aluminium work uganda",
    "aluminium works in uganda",
    "request aluminium quote kampala",
  ],
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-brand-line bg-brand-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-3xl leading-tight font-bold tracking-tight text-brand-black uppercase sm:text-4xl lg:text-5xl">
            Request a Quote
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-brand-muted">
            Send through what you&apos;re working on and we&apos;ll come back
            with pricing and a realistic timeline. If it&apos;s urgent, calling
            is faster.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-14">
          <div>
            <h2 className="sr-only">Enquiry form</h2>
            <ContactForm />
          </div>

          <aside className="space-y-10">
            <div>
              <h2 className="font-display text-lg font-semibold tracking-tight text-brand-black uppercase">
                Speak To Us
              </h2>
              <ul className="mt-5 space-y-4">
                {CONTACT.phones.map((phone) => (
                  <li key={phone}>
                    <a
                      href={telHref(phone)}
                      className="flex items-center gap-3 text-sm font-medium text-brand-ink transition-colors hover:text-brand-red"
                    >
                      <span className="inline-flex size-10 shrink-0 items-center justify-center bg-brand-surface text-brand-red">
                        <Phone className="size-4" aria-hidden />
                      </span>
                      {phone}
                    </a>
                  </li>
                ))}
                <li>
                  <a
                    href={whatsappHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm font-medium text-brand-ink transition-colors hover:text-brand-red"
                  >
                    <span className="inline-flex size-10 shrink-0 items-center justify-center bg-brand-surface text-brand-red">
                      <MessageCircle className="size-4" aria-hidden />
                    </span>
                    Chat on WhatsApp
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="flex items-center gap-3 text-sm font-medium break-all text-brand-ink transition-colors hover:text-brand-red"
                  >
                    <span className="inline-flex size-10 shrink-0 items-center justify-center bg-brand-surface text-brand-red">
                      <Mail className="size-4" aria-hidden />
                    </span>
                    {CONTACT.email}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-sm font-medium text-brand-ink">
                  <span className="inline-flex size-10 shrink-0 items-center justify-center bg-brand-surface text-brand-red">
                    <MapPin className="size-4" aria-hidden />
                  </span>
                  <span className="pt-2.5 leading-relaxed">
                    {CONTACT.address.street}
                    <br />
                    {CONTACT.address.locality}, {CONTACT.areaServed}
                  </span>
                </li>
              </ul>
            </div>

            <div className="border-t border-brand-line pt-8">
              <h2 className="font-display text-lg font-semibold tracking-tight text-brand-black uppercase">
                Follow Us
              </h2>
              <div className="mt-5">
                <SocialLinks variant="light" />
              </div>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
