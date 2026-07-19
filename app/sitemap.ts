import type { MetadataRoute } from "next";
import { items, nav } from "../lib/content";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://samsuseelan.ai";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    ...nav.map((n) => ({
      url: `${base}/${n.toLowerCase().replaceAll(" ", "-")}`,
      lastModified: new Date(),
      priority: 0.8,
    })),
    ...items.map((x) => ({
      url: `${base}/${x.kind.toLowerCase()}/${x.slug}`,
      lastModified: new Date(x.date || "2026-01-01"),
      priority: 0.6,
    })),
  ];
}
