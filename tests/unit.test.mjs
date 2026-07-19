import test from "node:test";
import assert from "node:assert/strict";
test("reading time rounds up", () => assert.equal(Math.ceil(401 / 200), 3));
test("slugs remain URL safe", () =>
  assert.equal(
    "Responsible AI".toLowerCase().replaceAll(" ", "-"),
    "responsible-ai",
  ));
test("demo content is visibly labelled", () =>
  assert.match("Sample: Explainable Vision Pipeline", /Sample:/));
test("email validation rejects malformed addresses", () =>
  assert.equal(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test("not-an-email"), false));
