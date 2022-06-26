const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  target: 'web',

  mode: 'development',

  entry: './src/js/index.js',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },

  devServer: {
    port: 5000,
    open: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: 'src/index.html',
      filename: './index.html'
    })
  ]

}
