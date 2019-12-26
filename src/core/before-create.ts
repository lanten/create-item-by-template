import fs from 'fs'
import path from 'path'
import vscode, { Uri, ThemeIcon } from 'vscode'

import { localize, icons } from '../utils'
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
  return new Promise(resolve => {
    const inputBox = vscode.window.createInputBox()

    inputBox.placeholder = menuPath
      ? localize.getLocalize('text.inputBoxNamePlaceholder')
      : localize.getLocalize('text.inputBoxPathPlaceholder')

    inputBox.title = localize.getLocalize('text.inputBoxNamePrompt', item.label)

    // const actionButton = new Button({ light: icons.folder.light, dark: icons.folder.dark }, 'hahahah')

    inputBox.ignoreFocusOut = true
    inputBox.step = 1
    inputBox.totalSteps = 22
    // inputBox.validationMessage = 'err asdasd'

    inputBox.buttons = [
      {
        // iconPath: {
        //   dark: vscode.Uri.parse(
        //     'https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/edit.svg'
        //   ),
        //   light: vscode.Uri.parse(
        //     'https://raw.githubusercontent.com/microsoft/vscode-icons/master/icons/dark/edit.svg'
        //   ),
        // },
        // iconPath: Uri.file(global.ctx.asAbsolutePath('assets/icons/test.png')),
        iconPath: Uri.file(global.ctx.asAbsolutePath('assets/icons/folder.dark.svg')),
        // iconPath: {
        //   light: icons.folder.light,
        //   dark: icons.folder.light,
        // },
        tooltip: '重新选择模板',
      },
    ]

    inputBox.onDidTriggerButton(res => {
      console.log(res)
    })

    inputBox.show()
    resolve('')
  })
}
