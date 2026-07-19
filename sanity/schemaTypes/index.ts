/* eslint-disable @typescript-eslint/no-explicit-any */
const seoFields = [
  {
    name: "seoTitle",
    title: "SEO title",
    type: "string",
    validation: (r: any) => r.max(60),
  },
  {
    name: "metaDescription",
    title: "Meta description",
    type: "text",
    rows: 3,
    validation: (r: any) => r.max(160),
  },
  {
    name: "openGraphImage",
    title: "Open Graph image",
    type: "image",
    options: { hotspot: true },
  },
  { name: "canonicalUrl", title: "Canonical URL", type: "url" },
  { name: "noIndex", title: "No index", type: "boolean", initialValue: false },
];
const demoField = {
  name: "isDemo",
  title: "Demo content",
  type: "boolean",
  description: "Keep enabled until every claim is verified.",
  initialValue: true,
};
const base = (name: string, title: string, extra: any[] = []) => ({
  name,
  title,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (r: any) => r.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (r: any) => r.required(),
    },
    demoField,
    { name: "summary", title: "Summary", type: "text", rows: 4 },
    {
      name: "featured",
      title: "Featured",
      type: "boolean",
      initialValue: false,
    },
    { name: "order", title: "Order", type: "number" },
    ...extra,
    ...seoFields,
  ],
  orderings: [
    {
      title: "Manual order",
      name: "manualOrder",
      by: [{ field: "order", direction: "asc" }],
    },
  ],
});
export const siteSettings = {
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  fields: [
    { name: "title", type: "string", title: "Site title" },
    { name: "availability", type: "string", title: "Availability statement" },
    { name: "cv", type: "file", title: "Verified CV" },
    ...seoFields,
  ],
};
export const personProfile = {
  name: "personProfile",
  title: "Person profile",
  type: "document",
  fields: [
    { name: "name", type: "string", title: "Name" },
    { name: "positioning", type: "string", title: "Positioning" },
    { name: "introduction", type: "text", title: "Introduction" },
    {
      name: "image",
      type: "image",
      title: "Profile image",
      fields: [{ name: "alt", type: "string", title: "Alternative text" }],
    },
    {
      name: "socialLinks",
      type: "array",
      title: "Profile links",
      of: [{ type: "socialLink" }],
    },
    ...seoFields,
  ],
};
export const socialLink = {
  name: "socialLink",
  title: "Social link",
  type: "object",
  fields: [
    { name: "label", type: "string", title: "Label" },
    { name: "url", type: "url", title: "URL" },
  ],
};
export const researchItem = base("researchItem", "Research item", [
  {
    name: "status",
    type: "string",
    title: "Status",
    options: { list: ["draft", "active", "completed", "archived"] },
  },
  { name: "researchQuestion", type: "text", title: "Research question" },
  {
    name: "methodology",
    type: "array",
    title: "Methods",
    of: [{ type: "string" }],
  },
  {
    name: "body",
    type: "array",
    title: "Research sections",
    of: [{ type: "block" }],
  },
]);
export const project = base("project", "Project", [
  { name: "status", type: "string", title: "Status" },
  {
    name: "technologies",
    type: "array",
    title: "Technologies",
    of: [{ type: "reference", to: [{ type: "skill" }] }],
  },
  {
    name: "metrics",
    type: "array",
    title: "Verified metrics only",
    of: [
      {
        type: "object",
        fields: [
          { name: "label", type: "string" },
          { name: "value", type: "number" },
          { name: "unit", type: "string" },
        ],
      },
    ],
  },
  { name: "body", type: "array", title: "Case study", of: [{ type: "block" }] },
]);
export const publication = base("publication", "Publication", [
  {
    name: "authors",
    type: "array",
    title: "Authors",
    of: [{ type: "string" }],
  },
  { name: "year", type: "number", title: "Year" },
  { name: "publicationType", type: "string", title: "Type" },
  {
    name: "peerReviewed",
    type: "boolean",
    title: "Peer reviewed (verified only)",
  },
  { name: "doi", type: "string", title: "DOI" },
  { name: "bibtex", type: "text", title: "BibTeX" },
]);
export const blogPost = base("blogPost", "Blog post", [
  { name: "subtitle", type: "string", title: "Subtitle" },
  { name: "publishedAt", type: "datetime", title: "Publish or schedule at" },
  { name: "updatedAt", type: "datetime", title: "Updated at" },
  {
    name: "cover",
    type: "image",
    title: "Cover",
    fields: [
      {
        name: "alt",
        type: "string",
        title: "Alternative text",
        validation: (r: any) => r.required(),
      },
    ],
  },
  { name: "category", type: "reference", to: [{ type: "blogCategory" }] },
  {
    name: "topics",
    type: "array",
    of: [{ type: "reference", to: [{ type: "topic" }] }],
  },
  {
    name: "tags",
    type: "array",
    of: [{ type: "reference", to: [{ type: "tag" }] }],
  },
  {
    name: "body",
    type: "array",
    title: "Article body",
    of: [
      { type: "block" },
      {
        type: "image",
        fields: [
          { name: "alt", type: "string", validation: (r: any) => r.required() },
          { name: "caption", type: "string" },
        ],
      },
    ],
  },
]);
const simpleNames = [
  ["navigation", "Navigation"],
  ["footer", "Footer"],
  ["researchArea", "Research area"],
  ["blogCategory", "Blog category"],
  ["topic", "Topic"],
  ["tag", "Tag"],
  ["author", "Author"],
  ["experience", "Experience"],
  ["education", "Education"],
  ["skill", "Skill"],
  ["certification", "Certification"],
  ["award", "Award"],
  ["resource", "Resource"],
  ["mediaItem", "Media item"],
  ["newsletterSettings", "Newsletter settings"],
  ["collaborationSettings", "Collaboration settings"],
  ["seoSettings", "SEO settings"],
] as const;
export const simpleSchemas = simpleNames.map(([name, title]) =>
  base(name, title),
);
export const schemaTypes = [
  siteSettings,
  personProfile,
  socialLink,
  researchItem,
  project,
  publication,
  blogPost,
  ...simpleSchemas,
];
