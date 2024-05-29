module.exports = {
  testEnvironment: 'jsdom',
  clearMocks: true,
  moduleDirectories: ['node_modules', 'src'],
  testMatch: ['**/?(*.)+(test).[jt]s?(x)'],
  moduleFileExtensions: ['ts', 'js', 'vue'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@/components/(.*)$': '<rootDir>/src/components/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1'
  },
  transform: {
    '^.+\\.vue$': '@vue/vue2-jest',
    '^.+\\.js$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.ts$': '<rootDir>/node_modules/ts-jest'
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  collectCoverageFrom: ['src/*/**/*.{js,vue}']
  // roots: ['<rootDir>']
}
