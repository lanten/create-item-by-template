import vscode from 'vscode'

import { localize, log, WORKSPACE_PATH } from '../utils'
import { getMenuRelativePath, showTemplateList } from '../core'

/** 创建文件夹 */
export function createFolder(path: string) {
  console.log('createFolder')
}

/** 注册命令 */
export function registerCreateFolder() {
  vscode.commands.registerCommand('cmd.createFolder', uri => {
    if (!WORKSPACE_PATH) {
      return log.warn(localize.getLocalize('text.error.workspacePath'), true)
    }

    const initPath = getMenuRelativePath(uri)

    showTemplateList(initPath).then(res => {
      console.log(res)
      // if (typeof res.renderer !== 'function') {
      //   const errorMessage = localize.getLocalize('text.error.templateFunction', res.label)
      //   log.error(errorMessage, true)
      //   return Promise.reject(errorMessage)
      // }
    })
  })
}
