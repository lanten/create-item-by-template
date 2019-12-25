import fs from 'fs'
import path from 'path'
import vscode, { Uri } from 'vscode'

import { localize, log } from '../utils'
import { getTemplateConfig, openListPicker } from './'

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
export function showTemplateList(initPath?: string): Promise<TemplateItem> {
  return openListPicker({
    placeholder: localize.getLocalize('text.templateListItemPlaceholder'),
    before: next => {
      const templateConfig = getTemplateConfig()

      const items: TemplateItem[] = []
      for (const key in templateConfig) {
        const val = templateConfig[key]
        if (val) {
          const type = localize.getLocalize(`text.source.${key}`)
          const detail = localize.getLocalize('text.templateListItemDetail', type)

          items.push(
            ...Object.keys(val).map(label => {
              return { label, detail, render: val[label], initPath }
            })
          )
        }
      }
      next(items)
    },
  }).then(res => {
    if (res.length) {
      const item = res[0] as TemplateItem
      if (typeof item.render !== 'function') {
        const errorMessage = localize.getLocalize('text.error.templateFunction', item.label)
        log.error(errorMessage, true)
        return Promise.reject(errorMessage)
      } else {
        return item
      }
    } else {
      return Promise.reject(res)
    }
  })
}

/** - interface ------------------------------------------------------------------- */

/** 模板列表选项 */
export interface TemplateItem extends vscode.QuickPickItem {
  render: Function
}
