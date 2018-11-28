const vscode = require('vscode')
const fs = require('fs')
const path = require('path')
const { localize, workspacePath, mkdirRecursive } = require('../utils')

module.exports = vscode.commands.registerCommand('extension.editTemplateWorkspace', function () {
  const vscodeConfigFolderPath = path.join(workspacePath, '.vscode')
  const workspaceConfigPath = path.join(vscodeConfigFolderPath, 'create-item.template.js')
  const templateConfigPath = path.join(__dirname, '../template/new.template.js')

  if (!fs.existsSync(vscodeConfigFolderPath)) {
    try {
      mkdirRecursive('.vscode')
    } catch (error) {
      return vscode.window.showErrorMessage(localize.getLocalize('text.error.createFolder', createFolder))
    }
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
