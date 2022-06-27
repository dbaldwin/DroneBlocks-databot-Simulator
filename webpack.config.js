const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

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
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, 'src/simulator_v2'), to: path.resolve(__dirname, 'dist/simulator_v2') }
      ]
    })
  ]

}
