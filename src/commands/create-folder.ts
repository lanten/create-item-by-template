import vscode from 'vscode'
export function createFolder() {
  console.log('createFolder')
}

export function registerCreateFolder() {
  vscode.commands.registerCommand('cmd.createFolder', createFolder)
}
