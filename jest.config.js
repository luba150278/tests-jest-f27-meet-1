export default {
  testEnvironment: 'node',
  transformIgnorePatterns: ['/node_modules/', '\\.pnp\\.[^\\/]+$'],
  moduleFileExtensions: ['js', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/dist/',
    '<rootDir>/build/',
    '<rootDir>/coverage/',
  ],
  collectCoverageFrom: [
    '**/*.js',
    '**/*.jsx',
    '!**/__tests__/**',
    '!**/*.test.js',
    '!**/*.config.js',
  ],
  coveragePathIgnorePatterns: ['<rootDir>/coverage/'],
};
