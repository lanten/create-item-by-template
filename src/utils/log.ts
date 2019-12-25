import { OutputChannel, window } from 'vscode'
import { EXT_NAME } from './const'

class Log {
  public outputChannel: OutputChannel

  constructor() {
    this.outputChannel = window.createOutputChannel(EXT_NAME)
  }

  public raw(...values: any[]) {
    this.outputChannel.appendLine(values.map(i => i.toString()).join(' '))
  }

  public log(message: string, intend = 0) {
    this.outputChannel.appendLine(`${'\t'.repeat(intend)}${message}`)
    return message
  }

  /**
   * 记录日志
   * @param message
   * @param prompt 是否弹窗提示
   * @param intend
   */
  public info(message: string, prompt = false, intend = 0) {
    if (prompt) window.showInformationMessage(`${EXT_NAME} Info: \n ${message}`)
    return this.log(`[INFO] - ${Date.now()} : ${message}`, intend)
  }

  /**
   * 记录成功日志
   * @param message
   * @param prompt 是否弹窗提示
   * @param intend
   */
  public success(message: string, prompt = false, intend = 0) {
    if (prompt) window.showInformationMessage(`${EXT_NAME} Success: \n ${message}`)
    return this.log(`[SUCCESS] - ${Date.now()} : ${message}`, intend)
  }

  /**
   * 记录警告日志
   * @param message
   * @param prompt 是否弹窗提示
   * @param intend
   */
  public warn(message: string, prompt = false, intend = 0) {
    if (prompt) window.showWarningMessage(`${EXT_NAME} Warning: \n ${message}`)
    return this.log(`[WARN] - ${Date.now()} : ${message}`, intend)
  }

  /**
   * 记录错误日志
   * @param err 错误信息
   * @param prompt 是否弹窗提示
   * @param intend 缩进
   */
  public error(err: Error | string, prompt = true, intend = 0) {
    if (prompt) window.showErrorMessage(`${EXT_NAME} Error: \n ${err.toString()}`)
    if (typeof err === 'string') {
      return this.log(`[ERROR] - ${Date.now()} : ${err}`, intend)
    } else {
      return this.log(`[ERROR] - ${Date.now()} : ${err.name}: ${err.message}\n${err.stack}`, intend)
    }
  }

  public divider() {
    this.outputChannel.appendLine('\n――――――\n')
  }
}

export const log = new Log()
