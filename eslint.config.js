// Flat ESLint config (ESLint 9). Replaces the legacy .eslintrc.js + .eslintignore
// stack, which was built on eslint-config-standard (ESLint-8 only, no flat config).
// Modern minimal setup: @eslint/js recommended for all files, typescript-eslint
// recommended scoped to TypeScript files, and eslint-config-prettier last so Prettier
// solely owns formatting. Generated code (src/api) and build outputs are not linted
// (mirrors the old .eslintignore).
const js = require('@eslint/js');
const tseslint = require('typescript-eslint');
const prettier = require('eslint-config-prettier');
const globals = require('globals');

module.exports = tseslint.config(
  {
    ignores: [
      'node_modules/**',
      'dist/**',
      'lib/**',
      'cdn/**',
      'coverage/**',
      'openapi-spec/**',
      'src/api/**',
      'custom-templates/**',
      'tests/*/node_modules/**',
      '**/*.min.js',
    ],
  },
  {
    languageOptions: {
      globals: { ...globals.node, ...globals.browser },
    },
  },
  js.configs.recommended,
  {
    files: ['**/*.{ts,mts,cts}'],
    extends: [...tseslint.configs.recommended],
    rules: {
      // TypeScript already resolves identifiers/types; ESLint's no-undef does not
      // understand type-only names (e.g. RequestInit, Response) and false-positives.
      'no-undef': 'off',
      // The generated client and its mocked-transport tests use `any` deliberately
      // (proxy stand-ins, window globals, fetch shims) — TypeScript still type-checks.
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  prettier,
);
