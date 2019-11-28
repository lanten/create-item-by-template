const fs = require('fs')
const path = require('path')
const vscode = require('vscode')
const { execSync } = require('child_process')

const { workspaceFolders } = vscode.workspace

const workspacePath = workspaceFolders ? workspaceFolders[0].uri.fsPath.replace(/\\/g, '/') : undefined

const GLOBAL_TEMPLATE_FILE = "global.template.js"

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

/**
 * 递归创建路径
 * @param {string} dir 
 * @param {string} inputPath 
 * @param {string} split 
 */
function mkdirRecursive(dir, inputPath = workspacePath, split = '/') {
  const dirArr = dir.split(split)
  const dir2 = dirArr.reduce((dirPath, folder) => {
    const p1 = path.join(inputPath, dirPath)
    if (!fs.existsSync(p1)) fs.mkdirSync(p1)
    return dirPath + '/' + folder
  })
  const p2 = path.join(inputPath, dir2)
  if (!fs.existsSync(p2)) fs.mkdirSync(p2)
}

function getTemplateConfig() {

  let templateConfig = require('../template/global.template')
  let workspaceConfig

  delete require.cache[require.resolve('../template/global.template')]

  const workspaceConfigPath = path.join(workspacePath, '.vscode/create-item.template.js')


  if (fs.existsSync(workspaceConfigPath)) {
    workspaceConfig = require(workspaceConfigPath)
    delete require.cache[require.resolve(workspaceConfigPath)]
  }

  return {
    workspace: workspaceConfig,
    global: templateConfig,
  }
}

function getChannelPath() {
  if (vscode.env.appName.indexOf("Insiders") > 0) {
    return "Code - Insiders";
  } else {
    return "Code";
  }
}

function getGlobalStoragePath(filename) {

  let appdata = process.env.APPDATA || (process.platform === "darwin" ? process.env.HOME + "/Library/Application Support" : "/var/local")
  let channelPath = getChannelPath()
  const projectFile = path.join(appdata, channelPath, "User", 'globalStorage','')
  // console.log({ appdata, channelPath, projectFile })
  return projectFile
}


module.exports = {
  readFile, writeFile,
  syncExec, mkdirRecursive,
  getTemplateConfig,
  getGlobalStoragePath, getChannelPath,

  workspacePath,
  WORKSPACE_PATH: workspacePath,
  GLOBAL_TEMPLATE_FILE,

  localize: require('./localize'),
}