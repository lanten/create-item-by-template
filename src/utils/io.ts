import fs from 'fs'
import path from 'path'
import vm from 'vm'
import NativeModule from 'module'
import vscode from 'vscode'

import { WORKSPACE_PATH } from './const'

/**
 * 递归创建路径
 * @param dir
 * @param inputPath
 * @param split
 */
export function mkdirRecursive(dir: string, inputPath = WORKSPACE_PATH || '', split = '/') {
  const dirArr = dir.split(split)
  const dir2 = dirArr.reduce((dirPath, folder) => {
    const p1 = path.join(inputPath, dirPath)
    if (!fs.existsSync(p1)) fs.mkdirSync(p1)
    return dirPath + '/' + folder
  })
  const p2 = path.join(inputPath, dir2)
  if (!fs.existsSync(p2)) fs.mkdirSync(p2)
}

/**
 * 动态导入一个 JS 文件
 * @param modulePath 要导入的文件路径
 * @param filename 文件名
 */
export function requireModule(modulePath: string, filename = 'bundle.js') {
  // let bundle: string
  // try {
  //   bundle = fs.readFileSync(modulePath, 'utf-8')
  // } catch (error) {
  //   throw new Error(error)
  // }
  // // @ts-ignore
  // const m = new module()
  // m._compile(bundle, 'bundle.js')
  // return m

  // ---------------------------------------------------------------------

  const res = require(modulePath)
  delete require.cache[require.resolve(modulePath)]
  console.warn(res)
  return res

  // ---------------------------------------------------------------------

  // const m: any = { module: { exports: {} }, a: '' }
  // let moduleCode: string

  // try {
  //   moduleCode = fs.readFileSync(modulePath, 'utf-8')
  // } catch (error) {
  //   throw new Error(error)
  // }

  // // const wrapper = NativeModule.wrap(bundle)
  // // const script = new vm.Script(bundle, {
  // //   filename,
  // //   displayErrors: true,
  // // })

  // // const script = new vm.Script(wrapper, {
  // //   filename,
  // //   displayErrors: true,
  // // })
  // // const result = script.runInThisContext() // 此处可以指定代码的执行环境，此 api 在 nodejs 文档中有介绍
  // // console.warn({ filename, script, ss: result })
  // // result.call(m.exports, m.exports, require, m)

  // vm.createContext(m)
  // const res = vm.runInContext(moduleCode, m)

  // console.warn({ res, m, s: m.module, d: m.module.exports.miniprogram, f: m.a })
  // return m
}

/**
 * 打开一个未保存的文档
 * @param docStr
 * @param name
 */
export function preSaveDocument(docStr: string, filePath: string): Thenable<boolean> {
  const newFile = vscode.Uri.parse((fs.existsSync(filePath) ? 'file' : 'untitled') + ':' + filePath)

  return vscode.workspace.openTextDocument(newFile).then(document => {
    const edit = new vscode.WorkspaceEdit()
    const pMin = new vscode.Position(0, 0)
    const pMax = new vscode.Position(Infinity, Infinity)
    edit.replace(newFile, new vscode.Range(pMin, pMax), docStr)
    return vscode.workspace.applyEdit(edit).then(success => {
      if (success) {
        vscode.window.showTextDocument(document)
      } else {
        vscode.window.showInformationMessage('Error!'['document error'])
      }
      return success
    })
  })
}
