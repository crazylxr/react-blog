let path = require('path');
let webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HappyPack = require('happypack');
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({
    size: os.cpus().length
});

let webpackBaseConfig = {
    entry: {
        app: ['./src/index.js'],
        // vendor: ['react', 'react-dom', 'lodash']
    },
    output: {
        path: path.resolve(__dirname, 'dist/'),
        filename: 'app.js'
    },
    module: {
        rules: [{
            test: /\.js|jsx$/,
            exclude: /(node_modules)/,
            use: [{
                loader: 'babel-loader?cacheDirectory=true'
            }, {
                //把对.js 的文件处理交给id为happyBabel 的HappyPack 的实例执行
                loader: 'happypack/loader?id=happyBabel',
            }]
        }, {
            test: /\.css|less$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: 'css-loader',
                    options: {
                        modules: true,
                        localIdentName: '[path][name]__[local]--[hash:base64:5]'
                    }
                }, {
                    loader: 'less-loader'
                }]
            })
        }, {
            test: /\.less|css$/,
            exclude: /src/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [{
                    loader: "css-loader", // translates CSS into CommonJS
                }, {
                    loader: "less-loader", // compiles Less to CSS
                    options: {
                        javascriptEnabled: true,
                        modifyVars: {
                            'primary-color': '#ff476b'
                        }
                    }
                }]
            })
        }, {
          test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.svg$/, /\.json$/, /\.ico$/],
            loader: require.resolve('url-loader'),
            options: {
              limit: 10000
            },
        },]
    },
    // optimization: {
    //     splitChunks: {
    //         cacheGroups: {
    //             vendor: {
    //                 chunks: "initial",
    //                 test: "vendor",
    //                 name: "vendor", // 使用 vendor 入口作为公共部分
    //                 enforce: true,
    //             },
    //         },
    //     },
    // },

    resolve: {
      alias: { '@': path.resolve(__dirname, 'src/') },
      extensions: ['.js', '.jsx']
    },

    plugins: [
        new HappyPack({
            //用id来标识 happypack处理那里类文件
            id: 'happyBabel',
            //如何处理  用法和loader 的配置一样
            loaders: [{
                loader: 'babel-loader?cacheDirectory=true',
            }],
            //共享进程池
            threadPool: happyThreadPool,
            //允许 HappyPack 输出日志
            verbose: true,
        }),
        new ExtractTextPlugin("styles.css")
    ]
};

module.exports = webpackBaseConfig;
