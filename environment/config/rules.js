import ExtractTextPlugin from 'extract-text-webpack-plugin'

const isDevelopment = process.env.NODE_ENV !== 'production'

export default type => {
  const rules = [
    {
      test: /\.js$/,
      use: 'babel-loader',
      exclude: /node_modules/
    }
  ]

  if (!isDevelopment || type === 'server') {
    rules.push({
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: ['css-loader?minimize=true', 'sass-loader']
      })
    })
  } else {
    rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader?minimize=true',
        'sass-loader'
      ]
    })
  }

  return rules
}
