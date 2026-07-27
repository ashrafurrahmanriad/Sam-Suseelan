import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const contactMessages = sqliteTable("contact_messages", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  email: text("email").notNull(),
  organization: text("organization"),
  subject: text("subject").notNull(),
  collaborationType: text("collaboration_type"),
  message: text("message").notNull(),
  status: text("status").notNull().default("unread"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});

export const subscribers = sqliteTable("newsletter_subscribers", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  email: text("email").notNull().unique(),
  status: text("status").notNull().default("active"),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
});

export const posts = sqliteTable("posts", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  excerpt: text("excerpt").notNull(),
  body: text("body").notNull(),
  category: text("category").notNull(),
  status: text("status").notNull().default("draft"),
  publishedAt: integer("published_at", { mode: "timestamp_ms" }),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});

export const publicationsTable = sqliteTable("publications", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  slug: text("slug").notNull().unique(),
  title: text("title").notNull(),
  abstract: text("abstract").notNull(),
  authors: text("authors").notNull(),
  source: text("source"),
  doi: text("doi"),
  externalUrl: text("external_url"),
  status: text("status").notNull().default("pending"),
  featured: integer("featured", { mode: "boolean" }).notNull().default(false),
  createdAt: integer("created_at", { mode: "timestamp_ms" }).notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" }).notNull(),
});
