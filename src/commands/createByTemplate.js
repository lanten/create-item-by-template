const vscode = require('vscode')
const { getTemplate } = require('../utils')

function createByTemplate(inputPath) {
  console.log(getTemplate)
  const template = getTemplate()
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