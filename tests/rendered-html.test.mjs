import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const componentUrl = new URL("../components/PortfolioApp.tsx", import.meta.url);
const contentUrl = new URL("../lib/content.ts", import.meta.url);
const schemaUrl = new URL("../db/schema.ts", import.meta.url);

test("homepage source contains the finished aviation research identity", async () => {
  const source = await readFile(componentUrl, "utf8");
  assert.match(source, /Sam Suseelan/);
  assert.match(source, /Intelligence for/);
  assert.match(source, /safer aviation/);
  assert.match(source, /Skip to content/);
  assert.match(source, /prefers-reduced-motion|newsletter/i);
});

test("verified publication inventory is present without invented citations", async () => {
  const source = await readFile(contentUrl, "utf8");
  assert.match(source, /AI-Based Predictive Maintenance for General Aviation Aircraft/);
  assert.match(source, /AI-Based GNSS Spoofing and GPS Interference Detection/);
  assert.match(source, /Metadata pending verification/);
  assert.doesNotMatch(source, /citationCount|citation count/i);
});

test("durable contact, newsletter and editorial tables are defined", async () => {
  const source = await readFile(schemaUrl, "utf8");
  assert.match(source, /contact_messages/);
  assert.match(source, /newsletter_subscribers/);
  assert.match(source, /publications/);
  assert.match(source, /posts/);
});
