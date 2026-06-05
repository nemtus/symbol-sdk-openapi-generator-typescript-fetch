# tests — consumer integration tests

These are **separate npm projects**, not part of the root workspace. Each has its
own `package.json` / `package-lock.json` / `node_modules` and consumes the built
SDK from `../../dist` (a `file:` dependency), so the root must be built first
(`npm run build`) before running them.

Subprojects:
- `nodejs-javascript/` — CommonJS consumer, vitest. Run: `npm ci && npm test`.
- `nodejs-typescript/` — ESM/TypeScript consumer, vitest. Run: `npm ci && npm test`.
- `browser-cdn/` — loads the CDN bundle in a real browser via Playwright. CI runs it
  inside the `mcr.microsoft.com/playwright:<version>-noble` container; keep the
  `@playwright/test` version in `package.json` in sync with that container tag.

Conventions:
- Each project has a local `vitest.config.mts` so it does NOT inherit the root
  `vitest.config.ts` (different vitest version, coverage settings). Do not remove it.
- Tests hit a **live Symbol mainnet node** (`https://symbol-main-1.nemtus.com:3001`).
  Volatile response fields drift over time, so assert their **type** rather than an
  exact value — currently the node `version` and the account-response `id`
  (a REST DB ObjectId that changes on resync). Keep other fields exact-matched.
- Use `npm ci` (not `npm install`) to match CI; `npm test` runs `vitest run`.
