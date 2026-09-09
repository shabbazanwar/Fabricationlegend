"use client";

import Link from "next/link";
import Script from "next/script";
import { useSyncExternalStore } from "react";

const STORAGE_KEY = "fl-cookie-consent";
const CHANGE_EVENT = "fl-consent-change";
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type Consent = "granted" | "denied";
/** "unknown" is the pre-hydration state, so returning visitors never see the banner flash. */
type Snapshot = Consent | "undecided" | "unknown";

function subscribe(onChange: () => void) {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getSnapshot(): Snapshot {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "granted" || value === "denied" ? value : "undecided";
  } catch {
    // Private browsing and blocked site data both throw here.
    return "undecided";
  }
}

function getServerSnapshot(): Snapshot {
  return "unknown";
}

function decide(value: Consent) {
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {
    // Consent still applies to this page view even if it can't be persisted.
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export function Analytics() {
  const consent = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  // No measurement ID means no analytics, so there is nothing to consent to
  // and no cookies are set. The banner stays hidden in that case.
  if (!GA_ID) return null;

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{anonymize_ip:true});`}
          </Script>
        </>
      )}

      {consent === "undecided" && (
        <div
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-line bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.08)]"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm leading-relaxed text-brand-muted">
              We would like to use Google Analytics to understand how visitors
              use this site. It sets cookies and sends data outside Uganda. The
              site works exactly the same if you decline. See our{" "}
              <Link href="/privacy#cookies" className="text-brand-red underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="flex shrink-0 gap-3">
              <button
                type="button"
                onClick={() => decide("denied")}
                className="border border-brand-line px-6 py-2.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-black"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide("granted")}
                className="bg-brand-red px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
