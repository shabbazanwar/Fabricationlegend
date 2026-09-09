"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { CONTACT, NAV_LINKS, SITE } from "@/lib/constants";
import { cn, telHref } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
      {/* Equal outer columns keep the nav optically centred regardless of how
          wide the wordmark or the call button happen to be. */}
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between gap-3 px-5 sm:h-20 md:grid md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-2.5 sm:gap-3"
          onClick={() => setOpen(false)}
        >
          <Image
            src="/brand/logo.png"
            alt=""
            width={512}
            height={512}
            priority
            className="size-10 shrink-0 sm:size-12"
          />
          <span className="flex min-w-0 flex-col leading-none">
            <span className="font-display text-base font-bold tracking-tight text-brand-black uppercase sm:text-xl">
              Fabrication <span className="text-brand-red">Legend</span>
            </span>
            <span className="mt-1 truncate text-[0.6rem] uppercase tracking-[0.14em] text-brand-muted sm:text-[0.65rem] sm:tracking-[0.18em]">
              Aluminium Works (U) Ltd
            </span>
          </span>
        </Link>

        <nav className="hidden items-center justify-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-brand-red",
                  active ? "text-brand-red" : "text-brand-ink",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <a
          href={telHref(CONTACT.phones[0])}
          className="hidden items-center gap-2 justify-self-end bg-brand-red px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark md:inline-flex"
        >
          <Phone className="size-4" aria-hidden />
          Call Us
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 shrink-0 p-2 md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          className="border-t border-brand-line bg-white md:hidden"
        >
          <div className="mx-auto max-w-6xl px-5 py-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-brand-line py-3 text-sm font-medium last:border-0 hover:text-brand-red"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={telHref(CONTACT.phones[0])}
              className="mt-3 mb-1 flex items-center justify-center gap-2 bg-brand-red px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="size-4" aria-hidden />
              {CONTACT.phones[0]}
            </a>
          </div>
        </nav>
      )}
      <span className="sr-only">{SITE.slogan}</span>
    </header>
  );
}
