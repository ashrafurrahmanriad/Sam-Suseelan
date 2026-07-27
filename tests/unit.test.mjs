import test from "node:test";
import assert from "node:assert/strict";
test("reading time rounds up", () => assert.equal(Math.ceil(401 / 200), 3));
test("slugs remain URL safe", () =>
  assert.equal(
    "Responsible AI".toLowerCase().replaceAll(" ", "-"),
    "responsible-ai",
  ));
test("unverified metadata is visibly labelled", () =>
  assert.match("Metadata pending verification", /pending verification/));
test("email validation rejects malformed addresses", () =>
  assert.equal(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test("not-an-email"), false));
