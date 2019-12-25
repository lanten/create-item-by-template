import path from 'path'
import fs from 'fs'

import {
  TEMPLATE_CONFIG_FILE_NAME,
  DEFAULT_TEMPLATE_FILE_PATH,
  WORKSPACE_PATH,
  config,
  requireModule,
} from '../utils'

/** - interface - start ------------------------------------------------------------------- */

/** 模板配置文件到处内容 */
export interface TemplateConfig {
  folders?: { [key: string]: TemplateConfigRenderer | TemplateConfigRendererRes }
  files?: { [key: string]: TemplateConfigRenderer | TemplateConfigRendererRes }
}

/** 模板渲染函数 */
export type TemplateConfigRenderer = (name: string, config: any) => TemplateConfigRendererRes

/** 模板渲染函数返回值 */
export interface TemplateConfigRendererRes {
  [key: string]: string[]
}

/** - interface - end --------------------------------------------------------------------- */

/**
 * 获取模板配置
 */
export function getTemplateConfig() {
  const globalStoragePath = config.getGlobalStoragePath()
  const globalTemplatePath = path.join(globalStoragePath, TEMPLATE_CONFIG_FILE_NAME)

  let globalTemplate: TemplateConfig = {}
  let workspaceTemplate = {}

  if (!fs.existsSync(globalTemplatePath)) {
    const readable = fs.createReadStream(DEFAULT_TEMPLATE_FILE_PATH)
    readable.pipe(fs.createWriteStream(globalTemplatePath))
  } else {
    globalTemplate = requireModule(globalTemplatePath)
  }

  if (WORKSPACE_PATH) {
    const workspaceConfigPath = path.join(WORKSPACE_PATH, '.vscode', TEMPLATE_CONFIG_FILE_NAME)
    if (fs.existsSync(workspaceConfigPath)) {
      workspaceTemplate = requireModule(workspaceConfigPath)
    }
  }

  return {
    // 此处的排序影响列表的展示顺序
    workspace: handleTemplateConfig(workspaceTemplate),
    global: handleTemplateConfig(globalTemplate),
  }
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