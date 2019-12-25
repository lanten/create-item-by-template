interface CodeConfig {
  defaultFolderTemplate?: string
  defaultFileTemplate?: string
}

interface ExtConfig extends CodeConfig, LocalConfig {}

interface LocalConfig {}
