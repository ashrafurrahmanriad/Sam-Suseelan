import { NextResponse } from "next/server";
import { getDb } from "../../../db";
import { contactMessages } from "../../../db/schema";

const attempts = new Map<string, { count: number; at: number }>();

export async function POST(request: Request) {
  const ip = request.headers.get("cf-connecting-ip") || "local";
  const now = Date.now();
  const hit = attempts.get(ip);
  if (hit && now - hit.at < 60_000 && hit.count >= 4) {
    return NextResponse.json(
      { message: "Please wait a minute before trying again." },
      { status: 429 },
    );
  }
  attempts.set(ip, {
    count: hit && now - hit.at < 60_000 ? hit.count + 1 : 1,
    at: now,
  });

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }

  if (body.website) {
    return NextResponse.json({ message: "Thanks—your message was received." });
  }

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const subject = String(body.subject || "").trim();
  const message = String(body.message || "").trim();
  if (
    name.length < 2 ||
    name.length > 100 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    subject.length < 3 ||
    subject.length > 160 ||
    message.length < 20 ||
    message.length > 5000 ||
    !body.consent
  ) {
    return NextResponse.json(
      {
        message:
          "Please complete every required field with a valid email and a message of at least 20 characters.",
      },
      { status: 400 },
    );
  }

  await getDb().insert(contactMessages).values({
    name,
    email,
    subject,
    organization: String(body.organization || "").trim().slice(0, 160) || null,
    collaborationType: String(body.opportunity || "").trim().slice(0, 100) || null,
    message,
    createdAt: new Date(),
  });

  return NextResponse.json({
    message: "Thank you. Your enquiry has been securely received.",
  });
}
