import vscode from 'vscode'
export function editTemplateWorkspace() {
  console.log('editTemplateWorkspace')
}

export function registerEditTemplateWorkspace() {
  vscode.commands.registerCommand('cmd.editTemplateWorkspace', editTemplateWorkspace)
}
