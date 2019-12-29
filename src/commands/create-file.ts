import vscode from 'vscode'

import { WORKSPACE_PATH, localize, log, config } from '../utils'
import { Create } from '../core'

/**
 * 注册命令 - 创建文件
 */
export function registerCreateFile() {
  vscode.commands.registerCommand('cmd.createFile', uri => {
    if (!WORKSPACE_PATH) {
      return log.error(localize.getLocalize('text.error.workspacePath'), true)
    }

    const create = new Create({
      type: 'files',
      menuPath: uri,
      defaultTemplate: config.extConfig.defaultFileTemplate,
    })

    create.beforeCreate()

    create.onCreateReady = res => {
      if (res) {
        create.createItem(res)
      }
    }
  })
}
