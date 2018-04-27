import ExtractTextPlugin from 'extract-text-webpack-plugin'
import webpack from 'webpack'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default () => {
  const plugins = [
    new ExtractTextPlugin({
      filename: '../../static/css/styles.css'
    })
  ]

  if (isDevelopment) {
    plugins.push(
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin()
    )
  }

  return plugins
}
