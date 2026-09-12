import type { MetadataRoute } from "next";
import { LEGAL_LINKS, NAV_LINKS, SERVICES, SITE } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...NAV_LINKS.map((link) => ({
      url: `${SITE.url}${link.href === "/" ? "" : link.href}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: link.href === "/" ? 1 : 0.8,
    })),
    ...SERVICES.map((service) => ({
      url: `${SITE.url}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...LEGAL_LINKS.map((link) => ({
      url: `${SITE.url}${link.href}`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
