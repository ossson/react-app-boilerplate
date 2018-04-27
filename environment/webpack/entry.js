import fs from 'fs'
import path from 'path'

const isDevelopment = process.env.NODE_ENV !== 'production'

const entries = fs
  .readdirSync(path.resolve(__dirname, '../../src/app'))
  .filter(file => {
    return file.match(/.*\.(js|scss)$/)
  })

export default type => {
  if (type === 'server') {
    return './serverRender.js'
  }

  const entry = {
    main: entries
  }

  if (isDevelopment) {
    entry.main.push('webpack-hot-middleware/client', 'react-hot-loader/patch')
  }

  return entry
}
