import vscode from 'vscode'

import { getMenuRelativePath, showTemplateList } from '@/core'

/** 创建文件夹 */
export function createFolder(path: string) {
  console.log('createFolder')
}

/** 注册命令 */
export function registerCreateFolder() {
  vscode.commands.registerCommand('cmd.createFolder', uri => {
    if (!$ext.WORKSPACE_PATH) {
      return vscode.window.showErrorMessage($ext.localize.getLocalize('text.error.workspacePath'))
    }

    const initPath = getMenuRelativePath(uri)

    showTemplateList(initPath)

    console.log(initPath)
  })
}
