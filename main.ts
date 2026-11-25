import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const line =
  "We spent an hour in a meeting about an email, then sent an email about the meeting \u2014 and neither one said anything.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(`wrote ${line.length} characters to entry.txt`);
