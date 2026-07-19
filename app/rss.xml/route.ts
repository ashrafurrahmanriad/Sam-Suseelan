import { items } from "../../lib/content";
export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || "https://samsuseelan.ai";
  const posts = items
    .filter((x) => x.kind === "Article")
    .map(
      (x) =>
        `<item><title><![CDATA[${x.title}]]></title><link>${base}/blog/${x.slug}</link><description><![CDATA[${x.excerpt}]]></description></item>`,
    )
    .join("");
  return new Response(
    `<?xml version="1.0"?><rss version="2.0"><channel><title>Sam Suseelan — The Intelligence Brief</title><link>${base}</link>${posts}</channel></rss>`,
    { headers: { "content-type": "application/rss+xml; charset=utf-8" } },
  );
}
