import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  testMatch: [
    '<rootDir>/src/tests/integration/features/**/*.feature',
    '<rootDir>/src/tests/unit/**/*.test.ts',
    '<rootDir>/src/tests/unit/**/*.test.tsx',
  ], 
};

export default createJestConfig(customJestConfig);