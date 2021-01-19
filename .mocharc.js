module.exports = {
  diff: true,
  extension: ['ts'],
  opts: false,
  package: './package.json',
  reporter: 'spec',
  slow: 75,
  sort: true,
  require: ['ts-node/register'],
  spec: ['tests/**/*.test.ts'],
  ui: 'bdd',
  exit: true
}