import { randomUUID } from "node:crypto";
import { existsSync, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { MAX_BODY, validateIdea } from "./validate-idea.js";

const hits = new Map();

function readBody(req) {
  return new Promise((resolveBody, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (chunk) => {
      size += chunk.length;
      if (size > MAX_BODY) {
        reject(Object.assign(new Error("That note is too long to send."), { status: 413 }));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on("end", () => resolveBody(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function limited(ip) {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((time) => now - time < 60_000);
  if (recent.length >= 8) return true;
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

function attach(server) {
  server.middlewares.use(async (req, res, next) => {
    const url = req.url?.split("?")[0];
    if (url !== "/api/ideas") return next();

    res.setHeader("Content-Type", "application/json; charset=utf-8");

    if (req.method !== "POST") {
      res.statusCode = 405;
      res.setHeader("Allow", "POST");
      res.end(JSON.stringify({ ok: false, error: "Method not allowed." }));
      return;
    }

    const ip = req.socket?.remoteAddress || "local";
    if (limited(ip)) {
      res.statusCode = 429;
      res.end(JSON.stringify({ ok: false, error: "Please wait a moment, then try again." }));
      return;
    }

    try {
      const raw = await readBody(req);
      const body = JSON.parse(raw || "{}");

      if (String(body.company || "").trim()) {
        res.statusCode = 201;
        res.end(JSON.stringify({ ok: true }));
        return;
      }

      const { idea, errors } = validateIdea(body);
      if (Object.keys(errors).length) {
        res.statusCode = 400;
        res.end(JSON.stringify({ ok: false, errors }));
        return;
      }

      const file = resolve(process.cwd(), "data", "submissions.json");
      mkdirSync(resolve(process.cwd(), "data"), { recursive: true });
      const existing = existsSync(file) ? JSON.parse(readFileSync(file, "utf8")) : [];
      const list = Array.isArray(existing) ? existing : [];
      list.push({
        id: randomUUID(),
        receivedAt: new Date().toISOString(),
        ...idea,
      });
      writeFileSync(file, JSON.stringify(list, null, 2));

      res.statusCode = 201;
      res.end(JSON.stringify({ ok: true }));
    } catch (error) {
      const status = error.status || (error instanceof SyntaxError ? 400 : 500);
      res.statusCode = status;
      res.end(
        JSON.stringify({
          ok: false,
          error:
            status === 400
              ? "We could not read that submission."
              : error.status
                ? error.message
                : "We could not save your idea. Please try again.",
        }),
      );
    }
  });
}

export function ideasApi() {
  return {
    name: "mythfits-ideas-api",
    configureServer: attach,
    configurePreviewServer: attach,
  };
}
