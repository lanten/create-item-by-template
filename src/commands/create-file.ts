import vscode from 'vscode'
export function createFile() {
  console.log('createFile')
}

export function registerCreateFile() {
  vscode.commands.registerCommand('cmd.createFile', createFile)
}
