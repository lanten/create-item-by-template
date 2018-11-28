// You can add any js code here

module.exports = {
  'web-project': (name, config) => {
    // If you input path: ppp/xx-xxx?type=1
    // You will get config: {name:'xx-xxx',type:'1'}
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