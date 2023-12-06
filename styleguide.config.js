const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const config = require('./webpack.config')

module.exports = {
  dangerouslyUpdateWebpackConfig(webpackConfig, env) {
    console.log(webpackConfig)
    webpackConfig.externals = {}
    return webpackConfig
  },
  components: 'src/components/**/[A-Z]*.vue',

  skipComponentsWithoutExample: true,
  ribbon: {
    url: 'https://github.com/apwide/uikit',
    text: 'See me on github'
  },
  previewDelay: 2000,
  pagePerSection: true
  // sections: [
  //   {
  //     name: 'Components',
  //     components: 'src/components/**/[A-Z]*.vue',
  //     sectionDepth: 1
  //   }
  // ]
  //
  // webpackConfig: {
  //   module: {
  //     rules: [
  //       // Vue loader
  //       {
  //         test: /\.ts?$/,
  //         exclude: /node_modules/,
  //         use: {
  //           loader: 'swc-loader',
  //           options: {
  //             jsc: {
  //               parser: {
  //                 syntax: 'typescript'
  //               }
  //             }
  //           }
  //         }
  //       },
  //       {
  //         test: /\.vue$/,
  //         exclude: /node_modules/,
  //         use: 'vue-loader'
  //       },
  //       {
  //         test: /\.css$/,
  //         use: ['css-loader']
  //       }
  //     ]
  //   },
  //   plugins: [new VueLoaderPlugin()],
  //   resolve: {
  //     extensions: ['.ts', '.js', '.vue'],
  //     alias: {
  //       // 'vue$': 'vue/dist/vue.esm.js',
  //       '@': path.resolve(__dirname, './src'),
  //       '@components': path.resolve(__dirname, './src/components')
  //     }
  //   }
  // }
}
