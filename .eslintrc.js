const path = require('path')
module.exports = {
  root: true,
  env: {
    browser: true
  },
  plugins: ['@typescript-eslint', 'import', 'jest'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/essential',
    '@vue/standard',
    'standard',
    '@vue/typescript',
    'prettier'
  ],
  rules: {
    'multiline-ternary': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'no-console': 'error',
    'max-len': [
      'error',
      {
        code: 160,
        ignoreUrls: true,
        ignorePattern: '(^\\s*background:\\surl.*|^import\\s.+\\sfrom\\s.+$)'
      }
    ],
    'import/order': [
      'error',
      {
        'pathGroups': [
          { pattern: '@/**', group: 'sibling', position: 'before' },
          { pattern: '@apw/**', group: 'sibling', position: 'before' },
          { pattern: '@server/**', group: 'sibling', position: 'before' },
          { pattern: '@cloud/**', group: 'sibling', position: 'before' },
          { pattern: '@platform/**', group: 'sibling', position: 'before' },
          { pattern: '@product/**', group: 'sibling', position: 'before' }
        ],
        'newlines-between': 'never'
      }
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    'vue/no-unused-components': ['error'],
    'vue/no-reserved-component-names': ['off'],
    'vue/multi-word-component-names': ['off']
  },

  overrides: [
    {
      files: ['tests/**/*.[j|t]s'],
      env: {
        'jest/globals': true
      },
      rules: {
        '@typescript-eslint/no-empty-function': 'off'
      }
    },
    {
      files: ['**/Icon/*.js', '**/Icon/aui/*.js', '**/Avatar/Icons/*.vue', '**/Avatar.vue'],
      rules: {
        'max-len': 'off'
      }
    },
    {
      files: ['stories/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
        'import/extensions': 'off',
        'no-console': 'off'
      }
    }
  ],

  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },

  globals: {
    AP: false,
    APW: false,
    Vue: false,
    ApwVue: false,
    AJS: false,
    moment: false,
    vis: false,
    _: false,
    $: false,
    JIRA: true,
    alasql: true,
    SwaggerUIBundle: false,
    SwaggerUIStandalonePreset: false
  }
}
