const path = require('path');
const { merge } = require('webpack-merge');

const commonWebpack = require('./webpack.common');

module.exports = merge(commonWebpack, {
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    open: true,
    compress: true,
    host: 'localhost',
    port: 3000,
    publicPath: '/'
  },
});