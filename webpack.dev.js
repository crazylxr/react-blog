const merge = require('webpack-merge')
let webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const common = require('./webpack.common')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

let webpackBaseConfig = merge(common, {

  devtool: "inline-source-map",
  devServer: {
    contentBase: './dist',
    hot: true
  },


  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html', // 配置输出文件名和路径
      template: 'public/index.html', // 配置文件模板
    }),
    new webpack.NamedModulesPlugin(),
    // new BundleAnalyzerPlugin({
    //     analyzerMode: 'server',
    //     // analyzerHost: '127.0.0.1',
    //     analyzerPort: 8889,
    //     reportFilename: 'report.html',
    //     defaultSizes: 'parsed',
    //     openAnalyzer: true,
    //     generateStatsFile: false,
    //     statsFilename: 'stats.json',
    //     statsOptions: null,
    //     logLevel: 'info'
    // }),
  ]
});

module.exports = webpackBaseConfig;
