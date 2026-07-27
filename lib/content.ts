export type ContentItem = {
  slug: string;
  title: string;
  kind: "Research" | "Publication" | "Article" | "Project" | "Resource";
  excerpt: string;
  tags: string[];
  date?: string;
  status?: string;
  source?: string;
  body?: string[];
};

export const expertise = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Aviation Analytics",
  "Predictive Maintenance",
  "Aviation Cybersecurity",
  "Explainable AI",
  "AI Safety",
];

export const researchAreas = [
  {
    title: "Predictive Maintenance",
    code: "PDM-01",
    description:
      "Machine-learning systems that identify emerging aircraft maintenance risks before operational disruption.",
    tags: ["Aircraft health", "Anomaly detection", "Reliability"],
  },
  {
    title: "Aviation Cybersecurity",
    code: "CYB-02",
    description:
      "Adaptive detection approaches for navigation interference, spoofing and connected-aircraft threats.",
    tags: ["GNSS", "Signal integrity", "Resilience"],
  },
  {
    title: "Sustainable Operations",
    code: "SUS-03",
    description:
      "AI-guided fuel, trajectory and contrail decisions for safer, more efficient aviation operations.",
    tags: ["Fuel optimization", "Contrails", "Climate"],
  },
  {
    title: "Explainable Aviation AI",
    code: "XAI-04",
    description:
      "Interpretable decision-support methods designed for high-stakes, safety-conscious aviation contexts.",
    tags: ["XAI", "Human factors", "Assurance"],
  },
];

export const publications: ContentItem[] = [
  {
    slug: "ai-predictive-maintenance-general-aviation",
    title: "AI-Based Predictive Maintenance for General Aviation Aircraft",
    kind: "Publication",
    excerpt:
      "A study of AI-supported maintenance prediction for aircraft reliability, safety and operational continuity.",
    tags: ["Predictive Maintenance", "General Aviation", "2026"],
    date: "2026",
    status: "Published",
    source: "International Journal of Intelligent Systems and Applications in Engineering",
  },
  {
    slug: "ai-fuel-optimization-sustainable-aviation",
    title: "AI-Based Fuel Optimization for Sustainable Aviation Operations",
    kind: "Publication",
    excerpt:
      "Exploring intelligent flight planning, maintenance and decision support to reduce fuel use and emissions.",
    tags: ["Sustainability", "Fuel Optimization", "2026"],
    date: "2026",
    status: "Published",
    source: "International Journal of Engineering Technology Research & Management",
  },
  {
    slug: "ai-gnss-spoofing-detection",
    title: "AI-Based GNSS Spoofing and GPS Interference Detection in Aviation",
    kind: "Publication",
    excerpt:
      "Machine-learning classification of simulated legitimate, spoofed and interfered navigation signals.",
    tags: ["GNSS", "Cybersecurity", "Machine Learning"],
    status: "Metadata pending verification",
  },
  {
    slug: "ai-contrail-avoidance",
    title: "AI-Based Contrail Avoidance for Reducing Aviation Climate Impact",
    kind: "Publication",
    excerpt:
      "A simulation-oriented investigation of predicting contrail formation and informing route adjustments.",
    tags: ["Contrails", "Climate", "Sustainable Aviation"],
    status: "Metadata pending verification",
  },
  {
    slug: "explainable-ai-faa-certifiable-systems",
    title: "Explainable AI (XAI) for FAA Certifiable Aviation Systems",
    kind: "Publication",
    excerpt:
      "A discussion of interpretability, traceability and human trust for safety-critical aerospace AI.",
    tags: ["Explainable AI", "Certification", "Safety"],
    status: "Published",
    source: "SAMRIDDHI — A Journal of Physical Sciences, Engineering and Technology",
  },
];

