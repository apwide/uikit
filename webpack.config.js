// Generated using webpack-cli https://github.com/webpack/webpack-cli

const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { WebpackConfiguration } = require('webpack-cli')

// eslint-disable-next-line @typescript-eslint/no-unused-vars
module.exports = (env, argv) => {
  return {
    mode: env.production ? 'production' : 'development',
    entry: './src/index.ts',
    devtool: 'source-map',
    output: {
      filename: 'uikit.js',
      path: path.resolve('.', 'dist'),
      library: {
        name: 'uikit',
        type: 'umd'
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
          test: /\.(js|ts)$/i,
          include: path.resolve(__dirname, 'src'),
          use: [
            {
              loader: 'swc-loader',
              options: {
                minify: env.production,
                jsc: {
                  parser: {
                    syntax: 'typescript'
                  }
                },
                env: {
                  targets: 'defaults'
                }
              }
            }
          ],
          exclude: ['/node_modules/']
        },
        {
          test: /\.vue$/i,
          include: path.resolve(__dirname, 'src'),
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
        }
        // {
        //   test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        //   type: 'asset'
        // }

        // Add your rules for custom modules here
        // Learn more about loaders from https://webpack.js.org/loaders/
      ]
    },
    resolve: {
      extensions: ['.ts', '.js', '.vue'],
      alias: {
        // 'vue$': 'vue/dist/vue.esm.js',
        '@': path.resolve(__dirname, './src'),
        '@components': path.resolve(__dirname, './src/components')
      }
    }
  }
}
