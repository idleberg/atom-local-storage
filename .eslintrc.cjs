/* eslint-disable */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
  env: {
    'node': true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:json/recommended'
  ],
  rules: {
    // temporary
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-explicit-any': 'off'
  },
  ignorePatterns: [
    'lib/'
  ]
};
