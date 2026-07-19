# Sam Suseelan — Intelligent Digital Research Lab

A premium, accessible AI researcher and machine-learning engineer portfolio. It combines a professional profile, research and project archives, publication records, a technical blog, resource library, educational AI demos, global search, contact validation, and CMS-ready content models.

All bundled records are visibly labelled **Sample** or **Demo Content**. They demonstrate the editorial structure and do not claim achievements, affiliations, publications, metrics, degrees, or experience for Sam Suseelan.

## Main routes

- `/`, `/about`, `/research`, `/projects`, `/publications`, `/ai-lab`, `/blog`, `/resources`, `/contact`
- `/experience`, `/education`, `/skills`, `/certifications`, `/awards`, `/collaboration`, `/newsletter`, `/media`, `/now`, `/uses`, `/cv`
- `/privacy`, `/terms`, `/accessibility`, `/search`, plus dynamic detail routes
- `/rss.xml`, `/sitemap.xml`, `/robots.txt`, and `/studio`

The catch-all content system makes every seeded project, research item, publication, article and resource indexable. Adding CMS records extends the same route pattern.

## Stack

Next.js-compatible App Router via vinext, React 19, strict TypeScript, Tailwind CSS 4, server components by default, accessible client interactions, Sanity-compatible schema objects, Cloudflare/Vercel-compatible environment conventions, ESLint, Prettier and Node tests.

## Local setup

1. Install Node.js 22.13 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and fill only the integrations you use.
4. Run `npm run dev` and open the printed local URL.

Useful commands: `npm run dev`, `npm run build`, `npm run lint`, `npm run typecheck`, `npm run check`, `npm test`, and `npm run format`.

## Content management

Schema definitions live in `sanity/schemaTypes`. Create a Sanity project, configure `NEXT_PUBLIC_SANITY_PROJECT_ID` and `NEXT_PUBLIC_SANITY_DATASET`, install the Sanity packages if a hosted Studio is required, and import the schema index. The public site intentionally remains operational without CMS variables by using local demo data.

The daily publishing flow is: create a Blog Post, mark its demo flag off only after factual review, add category/topics/tags, supply alt text and SEO fields, schedule or publish, then check the article, RSS entry and archive pages.

## Contact and optional AI

The contact endpoint validates fields, checks a honeypot and applies a basic per-instance rate limit. Without `RESEND_API_KEY`, it reports a safe demo success and sends nothing. Production delivery should be wired to Resend or another provider in the server route.

An “Ask My Portfolio” assistant is deliberately not exposed. Enable it only after approved retrieval content, a provider, input limits, disclosure and durable rate limiting are configured.

## Deployment

Run `npm run build`, configure the environment values in the hosting dashboard, and deploy. Set `NEXT_PUBLIC_SITE_URL` to the canonical HTTPS origin. For a custom domain, add it in the host, update DNS, then regenerate the sitemap and validate canonical/OG URLs.

## SEO, security and accessibility checklist

- Replace demo copy with verified content; keep titles and descriptions unique.
- Add a reviewed social preview image, legal PDF links only, and descriptive image alt text.
- Preserve the CSP/security-header policy of the selected host and review dependencies regularly.
- Use least-privilege Sanity roles; keep tokens server-only and rotate them.
- Test keyboard navigation, focus visibility, reduced motion, both themes and mobile layouts.
- Back up the Sanity dataset with scheduled exports and store uploaded originals separately.

## Known limitations

The repository ships without third-party credentials, real personal biography, CV file, newsletter provider, email delivery, hosted Sanity Studio dependencies or a model-backed assistant. The educational AI Lab uses transparent local demo values. Replace or configure these through reviewed content and environment variables before a public launch.
