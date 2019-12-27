import fs from 'fs'
import path from 'path'
import vscode, { Uri } from 'vscode'

import { localize, icons, REG } from '../utils'
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
export async function openTemplateList(items: Array<TemplateItem>): Promise<TemplateItem> {
  return openListPicker({
    title: localize.getLocalize('text.templateListItemPlaceholder'),
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

export async function openInputPathPicker(item: TemplateItem, menuPath?: string) {
  return new Promise((resolve, reject) => {
    const inputBox = vscode.window.createInputBox()
    inputBox.show()

    inputBox.placeholder = menuPath
      ? localize.getLocalize('text.inputBoxNamePlaceholder')
      : localize.getLocalize('text.inputBoxPathPlaceholder')

    inputBox.title = localize.getLocalize('text.inputBoxNameTitle', item.label, item.typeDesc)
    inputBox.prompt = localize.getLocalize('text.inputBoxNamePrompt')
    // inputBox.ignoreFocusOut = true
    // inputBox.step = 1
    // inputBox.totalSteps = 2

    inputBox.buttons = [
      {
        // iconPath: Uri.file(global.ctx.asAbsolutePath('assets/icons/back.light.svg')),
        // iconPath: Uri.file(global.ctx.asAbsolutePath('assets/icons/test.png')),

        iconPath: {
          light: icons.back.light,
          dark: icons.back.dark,
        },
        tooltip: localize.getLocalize('text.templateListReselect'),
      },
    ]

    // 操作按钮点击事件
    inputBox.onDidTriggerButton(e => {
      reject(e)
      inputBox.hide()
    })

    // 确认输入事件
    inputBox.onDidAccept(() => {
      if (!inputBox.value) {
        inputBox.validationMessage = localize.getLocalize('text.error.inputEmpty')
      } else if (!REG.INPUT_PATH.test(inputBox.value)) {
        inputBox.validationMessage = localize.getLocalize('text.error.inputPath')
      } else {
        resolve(inputBox.value)
      }
    })

    // 输入内容发生改变
    inputBox.onDidChangeValue(v => {
      if (!v) {
        inputBox.validationMessage = localize.getLocalize('text.error.inputEmpty')
      } else if (!REG.INPUT_PATH.test(v)) {
        inputBox.validationMessage = localize.getLocalize('text.error.inputPath')
      } else {
        inputBox.validationMessage = void 0
      }
    })
  })
}
