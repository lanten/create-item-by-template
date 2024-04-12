import vscode from 'vscode'
import packageJson from '../../package.json'
import path from 'path'

const { workspaceFolders } = vscode.workspace
/** 工作区路径 */
export const WORKSPACE_PATH = workspaceFolders ? workspaceFolders[0].uri.fsPath.replace(/\\/g, '/') : undefined
/** 插件设置 */
export const CONFIG_LIST = ['defaultFolderTemplate', 'defaultFileTemplate', 'rememberLastSelection']
/** 插件名称 */
export const EXT_NAME = packageJson.name
/** 插件本体路径 */
export const EXT_PATH = path.join(__dirname, '../../../')
/** 插件发布者 */
export const PUBLISHER = packageJson.publisher
/** 插件私有配置文件路径 */
export const LOCAL_CONFIG_PATH = path.join(EXT_PATH, 'local.config.json')
/** vscode 配置项前缀 */
export const CONFIG_GROUP = 'create'
/** 模板配置文件名, 顺序尝试，有限使用 cjs */
export const TEMPLATE_CONFIG_FILE_NAMES = ['create-item.template.cjs', 'create-item.template.js']
/** 默认模板配置文件路径 */
export const DEFAULT_TEMPLATE_FILE_PATH = path.join(EXT_PATH, 'templates/new.template.js')
