const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    module: {
        rules:[
            {
                test:/\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader:'babel-loader',
                options:{presets: ["@babel/env", "@babel/preset-react"]}
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'ts-loader',
            }
        ]
    },
    resolve: {extensions: ["*", ".jsx", ".js", ".tsx", ".ts"]},
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'bundle.js',
        clean: true,
    },
    devServer:{
        static: {
            directory: path.join(__dirname,  'public'),
        },
        compress: true,
        port: 9000,
    },
    plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
        template: './public/index.html',
    }), new ESLintPlugin()]
}