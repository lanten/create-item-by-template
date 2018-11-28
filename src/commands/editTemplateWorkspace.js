const vscode = require('vscode')
const fs = require('fs')
const path = require('path')
const { getTemplateConfig, localize, workspacePath, syncExec } = require('../utils')

module.exports = vscode.commands.registerCommand('extension.editTemplateWorkspace', function () {
  const vscodeConfigFolderPath = path.join(workspacePath, '.vscode')
  const workspaceConfigPath = path.join(vscodeConfigFolderPath, 'create-item.template.js')
  const templateConfigPath = path.join(__dirname, '../template/new.template.js')
  // console.warn(vscodeConfigFolderPath)
  if (!fs.existsSync(vscodeConfigFolderPath)) {
    const createFolder = syncExec(`mkdir -p ${vscodeConfigFolderPath}`)
    if (createFolder) return vscode.window.showErrorMessage('text.error.createFolder', createFolder)
  }

  if (!fs.existsSync(workspaceConfigPath)) {
    readable = fs.createReadStream(templateConfigPath);
    writable = fs.createWriteStream(workspaceConfigPath);
    readable.pipe(writable);
  }

  vscode.workspace.openTextDocument(workspaceConfigPath).then(doc => {
    vscode.window.showTextDocument(doc)
  })
})
