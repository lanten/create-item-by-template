import path from 'path'
import fs from 'fs'

/** 获取模板配置 */
export function getTemplateConfig() {
  const globalStoragePath = $ext.config.getGlobalStoragePath()
  const globalTemplatePath = path.join(globalStoragePath, $ext.TEMPLATE_CONFIG_FILE_NAME)

  let globalTemplate = {}
  let workspaceTemplate = {}

  console.log(globalStoragePath)

  // globalTemplate = require('C:\\Users\\lanten\\AppData\\Roaming\\Code\\User\\globalStorage\\lanten.create-item-by-template\\create-item.template.js')

  if (!fs.existsSync(globalTemplatePath)) {
    const defaultTemplatePath = path.join($ext.EXT_PATH, 'templates/default.template.js')
    const readable = fs.createReadStream(defaultTemplatePath)
    readable.pipe(fs.createWriteStream(globalTemplatePath))
  }

  globalTemplate = $ext.requireModule(globalTemplatePath)
  console.warn(globalTemplate)

  // if ($ext.WORKSPACE_PATH) {
  //   const workspaceConfigPath = path.join($ext.WORKSPACE_PATH, '.vscode', $ext.TEMPLATE_CONFIG_FILE_NAME)
  //   if (fs.existsSync(workspaceConfigPath)) {
  //     workspaceTemplate = require(workspaceConfigPath)
  //     delete require.cache[require.resolve(workspaceConfigPath)]
  //   }
  // }

  return {
    global: globalTemplate,
    workspace: workspaceTemplate,
  }
}
