import fs from 'fs'
import path from 'path'
import vscode, { Uri } from 'vscode'

import { localize } from '../utils'
import { openListPicker, TemplateItem } from './'

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
export async function showTemplateList(items: Array<TemplateItem>): Promise<TemplateItem> {
  return openListPicker({
    placeholder: localize.getLocalize('text.templateListItemPlaceholder'),
    items,
  }).then(res => {
    if (res.length) {
      return res[0] as TemplateItem
    } else {
      return Promise.reject(res)
    }
  })
}
