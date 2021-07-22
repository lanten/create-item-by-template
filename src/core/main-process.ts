import fs from 'fs'
import path from 'path'
import vscode, { Uri, QuickInputButtons } from 'vscode'

import { WORKSPACE_PATH, REG, localize, log, mkdirRecursive, config } from '../utils'
import {
  openListPicker,
  TemplateItem,
  TemplateConfigRendererRes,
  RendererResType,
  expandTemplateItems,
} from './'

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

  /** 准备创建 */
  public onCreateReady?: (data: CreateData | void) => void

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
  public async beforeCreate(loadDefault?: boolean): Promise<CreateData | void> {
    let item: TemplateItem | undefined

    if (loadDefault && this.defaultTemplate) {
      item = this.templateItems.find(v => v.label === this.defaultTemplate)
      if (!item) log.warn(localize.getLocalize('text.warning.templateNotfound', this.defaultTemplate), true)
    }

    if (!item) {
      item = await this.openTemplateList(this.templateItems).catch(() => {
        log.error(localize.getLocalize('text.error.templateSelect'), true)
        return undefined
      })
    }

    if (!item) return this.beforeCreate()

    return this.openInputPathPicker(item)
      .then(str => {
        const resData = {
          paths: this.handleInputPath(str),
          item,
        } as CreateData

        if (this.onCreateReady) this.onCreateReady(resData)
        return resData
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

      let templateRenderData: TemplateConfigRendererRes = {}

      // 创建文件夹
      try {
        if (type === 'folders') {
          templateRenderData = (typeof item.renderer === 'function'
            ? item.renderer(paths.lastName, paths.query, paths)
            : item.renderer) as TemplateConfigRendererRes
          if (fs.existsSync(paths.folderAbsolutePath)) {
            const message = localize.getLocalize('text.error.foldersExisted', paths.folderAbsolutePath)
            log.error(message, true)
            return reject({ status: false, message })
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
        return reject({ status: false, message })
      }

      // 创建文件
      for (const fileName in templateRenderData) {
        let templateStr = ''

        try {
          templateStr = this.templateStringify(templateRenderData[fileName], paths)
        } catch (error) {
          const message = localize.getLocalize('text.error.templateConfig')
          console.error(error)
          log.error(message, true)
          return reject({ status: false, message })
        }

        const filePath = path.join(paths.folderAbsolutePath, fileName)

        if (fs.existsSync(filePath)) {
          const message = localize.getLocalize('text.error.filesExisted', filePath)
          log.error(message, true)
          return reject({ status: false, message })
        }

        try {
          fs.writeFileSync(filePath, templateStr, 'utf-8')
        } catch (error) {
          const message = localize.getLocalize('text.error.create.files', `\n${error.message}\n${error.stack}`)
          console.error(error)
          log.error(message, true)
          return reject({ status: false, message })
        }
      }

      // 自动记录默认模板配置
      if (config.extConfig.rememberLastSelection && this.defaultTemplate !== item.label) {
        let nextCodeConfig = {}

        if (item.type === 'files') {
          nextCodeConfig = { defaultFileTemplate: item.label }
        } else {
          nextCodeConfig = { defaultFolderTemplate: item.label }
        }
        config.setCodeConfig(nextCodeConfig)
        log.info(
          `${localize.getLocalize('text.config.rememberLastSelection')} ${localize.getLocalize(
            `text.templateItemType.${item.type}`
          )}: ${item.label}`
        )
      }

      const message = localize.getLocalize(
        'text.success.create',
        `${localize.getLocalize(`text.templateItemType.${item.type}`)}: ${paths.lastName}`
      )
      log.info(message, true)
      resolve({ status: true, message })
    })
  }

  /**
   * 将模板配置转换成字符串
   * @param templateVal
   */
  templateStringify(templateVal: RendererResType, paths: PathH): string {
    let templateStr = ''
    if (typeof templateVal === 'string') {
      templateStr = templateVal
    } else if (typeof templateVal === 'function') {
      const fireRes = templateVal(paths.lastName, paths.query, paths)
      if (typeof fireRes === 'object' && !Array.isArray(fireRes)) {
        // 禁止套娃
        throw new Error('模板配置错误，禁止套娃！')
      } else {
        templateStr = this.templateStringify(fireRes, paths)
      }
    } else {
      templateStr = templateVal.join('\n')
    }
    return templateStr
  }

  /**
   * 处理输入内容
   * @param inputPath
   */
  public handleInputPath(inputPath: string): PathH {
    const inputPathArr = path
      .join(this.menuPathStr || '', inputPath)
      .replace(/\\/g, '/')
      .split('/')
    const queryArr = inputPathArr[inputPathArr.length - 1].split('?')
    const lastName = queryArr[0]
    const query = {}
    const folderPathArr = inputPathArr.slice(0, inputPathArr.length - 1)

    const itemPath = [...folderPathArr, lastName].join('/')
    let folderPath = itemPath
    let fileAbsolutePath = undefined

    if (this.type === 'files') {
      folderPath = folderPathArr.join('/')
      fileAbsolutePath = path.join(WORKSPACE_PATH as string, itemPath)
    }

    const folderAbsolutePath = path.join(WORKSPACE_PATH as string, folderPath)

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
      inputBox.buttons = [QuickInputButtons.Back]

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
