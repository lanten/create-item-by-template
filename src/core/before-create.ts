import fs from 'fs'
import path from 'path'
import vscode, { Uri } from 'vscode'

import { localize, log } from '../utils'
import { getTemplateConfig } from './get-templates'

/**
 * 获取右键菜单相对路径
 * @param uri  右键菜单触发时传入的 uri
 */
export function getMenuRelativePath(uri: Uri) {
  let pathStr: string | undefined = undefined

  if (typeof uri === 'object') {
    pathStr = vscode.workspace.asRelativePath(uri).replace(/\\/g, '/')
    const fstat = fs.statSync(uri.fsPath)
    if (fstat.isFile()) {
      pathStr = path.dirname(pathStr)
    }

    if (path.isAbsolute(pathStr)) pathStr = undefined
  }
  return pathStr
}

/**
 * 显示模板列表
 * @param initPath 初始路径
 */
export function showTemplateList(initPath?: string): Promise<SelectItem> {
  return new Promise((resolve, reject) => {
    const templateListPicker = vscode.window.createQuickPick()
    templateListPicker.placeholder = localize.getLocalize('text.templateListItemPlaceholder')
    templateListPicker.show()
    templateListPicker.busy = true

    const templateConfig = getTemplateConfig()

    const items = []
    for (const key in templateConfig) {
      const val = templateConfig[key]
      if (val) {
        const type = localize.getLocalize(`text.source.${key}`)
        const detail = localize.getLocalize('text.templateListItemDetail', type)

        console.log({ key, type, detail })
        items.push(
          ...Object.keys(val).map(label => {
            return { label, detail, fn: val[label], initPath }
          })
        )
      }
    }

    templateListPicker.items = items
    templateListPicker.busy = false

    templateListPicker.onDidAccept(() => {
      const selectItem: SelectItem = templateListPicker.selectedItems[0]

      if (!selectItem) return log.error(localize.getLocalize('text.error.templateSelect'), true)

      if (typeof selectItem.fn !== 'function') {
        const errorMessage = localize.getLocalize('text.error.templateFunction', selectItem.label)
        log.error(errorMessage, true)
        reject(errorMessage)
      } else {
        resolve(selectItem)
      }
    })
  })
}

/** - interface ------------------------------------------------------------------- */

/** 模板列表选项 */
export interface SelectItem extends vscode.QuickPickItem {
  fn?: Function
}
