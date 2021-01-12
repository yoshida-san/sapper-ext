module.exports = {
  verbose: true,
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svelte$': 'jest-transform-svelte'
  },
  moduleFileExtensions: ['js', 'svelte']
}
