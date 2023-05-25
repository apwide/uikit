const { defineConfig } = require('cypress')

module.exports = defineConfig({
  baseUrl: 'http://localhost:9001',
  video: false
})
