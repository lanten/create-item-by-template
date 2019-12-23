import vscode from 'vscode'

import {
  registerCreateFolder,
  registerCreateFile,
  registerEditTemplateGlobal,
  registerEditTemplateWorkspace,
} from './commands'

export function activate(ctx: vscode.ExtensionContext) {
  global.ctx = ctx

  // if (!$ext.WORKSPACE_PATH) {
  //   vscode.window.showWarningMessage($ext.localize.getLocalize('text.noWorkspace'))
  // }

  registerCreateFolder()
  registerCreateFile()
  registerEditTemplateGlobal()
  registerEditTemplateWorkspace()
}

export function deactivate() {
  // this method is called when your extension is deactivated
}
