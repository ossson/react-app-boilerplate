import webpackExternals from 'webpack-node-externals'

export default () => {
  webpackExternals({
    whitelist: [/^redux\/(store|modules)/]
  })
}
