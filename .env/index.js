'use strict';

const vorpal = require('vorpal')()
const shell = require('shelljs')

/**
 *
 */
vorpal
  .command('start')
  .option('--progress')
  .action(function (args, callback) {
    const options = [
      args.options.progress && '--progress'
    ]
    shell.exec('webpack-dev-server ' + options)
    callback()
  })

/**
 *
 */
vorpal
  .command('clear')
  .action(function (args, callback) {
    let blank = ''
    for (let i = 0; i < process.stdout.rows; ++i) {
      blank += '\n'
    }
    vorpal.ui.redraw(blank)
    vorpal.ui.redraw('')
    callback()
  })

/**
 *
 */
vorpal
  .delimiter('react-app~$')
  .show()
