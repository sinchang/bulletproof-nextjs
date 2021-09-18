/** @type {import('@jest/types').Config.InitialOptions} */
module.exports = {
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules/',
    '<rootDir>/.next/',
    '<rootDir>/storybook-static/',
  ],
  transformIgnorePatterns: [
    '/node_modules/',
    '^.+\\.module\\.(css|sass|scss)$',
    '/storybook-static/',
  ],
  coverageReporters: ['text', 'lcov', 'json', 'clover', 'cobertura'],
  coverageDirectory: './coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/*.d.ts',
    '!**/node_modules/**',
    '!**/storybook-static/**',
  ],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': ['@swc-node/jest'],
  },
  reporters: [
    'default',
    [
      'jest-sonar',
      {
        outputDirectory: './SonarTestResult',
        outputName: 'sonar-report.xml',
      },
    ],
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
}
