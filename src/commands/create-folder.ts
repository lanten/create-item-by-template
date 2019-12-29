import vscode from 'vscode'

import { WORKSPACE_PATH, localize, log, config } from '../utils'
import { Create } from '../core'

/**
 * 注册命令 - 创建文件夹
 */
export function registerCreateFolder() {
  vscode.commands.registerCommand('cmd.createFolder', uri => {
    if (!WORKSPACE_PATH) {
      return log.warn(localize.getLocalize('text.error.workspacePath'), true)
    }

    const create = new Create({
      type: 'folders',
      menuPath: uri,
      defaultTemplate: config.extConfig.defaultFolderTemplate,
    })

    create.beforeCreate()

    create.onCreateReady = res => {
      if (res) {
        create.createItem(res)
      }
    }
  })
}
