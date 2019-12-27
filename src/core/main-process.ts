import fs from 'fs'
import path from 'path'
import vscode, { Uri } from 'vscode'

import { WORKSPACE_PATH, REG, localize, icons, log, mkdirRecursive } from '../utils'
import { openListPicker, TemplateItem, TemplateConfigRendererRes, expandTemplateItems } from './'

/** - interface - start ------------------------------------------------------------------- */

export interface CreateOptions {
  type: ItemTypes
  menuPath?: Uri
  defaultTemplate?: string
}

export interface PathH {
  inputPath: string
  /** 末端目录/文件名 */
  lastName: string
  /** 参数 */
  query: AnyObj
  /** 文件夹路径 */
  folderPath: string
  /** 文件夹绝对路径 */
  folderAbsolutePath: string
  /** 文件绝对路径 */
  fileAbsolutePath?: string
}

export interface CreateData {
  item: TemplateItem
  paths: PathH
}

export interface CreateRes {
  /** 是否创建成功 */
  status: boolean
  /** 详细信息 */
  message: string
}

/** - interface - end --------------------------------------------------------------------- */

/** 主流程 */
export class Create {
  public type: ItemTypes
  public menuPath?: CreateOptions['menuPath']
  public menuPathStr?: string
  public defaultTemplate: CreateOptions['defaultTemplate']
  public templateItems: TemplateItem[]

  constructor(options: CreateOptions) {
    this.type = options.type
    this.menuPath = options.menuPath
    this.menuPathStr = getMenuRelativePath(options.menuPath)
    this.defaultTemplate = options.defaultTemplate
    this.templateItems = expandTemplateItems(options.type)
  }

  /**
   * 创建前准备
   * @param loadDefault
   */
  public async beforeCreate(loadDefault = true): Promise<CreateData | void> {
    let item: TemplateItem | undefined

    if (loadDefault && this.defaultTemplate) {
      item = this.templateItems.find(v => v.label === this.defaultTemplate)
      if (!item) log.warn(localize.getLocalize('text.warning.templateNotfound', this.defaultTemplate), true)
    }

    if (!item) {
      item = await this.openTemplateList(this.templateItems).catch(() => {
        this.beforeCreate(false)
        log.error(localize.getLocalize('text.error.templateSelect'), true)
        return undefined
      })
    }

    return this.openInputPathPicker(item as TemplateItem)
      .then(str => {
        return {
          paths: this.handleInputPath(str),
          item,
        } as CreateData
      })
      .catch(() => {
        this.beforeCreate(false)
      })
  }

  /**
   * 核心方法:创建文件夹/文件
   * @param data
   */
  public createItem(data: CreateData, type: ItemTypes = this.type): Promise<CreateRes> {
    return new Promise((resolve, reject: (err: CreateRes) => void) => {
      const { paths, item } = data

      // console.log(data)

      let templateRenderData: TemplateConfigRendererRes | string[] | string = {}

      try {
        if (type === 'folders') {
          templateRenderData =
            typeof item.renderer === 'function'
              ? item.renderer(paths.lastName, paths.query, paths)
              : item.renderer
          if (fs.existsSync(paths.folderAbsolutePath)) {
            const message = localize.getLocalize(`text.warning.${type}Existed`, paths.folderAbsolutePath)
            log.warn(message, true)
          } else {
            mkdirRecursive(paths.folderPath)
          }
        } else {
          templateRenderData = {
            [paths.lastName]:
              typeof item.renderer === 'function'
                ? item.renderer(paths.lastName, paths.query, paths)
                : item.renderer,
          } as TemplateConfigRendererRes
          if (!fs.existsSync(paths.folderAbsolutePath)) {
            mkdirRecursive(paths.folderPath)
          }
        }
      } catch (error) {
        const message = localize.getLocalize(`text.error.create.${type}`, error)
        log.error(message, true)
        reject({ status: false, message })
      }

      console.log(templateRenderData, item)

      // for (const fileName in templateRenderData) {
      //   const templateArr = templateRenderData[fileName]
      //   let templateStr = ''

      //   console.log('123123123', templateArr, fileName)

      //   if (typeof templateArr === 'string') {
      //     templateStr = templateArr
      //   } else {
      //     try {
      //       templateStr = templateArr.join('\n')
      //     } catch (error) {
      //       const message = localize.getLocalize('text.error.templateConfig')
      //       console.error(error)
      //       log.error(message, true)
      //       return reject({ status: false, message })
      //     }
      //   }

      //   const filePath = path.resolve(paths.folderAbsolutePath, fileName)

      //   try {
      //     fs.writeFileSync(filePath, templateStr, 'utf-8')
      //   } catch (error) {
      //     const message = localize.getLocalize('text.error.create.files', `${filePath}`)
      //     console.error(error)
      //     log.error(message, true)
      //     return reject({ status: false, message })
      //   }
      // }

      // const message = localize.getLocalize('text.success.create', paths.lastName)
      // log.info(message, true)
      // resolve({ status: true, message })
    })
  }

  /**
   * 处理输入内容
   * @param inputPath
   */
  public handleInputPath(inputPath: string): PathH {
    const inputPathArr = inputPath.split('/')
    const queryArr = inputPathArr[inputPathArr.length - 1].split('?')
    const lastName = queryArr[0]
    const query = {}
    const folderPathArr = inputPathArr.slice(0, inputPathArr.length - 1)

    const itemPath = [...folderPathArr, lastName].join('/')
    let folderPath = itemPath
    let fileAbsolutePath = undefined

    if (this.type === 'files') {
      folderPath = folderPathArr.join('/')
      fileAbsolutePath = path.resolve(WORKSPACE_PATH as string, itemPath)
    }

    const folderAbsolutePath = path.resolve(WORKSPACE_PATH as string, folderPath)

    if (queryArr.length > 1) {
      queryArr[1].split('&').forEach(str => {
        const paramArr = str.split('=')
        if (paramArr.length > 1) query[paramArr[0]] = paramArr[1]
      })
    }

    return { inputPath, lastName, query, folderPath, folderAbsolutePath, fileAbsolutePath }
  }

  /**
   * 显示模板列表
   * @param initPath 初始路径
   */
  public async openTemplateList(items: Array<TemplateItem>): Promise<TemplateItem> {
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

  /**
   * 打开输入框
   * @param item
   * @param menuPath
   */
  public async openInputPathPicker(item: TemplateItem): Promise<string> {
    return new Promise((resolve, reject) => {
      const inputBox = vscode.window.createInputBox()
      inputBox.show()

      inputBox.placeholder = this.menuPathStr
        ? localize.getLocalize('text.inputBoxNamePlaceholder', item.typeDesc)
        : localize.getLocalize('text.inputBoxPathPlaceholder', item.typeDesc)

      inputBox.title = localize.getLocalize('text.inputBoxNameTitle', item.label, item.typeDesc)
      inputBox.prompt = localize.getLocalize('text.inputBoxNamePrompt')
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
          inputBox.hide()
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
}

/**
 * 获取右键菜单相对路径
 * @param uri  右键菜单触发时传入的 uri
 */
export function getMenuRelativePath(uri?: Uri) {
  let pathStr: string | undefined

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
