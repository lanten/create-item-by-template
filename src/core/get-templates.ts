import path from 'path'
import fs from 'fs'
import vscode from 'vscode'

import {
  TEMPLATE_CONFIG_FILE_NAMES,
  WORKSPACE_PATH,
  config,
  requireModule,
  localize,
  tryReadFile,
} from '../utils'

import { PathH } from './'

/** - interface - start ------------------------------------------------------------------- */

/** 模板配置文件到处内容 */
export interface TemplateConfig {
  folders?: { [key: string]: TemplateConfigRenderer | TemplateConfigRendererRes }
  files?: { [key: string]: TemplateConfigRenderer | TemplateConfigRendererRes }
}

export type RendererResType = string[] | string | TemplateConfigRenderer

/** 模板渲染函数 */
export type TemplateConfigRenderer = (
  name: string,
  config: any,
  paths: PathH
) => TemplateConfigRendererRes | string[] | string

export interface TemplateConfigRendererRes {
  [key: string]: RendererResType
}

/** 模板列表选项 */
export interface TemplateItem extends vscode.QuickPickItem {
  /** 模板渲染函数 */
  renderer: TemplateConfigRenderer | TemplateConfigRendererRes
  /** 类型：'file' | 'folder' */
  type: ItemTypes
  /** 类型说明：[文件 | 文件夹] */
  typeDesc: string
}

/** - interface - end --------------------------------------------------------------------- */

/**
 * 获取模板配置
 */
export function getTemplateConfig() {
  const globalStoragePath = config.getGlobalStoragePath()
  const globalTemplatePath =
    tryReadFile(TEMPLATE_CONFIG_FILE_NAMES.map(fileName => path.join(globalStoragePath, fileName))) ||
    path.join(globalStoragePath, TEMPLATE_CONFIG_FILE_NAMES[0])

  let workspaceConfigPath = ''
  let globalTemplate: TemplateConfig = {}
  let workspaceTemplate = {}
  let noTemplateFlg = true

  if (fs.existsSync(globalTemplatePath)) {
    globalTemplate = requireModule(globalTemplatePath)
    noTemplateFlg = false
  }

  if (WORKSPACE_PATH) {
    const vscodeConfigFolderPath = path.join(WORKSPACE_PATH || '', '.vscode')
    workspaceConfigPath =
      tryReadFile(TEMPLATE_CONFIG_FILE_NAMES.map(fileName => path.join(vscodeConfigFolderPath, fileName))) ||
      path.join(vscodeConfigFolderPath, TEMPLATE_CONFIG_FILE_NAMES[0])

    if (fs.existsSync(workspaceConfigPath)) {
      workspaceTemplate = requireModule(workspaceConfigPath)
      noTemplateFlg = false
    }
  }

  if (noTemplateFlg) {
    createTemplateConfigModal()
    throw new Error('no any template config found')
  }

  return {
    // 此处的排序影响列表的展示顺序
    workspace: handleTemplateConfig(workspaceTemplate),
    global: handleTemplateConfig(globalTemplate),
  }
}

/**
 * 创建配置文件弹窗
 */
export function createTemplateConfigModal() {
  const globalStr = localize.getLocalize('text.createTo', localize.getLocalize('text.source.global'))
  const workspaceStr = localize.getLocalize('text.createTo', localize.getLocalize('text.source.workspace'))

  const modal = vscode.window.showInformationMessage(
    localize.getLocalize('text.modal.noTemplateConfig'),
    globalStr,
    workspaceStr
  )

  modal.then(res => {
    if (res === globalStr) {
      vscode.commands.executeCommand('cmd.editTemplateGlobal')
    } else if (res === workspaceStr) {
      vscode.commands.executeCommand('cmd.editTemplateWorkspace')
    }
  })
}

/**
 * 整理模板配置
 * @param conf
 */
export function handleTemplateConfig(conf: TemplateConfig): Required<TemplateConfig> {
  const res: Required<TemplateConfig> = { files: {}, folders: {} }
  if (conf.files) {
    res.files = conf.files
    delete conf.files
  }
  if (conf.folders) {
    res.folders = conf.folders
    delete conf.folders
  }
  for (const key in conf) {
    res.folders[key] = conf[key]
  }
  return res
}

/**
 * 展开模板列表
 * @param type
 * @param assignConfig
 */
export function expandTemplateItems<_, T extends AnyObj>(
  type: ItemTypes,
  assignConfig?: T
): Array<TemplateItem> {
  const templateConfig = getTemplateConfig()
  const items: TemplateItem[] = []

  for (const key in templateConfig) {
    const val: Required<TemplateConfig> = templateConfig[key]
    if (val) {
      const source = localize.getLocalize(`text.source.${key}`)
      const typeDesc = localize.getLocalize(`text.templateItemType.${type}`)
      const detail = localize.getLocalize('text.templateListItemDetailWithType', typeDesc, source)

      items.push(
        ...Object.keys(val[type]).map(label => {
          return {
            label,
            detail,
            renderer: val[type][label],
            type,
            typeDesc,
            ...assignConfig,
          } as TemplateItem
        })
      )
    }
  }

  return items
}
