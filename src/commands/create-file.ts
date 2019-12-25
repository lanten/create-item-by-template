import vscode from 'vscode'

import { WORKSPACE_PATH, localize, log } from '../utils'
import { getMenuRelativePath } from '../core'

export function createFile() {
  console.log('createFile')
}

/** 注册命令 */
export function registerCreateFile() {
  vscode.commands.registerCommand('cmd.createFile', uri => {
    if (!WORKSPACE_PATH) {
      return log.error(localize.getLocalize('text.error.workspacePath'), true)
    }

    const initPath = getMenuRelativePath(uri)

    console.log(initPath)
  })
}
