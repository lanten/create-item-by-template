import vscode from 'vscode'

/** */
export function createFolder(path: string) {
  console.log('createFolder')
}

export function registerCreateFolder() {
  vscode.commands.registerCommand('cmd.createFolder', createFolder)
}
