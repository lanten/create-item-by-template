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

export async function beforeCreate(templateItems: TemplateItem[], menuPath?: string, defaultTemplate?: string) {
  let item: TemplateItem | undefined

  if (defaultTemplate) {
    item = templateItems.find(v => v.label === defaultTemplate)
    if (!item) log.warn(localize.getLocalize('text.warning.templateNotfound', defaultTemplate), true)
  }

  if (!item) item = await openTemplateList(templateItems)

  openInputPathPicker(item, menuPath)
    .then(inputPath => {
      console.log(inputPath)
    })
    .catch(() => {
      beforeCreate(templateItems, menuPath)
    })
}

/** 注册命令 */
export function registerCreateFolder() {
  vscode.commands.registerCommand('cmd.createFolder', uri => {
    if (!WORKSPACE_PATH) {
      return log.warn(localize.getLocalize('text.error.workspacePath'), true)
    }

    const menuPath = getMenuRelativePath(uri)
    const templateItems = expandTemplateItems('folders')

    beforeCreate(templateItems, menuPath, config.extConfig.defaultFolderTemplate)
  })
}
