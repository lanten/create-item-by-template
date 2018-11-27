const vscode = require('vscode')
const { getTemplateConfig } = require('../utils')

function createByTemplate(inputPath) {
  const templateConfig = getTemplateConfig()
  console.log('getTemplateConfig', templateConfig)
}


module.exports = vscode.commands.registerCommand('extension.sayHello', function () {
  vscode.window.createInputBox()
  vscode.window.showInputBox({
    placeHolder: 'please input a relative path'
  }).then(inputPath => {
    // const str = `用户输入 ${inputPath}`
    // vscode.window.showInformationMessage(str)
    createByTemplate(inputPath)
  })

})