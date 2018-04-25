import webpackMerge from 'webpack-merge'

import commonConfig from './webpack.config.common'
import {
  context,
  entry,
  externals,
  name,
  output,
  plugins,
  target
} from './webpack'

const type = 'server'

export default webpackMerge(commonConfig(type), {
  context: context(type),
  entry: entry(type),
  externals: externals(type),
  name: name(type),
  output: output(type),
  plugins: plugins(type),
  target: target(type)
})
