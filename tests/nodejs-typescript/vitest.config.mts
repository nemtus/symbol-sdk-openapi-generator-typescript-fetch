import { defineConfig } from 'vitest/config';

// Local config so this project does NOT inherit the repository root vitest.config.ts
// (which targets src/** and enables v8 coverage that is incompatible with the vitest
// version pinned here). This project only runs integration tests against a live node.
export default defineConfig({
  test: {
    environment: 'node',
    include: ['api/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts}'],
  },
});
