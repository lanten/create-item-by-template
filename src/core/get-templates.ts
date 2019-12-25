import path from 'path'
import fs from 'fs'

import { config, TEMPLATE_CONFIG_FILE_NAME, EXT_PATH, WORKSPACE_PATH, requireModule } from '../utils'

/** 获取模板配置 */
export function getTemplateConfig() {
  const globalStoragePath = config.getGlobalStoragePath()
  const globalTemplatePath = path.join(globalStoragePath, TEMPLATE_CONFIG_FILE_NAME)

  let globalTemplate = {}
  let workspaceTemplate = {}

  console.log(globalStoragePath)

  // globalTemplate = require('C:\\Users\\lanten\\AppData\\Roaming\\Code\\User\\globalStorage\\lanten.create-item-by-template\\create-item.template.js')

  if (!fs.existsSync(globalTemplatePath)) {
    const defaultTemplatePath = path.join(EXT_PATH, 'templates/default.template.js')
    const readable = fs.createReadStream(defaultTemplatePath)
    readable.pipe(fs.createWriteStream(globalTemplatePath))
  }

  globalTemplate = requireModule(globalTemplatePath)
  console.warn(globalTemplate)

  if (WORKSPACE_PATH) {
    const workspaceConfigPath = path.join(WORKSPACE_PATH, '.vscode', TEMPLATE_CONFIG_FILE_NAME)
    if (fs.existsSync(workspaceConfigPath)) {
      workspaceTemplate = require(workspaceConfigPath)
      delete require.cache[require.resolve(workspaceConfigPath)]
    }
  }

  return {
    global: globalTemplate,
    workspace: workspaceTemplate,
  }
}
