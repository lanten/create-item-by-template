import vscode from 'vscode'

import {
  registerCreateFolder,
  registerCreateFile,
  registerEditTemplateGlobal,
  registerEditTemplateWorkspace,
} from './commands'

export function activate(ctx: vscode.ExtensionContext) {
  global.ctx = ctx

  registerCreateFolder()
  registerCreateFile()
  registerEditTemplateGlobal()
  registerEditTemplateWorkspace()
}

export function deactivate() {
  // this method is called when your extension is deactivated
}
