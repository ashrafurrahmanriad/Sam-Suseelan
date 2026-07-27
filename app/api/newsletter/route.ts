import { NextResponse } from "next/server";
import { getDb } from "../../../db";
import { subscribers } from "../../../db/schema";

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as { email?: unknown };
  const email = String(body.email || "").trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { message: "Enter a valid email address." },
      { status: 400 },
    );
  }
  await getDb()
    .insert(subscribers)
    .values({ email, createdAt: new Date() })
    .onConflictDoUpdate({
      target: subscribers.email,
      set: { status: "active" },
    });
  return NextResponse.json({
    message: "You’re subscribed to new research notes.",
  });
}
