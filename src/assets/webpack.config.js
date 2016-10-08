var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    entry: {
        index: './src/entry/index.jsx',
        //index: [
        //    'webpack-dev-server/client?http://0.0.0.0:8081',//资源服务器地址
        //    'webpack/hot/only-dev-server',
        //    './src/entry/index.jsx',
        //]
    },
    output: {
        path: '../java/assets',
        publicPath: 'http://localhost:8081/assets',
        filename: '[name].js',
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                },
            },
            {
                test: /\.less$/, loader: ExtractTextPlugin.extract('css!less')
            },
            {
                test: /\.css$/, loader: "style!css",
            }
        ]
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
        new ExtractTextPlugin("[name].css", {allChunks: true}),
        //new webpack.HotModuleReplacementPlugin(), //热替代
        //new webpack.DefinePlugin({
        //    'process.env': {
        //        'NODE_ENV': JSON.stringify('production')
        //    }
        //}),
    ],
}
