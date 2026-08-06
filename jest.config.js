module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  setupFilesAfterEnv: ['<rootDir>/tests/setup.js'],
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'js', 'vue'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': '<rootDir>/tests/mocks/styleMock.js',
    '@/(.*)$': '<rootDir>/src/$1',
    '@/components/(.*)$': '<rootDir>/src/components/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1'
  },
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: ['src/*/**/*.{js,vue}']
  // roots: ['<rootDir>']
}
