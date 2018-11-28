module.exports = {
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github'
  ]
  /*
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
  */
}
