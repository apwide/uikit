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
    library: {
      type: 'umd',
      name: 'uikit'
    }
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
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
              transpileOnly: true
            }
          }
        ]
      },
      {
        test: /\.(js|ts|tsx)$/i,
        exclude: /node_modules|\.vue\.ts$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['@babel/preset-env', { targets: 'defaults' }],
                '@babel/preset-typescript'
              ],
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
      },
      {
        test: /\.vue$/i,
        use: [
          {
            loader: 'vue-loader',
            options: {
              compilerOptions: {}
            }
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        sideEffects: true
      }
      // {
      //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
      //   type: 'asset'
      // }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components')
    }
  },
  performance: {
    maxAssetSize: 1000000,
    maxEntrypointSize: 1000000
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
