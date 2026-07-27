import { desc } from "drizzle-orm";
import Link from "next/link";
import { getDb } from "../../db";
import { contactMessages, posts, publicationsTable, subscribers } from "../../db/schema";
import { publications } from "../../lib/content";
import { chatGPTSignOutPath, requireChatGPTUser } from "../chatgpt-auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const user = await requireChatGPTUser("/admin");
  const allowedEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  if (allowedEmail && user.email.toLowerCase() !== allowedEmail) {
    return (
      <main className="admin-shell">
        <section className="admin-panel">
          <span className="kicker">Access restricted</span>
          <h1>This account is not authorized.</h1>
          <p>Sign in with the administrator account configured for this site.</p>
          <a className="btn" href={chatGPTSignOutPath("/admin")}>Sign out</a>
        </section>
      </main>
    );
  }

  const db = getDb();
  const [messages, subscriberRows, postRows, publicationRows] = await Promise.all([
    db.select().from(contactMessages).orderBy(desc(contactMessages.createdAt)).limit(8),
    db.select().from(subscribers).limit(100),
    db.select().from(posts).limit(100),
    db.select().from(publicationsTable).limit(100),
  ]);

  return (
    <main className="admin-shell">
      <header className="admin-head">
        <div>
          <span className="kicker">Research CMS</span>
          <h1>Editorial control room</h1>
          <p>Signed in as {user.displayName}</p>
        </div>
        <div className="cta-row">
          <Link className="btn" href="/">View website</Link>
          <a className="btn" href={chatGPTSignOutPath("/")}>Sign out</a>
        </div>
      </header>

      <section className="admin-stats" aria-label="Content statistics">
        {[
          ["Messages", messages.length],
          ["Subscribers", subscriberRows.length],
          ["Database posts", postRows.length],
          ["Publications", publicationRows.length || publications.length],
        ].map(([label, value]) => (
          <article className="admin-stat" key={label}>
            <strong>{value}</strong><span>{label}</span>
          </article>
        ))}
      </section>

      <section className="admin-grid">
        <article className="admin-panel">
          <div className="panel-title">
            <div><span className="kicker">Inbox</span><h2>Collaboration enquiries</h2></div>
          </div>
          {messages.length ? messages.map((message) => (
            <div className="admin-row" key={message.id}>
              <div><strong>{message.name}</strong><span>{message.subject}</span></div>
              <a href={`mailto:${message.email}`}>Reply</a>
            </div>
          )) : <p className="muted">No enquiries yet.</p>}
        </article>
        <article className="admin-panel">
          <div className="panel-title">
            <div><span className="kicker">Publication registry</span><h2>Verification queue</h2></div>
          </div>
          {publications.map((publication) => (
            <div className="admin-row" key={publication.slug}>
              <div><strong>{publication.title}</strong><span>{publication.status}</span></div>
              <a href={`/publication/${publication.slug}`}>Review</a>
            </div>
          ))}
        </article>
      </section>

      <section className="admin-panel admin-note">
        <span className="kicker">Owner setup</span>
        <h2>Complete the identity layer</h2>
        <p>Add the professional photograph, CV, preferred contact email and exact Scholar, ORCID, ResearchGate, LinkedIn and GitHub links before public launch.</p>
      </section>
    </main>
  );
}
