const Config = require('webpack-chain')
const config  = new Config()
const path = require('path')
const rimraf = require('rimraf')

const resolve = (src) => {
    return path.join(process.cwd(), src)
}
rimraf.sync('dist')
config.entry('src/index')
        .add(resolve('src/index.js'))
        .end()
    .set('mode', process.env.NODE_ENV)
    .output
        .path(path.resolve(__dirname, 'dist'))
        .filename('[name].bundle.js')
        

config.module
    .rule('css')
    .test(/\.css$/)
    .use('css').loader('css-loader')

module.exports = config.toConfig()
    