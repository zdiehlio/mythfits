import { cpSync, mkdirSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const source = resolve(root, "mythfits-assets");
const target = resolve(root, "public");

for (const folder of ["brand", "icons", "hero"]) {
  const dest = resolve(target, folder);
  mkdirSync(dest, { recursive: true });
  cpSync(resolve(source, folder), dest, { recursive: true });
}

cpSync(resolve(source, "favicon.png"), resolve(target, "favicon.png"));
