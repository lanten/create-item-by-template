const vscode = require('vscode')

function getTemplate() {
  const { workspaceFolders } = vscode.workspace
  console.log('getTemplate', vscode.workspace, workspaceFolders)
}

module.exports = {
  getTemplate
}