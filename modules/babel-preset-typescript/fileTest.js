const fs = require('fs')
const compiler = require('vue-template-compiler')

module.exports = (filePath) => {
  if (/\.vue$/.test(filePath)) {
    // console.log(compiler.parseComponent(fs.readFileSync(filePath, { encoding: 'utf8' })))
    const { script, scriptSetup } = compiler.parseComponent(fs.readFileSync(filePath, { encoding: 'utf8' }))

    let s = script
    if (scriptSetup && !script) {
      s = scriptSetup
    }
    return s && !!s.lang && s.lang.toLowerCase() === 'ts'
  }

  return false
}
