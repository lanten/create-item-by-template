import vscode, { workspace } from 'vscode'
import fs from 'fs'
import path from 'path'

import { LOCAL_CONFIG_PATH, CONFIG_LIST, EXT_NAME, PUBLISHER } from './const'
import log from './log'

const CONFIG_GROUP = 'createItemByTemplate'

class Config {
  /**
   * 获取全部配置
   */
  get extConfig(): ExtConfig {
    return { ...this.getCodeConfig(), ...this.getLocalConfig() }
  }

  /**
   * 获取 vscode 配置
   */
  getCodeConfig(): CodeConfig {
    const resConfig = {}
    CONFIG_LIST.forEach(configKey => {
      const settingsKey = `${CONFIG_GROUP}.${configKey}`
      resConfig[configKey] = workspace.getConfiguration().get(settingsKey)
    })
    return resConfig
  }

  /**
   * 写入 vscode 配置
   * @param config
   */
  setCodeConfig(config: CodeConfig) {
    for (const configKey in config) {
      const settingsKey = `${CONFIG_GROUP}.${configKey}`
      const val = config[configKey]
      workspace.getConfiguration().update(settingsKey, val, false)
    }
  }

  getChannelPath() {
    if (vscode.env.appName.indexOf('Insiders') > 0) {
      return 'Code - Insiders'
    } else {
      return 'Code'
    }
  }

  /**
   * 获取全局配置文件路径
   * @param fileName 文件名
   */
  getGlobalStoragePath(fileName = ''): string {
    let appdata =
      process.env.APPDATA ||
      (process.platform === 'darwin' ? process.env.HOME + '/Library/Application Support' : '/var/local')
    let channelPath = this.getChannelPath()
    const globalStoragePath = path.join(
      appdata,
      channelPath,
      'User',
      'globalStorage',
      `${PUBLISHER}.${EXT_NAME}`,
      fileName
    )
    return globalStoragePath
  }

  /**
   * 获取本地文件配置
   */
  getLocalConfig(): LocalConfig {
    let config = {}
    if (fs.existsSync(LOCAL_CONFIG_PATH)) {
      const configStr = fs.readFileSync(LOCAL_CONFIG_PATH, 'utf-8')
      try {
        config = JSON.parse(configStr)
      } catch (error) {
        log.error(error)
      }
    } else {
      fs.writeFileSync(LOCAL_CONFIG_PATH, '{}')
      config = {}
    }
    return config
  }

  /**
   * 写入本地文件配置
   * @param config
   */
  setLocalConfig(config: LocalConfig) {
    const defaultConfig = this.getLocalConfig()
    try {
      const configStr = JSON.stringify(Object.assign({}, defaultConfig, config))
      return fs.writeFileSync(LOCAL_CONFIG_PATH, configStr, 'utf-8')
    } catch (error) {
      log.error(error)
    }
  }
}

const config = new Config()

export default config
