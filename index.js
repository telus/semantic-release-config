module.exports = {
  verifyConditions: [
    '@semantic-release/github',
    '@semantic-release/npm'
  ],

  analyzeCommits: [
    '@semantic-release/commit-analyzer',
    {
      'preset': 'angular',
      'parserOpts': {
        'noteKeywords': ['BREAKING CHANGE', 'BREAKING CHANGES']
    }
  ],

  generateNotes: [
    '@semantic-release/release-notes-generator'
  ],

  prepare: [
    '@semantic-release/npm'
  ],

  publish: [
    '@semantic-release/github',
    '@semantic-release/npm'
  ],

  success: [
    '@semantic-release/github'
  ],

  fail: [
    '@semantic-release/github'
  ]
}
