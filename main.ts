// Pigeon Pitch, One Line — entrypoint.
//
// Writes the one-line elevator pitch a city pigeon gives investors for
// its startup to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt
// when set, for local verification) and prints the exact line to stdout.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PITCH =
  "I'm not asking for seed funding — I'm asking for seed. Literal birdseed. $2M turns every statue downtown into a billboard, and every crumb into a dividend.";

// The gate: one line, 1-200 characters, not only whitespace. Fail loudly
// here rather than shipping an entry the scorer would refuse.
if (!PITCH.trim() || PITCH.includes("\n") || PITCH.length > 200) {
  throw new Error(`invalid pitch: ${PITCH.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PITCH, "utf8");
console.log(PITCH);
