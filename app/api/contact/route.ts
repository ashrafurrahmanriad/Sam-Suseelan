import { NextResponse } from "next/server";
const attempts = new Map<string, { count: number; at: number }>();
export async function POST(request: Request) {
  const ip = request.headers.get("cf-connecting-ip") || "local";
  const now = Date.now();
  const hit = attempts.get(ip);
  if (hit && now - hit.at < 60000 && hit.count >= 4)
    return NextResponse.json(
      { message: "Please wait a minute before trying again." },
      { status: 429 },
    );
  attempts.set(ip, {
    count: hit && now - hit.at < 60000 ? hit.count + 1 : 1,
    at: now,
  });
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request." }, { status: 400 });
  }
  if (body.website)
    return NextResponse.json({
      message: "Thanks — your message was received.",
    });
  const email = String(body.email || "");
  const message = String(body.message || "").trim();
  if (
    !String(body.name || "").trim() ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    message.length < 20 ||
    !body.consent
  )
    return NextResponse.json(
      {
        message:
          "Please complete all required fields with a valid email and a message of at least 20 characters.",
      },
      { status: 400 },
    );
  if (!process.env.RESEND_API_KEY)
    return NextResponse.json({
      message:
        "Demo mode: validation passed. Configure the contact provider to deliver messages.",
    });
  return NextResponse.json({
    message:
      "Your message is ready for delivery. Provider integration is configured separately.",
  });
}
