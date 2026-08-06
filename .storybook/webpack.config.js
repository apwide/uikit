const path = require('path')

const resolve = {
  extensions: ['.ts', '.js', '.vue', '.json'],
  symlinks: false,
  alias: {
    '@': path.resolve(__dirname, '../src'),
    '@components': path.resolve(__dirname, '../src/components'),
    // Auto-generated *.stories.js files use a raw string `template:` option (not precompiled .vue
    // SFCs), which needs Vue's runtime template compiler. The default "vue" resolution is the
    // runtime-only build (no compiler) - alias to the full build for Storybook's dev preview only.
    vue$: require.resolve('vue/dist/vue.esm-bundler.js')
  }
}

module.exports = async ({ config }) => {
  config.module.rules.unshift({
    test: /\.ts$/,
    use: [
      {
        loader: 'babel-loader',
        options: {
          presets: [['@babel/preset-env', { targets: 'defaults' }], require('../modules/babel-preset-typescript')],
          plugins: [
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-numeric-separator',
            '@babel/plugin-proposal-nullish-coalescing-operator'
          ],
          babelrc: false
        }
      }
    ]
  })
  const imageRule = config.module.rules.find((rule) => 'image.svg'.match(rule.test))
  imageRule.exclude = /\.svg$/

  config.module.rules.push({
    test: /\.svg$/,
    exclude: [path.resolve(__dirname, './stories/assets/images/')],
    use: [
      'vue-loader',
      {
        loader: 'vue-svg-loader',
        options: {
          svgo: {
            plugins: [{ removeDimensions: true }, { removeViewBox: false }]
          }
        }
      }
    ]
  })
  config.module.rules.push({
    test: /\.(png|jpg|gif|svg)$/,
    include: [path.resolve(__dirname, './stories/assets/images/')],
    use: [
      {
        loader: 'file-loader',
        options: {}
      }
    ]
  })

  config.resolve = {
    ...resolve,
    alias: { ...resolve.alias }
  }
  return config
}
