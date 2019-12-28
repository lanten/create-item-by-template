# create-item-by-template
[![](https://vsmarketplacebadge.apphb.com/version/lanten.create-item-by-template.svg)](https://marketplace.visualstudio.com/items?itemName=lanten.create-item-by-template)
[![](https://vsmarketplacebadge.apphb.com/rating-star/lanten.create-item-by-template.svg)](https://marketplace.visualstudio.com/items?itemName=lanten.create-item-by-template)
[![](https://vsmarketplacebadge.apphb.com/installs/lanten.create-item-by-template.svg)](https://marketplace.visualstudio.com/items?itemName=lanten.create-item-by-template)
[![](https://vsmarketplacebadge.apphb.com/trending-monthly/lanten.create-item-by-template.svg)](https://marketplace.visualstudio.com/items?itemName=lanten.create-item-by-template)


本扩展插件可以帮助你快速创建组件化的文件夹



## Right click to create :
![1](./images/m-1.gif)

## Command to create :
![2](./images/m-2.gif)

## Commands

<kbd>cmd</kbd> + <kbd>shift</kbd> + <kbd>p</kbd>

  - Create: Create item by template
  - Create: Edit template (Global)
  - Create: Edit template (Workspace)

## Edit template

You can edit template at `global` and `workspace`

example:
```js
module.exports = {
  'web-project': (name, config) => {

    // If you input path: ppp/xx-xxx?type=1
    // You will get arguments: (xx-xxx,{type:'1'})

    const { type } = config
    return {
      [`${name}.html`]: [
        `<!DOCTYPE html>`,
        `<html lang="en">`,
        `<head>`,
        `  <meta name="viewport" content="width=device-width, initial-scale=1.0">`,
        `  <meta http-equiv="X-UA-Compatible" content="ie=edge">`,
        `  <script src="./${name}.js"></script>`,
        `  <title>${name}</title>`,
        `</head>`,
        `<body>`,
        `  ${type ? 'type ' + type : ''}`,
        `</body>`,
        `</html>`,
      ],
      [`${name}.js`]: [
        `console.log('${name} ok')`,
      ]
    }
  },
}
```

了解更详细的模板配置：[wiki](https://github.com/lanten/create-item-by-template/wiki/Template-Example)