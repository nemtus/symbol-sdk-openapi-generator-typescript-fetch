# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Symbol SDK for TypeScript with OpenAPI Generator typescript-fetch. It generates a TypeScript client library for the Symbol blockchain REST API using OpenAPI specifications.

## Architecture

### Code Generation Pipeline
1. **symbol-openapi submodule** (`symbol-openapi/`) - Contains the OpenAPI specification source
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
# Clone with submodules
git clone --recursive git@github.com:nemtus/symbol-sdk-openapi-generator-typescript-fetch.git

# Update submodules to latest
git submodule update --init --recursive --remote
```

### Build Commands
```bash
# Build OpenAPI specification (run in symbol-openapi directory)
cd symbol-openapi
npm install
npm run build

# Generate API client code (run in root directory)
cd ..
npm install
npm run openapi:set:version  # Set OpenAPI generator version to 7.14.0
npm run openapi:generate      # Generate TypeScript code from OpenAPI spec
npm run build                 # Build CJS, ESM, and CDN bundles
```

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

### CI/CD Workflows

The project uses GitHub Actions with parallel test execution:
- **CI** (`ci-nodejs.yml`) - Builds and tests across multiple Node.js and Java versions
- **CD** (`cd-publish-to-npm.yml`) - Publishes to npm registry

Both workflows:
1. Build the project and upload artifacts with unique names (`dist-{run_id}-{run_attempt}-{java_version}-{node_version}`)
2. Run tests in parallel (unit, nodejs-javascript, nodejs-typescript, browser-cdn)
3. Use artifact caching to avoid rebuilding for each test job

## Important Notes

- **DO NOT manually edit** files in `src/api/` - they are auto-generated
- The project uses the symbol-openapi repository as a git submodule
- Java is required for OpenAPI Generator CLI
- Custom templates in `custom-templates/` modify the default typescript-fetch generation
- Artifacts in CI/CD use unique naming to prevent conflicts between concurrent builds