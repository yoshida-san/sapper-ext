module.exports = {
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    es6: true,
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: ['standard'],
  plugins: ['svelte3'],
  ignorePatterns: [
    '/node_modules/',
    '/__sapper__/',
    '/src/node_modules/@sapper/'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  rules: {
    'no-multiple-empty-lines': ['error', { max: 2, maxBOF: 2, maxEOF: 0 }],
    'space-before-function-paren': ['error', 'never']
  },
  settings: {}
}
