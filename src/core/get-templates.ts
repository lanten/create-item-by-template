import path from 'path'
import fs from 'fs'

import {
  TEMPLATE_CONFIG_FILE_NAME,
  DEFAULT_TEMPLATE_FILE_PATH,
  WORKSPACE_PATH,
  config,
  requireModule,
} from '../utils'

/** 获取模板配置 */
export function getTemplateConfig() {
  const globalStoragePath = config.getGlobalStoragePath()
  const globalTemplatePath = path.join(globalStoragePath, TEMPLATE_CONFIG_FILE_NAME)

  let globalTemplate = {}
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
    global: globalTemplate,
    workspace: workspaceTemplate,
  }
}
