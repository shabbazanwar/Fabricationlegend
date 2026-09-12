import type { Metadata } from "next";
import { Barlow, Barlow_Condensed } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { FloatingActions } from "@/components/floating-actions";
import { SplashScreen } from "@/components/splash-screen";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CONTACT, SERVICES, SITE, SOCIALS } from "@/lib/constants";
import "./globals.css";

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Aluminium & Steel Fabrication Uganda`,
    template: `%s | ${SITE.name} Uganda`,
  },
  description: SITE.description,
  keywords: [
    "aluminium fabrication uganda",
    "steel fabrication uganda",
    "metal fabrication kampala",
    "aluminium doors and windows kampala",
    "curtain wall installation uganda",
    "gypsum ceiling kampala",
    "office partitioning kampala",
    "interior fit-out uganda",
    "fabrication legend",
    "aluminium works in uganda",
    "aluminium company uganda",
    "aluminium fabricator kampala",
    "aluminium windows and doors uganda",
    "quote for aluminium work uganda",
    "steel and aluminium fabricator uganda",
  ],
  openGraph: {
    type: "website",
    locale: "en_UG",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | ${SITE.slogan}`,
    description: SITE.description,
    images: [{ url: "/brand/logo.png", width: 512, height: 512, alt: SITE.legalName }],
  },
  twitter: {
    card: "summary",
    title: `${SITE.name} | ${SITE.slogan}`,
    description: SITE.description,
    images: ["/brand/logo.png"],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: SITE.legalName,
  alternateName: SITE.name,
  slogan: SITE.slogan,
  description: SITE.description,
  url: SITE.url,
  logo: `${SITE.url}/brand/logo.png`,
  image: `${SITE.url}/brand/logo.png`,
  telephone: CONTACT.phones,
  email: CONTACT.email,
  areaServed: { "@type": "Country", name: CONTACT.areaServed },
  address: {
    "@type": "PostalAddress",
    streetAddress: CONTACT.address.street,
    addressLocality: CONTACT.address.locality,
    addressCountry: CONTACT.address.country,
  },
  // Guards against any future placeholder href slipping into structured data.
  sameAs: SOCIALS.map((s) => s.href).filter((href) => href !== "#"),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fabrication & Interior Services",
    itemListElement: SERVICES.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.title,
        description: service.description,
      },
    })),
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${barlow.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SplashScreen />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingActions />
        <Analytics />
      </body>
    </html>
  );
}
