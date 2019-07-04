const merge = require('webpack-merge');
const common = require('./webpack.common');

let webpackBaseConfig = merge(common, {
});

module.exports = webpackBaseConfig;
