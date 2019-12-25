import vscode from 'vscode'

/** - interface - start ------------------------------------------------------------------- */

export interface ListPickerConfig {
  placeholder?: string
  items?: ListPickerItem[]
  before?: (next: (items: ListPickerItem[]) => void) => void
}

export interface ListPickerItem extends vscode.QuickPickItem {}

/** - interface - end --------------------------------------------------------------------- */

/**
 * 打开一个列表选择框
 * @param conf
 */
export function openListPicker(conf: ListPickerConfig): Promise<ListPickerItem[]> {
  return new Promise(resolve => {
    const listPicker = vscode.window.createQuickPick()
    listPicker.placeholder = conf.placeholder
    listPicker.show()

    if (conf.before) {
      listPicker.busy = true
      conf.before(items => (listPicker.items = items))
    } else if (conf.items) {
      listPicker.items = conf.items
    }

    listPicker.busy = false

    listPicker.onDidAccept(() => {
      listPicker.hide()
      resolve(listPicker.selectedItems as ListPickerItem[])
    })
  })
}
