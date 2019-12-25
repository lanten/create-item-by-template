import vscode from 'vscode'

import { WORKSPACE_PATH, localize } from '../utils'
import { getMenuRelativePath } from '../core'

export function createFile() {
  console.log('createFile')
}

/** 注册命令 */
export function registerCreateFile() {
  vscode.commands.registerCommand('cmd.createFile', uri => {
    if (!WORKSPACE_PATH) {
      return vscode.window.showErrorMessage(localize.getLocalize('text.error.workspacePath'))
    }

    const initPath = getMenuRelativePath(uri)

    console.log(initPath)
  })
}
