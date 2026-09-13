import {
  Bath,
  Blinds,
  Building2,
  Car,
  Cog,
  Columns3,
  DoorOpen,
  Factory,
  BedDouble,
  DoorClosed,
  Fence,
  Flame,
  Library,
  ShowerHead,
  HardHat,
  Layers,
  LayoutGrid,
  PanelTop,
  ShieldCheck,
  Sun,
  type LucideIcon,
} from "lucide-react";

/**
 * Canonical origin for sitemap, robots, canonical tags, JSON-LD and OG images.
 * Set NEXT_PUBLIC_SITE_URL to the real domain in production. Vercel injects
 * VERCEL_PROJECT_PRODUCTION_URL (no scheme), which keeps preview and
 * *.vercel.app deploys pointing at themselves rather than at a domain that
 * may not resolve yet.
 */
function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");

  const vercel = process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;

  return "http://localhost:3000";
}

export const SITE = {
  name: "Fabrication Legend",
  legalName: "Fabrication Legend Aluminium Works (U) Ltd",
  slogan: "Your One Stop Interior Partner",
  url: resolveSiteUrl(),
  description:
    "Aluminium and steel fabrication, ceilings, partitions and interior fit-out for construction companies and manufacturers across Uganda.",
} as const;

export const CONTACT = {
  phones: ["+256704478114", "+256780875785"],
  email: "fabricationlegend@gmail.com",
  areaServed: "Uganda",
  address: {
    street: "Naalya Road, opposite Naalya Secondary School",
    locality: "Kampala",
    country: "UG",
  },
} as const;

/**
 * wa.me needs the number in international form with no "+", spaces or dashes.
 * TODO: confirm which of the two numbers is the WhatsApp line.
 */
export const WHATSAPP = {
  number: "256704478114",
  greeting: "Hello Fabrication Legend, I'd like to enquire about a project.",
} as const;

export const whatsappHref = `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(WHATSAPP.greeting)}`;

export const SOCIALS = [
  { name: "WhatsApp", href: whatsappHref },
  { name: "Facebook", href: "https://facebook.com/fabricationlegend" },
  {
    name: "Instagram",
    href: "https://instagram.com/fabrication_legend_aluminium_w",
  },
  { name: "X", href: "https://x.com/FabricationLeg" },
  { name: "TikTok", href: "https://tiktok.com/@fabricationlegend" },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const DEVELOPER = {
  name: "Shabbaz",
  url: "https://shabbaz.dev",
} as const;

export const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Use", href: "/terms" },
  { label: "Disclaimer", href: "/disclaimer" },
] as const;

export const LEGAL = {
  /** Bump whenever the legal pages change materially. */
  effectiveDate: "12 September 2026",
  registeredAddress:
    "Naalya Road, opposite Naalya Secondary School, Kampala, Uganda",
  /** Where the contact-form database is physically hosted (Neon, Frankfurt). */
  dataHostingRegion: "Frankfurt, Germany (eu-central-1)",
} as const;

export type Service = {
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export const SERVICES: Service[] = [
  {
    slug: "aluminium-doors-windows",
    title: "Aluminium Doors & Windows",
    description:
      "Sliding, casement and folding systems fabricated to spec and installed square, sealed and weather-tight.",
    icon: DoorOpen,
  },
  {
    slug: "stainless-steel",
    title: "Stainless Steel",
    description:
      "Balustrades, handrails, counters and architectural trim in grades that hold their finish.",
    icon: Layers,
  },
  {
    slug: "steel-fabrication",
    title: "Steel Fabrication",
    description:
      "Structural and decorative steelwork cut, welded and finished in our workshop to drawing.",
    icon: Factory,
  },
  {
    slug: "metal-fabrication",
    title: "Metal Fabrication",
    description:
      "General metalwork: gates, frames, brackets and one-off pieces made to measure rather than adapted to fit.",
    icon: Flame,
  },
  {
    slug: "pergola-shades",
    title: "Pergola Shades",
    description:
      "Aluminium and steel pergolas that hold up to sun and rain without warping or rusting through.",
    icon: Sun,
  },
  {
    slug: "gypsum-ceiling",
    title: "Gypsum Ceiling",
    description:
      "Flat, coffered and dropped gypsum ceilings with clean joints and a paint-ready finish.",
    icon: PanelTop,
  },
  {
    slug: "suspended-ceiling",
    title: "Suspended Ceiling",
    description:
      "Grid and tile systems that keep services accessible and rooms acoustically comfortable.",
    icon: LayoutGrid,
  },
  {
    slug: "curtain-wall",
    title: "Curtain Wall",
    description:
      "Glazed façade systems engineered for wind load, drainage and thermal movement.",
    icon: Building2,
  },
  {
    slug: "bathroom-cabinets",
    title: "Bathroom Cabinets",
    description:
      "Moisture-resistant vanity units and storage built to the room, finished to sit with the tiling and the shower screen.",
    icon: Bath,
  },
  {
    slug: "office-partitions",
    title: "Office Partitions",
    description:
      "Gypsum, glass and aluminium office partitioning that divides floorplates without closing them in.",
    icon: Columns3,
  },
  {
    slug: "balcony-grills-glass-works",
    title: "Balcony Grills & Glass Works",
    description:
      "Wrought iron and mild steel balcony grills, plus professional glass installation, so security and outlook are handled together.",
    icon: Fence,
  },
  {
    slug: "cnc-plate-design",
    title: "CNC Plate Design",
    description:
      "Precision-cut decorative and functional plate work, from screens and gates to signage.",
    icon: Cog,
  },
  {
    slug: "construction-works",
    title: "Construction Works",
    description:
      "General construction support that keeps fabrication and site work on one schedule.",
    icon: HardHat,
  },
  {
    slug: "roller-shutters",
    title: "Roller Shutters",
    description:
      "Manual and motorised shutters for shopfronts, warehouses and loading bays.",
    icon: Blinds,
  },
  {
    slug: "burglar-proofing",
    title: "Collapsible Burglar Proofing",
    description:
      "Collapsible security grilles that fold away out of sight instead of permanently barring the window.",
    icon: ShieldCheck,
  },
  {
    slug: "carport-shades",
    title: "Carport Shades",
    description:
      "Freestanding and wall-mounted carports sized to the vehicles they actually have to cover.",
    icon: Car,
  },
  {
    slug: "gates",
    title: "Gates",
    description:
      "Sliding and swing gates, from heavy ornate scrollwork to clean laser-cut panels, hung to run true and last.",
    icon: DoorClosed,
  },
  {
    slug: "shower-screens-glass",
    title: "Shower Screens & Glass",
    description:
      "Framed and frameless shower enclosures in toughened glass, cut and sealed to the tiling as built.",
    icon: ShowerHead,
  },
  {
    slug: "fencing-boundary-walls",
    title: "Fencing & Boundary Walls",
    description:
      "Perimeter railings, wall-top spikes and decorative panels that secure a plot without walling in the view.",
    icon: Fence,
  },
  {
    slug: "metal-beds",
    title: "Metal Beds & Furniture",
    description:
      "Bed frames, bunks and institutional furniture welded from box section and finished in any colour.",
    icon: BedDouble,
  },
  {
    slug: "steel-shelving",
    title: "Steel Shelving & Racking",
    description:
      "Boltless shelving and storage racking for shops, stores and warehouses, sized to the bay it goes in.",
    icon: Library,
  },
];

export const SERVICE_OPTIONS = [
  ...SERVICES.map((service) => service.title),
  "Other",
];
