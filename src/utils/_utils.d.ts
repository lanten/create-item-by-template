declare namespace $ext1 {
  /** 工作区路径 */
  const WORKSPACE_PATH: string | undefined
  /** 插件设置 */
  const CONFIG_LIST: Array<keyof CodeConfig>
  /** 插件发布者 */
  const PUBLISHER: string
  /** 插件名称 */
  const EXT_NAME: string
  /** 插件私有配置文件路径 */
  const LOCAL_CONFIG_PATH: string
  /** 插件本体路径 */
  const EXT_PATH: string
  /** 模板配置文件名 */
  const TEMPLATE_CONFIG_FILE_NAME: string

  namespace config {
    /** 插件配置 */
    const extConfig: ExtConfig
    /** 获取工作区配置 */
    function getWorkspaceConfig(): CodeConfig
    /** 写入工作区配置 */
    function setWorkspaceConfig(config: CodeConfig): void
    /** 获取插件目录下的配置 */
    function getLocalConfig(): LocalConfig
    /** 写入插件目录下的配置 */
    function setLocalConfig(config: LocalConfig): void
    /**
     * 获取全局配置文件路径
     * @param fileName 文件名
     */
    function getGlobalStoragePath(fileName?: string): string
  }

  namespace localize {
    /**
     * 多语言转换
     * @param key
     * @param params
     */
    function getLocalize(key: string, ...params: string[]): string
  }

  /** vscode 日志 */
  namespace log {
    /** 普通日志 */
    function log(message: string, intend?: number): void
    /** 信息日志 */
    function info(message: string, intend?: number): void
    /** 警告日志 */
    function warn(message: string, intend?: number): void
    /** 成功日志 */
    function success(message: string, intend?: number): void
    /** 错误日志 */
    function error(err: Error | string, prompt?: boolean, intend?: number): void
  }

  /**
   * 递归创建路径
   * @param dir
   * @param inputPath
   * @param split
   */
  function mkdirRecursive(dir: string, inputPath?: string, split?: string): void

  /**
   * 动态导入一个 JS 文件
   * @param modulePath 要导入的文件路径
   * @param filename 文件名
   */
  function requireModule(modulePath: string): any

  /**
   * 打开一个未保存的文档
   * @param docStr
   * @param name
   */
  function preSaveDocument(docStr: string, name: string): Thenable<boolean>
}

interface CodeConfig {
  defaultFolderTemplate?: string
  defaultFileTemplate?: string
}

interface ExtConfig extends CodeConfig, LocalConfig {}

interface LocalConfig {}
