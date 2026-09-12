"use client";

import { useEffect } from "react";

/**
 * Last-resort boundary: catches failures in the root layout itself, so it
 * replaces the whole document and cannot rely on the layout, fonts, or the
 * Tailwind stylesheet loading. Everything here is inline on purpose.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Fatal application error", error);
  }, [error]);

  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
          color: "#ffffff",
          fontFamily:
            "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
          padding: "24px",
        }}
      >
        <main style={{ maxWidth: "34rem" }}>
          <p
            style={{
              margin: 0,
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "#e51d25",
            }}
          >
            Something Went Wrong
          </p>
          <h1
            style={{
              margin: "16px 0 0",
              fontSize: "34px",
              lineHeight: 1.1,
              fontWeight: 700,
              textTransform: "uppercase",
            }}
          >
            Fabrication Legend is temporarily unavailable
          </h1>
          <p
            style={{
              margin: "20px 0 0",
              fontSize: "17px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            This is on us, not you. Please try again in a moment. If it keeps
            happening, call us and we will take your enquiry directly.
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "12px",
              marginTop: "32px",
            }}
          >
            <button
              type="button"
              onClick={reset}
              style={{
                appearance: "none",
                border: "none",
                cursor: "pointer",
                background: "#e51d25",
                color: "#ffffff",
                padding: "15px 30px",
                fontSize: "14px",
                fontWeight: 600,
                fontFamily: "inherit",
              }}
            >
              Try Again
            </button>
            <a
              href="tel:+256704478114"
              style={{
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#ffffff",
                padding: "15px 30px",
                fontSize: "14px",
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              +256704478114
            </a>
          </div>

          {error.digest && (
            <p
              style={{
                marginTop: "32px",
                fontSize: "12px",
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
                color: "rgba(255,255,255,0.35)",
              }}
            >
              Reference: {error.digest}
            </p>
          )}
        </main>
      </body>
    </html>
  );
}
