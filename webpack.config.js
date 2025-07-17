// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const config = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    filename: 'uikit.js',
    path: path.resolve('.', 'dist'),
    library: '',
    libraryTarget: 'commonjs'
  },
  plugins: [
    // Add your plugins here
    // Learn more about plugins from https://webpack.js.org/configuration/plugins/
    new MiniCssExtractPlugin({
      filename: 'bundle.css'
    }),
    new VueLoaderPlugin()
  ],
  externals: {
    vue: 'vue'
  },
  // optimization: {
  //   splitChunks: {
  //     cacheGroups: {
  //       default: false,
  //       styles: {
  //         enforce: true,
  //         name(module) {
  //           if (module.context && module.context.match(/[\\/](.*)\/(MarkdownEditor|easymde)\/(.*)/i)) {
  //             return 'easymde'
  //           } else {
  //             return 'bundle'
  //           }
  //         },
  //         reuseExistingChunk: false,
  //         chunks: 'all',
  //         test(module) {
  //           return module.type === 'css/mini-extract'
  //         }
  //       },
  //       scripts: {
  //         minSize: 999999999999999999,
  //         enforce: true,
  //         reuseExistingChunk: true,
  //         chunks: 'all',
  //         test(module) {
  //           return module.type !== 'css/mini-extract'
  //         }
  //       }
  //     }
  //   }
  // },
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/i,
        use: [
          // {
          //   loader: 'ts-loader',
          //   options: {
          //     appendTsSuffixTo: [/\.vue$/]
          //   }
          // }
          {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }], require('./modules/babel-preset-typescript')],
              plugins: [
                '@babel/plugin-proposal-optional-chaining',
                '@babel/plugin-proposal-object-rest-spread',
                '@babel/plugin-proposal-numeric-separator',
                '@babel/plugin-proposal-nullish-coalescing-operator'
                // ['@babel/plugin-proposal-decorators', { legacy: true }],
                // ['@babel/plugin-proposal-class-properties', { loose: true }]
              ],
              babelrc: false
            }
          }
        ],
        exclude: ['/node_modules/']
      },
      {
        test: /\.vue$/i,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        sideEffects: true
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        loader: ['url-loader']
      }

      // Add your rules for custom modules here
      // Learn more about loaders from https://webpack.js.org/loaders/
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components')
    }
  }
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production'
  } else {
    config.mode = 'development'
  }
  return config
}
