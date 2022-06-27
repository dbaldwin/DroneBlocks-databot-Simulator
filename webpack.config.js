const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  target: 'web',

  mode: 'development',

  entry: {
    index: './src/js/index.js',
    blockly: './src/js/blockly.js'
  },

  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  devServer: {
    port: 5000,
    open: true
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, './node_modules/blockly/media'),
          to: path.resolve(__dirname, 'dist/media')
        },
        {
          from: path.resolve(__dirname, 'public'),
          to: path.resolve(__dirname, 'dist')
        }
      ]
    })
  ],

  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  }

}
