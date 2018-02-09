const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve('./src'),
      path.resolve('./node_modules'),
    ]
  },
  module: {
    loaders: [
      { test: /\.(js|jsx)$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(js|jsx)$/, loader: 'eslint-loader', exclude: /node_modules/ }
    ],
  },
  plugins: [htmlWebpackPluginConfig]
}
