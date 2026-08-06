const fs = require('fs')
const { parse } = require('@vue/compiler-sfc')

module.exports = (filePath) => {
  if (/\.vue$/.test(filePath)) {
    const { descriptor } = parse(fs.readFileSync(filePath, { encoding: 'utf8' }), { filename: filePath })
    const { script, scriptSetup } = descriptor

    let s = script
    if (scriptSetup && !script) {
      s = scriptSetup
    }
    return s && !!s.lang && s.lang.toLowerCase() === 'ts'
  }

  return false
}
