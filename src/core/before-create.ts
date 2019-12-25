import fs from 'fs'
import path from 'path'
import vscode, { Uri } from 'vscode'

import { localize, log } from '../utils'
import { getTemplateConfig, openListPicker, TemplateConfigRenderer, TemplateConfig } from './'

/** - interface - start ------------------------------------------------------------------- */

/** 模板列表选项 */
export interface TemplateItem extends vscode.QuickPickItem {
  /** 模板渲染函数 */
  renderer: TemplateConfigRenderer
  /** 类型：[文件 | 文件夹] */
  type: 'file' | 'folder'
  /** 类型说明：[文件 | 文件夹] */
  typeDesc: string
}

/** - interface - end --------------------------------------------------------------------- */

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
export async function showTemplateList(initPath?: string): Promise<TemplateItem> {
  return openListPicker({
    placeholder: localize.getLocalize('text.templateListItemPlaceholder'),
    before: next => {
      const templateConfig = getTemplateConfig()

      const items: TemplateItem[] = []

      for (const key in templateConfig) {
        const val: Required<TemplateConfig> = templateConfig[key]
        if (val) {
          const type = localize.getLocalize(`text.source.${key}`)
          const detail = localize.getLocalize('text.templateListItemDetail', type)

          items.push(
            ...Object.keys(val.folders).map(label => {
              const type = 'folder'
              const typeDesc = localize.getLocalize(`text.templateItemType.${type}`)
              return {
                label,
                detail: `${detail} - ${typeDesc}`,
                renderer: val.folders[label],
                initPath,
                type,
                typeDesc,
              } as TemplateItem
            }),
            ...Object.keys(val.files).map(label => {
              const type = 'file'
              const typeDesc = localize.getLocalize(`text.templateItemType.${type}`)
              return {
                label,
                detail: `${detail} - ${typeDesc}`,
                renderer: val.files[label],
                initPath,
                type,
                typeDesc,
              } as TemplateItem
            })
          )
        }
      }
      next(items)
    },
  }).then(res => {
    if (res.length) {
      return res[0] as TemplateItem
    } else {
      return Promise.reject(res)
    }
  })
}
