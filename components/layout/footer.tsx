import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { SocialLinks } from "@/components/social-links";
import {
  CONTACT,
  DEVELOPER,
  LEGAL_LINKS,
  NAV_LINKS,
  SERVICES,
  SITE,
} from "@/lib/constants";
import { telHref } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="mt-auto bg-brand-black text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-12 sm:grid-cols-2 sm:py-14 lg:grid-cols-4">
        <div>
          <Image
            src="/brand/logo.png"
            alt={SITE.legalName}
            width={512}
            height={512}
            className="size-16"
          />
          <p className="mt-4 text-sm leading-relaxed text-white/60">
            {SITE.legalName}. {SITE.slogan}.
          </p>
          <div className="mt-6">
            <SocialLinks variant="dark" />
          </div>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Pages
          </h2>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/70 transition-colors hover:text-brand-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Services
          </h2>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.slice(0, 6).map((service) => (
              <li key={service.slug} className="text-sm text-white/70">
                {service.title}
              </li>
            ))}
            <li>
              <Link
                href="/services"
                className="text-sm font-medium text-brand-red hover:underline"
              >
                See all services
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Contact
          </h2>
          <ul className="mt-4 space-y-3">
            {CONTACT.phones.map((phone) => (
              <li key={phone}>
                <a
                  href={telHref(phone)}
                  className="flex items-center gap-2.5 text-sm text-white/70 transition-colors hover:text-brand-red"
                >
                  <Phone className="size-4 shrink-0" aria-hidden />
                  {phone}
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${CONTACT.email}`}
                className="flex items-center gap-2.5 text-sm break-all text-white/70 transition-colors hover:text-brand-red"
              >
                <Mail className="size-4 shrink-0" aria-hidden />
                {CONTACT.email}
              </a>
            </li>
            <li className="flex items-center gap-2.5 text-sm text-white/70">
              <MapPin className="size-4 shrink-0" aria-hidden />
              {CONTACT.areaServed}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-5 py-6 text-center lg:grid lg:grid-cols-3 lg:items-center lg:text-left">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} {SITE.legalName}. All rights
            reserved.
          </p>
          <p className="text-xs text-white/40 lg:text-center">
            Designed &amp; built by{" "}
            <a
              href={DEVELOPER.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white/60 transition-colors hover:text-brand-red"
            >
              {DEVELOPER.name}
            </a>
          </p>
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 lg:justify-end">
            {LEGAL_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-xs text-white/50 transition-colors hover:text-brand-red"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
