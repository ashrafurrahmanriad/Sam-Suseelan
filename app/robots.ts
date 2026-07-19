import type { MetadataRoute } from "next";
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/studio/desk"] },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://samsuseelan.ai"}/sitemap.xml`,
  };
}
