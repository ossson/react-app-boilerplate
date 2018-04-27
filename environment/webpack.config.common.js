import { rules, extensions, modules } from './webpack'

export default type => ({
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions: extensions(),
    modules: modules()
  },
  mode: process.env.NODE_ENV === 'production' ? 'production' : 'development'
})
