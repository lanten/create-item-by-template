const vscode = require('vscode')
const path = require('path')
const fs = require('fs')
const { getTemplateConfig, localize, workspacePath, mkdirRecursive } = require('../utils')

const templateListPicker = vscode.window.createQuickPick()

templateListPicker.placeholder = localize.getLocalize('text.templateListItemPlaceholder')


function createByTemplate(templateFn, menuPath) {
  return new Promise((resolve, reject) => {
    vscode.window.showInputBox({
      placeHolder: menuPath ? localize.getLocalize('text.inputBoxNamePlaceholder') : localize.getLocalize('text.inputBoxPathPlaceholder'),
    }).then(inputPath => {
      if (inputPath === undefined) return

      if (menuPath) {
        inputPath = `${menuPath}/${inputPath}`
      }

      console.log(inputPath)

      if (!inputPath) return vscode.window.showErrorMessage(localize.getLocalize('text.error.inputPath'))

      const inputPathArr = inputPath.split('/')
      const folderParamsArr = inputPathArr[inputPathArr.length - 1].split('?')
      const folderName = folderParamsArr[0]
      const folderParams = {}
      const folderPath = inputPath.split('?')[0]
      const folderPathFull = `${workspacePath}/${folderPath}`

      console.log(folderPathFull)

      if (fs.existsSync(folderPathFull)) return vscode.window.showWarningMessage(localize.getLocalize('text.warning.folderExisted', folderPathFull))

      if (folderParamsArr.length > 1) {
        folderParamsArr[1].split('&').forEach(paramStr => {
          const paramArr = paramStr.split('=')
          if (paramArr.length > 1) folderParams[paramArr[0]] = paramArr[1]
        })
      }

      let templateObj

      try {
        templateObj = templateFn(folderName, folderParams, vscode)
      } catch (error) {
        return vscode.window.showErrorMessage(localize.getLocalize('text.error.templateFunction.run', error))
      }

      if (typeof templateObj !== 'object') return vscode.window.showErrorMessage(localize.getLocalize('text.error.templateConfig'))

      try {
        mkdirRecursive(folderPath)
      } catch (error) {
        return vscode.window.showErrorMessage(localize.getLocalize('text.error.createFolder', error))
      }


      for (const fileName in templateObj) {
        const templateArr = templateObj[fileName]
        if (templateArr.constructor !== Array) return vscode.window.showErrorMessage(localize.getLocalize('text.error.templateConfig'))
        const templateStr = templateArr.join('\n')
        const creatRes = fs.writeFileSync(`${workspacePath}/${folderPath}/${fileName}`, templateStr, 'utf-8')
        if (creatRes) vscode.window.showErrorMessage(localize.getLocalize('text.error.createFile', `${workspacePath}/${folderPath}/${fileName}\n${creatRes}`))
      }

      resolve(folderName)
    })
  }) // Promise end
}

function showTemplateList(menuPath) {
  templateListPicker.show()
  templateListPicker.busy = true

  const templateConfig = getTemplateConfig()

  const items = []
  for (const key in templateConfig) {
    const val = templateConfig[key]
    if (val) {
      const detail = localize.getLocalize('text.templateListItemDetail', localize.getLocalize(`text.source.${key}`))
      items.push(...Object.keys(val).map(label => {
        return { label, detail, fn: val[label], menuPath }
      }))
    }
  }

  templateListPicker.items = items
  templateListPicker.busy = false

}

// inputPathBox.onDidAccept()

// 模板列表选中
templateListPicker.onDidAccept(() => {
  const selectItem = templateListPicker.selectedItems[0]

  if (!selectItem) return vscode.window.showErrorMessage(localize.getLocalize('text.error.templateSelect'))

  if (typeof selectItem.fn !== 'function') return vscode.window.showErrorMessage(localize.getLocalize('text.error.templateFunction', selectItem.label))

  createByTemplate(selectItem.fn, selectItem.menuPath).then(res => {
    vscode.window.showInformationMessage(localize.getLocalize('text.success.create', res))
    templateListPicker.hide()
  })
})



module.exports = vscode.commands.registerCommand('extension.creatItemByTemplate', function (uri) {
  let menuPath = undefined

  console.log(uri)

  if (typeof uri === 'object') {

    const fstat = fs.statSync(uri.fsPath)
    console.log(fstat)
    // menuPath = vscode.workspace.asRelativePath(uri)
    // if (uri.scheme === 'file') {

    // }

    // console.log(menuPath)

  }

  if (!workspacePath) return vscode.window.showErrorMessage(localize.getLocalize('text.error.workspacePath'))
  showTemplateList(menuPath)
})