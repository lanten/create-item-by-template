const fs = require('fs')

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


module.exports = {
  readFile, writeFile
}