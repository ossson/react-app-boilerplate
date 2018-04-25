import { rules, extensions, modules } from './webpack'

export default type => ({
  module: {
    rules: rules(type)
  },
  resolve: {
    extensions: extensions(),
    modules: modules()
  }
})
