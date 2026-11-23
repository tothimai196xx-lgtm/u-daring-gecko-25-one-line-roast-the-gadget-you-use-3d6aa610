// One-Line Roast: The Gadget You Use Every Day
// Writes a single original roast line (189 characters, inside the 200 limit)
// to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt when set).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My microwave finishes in two minutes, then beeps every thirty seconds for the rest of the evening — like it's filing a formal noise complaint against my dinner for the crime of being ready.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
console.log(`Wrote ${ROAST.length} characters to ${join(outDir, "entry.txt")}`);
