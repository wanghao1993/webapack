const rimraf = require('rimraf')

const ora = require('ora')

const chalk = require('chalk')

const path = require('path')

rimraf.sync(path.join(process.cwd(), 'dist'))