export const articles: ContentItem[] = [
  {
    slug: "predictive-maintenance-aircraft-machine-learning",
    title: "Building Predictive Maintenance Systems for Aircraft",
    kind: "Article",
    excerpt:
      "A practical research note on signals, models and evaluation choices for aircraft health monitoring.",
    tags: ["Machine Learning", "Predictive Maintenance"],
    date: "Research note",
    body: [
      "Predictive maintenance shifts the question from “what failed?” to “what evidence suggests a component may fail next?” In aviation, that change must be paired with disciplined validation and clear human oversight.",
      "A useful workflow begins with sensor quality, operating context and maintenance history. Model choice follows the data—not the other way around. Evaluation should emphasize false negatives, calibration and performance under changing conditions.",
      "The final system is decision support. Engineers need traceable alerts, confidence context and a clear path to inspect the evidence behind every recommendation.",
    ],
  },
  {
    slug: "gnss-security-ai-research-notes",
    title: "Research Notes: AI for GNSS Signal Integrity",
    kind: "Article",
    excerpt:
      "How signal features and anomaly detection can support more resilient aviation navigation.",
    tags: ["GNSS", "Cybersecurity", "AI Safety"],
    date: "Research note",
  },
  {
    slug: "explainability-safety-critical-aviation",
    title: "Why Explainability Matters in Safety-Critical Aviation",
    kind: "Article",
    excerpt:
      "Interpretability is not decoration—it is part of evidence, review and responsible operational use.",
    tags: ["XAI", "Safety", "Human Factors"],
    date: "Research note",
  },
  {
    slug: "contrails-climate-intelligent-routing",
    title: "Contrails, Climate and Intelligent Route Decisions",
    kind: "Article",
    excerpt:
      "A concise look at the data and decision challenges behind AI-assisted contrail avoidance.",
    tags: ["Climate", "Optimization", "Aviation"],
    date: "Research note",
  },
];

export const projects: ContentItem[] = [
  {
    slug: "aviation-signal-anomaly-lab",
    title: "Aviation Signal Anomaly Lab",
    kind: "Project",
    excerpt:
      "An educational classifier interface for exploring navigation-signal anomaly features and thresholds.",
    tags: ["GNSS", "Random Forest", "Interactive Lab"],
    status: "Research concept",
  },
  {
    slug: "aircraft-health-intelligence",
    title: "Aircraft Health Intelligence",
    kind: "Project",
    excerpt:
      "A transparent workflow concept for component risk scoring, alerts and maintenance decision support.",
    tags: ["Predictive Maintenance", "XAI", "Python"],
    status: "Research concept",
  },
  {
    slug: "sustainable-flight-decision-support",
    title: "Sustainable Flight Decision Support",
    kind: "Project",
    excerpt:
      "A research concept connecting weather, trajectory and aircraft data to operational efficiency decisions.",
    tags: ["Optimization", "Sustainability", "Data"],
    status: "Research concept",
  },
];

export const resources: ContentItem[] = [
  {
    slug: "aviation-ai-reading-list",
    title: "Aviation AI Reading List",
    kind: "Resource",
    excerpt: "A curated starting point for applied AI and aviation safety research.",
    tags: ["Reading", "Research"],
  },
  {
    slug: "research-reproducibility-checklist",
    title: "Research Reproducibility Checklist",
    kind: "Resource",
    excerpt: "A practical checklist for documenting data, experiments and limitations.",
    tags: ["Methods", "Open Science"],
  },
];

export const items: ContentItem[] = [
  ...publications,
  ...articles,
  ...projects,
  ...resources,
  ...researchAreas.map((area) => ({
    slug: area.title.toLowerCase().replaceAll(" ", "-"),
    title: area.title,
    kind: "Research" as const,
    excerpt: area.description,
    tags: area.tags,
    status: "Active research interest",
  })),
];

export const nav = [
  "About",
  "Research",
  "Projects",
  "Publications",
  "AI Lab",
  "Blog",
  "Contact",
];

export const routeTitle = (route: string) =>
  route
    .split("/")
    .filter(Boolean)
    .map((s) => s.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(" / ") || "Home";
