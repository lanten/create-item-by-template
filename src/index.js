const commands = require('./commands')

// 此代码行仅在激活扩展时执行一次
function activate(context) {
  // 命令已经在package.json文件
  // commandId 参数必须与 package.json 中的命令字段匹配

  context.subscriptions.push(commands)
}

exports.activate = activate;

// 扩展被禁用时调用此方法
function deactivate() {
}

exports.deactivate = deactivate;