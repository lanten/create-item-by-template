const fs = require('fs')
const vscode = require('vscode')
const { execSync } = require('child_process')

const { workspaceFolders } = vscode.workspace
const workspacePath = workspaceFolders[0].uri.fsPath

/**
 * 读取文件 (文本)
 * @param {String} path 文件路径
 * @returns {Promise}
 */
function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(err, data)
      } else {
        resolve(data)
      }
    })
  })
}

/**
 * 写入文件 (文本)
 * @param {String} path 
 * @param {String} data 
 * @returns {Promise}
 */
function writeFile(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf-8', (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

/**
 * 同步执行命令
 * @param {String} bash 
 * @param {String} msg 
 */
function syncExec(params = {}) {
  if (typeof params === 'string') params = { bash: params }
  const { bash, msg, inputPath = workspacePath } = params

  try {
    const res = execSync(bash, {
      cwd: inputPath,
    }).toString()
    if (msg) console.log(`=> ${msg} 成功`)
    return res
  } catch (ex) {
    if (msg) console.log(`=> ${msg} 失败\n`, ex)
    return ex.toString()
  }
}

function getTemplateConfig() {
  let templateConfig = require('../template/global.template')
  let workspaceConfig

  const workspaceConfigPath = `${workspacePath}/.vscode/create-item.template.js`

  if (fs.existsSync(workspaceConfigPath)) workspaceConfig = require(workspaceConfigPath)

  return {
    global: templateConfig,
    workspace: workspaceConfig,
  }
}


module.exports = {
  readFile, writeFile,
  syncExec,
  getTemplateConfig,

  workspacePath,

  localize: require('./localize'),
}