export type ContentItem = {
  slug: string;
  title: string;
  kind: string;
  excerpt: string;
  tags: string[];
  date?: string;
};
export const expertise = [
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Generative AI",
  "Natural Language Processing",
  "Computer Vision",
  "Explainable AI",
  "MLOps",
];
export const items: ContentItem[] = [
  {
    slug: "sample-explainable-vision",
    title: "Sample: Explainable Vision Pipeline",
    kind: "Project",
    excerpt:
      "A transparent reference pipeline for inspecting image-classification decisions.",
    tags: ["Computer Vision", "Explainable AI", "PyTorch"],
  },
  {
    slug: "sample-rag-evaluation",
    title: "Sample: Retrieval Evaluation Workbench",
    kind: "Project",
    excerpt:
      "A reproducible framework for comparing retrieval and answer-quality signals.",
    tags: ["Generative AI", "Evaluation", "Python"],
  },
  {
    slug: "sample-ml-observability",
    title: "Sample: ML Observability Toolkit",
    kind: "Project",
    excerpt:
      "A compact blueprint for monitoring data drift, service health and model behaviour.",
    tags: ["MLOps", "Monitoring", "Data"],
  },
  {
    slug: "sample-responsible-nlp",
    title: "Sample: Responsible NLP Audit",
    kind: "Project",
    excerpt:
      "An educational audit workflow for documenting language-model risks and mitigations.",
    tags: ["NLP", "Responsible AI", "Audit"],
  },
  {
    slug: "interpretable-multimodal-systems",
    title: "Demo: Interpretable Multimodal Systems",
    kind: "Research",
    excerpt:
      "Exploring how multimodal models can expose useful, human-auditable evidence.",
    tags: ["Active", "Multimodal", "XAI"],
  },
  {
    slug: "robust-retrieval-augmentation",
    title: "Demo: Robust Retrieval-Augmented Generation",
    kind: "Research",
    excerpt:
      "Studying retrieval quality, grounding and failure detection in knowledge systems.",
    tags: ["Draft", "RAG", "Evaluation"],
  },
  {
    slug: "efficient-edge-learning",
    title: "Demo: Efficient Learning at the Edge",
    kind: "Research",
    excerpt:
      "Investigating compact model architectures under latency and energy constraints.",
    tags: ["Archived", "Efficiency", "Edge AI"],
  },
  {
    slug: "publication-explainability",
    title: "Sample Publication: A Practical Explainability Framework",
    kind: "Publication",
    excerpt:
      "Demonstration record showing citation, abstract and related-work presentation.",
    tags: ["2026", "Demo Content", "Framework"],
  },
  {
    slug: "publication-retrieval",
    title: "Sample Publication: Evaluating Retrieval Quality",
    kind: "Publication",
    excerpt:
      "A clearly labelled placeholder publication for layout and filtering tests.",
    tags: ["2025", "Demo Content", "Evaluation"],
  },
  {
    slug: "publication-efficient-models",
    title: "Sample Publication: Efficient Model Design",
    kind: "Publication",
    excerpt:
      "Demo scholarly record; replace through the CMS before production use.",
    tags: ["2024", "Demo Content", "Efficiency"],
  },
  ...[
    "How to Evaluate a RAG System",
    "A Field Guide to Model Explainability",
    "Designing Responsible AI Experiments",
    "Practical ML Observability",
    "Reading Confusion Matrices Well",
    "From Notebook to Reliable Service",
    "Prompt Evaluation Beyond Vibes",
    "Building Reproducible Research",
  ].map((title, i) => ({
    slug: `sample-article-${i + 1}`,
    title: `Sample: ${title}`,
    kind: "Article",
    excerpt:
      "Demo technical article illustrating the editorial system and reading experience.",
    tags: [
      ["Evaluation", "RAG"],
      ["XAI", "Research"],
      ["Responsible AI", "Methods"],
      ["MLOps", "Monitoring"],
      ["Metrics", "Classification"],
      ["Engineering", "Deployment"],
      ["LLM", "Evaluation"],
      ["Research", "Reproducibility"],
    ][i],
    date: `2026-0${(i % 6) + 1}-12`,
  })),
  ...[
    "Responsible AI Reading List",
    "MLOps Production Checklist",
    "Explainability Methods Map",
    "Research Paper Template",
    "Dataset Documentation Guide",
    "Model Evaluation Canvas",
  ].map((title, i) => ({
    slug: `sample-resource-${i + 1}`,
    title: `Sample: ${title}`,
    kind: "Resource",
    excerpt:
      "A demo resource entry prepared for replacement or expansion in the CMS.",
    tags: ["Resource", "Demo Content"],
  })),
];
export const nav = [
  "About",
  "Research",
  "Projects",
  "Publications",
  "AI Lab",
  "Blog",
  "Resources",
  "Contact",
];
export const routeTitle = (route: string) =>
  route
    .split("/")
    .filter(Boolean)
    .map((s) => s.replaceAll("-", " ").replace(/\b\w/g, (c) => c.toUpperCase()))
    .join(" / ") || "Home";
