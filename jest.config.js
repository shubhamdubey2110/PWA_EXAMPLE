module.exports = {
  'setupFiles': ['<rootDir>/jest.setup.js',],
  'testPathIgnorePatterns': ['<rootDir>/.next/', '<rootDir>/node_modules/',],
  'testRegex': '/*.test.js$',
  'collectCoverage': true,
  'coverageReporters': ['lcov',],
  'coverageDirectory': 'test-coverage',
  'coverageThreshold': {
    'global': {
      'branches': 0,
      'functions': 0,
      'lines': 0,
      'statements': 0,
    },
  },
  'moduleDirectories': ['node_modules', 'pages',],
}