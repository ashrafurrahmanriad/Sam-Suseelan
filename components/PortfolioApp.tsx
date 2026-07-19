"use client";
/* eslint-disable @next/next/no-html-link-for-pages */
import { useEffect, useMemo, useState } from "react";
import { expertise, items, nav, routeTitle } from "../lib/content";

const icon = (name: string) =>
  ({
    "Artificial Intelligence": "✦",
    "Machine Learning": "⌁",
    "Deep Learning": "◉",
    "Generative AI": "✺",
    "Natural Language Processing": "¶",
    "Computer Vision": "◎",
    "Explainable AI": "◇",
    MLOps: "↻",
  })[name] || "•";
const hrefFor = (label: string) =>
  `/${label.toLowerCase().replaceAll(" ", "-")}`;

export function PortfolioApp({ route }: { route: string }) {
  const [theme, setTheme] = useState("dark"),
    [menu, setMenu] = useState(false),
    [search, setSearch] = useState(false),
    [query, setQuery] = useState("");
  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearch(true);
      }
      if (e.key === "Escape") {
        setSearch(false);
        setMenu(false);
      }
    };
    addEventListener("keydown", key);
    return () => removeEventListener("keydown", key);
  }, []);
  const toggleTheme = () => {
    const n = theme === "dark" ? "light" : "dark";
    setTheme(n);
    document.documentElement.dataset.theme = n;
    localStorage.setItem("sam-theme", n);
  };
  const results = useMemo(
    () =>
      items
        .filter((x) =>
          (x.title + x.kind + x.tags.join(" "))
            .toLowerCase()
            .includes(query.toLowerCase()),
        )
        .slice(0, 8),
    [query],
  );
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="nav">
        <div className="container nav-inner">
          <a className="brand" href="/">
            <span className="mark">SS</span>
            <span>Sam Suseelan</span>
          </a>
          <nav className="links" aria-label="Primary">
            {nav.map((n) => (
              <a href={hrefFor(n)} key={n}>
                {n}
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button
              className="icon-btn"
              onClick={() => setSearch(true)}
              aria-label="Open search"
            >
              ⌕
            </button>
            <button
              className="icon-btn"
              onClick={toggleTheme}
              aria-label={`Use ${theme === "dark" ? "light" : "dark"} theme`}
            >
              {theme === "dark" ? "☼" : "◐"}
            </button>
            <a className="btn cv" href="/cv">
              CV ↗
            </a>
            <button
              className="menu-btn"
              onClick={() => setMenu(!menu)}
              aria-expanded={menu}
              aria-label="Toggle navigation"
            >
              {menu ? "×" : "≡"}
            </button>
          </div>
          {menu && (
            <nav className="mobile" aria-label="Mobile">
              {nav.map((n) => (
                <a href={hrefFor(n)} key={n}>
                  {n}
                </a>
              ))}
            </nav>
          )}
        </div>
      </header>
      <main id="main">
        {route === "home" ? <Home /> : <RoutePage route={route} />}
      </main>
      <Footer />
      {search && (
        <div
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
        >
          <div className="search">
            <input
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search research, projects, publications…"
              aria-label="Search query"
            />
            <div className="results">
              {results.map((r) => (
                <a
                  className="result"
                  href={`/${r.kind.toLowerCase()}/${r.slug}`}
                  key={r.slug}
                >
                  <small className="kicker">{r.kind}</small>
                  <div>{r.title}</div>
                </a>
              ))}
              {!results.length && (
                <div className="empty">
                  No matches. Try “explainability”, “RAG” or “MLOps”.
                </div>
              )}
            </div>
            <button className="btn" onClick={() => setSearch(false)}>
              Close <span className="tag">Esc</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Home() {
  return (
    <>
      <section className="container hero">
        <div>
          <div className="eyebrow">
            <span className="dot" /> Open to AI Research, PhD & Collaboration
          </div>
          <h1>
            <span className="gradient">AI Researcher</span> &<br />
            Machine Learning Engineer
          </h1>
          <p className="lead">
            Researching and building intelligent systems through artificial
            intelligence, machine learning, deep learning, data and modern
            software engineering.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="/projects">
              Explore My Work →
            </a>
            <a className="btn" href="/blog">
              Read AI Insights
            </a>
            <a className="btn" href="/cv">
              Download CV ↓
            </a>
          </div>
        </div>
        <Network />
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            kicker="Research profile"
            title="A connected practice"
            copy="From research questions to reliable systems, each area connects rigorous inquiry with practical engineering."
          />
          <div className="grid four">
            {[
              "Current Research Focus",
              "Featured Work",
              "Latest Publication",
              "Latest Article",
            ].map((x, i) => (
              <div className="card" key={x}>
                <span className="num">0{i + 1}</span>
                <h3>{x}</h3>
                <p>
                  {
                    [
                      "Interpretable, robust and responsible intelligent systems.",
                      "Sample explainable-vision pipeline and evaluation tooling.",
                      "Demo publication records await verified CMS content.",
                      "Practical notes on evaluation, reliability and deployment.",
                    ][i]
                  }
                </p>
                <a
                  className="arrow"
                  href={hrefFor(
                    ["Research", "Projects", "Publications", "Blog"][i],
                  )}
                >
                  Explore →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionHead
            kicker="AI expertise"
            title="Depth across the AI lifecycle"
            copy="Eight interconnected disciplines, presented without inflated proficiency claims or unverified statistics."
          />
          <div className="grid four">
            {expertise.map((x, i) => (
              <div className="card" key={x}>
                <span className="num">
                  {icon(x)} &nbsp;0{i + 1}
                </span>
                <h3>{x}</h3>
                <p>
                  {
                    [
                      "Intelligent system design grounded in clear objectives.",
                      "Reproducible learning pipelines and sound evaluation.",
                      "Neural architectures, optimization and representation learning.",
                      "Grounded, evaluated and responsibly deployed generative systems.",
                      "Language understanding, retrieval and semantic systems.",
                      "Visual perception with interpretable model behaviour.",
                      "Methods that make model evidence useful to people.",
                      "Reliable training, deployment, monitoring and governance.",
                    ][i]
                  }
                </p>
                <div className="tag-row">
                  <span className="tag">Methods</span>
                  <span className="tag">Systems</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Showcase
        kind="Research"
        kicker="Research directions"
        title="Questions worth investigating"
      />
      <Showcase
        kind="Project"
        kicker="Selected engineering"
        title="Ideas made operational"
      />
      <Showcase
        kind="Publication"
        kicker="Scholarly archive"
        title="Evidence, documented"
      />
      <LabPreview />
      <Showcase
        kind="Article"
        kicker="The Intelligence Brief"
        title="Latest field notes"
      />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="kicker">Collaboration</div>
            <h2 style={{ marginTop: 12 }}>
              Let’s build something intelligent.
            </h2>
          </div>
          <div>
            <p className="lead">
              Open to AI research, machine-learning projects, academic
              collaboration and PhD opportunities.
            </p>
            <div className="cta-row">
              <a className="btn primary" href="/contact">
                Start a Conversation →
              </a>
              <a className="btn" href="/research">
                View Research Profile
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Network() {
  return (
    <div
      className="lab-visual"
      aria-label="Conceptual neural network visualization"
    >
      <div className="lab-top">
        <span>INTELLIGENT SYSTEM / 01</span>
        <span>INPUT → MODEL → OUTPUT</span>
      </div>
      <div className="network">
        <div
          className="line"
          style={{
            left: "17%",
            top: "42%",
            width: "62%",
            transform: "rotate(-7deg)",
          }}
        />
        <div
          className="line"
          style={{
            left: "17%",
            top: "42%",
            width: "54%",
            transform: "rotate(22deg)",
          }}
        />
        <span className="node" style={{ left: "10%", top: "38%" }} />
        <span className="node big" style={{ left: "43%", top: "31%" }}>
          MODEL
        </span>
        <span className="node" style={{ right: "10%", top: "25%" }} />
        <span className="node" style={{ right: "12%", bottom: "19%" }} />
        <span className="chip" style={{ left: "5%", top: "8%" }}>
          DATA
        </span>
        <span className="chip" style={{ right: "5%", top: "5%" }}>
          EXPLAIN
        </span>
        <span className="chip" style={{ left: "31%", bottom: "8%" }}>
          EVALUATE
        </span>
        <span className="chip" style={{ right: "4%", bottom: "4%" }}>
          DEPLOY
        </span>
      </div>
    </div>
  );
}
function SectionHead({
  kicker,
  title,
  copy,
}: {
  kicker: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="section-head">
      <div>
        <div className="kicker">{kicker}</div>
        <h2>{title}</h2>
      </div>
      <p className="section-copy">{copy}</p>
    </div>
  );
}
function Showcase({
  kind,
  kicker,
  title,
}: {
  kind: string;
  kicker: string;
  title: string;
}) {
  const list = items
    .filter((x) => x.kind === kind)
    .slice(0, kind === "Article" ? 4 : 3);
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          kicker={kicker}
          title={title}
          copy="All records below are visibly marked demonstration content and are ready to be replaced with verified work through the CMS."
        />
        <div className={list.length === 4 ? "grid four" : "grid"}>
          {list.map((x) => (
            <a
              className="card feature-card"
              href={`/${kind.toLowerCase()}/${x.slug}`}
              key={x.slug}
            >
              <span className="demo">Demo content</span>
              <span className="num">{x.kind.toUpperCase()}</span>
              <h3>{x.title}</h3>
              <p>{x.excerpt}</p>
              <div className="tag-row">
                {x.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="arrow">View details →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
function LabPreview() {
  const [threshold, setThreshold] = useState(70);
  return (
    <section className="section">
      <div className="container">
        <SectionHead
          kicker="Interactive AI Lab"
          title="Learn by changing the variables"
          copy="Lightweight, browser-based educational demos. No external model or paid API is connected."
        />
        <div className="lab-grid">
          <div className="card demo-panel">
            <span className="demo">Educational demo data</span>
            <span className="num">MODEL METRICS</span>
            <h3>Comparator</h3>
            {[
              ["Accuracy", 86],
              ["Precision", 82],
              ["Recall", 79],
              ["F1 score", 80],
            ].map(([n, v]) => (
              <div className="metric" key={n}>
                <span>{n}</span>
                <div className="bar">
                  <i style={{ width: `${v}%` }} />
                </div>
                <b>{v}%</b>
              </div>
            ))}
          </div>
          <div className="card demo-panel">
            <span className="demo">Educational demo data</span>
            <span className="num">CONFIDENCE</span>
            <h3>Decision threshold: {threshold}%</h3>
            <input
              aria-label="Confidence threshold"
              type="range"
              min="40"
              max="95"
              value={threshold}
              onChange={(e) => setThreshold(+e.target.value)}
              style={{ width: "100%" }}
            />
            {[
              ["Class A", 88],
              ["Class B", 64],
              ["Class C", 31],
            ].map(([n, v]) => (
              <div className="metric" key={n}>
                <span>{n}</span>
                <div className="bar">
                  <i
                    style={{
                      width: `${v}%`,
                      opacity: +v >= threshold ? 1 : 0.28,
                    }}
                  />
                </div>
                <b>{+v >= threshold ? "✓" : "—"}</b>
              </div>
            ))}
          </div>
        </div>
        <div className="cta-row">
          <a className="btn" href="/ai-lab">
            Open the full AI Lab →
          </a>
        </div>
      </div>
    </section>
  );
}

function RoutePage({ route }: { route: string }) {
  const clean = route.replace(/^\/+|\/+$/g, "");
  const parts = clean.split("/");
  const kindMap: Record<string, string> = {
    project: "Project",
    projects: "Project",
    research: "Research",
    publication: "Publication",
    publications: "Publication",
    blog: "Article",
    resource: "Resource",
    resources: "Resource",
  };
  const detail =
    parts.length > 1 ? items.find((x) => x.slug === parts[1]) : undefined;
  if (detail) return <Detail item={detail} />;
  if (clean === "ai-lab") return <FullLab />;
  if (clean === "contact") return <Contact />;
  if (clean === "about") return <About />;
  const kind = kindMap[parts[0]];
  return <Listing title={routeTitle(clean)} kind={kind} />;
}
function Listing({ title, kind }: { title: string; kind?: string }) {
  const list = kind ? items.filter((x) => x.kind === kind) : items.slice(0, 8);
  return (
    <div className="container">
      <header className="page-head">
        <div className="kicker">Sam Suseelan / {title}</div>
        <h1>{title}</h1>
        <p className="lead">
          A structured, searchable archive designed for verified content.
          Current records are demonstration entries and clearly labelled.
        </p>
        <div className="filters">
          <button className="filter">All</button>
          <button className="filter">Featured</button>
          <button className="filter">Newest</button>
          <button className="filter">Topics</button>
        </div>
      </header>
      <div className="grid" style={{ paddingBottom: 100 }}>
        {list.length ? (
          list.map((x) => (
            <a
              className="card feature-card"
              href={`/${x.kind.toLowerCase()}/${x.slug}`}
              key={x.slug}
            >
              <span className="demo">Demo content</span>
              <span className="num">{x.kind}</span>
              <h3>{x.title}</h3>
              <p>{x.excerpt}</p>
              <div className="tag-row">
                {x.tags.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <span className="arrow">Open →</span>
            </a>
          ))
        ) : (
          <div className="empty">
            No verified entries yet. Add content in Sanity Studio.
          </div>
        )}
      </div>
    </div>
  );
}
function Detail({ item }: { item: (typeof items)[number] }) {
  const sections =
    item.kind === "Project"
      ? [
          "Executive summary",
          "Problem & objective",
          "Dataset & preparation",
          "Model selection",
          "Evaluation",
          "Explainability",
          "Deployment",
          "Limitations & future work",
        ]
      : item.kind === "Research"
        ? [
            "Overview",
            "Research question",
            "Background & hypothesis",
            "Methodology",
            "Experiment design",
            "Evaluation",
            "Ethical considerations",
            "Future work",
          ]
        : item.kind === "Publication"
          ? [
              "Abstract",
              "Citation",
              "Keywords",
              "Related research",
              "References",
            ]
          : [
              "Overview",
              "Key ideas",
              "Implementation notes",
              "Limitations",
              "References",
            ];
  return (
    <div className="container">
      <header className="page-head">
        <div className="kicker">{item.kind} / Demo content</div>
        <h1>{item.title}</h1>
        <p className="lead">{item.excerpt}</p>
        <div className="tag-row">
          {item.tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      </header>
      <div className="content-layout">
        <aside className="side">
          <div className="kicker">On this page</div>
          {sections.map((s) => (
            <a href={`#${s.toLowerCase().replaceAll(" ", "-")}`} key={s}>
              {s}
            </a>
          ))}
        </aside>
        <article className="article">
          <div className="callout">
            <strong>Demo content disclosure.</strong> This record demonstrates
            the publishing structure only. It does not represent a claimed
            achievement, result, affiliation or publication by Sam Suseelan.
          </div>
          {sections.map((s, i) => (
            <section id={s.toLowerCase().replaceAll(" ", "-")} key={s}>
              <h2>{s}</h2>
              <p>
                {i === 0
                  ? item.excerpt
                  : "This editable section is ready for verified content in Sanity. It intentionally contains no invented results, institutions, employers, metrics or personal claims."}
              </p>
              {i === 2 && (
                <ul>
                  <li>Document the evidence and provenance.</li>
                  <li>Explain assumptions and known constraints.</li>
                  <li>Connect related projects, publications and resources.</li>
                </ul>
              )}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
function FullLab() {
  const [layers, setLayers] = useState(3),
    [size, setSize] = useState(4);
  return (
    <div className="container">
      <header className="page-head">
        <div className="kicker">Interactive / Educational</div>
        <h1>AI Lab</h1>
        <p className="lead">
          Explore model behaviour through transparent, local simulations. Every
          value is educational demo data.
        </p>
      </header>
      <div className="lab-grid" style={{ paddingBottom: 100 }}>
        <LabPreview />
        <div className="card demo-panel">
          <span className="demo">Educational visualization</span>
          <span className="num">ARCHITECTURE EXPLORER</span>
          <h3>Neural network shape</h3>
          <div className="controls">
            <label>
              Layers{" "}
              <input
                type="range"
                min="2"
                max="6"
                value={layers}
                onChange={(e) => setLayers(+e.target.value)}
              />
            </label>
            <label>
              Width{" "}
              <input
                type="range"
                min="2"
                max="7"
                value={size}
                onChange={(e) => setSize(+e.target.value)}
              />
            </label>
          </div>
          <div className="layers">
            {Array.from({ length: layers }).map((_, i) => (
              <div className="layer" key={i}>
                {Array.from({
                  length: Math.max(
                    2,
                    size - Math.abs(i - Math.floor(layers / 2)),
                  ),
                }).map((_, j) => (
                  <span className="neuron" key={j} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
function About() {
  return (
    <div className="container">
      <header className="page-head">
        <div className="kicker">About / Professional profile</div>
        <h1>Research with purpose. Engineering with evidence.</h1>
        <p className="lead">
          This page is prepared for Sam’s verified introduction, mission,
          research philosophy, current focus and PhD objectives.
        </p>
      </header>
      <div className="content-layout">
        <aside className="side">
          <div className="kicker">Profile</div>
          <a href="#philosophy">Philosophy</a>
          <a href="#mission">Mission</a>
          <a href="#focus">Current focus</a>
        </aside>
        <article className="article">
          <div className="callout">
            Personal biography fields are intentionally neutral until verified
            content is supplied through the CMS.
          </div>
          {[
            "Research philosophy",
            "Personal mission",
            "Current focus",
            "Long-term vision",
            "Professional values",
            "Collaboration interests",
            "PhD objective",
          ].map((x) => (
            <section id={x.toLowerCase().replaceAll(" ", "-")} key={x}>
              <h2>{x}</h2>
              <p>
                Editable profile content. Add a factual, first-person statement
                in Sanity Studio before publishing.
              </p>
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}
function Contact() {
  const [status, setStatus] = useState("");
  async function send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending…");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const json = await res.json();
    setStatus(json.message);
  }
  return (
    <div className="container">
      <header className="page-head">
        <div className="kicker">Contact / Collaboration</div>
        <h1>Start a thoughtful conversation.</h1>
        <p className="lead">
          For research, PhD, engineering, speaking or consulting opportunities.
        </p>
      </header>
      <div className="contact-grid" style={{ paddingBottom: 100 }}>
        <div className="card">
          <span className="num">DIRECT</span>
          <h3>Collaboration enquiries</h3>
          <p>
            Use the form to share context, timing and the outcome you have in
            mind. When no email provider is configured, submissions are
            validated in demo mode.
          </p>
        </div>
        <form className="card form" onSubmit={send}>
          <div className="form-row">
            <Field name="name" label="Name" />
            <Field name="email" label="Email" type="email" />
          </div>
          <div className="form-row">
            <Field name="organization" label="Organization" required={false} />
            <label className="field">
              <span>Opportunity type</span>
              <select name="opportunity">
                <option>Research collaboration</option>
                <option>PhD opportunity</option>
                <option>Machine-learning project</option>
                <option>Speaking</option>
                <option>Technical consulting</option>
                <option>General inquiry</option>
              </select>
            </label>
          </div>
          <Field name="subject" label="Subject" />
          <label className="field">
            <span>Message</span>
            <textarea name="message" required minLength={20} />
          </label>
          <input
            className="sr-only"
            name="website"
            tabIndex={-1}
            autoComplete="off"
          />
          <label>
            <input type="checkbox" name="consent" required /> I consent to this
            information being used to respond to my enquiry.
          </label>
          <button className="btn primary" type="submit">
            Send enquiry →
          </button>
          <div className="status" aria-live="polite">
            {status}
          </div>
        </form>
      </div>
    </div>
  );
}
function Field({
  name,
  label,
  type = "text",
  required = true,
}: {
  name: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input name={name} type={type} required={required} />
    </label>
  );
}
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <a className="brand" href="/">
              <span className="mark">SS</span>
              <span>Sam Suseelan</span>
            </a>
            <p className="section-copy">
              AI research, machine-learning engineering and practical
              intelligence.
            </p>
          </div>
          <div>
            <h3>Explore</h3>
            {nav.slice(0, 4).map((n) => (
              <a href={hrefFor(n)} key={n}>
                {n}
              </a>
            ))}
          </div>
          <div>
            <h3>More</h3>
            {["Experience", "Education", "Skills", "Now"].map((n) => (
              <a href={hrefFor(n)} key={n}>
                {n}
              </a>
            ))}
          </div>
          <div>
            <h3>Legal</h3>
            {["Privacy", "Terms", "Accessibility"].map((n) => (
              <a href={hrefFor(n)} key={n}>
                {n}
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sam Suseelan</span>
          <span>Designed as an intelligent digital research lab.</span>
        </div>
      </div>
    </footer>
  );
}
