import fs from 'fs'
import path from 'path'
import vscode from 'vscode'

import {
  WORKSPACE_PATH,
  TEMPLATE_CONFIG_FILE_NAME,
  DEFAULT_TEMPLATE_FILE_PATH,
  mkdirRecursive,
  log,
  localize,
} from '../utils'

export function editTemplateWorkspace() {
  const vscodeConfigFolderPath = path.join(WORKSPACE_PATH || '', '.vscode')
  const workspaceConfigPath = path.join(vscodeConfigFolderPath, TEMPLATE_CONFIG_FILE_NAME)

  if (!fs.existsSync(vscodeConfigFolderPath)) {
    try {
      mkdirRecursive('.vscode')
    } catch (error) {
      return log.error(localize.getLocalize('text.error.createFolder', vscodeConfigFolderPath))
    }
  }

  if (!fs.existsSync(workspaceConfigPath)) {
    const readable = fs.createReadStream(DEFAULT_TEMPLATE_FILE_PATH)
    const writable = fs.createWriteStream(workspaceConfigPath)
    readable.pipe(writable)
  }

  vscode.workspace.openTextDocument(workspaceConfigPath).then(doc => {
    vscode.window.showTextDocument(doc)
  })
}

export function registerEditTemplateWorkspace() {
  vscode.commands.registerCommand('cmd.editTemplateWorkspace', editTemplateWorkspace)
}
