const path = require('path')
const webpack = require('webpack')

const config = {
  target: 'node',

  entry: './src/main.ts',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    libraryTarget: 'commonjs2',
    devtoolModuleFilenameTemplate: '../[resource-path]',
  },
  devtool: 'source-map',
  externals: {
    vscode: 'commonjs vscode',
    'ts-node': 'ts-node',
    templateFile: /^.*\.template\.js$/,
    // templateFile: /^(\.template\.js)$/i,
  },

  node: {
    __dirname: false,
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.ts', '.js'],
  },
  module: {
    // 解决 Critical dependency: require function is used in a way in which dependencies cannot be statically extracted
    unknownContextCritical: false,
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: ['ts-loader', 'eslint-loader'],
      },
    ],
  },

  plugins: [
    new webpack.ProvidePlugin({
      $ext: path.resolve(__dirname, './src/utils'),
    }),
  ],
}
module.exports = config
