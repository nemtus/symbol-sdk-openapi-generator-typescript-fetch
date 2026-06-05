# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Symbol SDK for TypeScript with OpenAPI Generator typescript-fetch. It generates a TypeScript client library for the Symbol blockchain REST API using OpenAPI specifications.

## Architecture

### Code Generation Pipeline
1. **Published OpenAPI spec** - `fetch-openapi.js` downloads the official `openapi3.yml` from a pinned
   `symbol/symbol-openapi` GitHub release and verifies its SHA-256, writing it to `openapi-spec/openapi3.yml`
   (git-ignored). This replaces the former `symbol-openapi` submodule build, removing its vulnerable dev tooling.
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
npm install
npm run openapi:fetch         # Download + SHA-256 verify the published openapi3.yml
npm run openapi:set:version   # Set OpenAPI generator version to 7.14.0
npm run openapi:generate      # Generate TypeScript code from the fetched OpenAPI spec
npm run build                 # Build CJS, ESM, and CDN bundles
```

To bump the OpenAPI spec version, edit `SPEC_VERSION` / `SPEC_SHA256` in `fetch-openapi.js`
(see the comment in that file for how to obtain the new checksum). Java is still required for
the OpenAPI Generator itself.

### Test Commands
```bash
# Unit tests (in root directory)
npm run test

# Browser CDN tests
cd tests/browser-cdn
npm install
npx playwright install chromium
npm run test

# Node.js JavaScript tests
cd tests/nodejs-javascript
npm install
npm run test

# Node.js TypeScript tests
cd tests/nodejs-typescript
npm install
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

- **CI** (`ci-nodejs.yml`) - On pull requests and pushes to `main`: builds the client, runs all test suites in parallel (unit, nodejs-javascript, nodejs-typescript, browser-cdn), plus a `dry-run-publish` and a `pinact` job that verifies every action is SHA-pinned.
- **CD** (`cd-publish-to-npm.yml`) - Manual (`workflow_dispatch`): builds, tests, then publishes to npm via **OIDC Trusted Publishing** (no `NPM_TOKEN`; provenance attached). The `publish` job is gated by the `release` GitHub Environment (manual approval).

Both workflows:
1. Build once and share `dist/` via a uniquely-named artifact (`dist-{run_id}-{run_attempt}-{java_version}-{node_version}`); test jobs download it instead of rebuilding.
2. Run tests in parallel (unit, nodejs-javascript, nodejs-typescript, browser-cdn).
3. Use `npm ci` for reproducible installs, gated by `npm audit` (fails on any vulnerability). The `.npmrc` cooldown (`min-release-age`) is disabled in CI via `NPM_CONFIG_MIN_RELEASE_AGE=0`, and npm's download cache (`~/.npm`) is cached instead of `node_modules`.
4. Pin all third-party actions to full commit SHAs (managed by `pinact` / `.pinact.yaml`); Dependabot updates npm + actions daily with a 7-day cooldown.

## Important Notes

- **DO NOT manually edit** files in `src/api/` - they are auto-generated
- The OpenAPI spec is fetched from a pinned `symbol/symbol-openapi` GitHub release via `fetch-openapi.js` (no git submodule); SHA-256 is verified before use
- Java is required for OpenAPI Generator CLI
- Custom templates in `custom-templates/` modify the default typescript-fetch generation
- Artifacts in CI/CD use unique naming to prevent conflicts between concurrent builds