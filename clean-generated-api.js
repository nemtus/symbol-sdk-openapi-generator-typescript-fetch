// Remove the previously generated API surface before regenerating.
//
// `openapi-generator generate` overwrites files but never deletes ones that are no
// longer produced by the current spec. When the spec changes shape (e.g. an inline
// schema becomes a named component), the old files linger as orphans that are not
// referenced by the regenerated `index.ts` — breaking the barrel and shipping dead
// code. Wiping the generated subdirectories first makes regeneration deterministic.
//
// The hand-written guidance files (CLAUDE.md and its AGENTS.md / GEMINI.md symlinks)
// live at the src/api root and are protected by `.openapi-generator-ignore`, so they
// are intentionally left untouched here.

const fs = require('fs');
const path = require('path');

const API_DIR = path.join(__dirname, 'src', 'api');
const TARGETS = ['apis', 'models', 'index.ts', 'runtime.ts', '.openapi-generator'];

for (const target of TARGETS) {
  fs.rmSync(path.join(API_DIR, target), { recursive: true, force: true });
}
