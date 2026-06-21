# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Symbol SDK for TypeScript with OpenAPI Generator typescript-fetch. It generates a TypeScript client library for the Symbol blockchain REST API using OpenAPI specifications.

## Architecture

### Code Generation Pipeline
1. **Published OpenAPI spec** - The spec ships as the npm package
   [`@nemtus/symbol-openapi`](https://www.npmjs.com/package/@nemtus/symbol-openapi), a devDependency.
   `npm ci` installs the bundled `openapi3.yml` to `node_modules/@nemtus/symbol-openapi/openapi3.yml`,
   which `openapi:generate` consumes. The package is built and published from the
   `nemtus/symbol` mirror fork (`dev` branch, `openapi/`); building it locally is not needed here, so
   the vulnerable redocly/postman build tooling never enters this repo. Pinning + integrity are handled
   by `package-lock.json` and the `npm audit` gate (replacing the former `fetch-openapi.js` download +
   SHA-256 verification and the older `symbol-openapi` submodule build).
2. **OpenAPI Generator** - Uses typescript-fetch generator with custom templates (`custom-templates/`)
3. **Generated API code** (`src/api/`) - Auto-generated, DO NOT edit manually
4. **Build outputs** (`dist/`) - Contains CJS, ESM, and CDN bundles

### Key Components
- **API Routes** (`src/api/apis/`) - Generated API client classes for each endpoint group
- **Models** (`src/api/models/`) - Generated TypeScript interfaces and DTOs
- **Custom Templates** (`custom-templates/`) - Mustache templates for customizing code generation
- **Test Suites** (`tests/`) - Separate test directories for Node.js JavaScript, TypeScript, and browser CDN

## Development Commands

### Initial Setup
```bash
git clone git@github.com:nemtus/symbol-sdk-openapi-generator-typescript-fetch.git
```

### Build Commands
```bash
# Generate API client code (run in root directory)
npm ci                        # Installs @nemtus/symbol-openapi (the spec) into node_modules
npm run openapi:set:version   # Set OpenAPI generator version to 7.14.0
npm run openapi:generate      # Generate TypeScript code from node_modules/@nemtus/symbol-openapi/openapi3.yml
npm run build                 # Build CJS, ESM, and CDN bundles
```

To bump the OpenAPI spec, bump the `@nemtus/symbol-openapi` version in `package.json` (or merge the
Dependabot PR) and regenerate. Java is still required for the OpenAPI Generator itself.

### Test Commands
```bash
# Unit tests (in root directory)
npm run test

# Browser CDN tests
cd tests/browser-cdn
npm ci
npx playwright install chromium
npm run test

# Node.js JavaScript tests
cd tests/nodejs-javascript
npm ci
npm run test

# Node.js TypeScript tests
cd tests/nodejs-typescript
npm ci
npm run test
```

### Quality Checks (lint / format / type-check)
```bash
npm run format:check   # Prettier check (code only; src/api & build outputs ignored)
npm run format         # Prettier write
npm run lint           # ESLint
npm run lint:fix       # ESLint --fix
npm run type:check     # tsc --noEmit
```
The `lint` CI job runs `format:check`, `lint`, and `type:check`. Generated `src/api`
and build outputs are excluded via `.eslintignore` / `.prettierignore`. When the
Claude Code hooks (`.claude/`) are enabled, edited files are auto-formatted and these
checks run on Stop.

### CI/CD Workflows

The project uses GitHub Actions. Both workflows run on a single unified runtime: **Java 21** and **Node.js 24.x**.

- **CI** (`ci-nodejs.yml`) - On pull requests and pushes to `main`: builds the client, runs all test suites in parallel (unit, nodejs-javascript, nodejs-typescript, browser-cdn), plus a `dry-run-publish` and a `pinact` job that verifies every action is SHA-pinned. The `build` job wraps `npm ci` with **Socket Firewall Free** (`sfw`, `SocketDev/action` in `firewall-free` mode — no account/token) to block confirmed-malicious packages, including transitive deps, at install time — coverage `npm audit` (known CVEs only) does not provide.
- **CD** (`cd-publish-to-npm.yml`) - Triggered by pushing a `vX.Y.Z` tag (use `npm run release:patch|minor|major`, which runs `npm version` + `git push --follow-tags`); also runnable manually via `workflow_dispatch`. Builds, tests, then publishes to npm via **OIDC Trusted Publishing** (no `NPM_TOKEN`; provenance attached). The `publish` job is gated by the `release` GitHub Environment (manual approval), so a tag push starts the pipeline but still waits for approval before publishing.

Both workflows:
1. Build once and share `dist/` via a uniquely-named artifact (`dist-{run_id}-{run_attempt}-{java_version}-{node_version}`); test jobs download it instead of rebuilding.
2. Run tests in parallel (unit, nodejs-javascript, nodejs-typescript, browser-cdn).
3. Use `npm ci` for reproducible installs, gated by `npm audit` (fails on any vulnerability). `npm ci` installs lockfile-pinned versions regardless of age, so the `.npmrc` cooldown (`min-release-age`) does not gate it; npm's download cache (`~/.npm`) is cached instead of `node_modules`.
4. Pin all third-party actions to full commit SHAs (managed by `pinact` / `.pinact.yaml`); Dependabot updates npm + actions daily with a 7-day cooldown.

### Releasing

One action publishes a new version. From a clean tree on the release branch (usually `main`):

```bash
npm run release:patch   # 0.2.1 -> 0.2.2   (bug fixes)
npm run release:minor   # 0.2.1 -> 0.3.0   (backward-compatible features)
npm run release:major   # 0.2.1 -> 1.0.0   (breaking changes)
```

Each script runs `npm version <type>` (bumps `package.json` + `package-lock.json`,
commits, and creates a `vX.Y.Z` tag) then `git push --follow-tags`. The pushed tag
triggers the CD workflow (`on: push: tags: ['v*']`), which builds, tests, and then
waits on the `release` Environment approval before publishing. `npm version`
requires a clean working tree, so commit or stash first.

## Important Notes

- **DO NOT manually edit** files in `src/api/` - they are auto-generated
- The OpenAPI spec comes from the `@nemtus/symbol-openapi` npm package (a devDependency), built and published from the `nemtus/symbol` mirror fork (`dev` branch, `openapi/`); it is pinned via `package-lock.json` and gated by `npm audit` (no HTTP fetch, no git submodule)
- Java is required for OpenAPI Generator CLI
- Custom templates in `custom-templates/` modify the default typescript-fetch generation
- Artifacts in CI/CD use unique naming to prevent conflicts between concurrent builds
- **Socket supply-chain layer** (free for this public/OSS repo): `socket.yml` configures the Socket GitHub App, which comments on dependency-changing PRs with 70+ risk types (malware, install scripts, typosquats, etc.). It only activates after an org owner installs the Socket App via the GitHub Marketplace. In CI, Socket Firewall Free additionally blocks malicious installs (see the CI section). Both complement — not replace — `npm audit`, `.npmrc` (`min-release-age` / `ignore-scripts`), and pinact.

## AI assistant configuration

This repo is set up so multiple coding agents share the same project instructions.

- **Instructions are single-sourced in `CLAUDE.md`.** `AGENTS.md` (OpenAI Codex CLI)
  and `GEMINI.md` (Gemini CLI) are symlinks to `CLAUDE.md` at each level (root,
  `src/api/`, `tests/`). Edit `CLAUDE.md`; the others follow automatically.
- **Claude Code** (`.claude/settings.json`): `permissions` deny/ask rules plus hooks —
  a PreToolUse guard that blocks catastrophic/RCE shell commands (`.claude/hooks/guard-bash.mjs`),
  a PostToolUse Prettier/ESLint auto-format, and a Stop-time `type:check` + `lint`.
- **Gemini CLI** (`.gemini/settings.json`): `tools.exclude` blocks dangerous shell
  commands (`sudo`, `rm -rf /`, `rm -rf ~`, `mkfs`, `dd if=`, `chmod 777`). This is
  coarse prefix matching, so it is weaker than the Claude guard (e.g. it won't catch
  `curl … | sh`). You can additionally enable a container sandbox with
  `"tools": { "sandbox": "docker" }` if Docker/Podman is available. Settings keys are
  version-sensitive (current schema is nested under `tools`/`context`).
- **Codex CLI**: command safety is enforced by Codex's built-in OS sandbox and
  `approval_policy`, configured in the user-global `~/.codex/config.toml` (there is no
  committed per-project deny-list, so none is added here).
- **Claude Code-only**: the precise command guard, edit-time auto-format, and Stop-time
  checks have no committed-in-repo equivalent for Codex or Gemini and are intentionally
  not reimplemented for them.