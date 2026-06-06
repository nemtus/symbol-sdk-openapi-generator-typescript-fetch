# tests — consumer integration tests

## Test strategy (big picture)

| Layer | Location | Runner | Deterministic? | Purpose |
|---|---|---|---|---|
| Export smoke | `src/index.spec.ts`, `src/cdn.spec.ts` | vitest | ✅ | public surface re-export invariant, constructors, serializers |
| Behaviour (mocked transport) | `src/client.spec.ts` | vitest | ✅ | request building, model parsing, `RequiredError`, `ResponseError` via an injected fake `fetchApi` |
| Every endpoint (mocked transport) | `src/all-endpoints.spec.ts` | vitest | ✅ | introspects all `*RoutesApi` classes and asserts **every** method issues one well-formed request; auto-covers new endpoints on regeneration |
| Consumer / live | `tests/nodejs-javascript`, `tests/nodejs-typescript`, `tests/browser-cdn` | vitest / Playwright | ❌ live node | the published artifact loads and works in real runtimes (CJS / ESM / browser-CDN) |

The deterministic `src/**` specs (run by the **test-unit** and **lint** CI jobs) are
the gate. The consumer/live jobs hit an external mainnet node, so they are marked
`continue-on-error: true` (non-gating) — external flakiness must not block CI/CD.
When adding hand-written logic to the SDK, prefer the mocked-transport layer.

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
  Expected values and the relaxing of volatile fields live in one place,
  `tests/_shared/fixtures.cjs` (`expect` is injected so the same helpers work in
  vitest and Playwright). Only genuinely stable identity fields are matched exactly;
  values that drift — node `version`, account-response `id`, token holdings,
  activity buckets, importance — are asserted by type/shape. Edit the fixture, not
  the per-project copies.
- Use `npm ci` (not `npm install`) to match CI; `npm test` runs `vitest run`.

## Coverage

`vitest.config.ts` keeps coverage **enabled** but it is **not a meaningful metric
here**: the real client is generated under `src/api/**` and excluded, so coverage
effectively measures only the tiny `src/index.ts` / `src/cdn.ts` (it reads ~100%).
Do not gate on it or read into the number; assess testing by the strategy table
above, not by the coverage percentage. No coverage thresholds are configured.
