const path = require('path')

const config = {
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  stories: ['../stories/**/*.stories.js'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-docs'
  ],
  async viteFinal(config) {
    const { mergeConfig } = require('vite')
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src'),
          '@components': path.resolve(__dirname, '../src/components'),
          // Auto-generated *.stories.js files use a raw string `template:` option (not precompiled .vue
          // SFCs), which needs Vue's runtime template compiler. The default "vue" resolution is the
          // runtime-only build (no compiler) - alias to the full build for Storybook's dev preview only.
          vue: 'vue/dist/vue.esm-bundler.js'
        }
      }
    })
  }
}

module.exports = config
