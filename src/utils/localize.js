const path = require('path')
const fs = require('fs')

class Localize {

  constructor() {
    this.init(JSON.parse(process.env.VSCODE_NLS_CONFIG))
  }

  init({ locale }) {
    this.locale = locale

    const localName = (!locale || locale === 'en') ? '' : '.' + locale

    const localePackagePath = path.join(__dirname, `../../package.nls${localName}.json`)
    if (fs.existsSync(localePackagePath)) {
      this.localize = require(localePackagePath)
    } else {
      this.localize = require(path.join(__dirname, '../../package.nls.json'))
    }
  }

  getLocalize(key) {
    let res = this.localize[key] || key
    if (arguments.length > 1) {
      const params = Object.assign([], arguments)

      params.forEach((val, i) => {
        if (i > 0) res = res.replace(`{${i}}`, val)
      })
    }

    return res
  }
}

const localize = new Localize()

module.exports = localize