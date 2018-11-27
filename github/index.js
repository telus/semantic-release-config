module.exports = {
  verifyConditions: [
    '@semantic-release/github'
  ],

  analyzeCommits: [
    '@semantic-release/commit-analyzer'
  ],

  generateNotes: [
    '@semantic-release/release-notes-generator'
  ],

  publish: [
    '@semantic-release/github'
  ],

  success: [
    '@semantic-release/github'
  ],

  fail: [
    '@semantic-release/github'
  ]
}
