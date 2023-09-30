const nextJest = require('next/jest');

const createJestConfig = nextJest({ dir: './' });

/** @type {import('jest').Config} */
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/test/setupAfterEnv.ts'],
  testEnvironment: 'jest-environment-jsdom',
  moduleDirectories: ['node_modules'],
  roots: ['<rootDir>'],
  modulePaths: ['<rootDir>'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/dist/**',
    '!**/dll/**',
    '!**/internals/**',
    '!**/coverage/**',
    '!**/configs/**',
    '!**/resources/**'
  ]
}

module.exports = createJestConfig(customJestConfig);
