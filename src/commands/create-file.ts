import vscode from 'vscode'

import { getMenuRelativePath } from '@/core'

export function createFile() {
  console.log('createFile')
}

/** 注册命令 */
export function registerCreateFile() {
  vscode.commands.registerCommand('cmd.createFile', uri => {
    if (!$ext.WORKSPACE_PATH) {
      return vscode.window.showErrorMessage($ext.localize.getLocalize('text.error.workspacePath'))
    }

    const initPath = getMenuRelativePath(uri)

    console.log(initPath)
  })
}
