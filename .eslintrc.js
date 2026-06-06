module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {},
  overrides: [
    {
      // TypeScript already resolves identifiers/types; ESLint's no-undef does not
      // understand type-only names (e.g. RequestInit, Response) and false-positives.
      files: ['*.ts', '*.mts', '*.cts'],
      rules: {
        'no-undef': 'off',
      },
    },
  ],
};
