import fs from 'fs'
import path from 'path'
import vscode from 'vscode'

import {
  TEMPLATE_CONFIG_FILE_NAMES,
  DEFAULT_TEMPLATE_FILE_PATH,
  config,
  log,
  localize,
  tryReadFile,
} from '../utils'

export function editTemplateGlobal() {
  const globalTemplatePath =
    tryReadFile(
      TEMPLATE_CONFIG_FILE_NAMES.map(fileName => path.join(config.getGlobalStoragePath(), fileName))
    ) || path.join(config.getGlobalStoragePath(), TEMPLATE_CONFIG_FILE_NAMES[0])

  if (!fs.existsSync(globalTemplatePath)) {
    const readable = fs.createReadStream(DEFAULT_TEMPLATE_FILE_PATH)
    const writable = fs.createWriteStream(globalTemplatePath)
    readable.pipe(writable)
    log.info(localize.getLocalize('text.success.create', globalTemplatePath))
  }

  vscode.workspace.openTextDocument(globalTemplatePath).then(doc => {
    vscode.window.showTextDocument(doc)
  })
}

export function registerEditTemplateGlobal() {
  vscode.commands.registerCommand('cmd.editTemplateGlobal', editTemplateGlobal)
}
