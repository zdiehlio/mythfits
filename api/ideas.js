import { Resend } from "resend";
import { MAX_BODY, validateIdea } from "../server/validate-idea.js";

const resend = new Resend(process.env.RESEND_API_KEY);

function reply(status, body) {
  return Response.json(body, { status });
}

export async function POST(request) {
  if (Number(request.headers.get("content-length") || 0) > MAX_BODY) {
    return reply(413, { ok: false, error: "That note is too long to send." });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return reply(400, { ok: false, error: "We could not read that submission." });
  }

  if (String(body?.company || "").trim()) return reply(201, { ok: true });

  const { idea, errors } = validateIdea(body ?? {});
  if (Object.keys(errors).length) return reply(400, { ok: false, errors });

  const { error } = await resend.emails.send({
    from: process.env.IDEAS_FROM,
    to: process.env.IDEAS_TO.split(",").map((address) => address.trim()),
    replyTo: idea.email,
    subject: `New idea from ${idea.name}`,
    text: [
      `Name: ${idea.name}`,
      `Email: ${idea.email}`,
      "",
      "What's their idea, or the problem they want to solve:",
      idea.idea,
      "",
      "Who it could help, and how:",
      idea.helps,
      "",
      "What they have tried or learned so far:",
      idea.tried || "Not shared",
      "",
      "What they would bring, and where they need help:",
      idea.contribute,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend failed to send idea", error);
    return reply(502, { ok: false, error: "We could not send your idea. Please try again." });
  }

  return reply(201, { ok: true });
}
