import vscode from 'vscode'

import { WORKSPACE_PATH, localize, log, config } from '../utils'
import {
  getMenuRelativePath,
  openTemplateList,
  expandTemplateItems,
  TemplateItem,
  openInputPathPicker,
} from '../core'

/** 创建文件夹 */
export function createFolder(path: string) {
  console.log('createFolder')
}

/** 注册命令 */
export function registerCreateFolder() {
  vscode.commands.registerCommand('cmd.createFolder', async uri => {
    if (!WORKSPACE_PATH) {
      return log.warn(localize.getLocalize('text.error.workspacePath'), true)
    }

    const { defaultFolderTemplate, rememberLastSelection } = config.extConfig
    const menuPath = getMenuRelativePath(uri)
    const templateItems = expandTemplateItems('folders')

    let item: TemplateItem | undefined

    if (rememberLastSelection && defaultFolderTemplate) {
      item = templateItems.find(v => v.label === defaultFolderTemplate)
      if (!item) log.warn(localize.getLocalize('text.warning.templateNotfound', defaultFolderTemplate), true)
    }

    if (!item) item = await openTemplateList(templateItems)

    console.log(item)

    openInputPathPicker(item, menuPath)
  })
}
