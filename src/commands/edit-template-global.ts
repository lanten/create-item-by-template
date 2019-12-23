import vscode from 'vscode'
export function editTemplateGlobal() {
  console.log('editTemplateGlobal')
}

export function registerEditTemplateGlobal() {
  vscode.commands.registerCommand('cmd.editTemplateGlobal', editTemplateGlobal)
}
