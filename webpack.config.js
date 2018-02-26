'use strict';

const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const manifestPlugin = require('webpack-manifest-plugin')

const htmlWebpackPluginConfig = new htmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body',
})

const manifestPluginConfig = new manifestPlugin({
  // TODO
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ]
  },
  module: {
    rules: [
      /**
       *
       */
      {
        test: /\.(js|jsx)?$/,
        use: ['babel-loader', 'eslint-loader'],
        exclude: [/[/\\\\]node_modules[/\\\\]/]
      },
      /**
       *
       */
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'static/media/[name].[hash].[ext]',
        }
      },
      /**
       *
       */
      {
        test: /\.css$/,
        exclude: /\.module\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            }
          }
        ]
      }
    ]
  },
  devServer: {
    stats: {
      modules: false
    }
  },
  plugins: [
    htmlWebpackPluginConfig,
    manifestPluginConfig
  ]
}
