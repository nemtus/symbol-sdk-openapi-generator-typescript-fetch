module.exports = {
  env: {
    'jest/globals': true,
  },
  plugins: ['jest'],
  settings: {
    jest: {
      version: require('jest/package.json').version,
    },
  },
  extends: ['plugin:jest/all'],
  rules: {
    'jest/require-hook': 'off',
  },
};
