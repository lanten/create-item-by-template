import path from 'path'
import fs from 'fs'

/** 获取模板配置 */
export function getTemplateConfig() {
  const globalStoragePath = $ext.config.getGlobalStoragePath()
  const globalTemplatePath = path.resolve(globalStoragePath, $ext.TEMPLATE_CONFIG_FILE_NAME)

  let globalConfig = {}
  let workspaceConfig = {}

  // console.log(globalStoragePath, fs.existsSync(globalStoragePath))
  $ext.mkdirRecursive('/Users/huangyujie/Desktop/test-asdasdasd123123123213')

  // if (!fs.existsSync(globalStoragePath)) {
  //   $ext.mkdirRecursive(globalStoragePath)
  // }

  // if (fs.existsSync(globalTemplatePath)) {
  //   globalConfig = require(globalTemplatePath)
  //   delete require.cache[require.resolve(globalTemplatePath)]
  // } else {
  //   const defaultTemplatePath = path.resolve($ext.EXT_PATH, 'templates/default.template.js')
  //   const readable = fs.createReadStream(defaultTemplatePath)
  //   readable.pipe(fs.createWriteStream(globalTemplatePath))
  //   globalConfig = require(globalTemplatePath)
  //   delete require.cache[require.resolve(globalTemplatePath)]
  // }

  // if ($ext.WORKSPACE_PATH) {
  //   const workspaceConfigPath = path.join($ext.WORKSPACE_PATH, '.vscode', $ext.TEMPLATE_CONFIG_FILE_NAME)
  //   if (fs.existsSync(workspaceConfigPath)) {
  //     workspaceConfig = require(workspaceConfigPath)
  //     delete require.cache[require.resolve(workspaceConfigPath)]
  //   }
  // }

  return {
    global: globalConfig,
    workspace: workspaceConfig,
  }
}
