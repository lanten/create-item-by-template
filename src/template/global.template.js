module.exports = (name, config) => {
  return {
    [`${name}.wxml`]: [
      `<view ok="ok">`,
      `  <text>`,
      '    hei hei hei',
      `  </text>`,
      `</view>`,
    ]
  }
}