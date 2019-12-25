const vscode = require('vscode')
const path = require('path')

module.exports = vscode.commands.registerCommand('extension.editTemplateGlobal', function() {
  vscode.workspace.openTextDocument(path.join(__dirname, '../template/global.template.js')).then(doc => {
    vscode.window.showTextDocument(doc)
  })
})
