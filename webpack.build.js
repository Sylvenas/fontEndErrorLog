const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        path.join(__dirname, './src/errlogger.js'),
    ],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'errlogger.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                loader: require.resolve('babel-loader'),

            },
            {
                test: /\.(ts)$/,
                loader: require.resolve('ts-loader'),

            },
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                reduce_vars: false,
            },
            output: {
                comments: false,
            },
            sourceMap: true,
        }),
    ]
}