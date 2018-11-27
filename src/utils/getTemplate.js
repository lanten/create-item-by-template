const vscode = require('vscode')
const path = require('path')

function getTemplateConfig() {
  const { workspaceFolders } = vscode.workspace

  let templateConfig = require('../template/global.template')
  if (workspaceFolders && workspaceFolders.length) {
    const workspaceConfigPath = `${workspaceFolders[0].uri.fsPath}/.vscode/create-item.template.js`
    try {
      const workspaceConfig = require(workspaceConfigPath)
      if (workspaceConfig) templateConfig = workspaceConfig
    } catch (error) {
      console.warn('Workspace template configuration not found')
    }
  }
  return templateConfig
}

module.exports = {
  getTemplateConfig
}