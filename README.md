# Fabrication Legend Website

Marketing site for **Fabrication Legend Aluminium Works Uganda Limited**: aluminium and steel fabrication, ceilings, partitions and interior fit-out.

Next.js (App Router) · TypeScript · Tailwind v4 · Drizzle ORM · Postgres

## Getting started

```bash
npm install
cp .env.example .env.local   # then set DATABASE_URL
npm run dev
```

Pages: `/`, `/about`, `/services`, `/contact`.

## Database

Postgres stores contact-form submissions only. All page and service content is
hardcoded. There is no CMS or admin panel.

```bash
npm run db:generate   # regenerate migration after editing db/schema.ts
npm run db:migrate    # apply migrations to DATABASE_URL
npm run db:studio     # browse submissions
```

Any standard Postgres works (Neon, Supabase, local). For serverless hosts, use the
**pooled** connection string; the client sets `prepare: false` for pooler
compatibility.

## Editing content

`lib/constants.ts` is the single source of truth for services, phone numbers,
slogan and social links. The services list feeds the home page, services page,
footer, contact-form dropdown and the JSON-LD structured data, so add a service
there and it appears everywhere.

## Security

- **Headers** are set in `next.config.ts`: CSP, HSTS, `X-Frame-Options: DENY`,
  `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`. The CSP
  allows Google Tag Manager because analytics may load after consent.
- **Rate limiting** on the contact action: 5 submissions per IP per 10 minutes
  (`lib/rate-limit.ts`). It is in-memory and therefore per-instance, so it stops
  casual flooding but not a distributed attack. Move to Upstash/Redis if that
  becomes a real concern.
- **Bot protection** is a honeypot field. A blocked bot gets a success-shaped
  response so it learns nothing.
- `DATABASE_URL` is server-only and never reaches the browser bundle. Queries go
  through Drizzle, so they are parameterized.

## Analytics

Google Analytics loads **only after the visitor accepts** the consent banner.
Set `NEXT_PUBLIC_GA_ID` to enable it. With no ID set, no banner is shown, no
cookies are set, and nothing is sent to Google, which keeps the privacy policy
accurate in both states.

## Outstanding

- **Logo**: done. `public/brand/logo.png` (512×512, transparent) is used in the
  header, footer, structured data and social cards. `logo-source.png` is the
  full-resolution master it was cut from; `logo-original.pdf` is the client's
  original.

  If the logo is ever regenerated, do **not** try to convert the PDF
  programmatically. Its artwork is a print-CMYK (Adobe YCCK, `transform=2`)
  JPEG plus a soft mask, and decoding it without colour management produces
  badly wrong colours. Render it with a real PDF viewer and work from that.
- **Brand red**: `#e51d25`, sampled from the logo artwork, set once as
  `--color-brand-red` in `app/globals.css`. Everything else derives from it.
- **A vector logo** would still be nicer than the 512px raster for large
  displays, if the client can supply the original artwork file.
- **Photography**: the client hasn't supplied project images. Service cards use
  icons and the hero uses a geometric treatment, so real photos can drop in
  later without a redesign.
- **Social URLs**: done. WhatsApp, Facebook, Instagram, X and TikTok are live in
  `SOCIALS` and feed the structured data's `sameAs`. Google was dropped for want
  of a URL; add a Google Business Profile link there if one exists.
- **Email notification**: each enquiry is emailed via Resend to the address in
  `CONTACT.email`, with `replyTo` set to the enquirer so you can answer by
  replying. A send failure is logged and swallowed, never surfaced to the
  visitor, because the enquiry is already saved.

  No sending domain is verified (deliberate: the business uses a Gmail address,
  not domain mail). Resend therefore delivers **only** to the address that owns
  the Resend account, and mail arrives from `onboarding@resend.dev`. To notify
  a second address later you would need to verify a domain in Resend, which is
  DNS-only and does not require domain mailboxes.
