const { declare } = require('@babel/helper-plugin-utils')
const pluginTransformTypeScript = require('@babel/plugin-transform-typescript')
const presetTypeScript = require('@babel/preset-typescript')
const fileTest = require('./fileTest')

module.exports = declare((api, options = {}) => {
  api.assertVersion(7)

  return {
    presets: [[presetTypeScript, options]],
    overrides: [
      {
        test: fileTest,
        plugins: [[pluginTransformTypeScript, options]]
      }
    ]
  }
})
