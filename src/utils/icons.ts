import path from 'path'
import { Uri } from 'vscode'

import { EXT_PATH } from './'

export const icons = {
  folder: {
    light: Uri.file(path.join(EXT_PATH, 'assets/icons/folder.light.svg')),
    dark: Uri.file(path.join(EXT_PATH, 'assets/icons/folder.dark.svg')),
  },
}
