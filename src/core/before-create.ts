import fs from 'fs'
import path from 'path'
import vscode, { Uri } from 'vscode'
import { getTemplateConfig } from '@/core'

/** init -------------------------------------------------------------- */
const templateListPicker = vscode.window.createQuickPick()
templateListPicker.placeholder = $ext.localize.getLocalize('text.templateListItemPlaceholder')

/** ------------------------------------------------------------------- */

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
export function showTemplateList(initPath?: string) {
  return new Promise((resolve, reject) => {
    templateListPicker.show()
    templateListPicker.busy = true

    const templateConfig = getTemplateConfig()

    console.log({ templateConfig })

    // const items = []
    // for (const key in templateConfig) {
    //   const val = templateConfig[key]
    //   if (val) {
    //     const detail = $ext.localize.getLocalize(
    //       'text.templateListItemDetail',
    //       $ext.localize.getLocalize(`text.source.${key}`)
    //     )
    //     items.push(
    //       ...Object.keys(val).map(label => {
    //         return { label, detail, fn: val[label], initPath }
    //       })
    //     )
    //   }
    // }

    // templateListPicker.items = items
    // templateListPicker.busy = false

    // templateListPicker.onDidAccept(() => {
    //   const selectItem = templateListPicker.selectedItems[0]

    //   if (!selectItem) return vscode.window.showErrorMessage(localize.getLocalize('text.error.templateSelect'))

    //   if (typeof selectItem.fn !== 'function')
    //     return vscode.window.showErrorMessage(
    //       localize.getLocalize('text.error.templateFunction', selectItem.label)
    //     )

    //   createByTemplate(selectItem.fn, selectItem.menuPath).then(res => {
    //     vscode.window.showInformationMessage(localize.getLocalize('text.success.create', res))
    //     templateListPicker.hide()
    //   })
    // })
  })
}
